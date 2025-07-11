import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import { supabase, signOut } from '../utils/supabaseClient';
import type { User } from '@supabase/supabase-js';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
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
      setIsUserDropdownOpen(false);
      window.location.href = '/';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
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
              <Link to="/" className="text-text-primary text-xl font-bold">
                ShipComplete
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-text-primary px-3 py-2 text-sm font-medium rounded-lg hover:bg-warm transition-colors duration-200"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-text-primary px-3 py-2 text-sm font-medium rounded-lg hover:bg-warm transition-colors duration-200"
                >
                  Pricing
                </a>
                <a
                  href="#about"
                  className="text-text-primary px-3 py-2 text-sm font-medium rounded-lg hover:bg-warm transition-colors duration-200"
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
                  className="text-text-primary px-4 py-2 text-sm font-medium rounded-lg border border-text-primary hover:bg-warm transition-colors duration-200"
                >
                  Log in
                </button>
                <button 
                  onClick={openSignUp}
                  className="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200"
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
                className="text-text-primary hover:bg-warm block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-text-primary hover:bg-warm block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-text-primary hover:bg-warm block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                About
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-y-3 flex-col">
                  <button 
                    onClick={openLogin}
                    className="text-text-primary hover:bg-warm w-full text-center px-4 py-2 text-base font-medium border border-text-primary rounded-lg transition-colors duration-200"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={openSignUp}
                    className="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg text-base font-semibold w-full transition-colors duration-200"
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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/dashboard" className="text-gray-900 text-xl font-bold">
              ShipComplete
            </Link>
          </div>

          {/* Desktop Quick Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/dashboard"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === '/dashboard' 
                    ? 'text-green-600 bg-green-50' 
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                }`}
              >
                Dashboard
              </Link>
              <Link
                to="/new-shipment"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                  location.pathname === '/new-shipment' 
                    ? 'text-white bg-green-600' 
                    : 'text-gray-700 hover:text-white hover:bg-green-600'
                }`}
              >
                New Shipment
              </Link>
            </div>
          </div>

          {/* Desktop User Dropdown */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <div className="relative">
                <button 
                  onClick={toggleUserDropdown}
                  className="flex items-center text-sm text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium mr-2">
                    {user?.email?.charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden lg:block">{user?.email?.split('@')[0]}</span>
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                    <div className="p-4 border-b border-gray-200">
                      <div className="text-sm text-gray-600">Lifetime Savings</div>
                      <div className="text-lg font-semibold text-green-600">$0</div>
                    </div>
                    <div className="py-2">
                      <button 
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button (hamburger) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600 transition-colors duration-200"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              to="/dashboard"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === '/dashboard' 
                  ? 'text-green-600 bg-green-50' 
                  : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/new-shipment"
              className={`block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200 ${
                location.pathname === '/new-shipment' 
                  ? 'text-white bg-green-600' 
                  : 'text-gray-700 hover:text-white hover:bg-green-600'
              }`}
            >
              New Shipment
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 mb-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-medium mr-3">
                  {user?.email?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-sm text-gray-600">Lifetime Savings</div>
                  <div className="text-lg font-semibold text-green-600">$0</div>
                </div>
              </div>
              <button 
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
