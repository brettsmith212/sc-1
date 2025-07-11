import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-light border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-text-primary text-xl font-bold">
              ShipComplete
            </a>
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
              <button className="text-text-primary px-4 py-2 text-sm font-medium rounded-lg border border-text-primary hover:bg-warm transition-colors duration-200">
                Log in
              </button>
              <button className="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200">
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
                <button className="text-text-primary hover:bg-warm w-full text-center px-4 py-2 text-base font-medium border border-text-primary rounded-lg transition-colors duration-200">
                  Log in
                </button>
                <button className="bg-primary hover:bg-primary-hover text-text-primary px-4 py-2 rounded-lg text-base font-semibold w-full transition-colors duration-200">
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
