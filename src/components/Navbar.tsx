import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-buffer-navbar border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-buffer-text text-xl font-bold">
              ShipComplete
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="#features"
                className="text-buffer-text px-3 py-2 text-sm font-medium rounded-lg hover:bg-buffer-hero transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-buffer-text px-3 py-2 text-sm font-medium rounded-lg hover:bg-buffer-hero transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-buffer-text px-3 py-2 text-sm font-medium rounded-lg hover:bg-buffer-hero transition-colors duration-200"
              >
                About
              </a>
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <button className="text-buffer-text px-4 py-2 text-sm font-medium rounded-lg border border-buffer-text hover:bg-buffer-hero transition-colors duration-200">
                Log in
              </button>
              <button className="bg-buffer-button hover:bg-buffer-button-hover text-buffer-text px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-buffer-text hover:text-buffer-button focus:outline-none focus:text-buffer-button"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-buffer-navbar border-t border-gray-200">
            <a
              href="#features"
              className="text-buffer-text hover:bg-buffer-hero block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-buffer-text hover:bg-buffer-hero block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-buffer-text hover:bg-buffer-hero block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              About
            </a>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3 space-y-3 flex-col">
                <button className="text-buffer-text hover:bg-buffer-hero w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200">
                  Log in
                </button>
                <button className="bg-buffer-button hover:bg-buffer-button-hover text-buffer-text px-4 py-2 rounded-lg text-base font-semibold w-full transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
