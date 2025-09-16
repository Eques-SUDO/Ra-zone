import React, { useEffect } from 'react';
import {
  Megaphone,
  Users,
  Palette,
  MapPin,
  Instagram,
  Camera,
  BarChart3,
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (emblaApi) {
      console.log('Embla carousel initialized');
    }
  }, [emblaApi]);

  const services = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Direction artistique",
      description: "Création de moodboards et design de feed personnalisés pour votre marque."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Création de contenu",
      description: "Production de contenu visuel et vidéo qui captive votre audience."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Stratégie de contenu",
      description: "Ligne éditoriale et rédaction de contenu qui raconte votre histoire."
    },
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Community management",
      description: "Gestion complète de vos réseaux sociaux et animation de votre communauté."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Campagnes digitales",
      description: "Création et gestion de campagnes performantes avec reporting détaillé."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Conseil & Audit",
      description: "Audit de communication et accompagnement personnalisé pour votre marque."
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Stratégie de marque",
      description: "Positionnement, storytelling et activation de votre marque."
    }
  ];  return (
    <section id="services" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F4F4F1' }}>
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-8 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'translate(40%, -40%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-6 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', transform: 'translate(-40%, 40%)' }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-40 opacity-15 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'rotate(-15deg)', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full opacity-10 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/2 w-16 h-2 opacity-12" style={{ backgroundColor: '#3B0510', transform: 'rotate(25deg)' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-12 lg:mb-20 relative z-10">
          <div className="relative inline-block px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-primary font-bold mb-6 lg:mb-8" style={{ color: '#3B0510', letterSpacing: '0.02em' }}>
              ZONE D'EXPERTISE
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 animate-subtle-pulse" style={{ backgroundColor: '#3B0510' }}></div>
          </div>
          <AnimatedSection animation="animate-fade-in-up" delay={200}>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-secondary max-w-3xl mx-auto leading-relaxed mt-4 lg:mt-8 px-4" style={{ color: '#2A181A' }}>
              Une gamme complète de services créatifs pour transformer votre vision en réalité artistique
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection animation="animate-fade-in-up" delay={400} className="relative z-10">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="embla__slide flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4"
                >
                  <AnimatedSection animation="animate-slide-in-bottom" delay={index * 100}>
                    <div className="relative group h-full mr-4">
                      {/* Card background with artistic elements */}
                      <div className="absolute inset-0 rounded-2xl opacity-20 animate-gentle-float group-hover:scale-105 transition-all duration-700" style={{ backgroundColor: '#3B0510', transform: 'rotate(-1deg)' }}></div>

                      <div
                        className="relative p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 transform h-full backdrop-blur-sm hover-lift group overflow-hidden"
                        style={{
                          backgroundColor: 'rgba(244, 244, 241, 0.95)',
                          border: '2px solid rgba(59, 5, 16, 0.1)'
                        }}
                      >
                        {/* Decorative corner element */}
                        <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#3B0510', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                        <div
                          className="w-16 sm:w-18 lg:w-20 h-16 sm:h-18 lg:h-20 rounded-2xl flex items-center justify-center mb-6 lg:mb-8 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-lg animate-gentle-float"
                          style={{ backgroundColor: '#3B0510', animationDelay: `${index * 0.2}s` }}
                        >
                          <div style={{ color: '#F4F4F1' }}>{service.icon}</div>
                        </div>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-primary font-bold mb-4 lg:mb-6 leading-tight" style={{ color: '#2A181A' }}>
                          {service.title.toUpperCase()}
                        </h3>

                        <p className="font-secondary text-sm sm:text-base lg:text-lg leading-relaxed" style={{ color: '#2A181A', opacity: 0.9 }}>
                          {service.description}
                        </p>

                        {/* Hover effect line */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#3B0510' }}></div>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced navigation buttons */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-20">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl opacity-20 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'rotate(-3deg) scale(1.1)' }}></div>
              <button
                onClick={scrollPrev}
                className="relative w-12 lg:w-16 h-12 lg:h-16 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-700 hover-lift hover:scale-110 group"
                style={{
                  backgroundColor: '#3B0510',
                  color: '#F4F4F1'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4F4F1';
                  e.currentTarget.style.color = '#3B0510';
                  e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3B0510';
                  e.currentTarget.style.color = '#F4F4F1';
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <ChevronLeft size={28} className="transition-transform duration-300 group-hover:-translate-x-1" />
              </button>
            </div>
          </div>

          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-20">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl opacity-20 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'rotate(3deg) scale(1.1)' }}></div>
              <button
                onClick={scrollNext}
                className="relative w-12 lg:w-16 h-12 lg:h-16 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-700 hover-lift hover:scale-110 group"
                style={{
                  backgroundColor: '#3B0510',
                  color: '#F4F4F1'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F4F4F1';
                  e.currentTarget.style.color = '#3B0510';
                  e.currentTarget.style.transform = 'scale(1.1) rotate(-5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#3B0510';
                  e.currentTarget.style.color = '#F4F4F1';
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
              >
                <ChevronRight size={28} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Mobile navigation buttons */}
          <div className="lg:hidden flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: '#3B0510',
                color: '#F4F4F1'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: '#3B0510',
                color: '#F4F4F1'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;