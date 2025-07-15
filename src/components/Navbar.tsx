import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { supabase, signOut } from '../utils/supabaseClient';
import type { User } from '@supabase/supabase-js';

interface NavbarProps {
  onToggleSidebar?: () => void;
}

function Navbar({ onToggleSidebar }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openSignUp = () => {
    setIsSignUpOpen(true);
  };

  const closeSignUp = () => {
    setIsSignUpOpen(false);
  };

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  // Check for existing session and listen for auth changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);



  // Don't show navbar on landing page for logged-out users
  if (!user && location.pathname === '/') {
    return (
      <nav className="bg-light border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-text-primary text-xl font-bold transition-transform duration-200 hover:-translate-y-1 inline-block">
                ShipComplete
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-text-primary px-3 py-2 text-sm font-medium rounded-lg transition-transform duration-200 hover:-translate-y-1 inline-block"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-text-primary px-3 py-2 text-sm font-medium rounded-lg transition-transform duration-200 hover:-translate-y-1 inline-block"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-text-primary px-3 py-2 text-sm font-medium rounded-lg transition-transform duration-200 hover:-translate-y-1 inline-block"
                >
                  About
                </a>
              </div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <button
                  onClick={openLogin}
                  className="text-text-primary px-4 py-2 text-sm font-medium rounded-lg border border-text-primary transition-transform duration-200 hover:-translate-y-1"
                >
                  Log in
                </button>
                <button
                  onClick={openSignUp}
                  className="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:-translate-y-1"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-text-primary hover:text-text-primary focus:outline-none focus:text-text-primary"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light border-t border-gray-200">
              <a
                href="#features"
                className="text-text-primary block px-3 py-2 text-base font-medium transition-transform duration-200 hover:-translate-y-1"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-text-primary block px-3 py-2 text-base font-medium transition-transform duration-200 hover:-translate-y-1"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-text-primary block px-3 py-2 text-base font-medium transition-transform duration-200 hover:-translate-y-1"
              >
                About
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-y-3 flex-col">
                  <button
                    onClick={openLogin}
                    className="text-text-primary w-full text-center px-4 py-2 text-base font-medium border border-text-primary rounded-lg transition-transform duration-200 hover:-translate-y-1"
                  >
                    Log in
                  </button>
                  <button
                    onClick={openSignUp}
                    className="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg text-base font-semibold w-full transition-all duration-200 hover:-translate-y-1"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SignUp Modal */}
        <SignUp isOpen={isSignUpOpen} onClose={closeSignUp} />

        {/* Login Modal */}
        <Login isOpen={isLoginOpen} onClose={closeLogin} />
      </nav>
    );
  }

  // Logged-in navbar
  return (
    <nav className="bg-light border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/dashboard" className="text-text-primary text-xl font-bold transition-transform duration-200 hover:-translate-y-1 inline-block">
              ShipComplete
            </Link>
          </div>

          {/* Spacer for center alignment */}
          <div className="flex-1"></div>

          {/* Desktop Logout Button */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button
                onClick={handleLogout}
                className="text-text-primary px-3 py-2 rounded-lg text-sm font-medium transition-transform duration-200 hover:-translate-y-1"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Mobile menu button (hamburger) - for sidebar */}
          <div className="md:hidden">
            <button
              onClick={onToggleSidebar}
              className="text-text-primary hover:text-text-primary focus:outline-none focus:text-text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu is now handled by Sidebar component */}
    </nav>
  );
}

export default Navbar;
