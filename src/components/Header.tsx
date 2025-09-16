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
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm" style={{ backgroundColor: '#2A181A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* RAZONE Logo PNG */}
            <img
              src="/img/logo razone white.png"
              alt="RAZONE"
              className="h-10 md:h-12 w-auto transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12 ml-auto mr-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-accent transition-all duration-500 hover-lift relative overflow-hidden group font-secondary font-medium"
            >
              Zone d'expertise
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-white hover:text-accent transition-all duration-500 hover-lift relative overflow-hidden group font-secondary font-medium"
            >
              Zone client
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-accent transition-all duration-500 hover-lift relative overflow-hidden group font-secondary font-medium"
            >
              Zone d'impact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-accent transition-all duration-500 hover-lift relative overflow-hidden group font-secondary font-medium"
            >
              Rejoignez notre Zone
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-accent transition-all duration-500 hover:scale-110"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-700">
            <div className="flex flex-col space-y-6">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-accent transition-colors duration-200 text-left font-secondary font-medium"
              >
                Zone d'expertise
              </button>
              <button
                onClick={() => scrollToSection('clients')}
                className="text-white hover:text-accent transition-colors duration-200 text-left font-secondary font-medium"
              >
                Zone client
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-accent transition-colors duration-200 text-left font-secondary font-medium"
              >
                Zone d'impact
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-accent transition-colors duration-200 text-left font-secondary font-medium"
              >
                Rejoignez notre Zone
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;