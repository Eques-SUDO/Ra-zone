import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden" style={{ backgroundColor: '#131313' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 animate-fade-in-left" style={{ opacity: 0 }}>
            <div className="flex items-center mb-8 animate-gentle-float">
              <img
                src="/img/logo razone white.png"
                alt="RAZONE"
                className="h-12 w-auto"
              />
            </div>
            <p className="font-secondary text-lg mb-8 leading-relaxed" style={{ color: '#F5EADA' }}>
              Chez Ra-Zone, on voit ce que vous ne voyez pas.
              Nous créons des idées qui bousculent, qui transforment une vision en émotion.
            </p>
            <div className="flex space-x-4 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
              <a
                href="https://www.instagram.com/razone.ma"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift"
                style={{ backgroundColor: '#F4F4F1', color: '#131313' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3B0510';
                  e.currentTarget.style.color = '#F4F4F1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4F4F1';
                  e.currentTarget.style.color = '#131313';
                }}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/razone-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift"
                style={{ backgroundColor: '#F4F4F1', color: '#131313' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#3B0510';
                  e.currentTarget.style.color = '#F4F4F1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4F4F1';
                  e.currentTarget.style.color = '#131313';
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            <h4 className="text-xl font-primary font-bold mb-6" style={{ color: '#F4F4F1' }}>
              ZONES
            </h4>
            <ul className="space-y-3 font-secondary">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="transition-colors duration-300 text-left"
                  style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                  Zone d'expertise
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('clients');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="transition-colors duration-300 text-left"
                  style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                  Zone client
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="transition-colors duration-300 text-left"
                  style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                  Zone d'impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="transition-colors duration-300 text-left"
                  style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                  Rejoignez notre Zone
                </button>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-right delay-400" style={{ opacity: 0 }}>
            <h4 className="text-xl font-primary font-bold mb-6" style={{ color: '#F4F4F1' }}>
              CONTACT
            </h4>
            <ul className="space-y-4 font-secondary">
              <li className="flex items-center space-x-3 transition-colors duration-300" style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                <Mail size={18} style={{ color: '#F4F4F1' }} />
                <span>Ra-zone@marnovagroup.ma</span>
              </li>
              <li className="flex items-center space-x-3 transition-colors duration-300" style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                <Phone size={18} style={{ color: '#F4F4F1' }} />
                <span>+212 665331087</span>
              </li>
              <li className="flex items-center space-x-3 transition-colors duration-300" style={{ color: '#F5EADA' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#F4F4F1'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#F5EADA'; }}>
                <MapPin size={18} style={{ color: '#F4F4F1' }} />
                <span>17 Rue Najib Mahfoud, Casablanca</span>
              </li>
            </ul>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.6857669847847!2d-7.6359552!3d33.5905346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f9dd71dea3%3A0xf4b70fe97b437795!2sGroupe%20Marnova%20Holding!5e0!3m2!1sen!2sma!4v1726493000000!5m2!1sen!2sma"
                width="280"
                height="180"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-300 hover:scale-105 shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 text-center border-t animate-fade-in delay-600" style={{ borderColor: '#2A181A', opacity: 0 }}>
          <p className="font-secondary" style={{ color: '#F5EADA' }}>
            &copy; {new Date().getFullYear()} <span style={{ color: '#F4F4F1' }}>RAZONE</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;