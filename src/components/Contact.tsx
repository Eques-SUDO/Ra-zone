import React, { useState } from 'react';
import { Mail, Phone, Instagram, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:Ra-zone@marnovagroup.ma?subject=Demande d\'information - Ra-Zone Agency';
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sand from-sand-50 via-night-50/5 to-sand-100"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent-1/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Envie de donner vie à vos idées ? Parlons de votre projet créatif !
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Informations de Contact
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">Ra-zone@marnovagroup.ma</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Téléphone</h4>
                  <p className="text-gray-600">+212 665331087</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-500" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Localisation</h4>
                  <p className="text-gray-600">Maroc</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/wefeed.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center text-white hover:bg-pink-600 transition-colors duration-200"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com/company/wefeed-agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={handleEmailClick}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 mx-auto"
            >
              <Mail size={20} />
              <span>Nous contacter par email</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;