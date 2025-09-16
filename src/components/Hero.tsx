import React from 'react';
import { ChefHat, TrendingUp, Users } from 'lucide-react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" style={{ backgroundColor: '#F5EADA' }}>
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-8 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'translateX(50%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-6 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
        <div className="absolute top-10 left-1/3 w-4 h-40 opacity-15 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'rotate(25deg)', animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-1/4 w-8 h-8 rounded-full opacity-12 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-32 h-2 opacity-10" style={{ backgroundColor: '#3B0510', transform: 'rotate(-15deg)' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center min-h-screen pt-16 lg:pt-0">
          <div className="lg:col-span-7 text-center lg:text-left">
            <AnimatedSection animation="animate-fade-in-up" className="mb-12">
              <div className="relative">
                {/* Decorative line */}
                <div className="absolute -left-6 top-0 w-2 h-full animate-gentle-float" style={{ backgroundColor: '#3B0510' }}></div>

                <h1 className="mb-12">
                  <div className="overflow-hidden mb-4 sm:mb-6">
                    <span
                      className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-primary font-bold block animate-fade-in-up"
                      style={{
                        color: '#3B0510',
                        letterSpacing: '0.02em',
                        textShadow: '0 4px 20px rgba(59, 5, 16, 0.3)'
                      }}
                    >
                      RA-ZONE
                    </span>
                  </div>

                  <AnimatedSection animation="animate-fade-in-left" delay={300}>
                    <span
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-secondary font-bold block leading-tight"
                      style={{ color: '#3B0510', opacity: 0.8 }}
                    >
                      On voit ce que vous ne voyez pas
                    </span>
                  </AnimatedSection>
                </h1>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="animate-fade-in-up" delay={500}>
              <div className="mb-8 lg:mb-12 px-2 sm:px-0">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 lg:mb-6 leading-relaxed font-secondary" style={{ color: '#3B0510' }}>
                  Nous créons des idées qui <span className="font-bold" style={{ color: '#2A181A' }}>bousculent</span>, qui marquent, qui transforment une image en langage et une vision en émotion.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-secondary" style={{ color: '#3B0510', opacity: 0.8 }}>
                  La créativité est notre moteur, l'artistique notre signature.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="animate-slide-in-bottom" delay={700}>
              <div className="flex justify-center">
                <div className="relative group">
                  {/* Button background decoration */}
                  <div className="absolute inset-0 rounded-2xl opacity-30 group-hover:scale-105 transition-transform duration-500" style={{ backgroundColor: '#3B0510', transform: 'rotate(-1deg)' }}></div>

                  <button
                    onClick={() => document.getElementById('valeurs')?.scrollIntoView({ behavior: 'smooth' })}
                    className="relative px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 font-secondary font-bold text-sm sm:text-base lg:text-lg transition-all duration-700 transform hover:scale-105 hover-lift rounded-2xl shadow-lg hover:shadow-2xl"
                    style={{
                      backgroundColor: '#3B0510',
                      color: '#F5EADA',
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
                    EXPLORER LA ZONE
                  </button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right side - Abstract visual element */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <AnimatedSection animation="animate-fade-in-right" delay={900}>
              <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[500px]">
                {/* Abstract geometric shapes */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full opacity-15 animate-gentle-float" style={{ backgroundColor: '#3B0510' }}></div>
                  <div className="absolute bottom-0 left-0 w-24 sm:w-36 lg:w-48 h-24 sm:h-36 lg:h-48 opacity-12 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 rounded-full opacity-18 transform -translate-x-1/2 -translate-y-1/2 animate-gentle-float" style={{ backgroundColor: '#3B0510', animationDelay: '1s' }}></div>

                  {/* Decorative lines */}
                  <div className="absolute top-20 left-10 w-2 h-24 opacity-20 animate-gentle-float" style={{ backgroundColor: '#2A181A', transform: 'rotate(25deg)' }}></div>
                  <div className="absolute bottom-20 right-20 w-16 h-2 opacity-18 animate-subtle-pulse" style={{ backgroundColor: '#3B0510' }}></div>
                </div>

                {/* Central focus element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40">
                    <div className="absolute inset-0 rounded-2xl opacity-25 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'rotate(45deg)' }}></div>
                    <div className="absolute inset-2 sm:inset-3 lg:inset-4 rounded-xl opacity-20 animate-subtle-pulse" style={{ backgroundColor: '#2A181A' }}></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <AnimatedSection animation="animate-fade-in-up" delay={1200}>
          <div className="flex flex-col items-center animate-gentle-float">
            <p className="font-secondary text-sm mb-4" style={{ color: '#3B0510', opacity: 0.8 }}>Découvrir</p>
            <div className="w-px h-12 animate-subtle-pulse" style={{ backgroundColor: '#3B0510' }}></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;