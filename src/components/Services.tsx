import React from 'react';
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

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const services = [
    {
      icon: <Palette className="text-primary w-8 h-8" />,
      title: "Direction artistique",
      description: "Création de moodboards et design de feed personnalisés pour votre marque."
    },
    {
      icon: <Camera className="text-purple-500 w-8 h-8" />,
      title: "Création de contenu",
      description: "Production de contenu visuel et vidéo qui captive votre audience."
    },
    {
      icon: <MessageSquare className="text-blue-500 w-8 h-8" />,
      title: "Stratégie de contenu",
      description: "Ligne éditoriale et rédaction de contenu qui raconte votre histoire."
    },
    {
      icon: <Instagram className="text-pink-500 w-8 h-8" />,
      title: "Community management",
      description: "Gestion complète de vos réseaux sociaux et animation de votre communauté."
    },
    {
      icon: <BarChart3 className="text-green-500 w-8 h-8" />,
      title: "Campagnes digitales",
      description: "Création et gestion de campagnes performantes avec reporting détaillé."
    },
    {
      icon: <Users className="text-yellow-500 w-8 h-8" />,
      title: "Conseil & Audit",
      description: "Audit de communication et accompagnement personnalisé pour votre marque."
    },
    {
      icon: <Megaphone className="text-indigo-500 w-8 h-8" />,
      title: "Stratégie de marque",
      description: "Positionnement, storytelling et activation de votre marque."
    }
  ];  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une gamme complète de services pour propulser votre établissement vers le succès
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform h-full mr-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-xl transition-all duration-200 z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;