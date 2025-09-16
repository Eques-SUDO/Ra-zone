import React from 'react';
import { Heart, Zap, Palette, Rocket, Target } from 'lucide-react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Valeurs = () => {
  const zones = [
    {
      icon: <Heart size={40} />,
      title: "Zone de liberté",
      description: "Créer sans limites, innover sans contraintes"
    },
    {
      icon: <Palette size={40} />,
      title: "Zone d'expression",
      description: "Donner voix à chaque vision créative"
    },
    {
      icon: <Zap size={40} />,
      title: "Zone d'émotion",
      description: "Toucher les cœurs, marquer les esprits"
    },
    {
      icon: <Rocket size={40} />,
      title: "Zone d'audace",
      description: "Oser l'impossible, défier les codes"
    },
    {
      icon: <Target size={40} />,
      title: "Zone de sens",
      description: "Créer avec purpose, impact et authenticité"
    }
  ];

  return (
    <section id="valeurs" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#3B0510' }}>
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8" style={{ backgroundColor: '#F5EADA', transform: 'translate(40%, -40%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-6" style={{ backgroundColor: '#F4F4F1', transform: 'translate(-40%, 40%) rotate(45deg)' }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-40 opacity-15" style={{ backgroundColor: '#F5EADA', transform: 'rotate(25deg)' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#F4F4F1' }}></div>
        <div className="absolute top-20 left-1/2 w-16 h-2 opacity-12" style={{ backgroundColor: '#F5EADA', transform: 'rotate(-25deg)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-primary font-bold mb-8" style={{ color: '#F4F4F1', letterSpacing: '0.02em' }}>
              NOS VALEURS
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1" style={{ backgroundColor: '#F5EADA' }}></div>
          </div>
          <AnimatedSection animation="animate-fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl font-secondary max-w-3xl mx-auto leading-relaxed mt-8" style={{ color: '#F5EADA' }}>
              Cinq zones qui définissent notre approche créative
            </p>
          </AnimatedSection>
        </AnimatedSection>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {zones.map((zone, index) => (
            <AnimatedSection key={index} animation="animate-slide-in-bottom" delay={400 + index * 100}>
              <div className="relative group h-full">
                {/* Card background with artistic elements */}
                <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:scale-105 transition-all duration-700" style={{ backgroundColor: '#F5EADA', transform: 'rotate(-1deg)' }}></div>

                <div
                  className="relative p-8 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 transform h-full backdrop-blur-sm hover-lift group overflow-hidden text-center"
                  style={{
                    backgroundColor: 'rgba(245, 234, 218, 0.15)',
                    border: '2px solid rgba(245, 234, 218, 0.2)'
                  }}
                >
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#F5EADA', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                    style={{ backgroundColor: '#F5EADA' }}
                  >
                    <div style={{ color: '#3B0510' }}>{zone.icon}</div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-primary font-bold mb-4 leading-tight" style={{ color: '#F4F4F1' }}>
                    {zone.title.toUpperCase()}
                  </h3>

                  <p className="font-secondary text-lg leading-relaxed" style={{ color: '#F5EADA', opacity: 0.9 }}>
                    {zone.description}
                  </p>

                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#F5EADA' }}></div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valeurs;