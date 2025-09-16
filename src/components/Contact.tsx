import React from 'react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Contact = () => {

  return (
    <section id="contact" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F5EADA' }}>
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-3 opacity-20 transform -rotate-12 animate-gentle-float" style={{ backgroundColor: '#3B0510' }}></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-8 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', transform: 'translate(30%, 30%)' }}></div>
        <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full opacity-15 animate-gentle-float" style={{ backgroundColor: '#3B0510', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-2 opacity-12 transform rotate-45 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/2 w-4 h-32 opacity-8 transform -rotate-45" style={{ backgroundColor: '#3B0510' }}></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 rounded-full opacity-6" style={{ backgroundColor: '#F4F4F1' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-20 relative z-10">
          <h2 className="text-5xl md:text-7xl font-primary font-bold mb-8" style={{ color: '#3B0510', letterSpacing: '0.02em' }}>
            CONTACTEZ-NOUS
          </h2>
          <div className="w-32 h-1 mx-auto mb-8 animate-subtle-pulse" style={{ backgroundColor: '#3B0510' }}></div>
          <p className="text-xl md:text-2xl font-secondary max-w-3xl mx-auto leading-relaxed" style={{ color: '#2A181A' }}>
            Envie de donner vie à vos idées ? Parlons de votre projet créatif !
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection animation="animate-fade-in-up" delay={400}>
            <div
              className="p-10 rounded-2xl shadow-2xl backdrop-blur-sm relative overflow-hidden"
              style={{ backgroundColor: 'rgba(244, 244, 241, 0.9)', border: '2px solid rgba(59, 5, 16, 0.1)' }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: '#3B0510', transform: 'translate(50%, -50%)' }}></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-8" style={{ backgroundColor: '#2A181A', transform: 'translate(-50%, 50%)' }}></div>

              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-primary font-bold mb-8 text-center" style={{ color: '#3B0510' }}>
                  CONTACTEZ-NOUS
                </h3>
                <div className="w-24 h-1 mx-auto mb-10" style={{ backgroundColor: '#3B0510' }}></div>

                <form className="space-y-6">
                  <div>
                    <label className="block font-secondary font-semibold text-lg mb-2" style={{ color: '#2A181A' }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:border-opacity-100"
                      style={{
                        borderColor: 'rgba(59, 5, 16, 0.3)',
                        backgroundColor: 'rgba(244, 244, 241, 0.8)'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#3B0510';
                        e.currentTarget.style.backgroundColor = '#F4F4F1';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(59, 5, 16, 0.3)';
                        e.currentTarget.style.backgroundColor = 'rgba(244, 244, 241, 0.8)';
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-secondary font-semibold text-lg mb-2" style={{ color: '#2A181A' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:border-opacity-100"
                      style={{
                        borderColor: 'rgba(59, 5, 16, 0.3)',
                        backgroundColor: 'rgba(244, 244, 241, 0.8)'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#3B0510';
                        e.currentTarget.style.backgroundColor = '#F4F4F1';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(59, 5, 16, 0.3)';
                        e.currentTarget.style.backgroundColor = 'rgba(244, 244, 241, 0.8)';
                      }}
                    />
                  </div>

                  <div>
                    <label className="block font-secondary font-semibold text-lg mb-2" style={{ color: '#2A181A' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:border-opacity-100 resize-none"
                      style={{
                        borderColor: 'rgba(59, 5, 16, 0.3)',
                        backgroundColor: 'rgba(244, 244, 241, 0.8)'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#3B0510';
                        e.currentTarget.style.backgroundColor = '#F4F4F1';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(59, 5, 16, 0.3)';
                        e.currentTarget.style.backgroundColor = 'rgba(244, 244, 241, 0.8)';
                      }}
                    ></textarea>
                  </div>

                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      className="px-8 py-4 font-secondary font-bold text-lg transition-all duration-700 transform hover:scale-105 hover-lift rounded-xl shadow-lg hover:shadow-2xl"
                      style={{
                        backgroundColor: '#3B0510',
                        color: '#F4F4F1',
                        letterSpacing: '0.05em'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#2A181A';
                        e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#3B0510';
                        e.currentTarget.style.transform = 'scale(1) translateY(0)';
                      }}
                    >
                      ENVOYER LE MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;