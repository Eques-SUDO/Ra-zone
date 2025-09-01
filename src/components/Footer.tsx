import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative text-sand-100 py-16 overflow-hidden bg-night-500">
      <div className="absolute inset-0 bg-gradient-egyptian from-night-500 via-night-400/50 to-night-500"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(201,165,84,0.1),transparent_70%)]"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-1 bg-gradient-to-r from-primary to-accent-2"></div>
              <h3 className="text-3xl font-bold">
                Ra<span className="bg-gradient-to-r from-primary to-accent-1 bg-clip-text text-transparent">-Zone</span>
              </h3>
            </div>
            <p className="text-sand-100 mb-6 leading-relaxed text-lg">
              Chez Ra-Zone, on voit ce que vous ne voyez pas. 
              Nous créons des idées qui bousculent, qui transforment une vision en émotion.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-accent-2/20 to-accent-2/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:from-accent-2/30 hover:to-accent-2/20 transition-all duration-300 hover:scale-110 group"
              >
                <Instagram size={20} className="text-sand-100 group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-accent-1/20 to-accent-1/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:from-accent-1/30 hover:to-accent-1/20 transition-all duration-300 hover:scale-110 group"
              >
                <Linkedin size={20} className="text-sand-100 group-hover:text-primary transition-colors duration-300" />
              </a>
              <a 
                href="mailto:Ra-zone@marnovagroup.ma"
                className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:from-primary/30 hover:to-primary/20 transition-all duration-300 hover:scale-110 group"
              >
                <Mail size={20} className="text-sand-100 group-hover:text-primary transition-colors duration-300" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-sand-100 flex items-center space-x-2">
              <div className="w-6 h-px bg-gradient-to-r from-primary to-transparent"></div>
              <span>Services</span>
            </h4>
            <ul className="space-y-3 text-sand-200">
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300 flex items-center space-x-2 group">
                  <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Direction artistique</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300 flex items-center space-x-2 group">
                  <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Identité visuelle</span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-all duration-300 flex items-center space-x-2 group">
                  <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4"></span>
                  <span>Création de contenu</span>
                </a>
              </li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Community management</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Stratégie de marque</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-sand-100 flex items-center space-x-2">
              <div className="w-6 h-px bg-gradient-to-r from-primary to-transparent"></div>
              <span>Contact</span>
            </h4>
            <ul className="space-y-3 text-sand-200">
              <li className="flex items-center space-x-2 group hover:text-primary transition-all duration-300">
                <Mail size={16} className="text-primary" />
                <span>Ra-zone@marnovagroup.ma</span>
              </li>
              <li className="flex items-center space-x-2 group hover:text-primary transition-all duration-300">
                <Phone size={16} className="text-primary" />
                <span>+212 665331087</span>
              </li>
              <li className="flex items-center space-x-2 group hover:text-primary transition-all duration-300">
                <MapPin size={16} className="text-primary" />
                <span>Maroc</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 text-center">
          <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <p className="mt-6 text-sand-200 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-primary">OuurTech</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;