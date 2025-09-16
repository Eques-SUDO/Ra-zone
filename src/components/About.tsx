import React from 'react';
import { Target, Award, Clock, Users } from 'lucide-react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const About = () => {
  const stats = [
    {
      icon: <Target size={32} />,
      number: "∞",
      label: "Créativité"
    },
    {
      icon: <Award size={32} />,
      number: "100%",
      label: "Satisfaction"
    },
    {
      icon: <Users size={32} />,
      number: "6+",
      label: "Clients Majeurs"
    },
    {
      icon: <Clock size={32} />,
      number: "24/7",
      label: "Engagement"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#2A181A' }}>
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8 animate-gentle-float" style={{ backgroundColor: '#F4F4F1', transform: 'translate(40%, -40%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-6 animate-subtle-pulse" style={{ backgroundColor: '#F5EADA', transform: 'translate(-40%, 40%) rotate(45deg)' }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-40 opacity-15 animate-gentle-float" style={{ backgroundColor: '#F4F4F1', transform: 'rotate(25deg)', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full opacity-10 animate-subtle-pulse" style={{ backgroundColor: '#F5EADA', animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/2 w-16 h-2 opacity-12" style={{ backgroundColor: '#F4F4F1', transform: 'rotate(-25deg)' }}></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-primary font-bold mb-8" style={{ color: '#F4F4F1', letterSpacing: '0.02em' }}>
              À PROPOS DE <span style={{ color: '#F5EADA' }}>RA-ZONE</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 animate-subtle-pulse" style={{ backgroundColor: '#F5EADA' }}></div>
          </div>
          <AnimatedSection animation="animate-fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl font-secondary max-w-4xl mx-auto leading-relaxed mt-8" style={{ color: '#F5EADA' }}>
              On voit ce que vous ne voyez pas
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <AnimatedSection animation="animate-fade-in-left" className="relative">
            <div className="relative">
              <div className="absolute -left-6 top-0 w-2 h-full animate-gentle-float" style={{ backgroundColor: '#F5EADA' }}></div>

              {/* Main Content */}
              <div className="space-y-8">
                <AnimatedSection animation="animate-fade-in-up" delay={300}>
                  <h3 className="text-3xl font-primary font-bold mb-6" style={{ color: '#F4F4F1' }}>
                    NOTRE PHILOSOPHIE
                  </h3>
                  <div className="w-16 h-1 mb-8 animate-subtle-pulse" style={{ backgroundColor: '#F5EADA' }}></div>
                </AnimatedSection>

                <AnimatedSection animation="animate-fade-in-up" delay={400}>
                  <p className="text-lg md:text-xl font-secondary leading-relaxed mb-6" style={{ color: '#F5EADA' }}>
                    Nous créons des idées qui <span className="font-bold" style={{ color: '#F4F4F1' }}>bousculent</span>,
                    qui <span className="font-bold" style={{ color: '#F4F4F1' }}>marquent</span>, qui transforment une image
                    en langage et une vision en émotion.
                  </p>
                </AnimatedSection>

                <AnimatedSection animation="animate-fade-in-up" delay={500}>
                  <div className="relative group">
                    <div className="absolute inset-0 rounded-2xl opacity-20 animate-gentle-float group-hover:scale-105 transition-all duration-700" style={{ backgroundColor: '#F5EADA', transform: 'rotate(-1deg)' }}></div>
                    <div className="relative p-8 rounded-2xl backdrop-blur-sm border-l-4" style={{ backgroundColor: 'rgba(245, 234, 218, 0.1)', borderLeftColor: '#F5EADA' }}>
                      <p className="text-2xl font-primary font-bold animate-gentle-float" style={{ color: '#F4F4F1' }}>
                        RA-ZONE, C'EST UNE ZONE LIBRE.
                      </p>
                      <p className="text-lg font-secondary mt-4" style={{ color: '#F5EADA', opacity: 0.9 }}>
                        Un espace où le marketing rencontre l'art, où la stratégie devient sensible.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Section */}
          <AnimatedSection animation="animate-fade-in-right" delay={600}>
            <div className="relative">
              <div className="mb-12">
                <h3 className="text-3xl font-primary font-bold mb-6" style={{ color: '#F4F4F1' }}>
                  NOS RÉSULTATS
                </h3>
                <div className="w-16 h-1 mb-8 animate-subtle-pulse" style={{ backgroundColor: '#F5EADA' }}></div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-12">
                {stats.map((stat, index) => (
                  <AnimatedSection key={index} animation="animate-slide-in-bottom" delay={700 + index * 100}>
                    <div className="relative group text-center p-6 rounded-2xl transition-all duration-500 hover-lift" style={{ backgroundColor: 'rgba(245, 234, 218, 0.1)', border: '1px solid rgba(245, 234, 218, 0.2)' }}>
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transition-all duration-500 group-hover:scale-110 animate-gentle-float"
                        style={{ backgroundColor: '#F5EADA', animationDelay: `${index * 0.2}s` }}
                      >
                        <div style={{ color: '#3B0510' }}>{stat.icon}</div>
                      </div>
                      <div className="text-3xl font-primary font-bold mb-2" style={{ color: '#F4F4F1' }}>
                        {stat.number}
                      </div>
                      <div className="text-sm font-secondary uppercase tracking-wider" style={{ color: '#F5EADA', opacity: 0.9 }}>
                        {stat.label}
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Mission Statement - Centered */}
        <AnimatedSection animation="animate-fade-in-up" delay={1000} className="mt-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative group">
              {/* Card background with artistic elements */}
              <div className="absolute inset-0 rounded-2xl opacity-20 animate-gentle-float group-hover:scale-105 transition-all duration-700" style={{ backgroundColor: '#F5EADA', transform: 'rotate(1deg)' }}></div>

              <div
                className="relative rounded-2xl shadow-2xl p-12 backdrop-blur-sm hover:shadow-3xl transition-all duration-700 hover:-translate-y-2 transform hover-lift overflow-hidden text-center"
                style={{ backgroundColor: 'rgba(245, 234, 218, 0.15)', border: '2px solid rgba(245, 234, 218, 0.3)' }}
              >
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#F5EADA', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#F5EADA', clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }}></div>

                <h3 className="text-4xl font-primary font-bold mb-8 animate-gentle-float" style={{ color: '#F4F4F1' }}>
                  NOTRE MISSION
                </h3>
                <div className="w-24 h-1 mx-auto mb-8 animate-subtle-pulse" style={{ backgroundColor: '#F5EADA' }}></div>
                <p className="font-secondary text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: '#F5EADA' }}>
                  Transformer les visions créatives en succès durables grâce à des stratégies
                  artistiques innovantes et adaptées à chaque marque unique.
                </p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#F5EADA' }}></div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;