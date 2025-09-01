import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-sand-50/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
  <img
    src="/img/logo.png"
    alt="Ra-Zone Logo"
    className="h-10 w-auto"
  />
</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Clients
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 text-left"
              >
                Clients
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 text-left"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;