import React from 'react';
import { Instagram, Globe, Facebook, Linkedin, Youtube } from 'lucide-react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

const Clients = () => {
  const clients = [
    {
      name: 'KIA',
      description:
        'Leader automobile mondial qui nous fait confiance pour notre créativité et notre vision innovante dans le marché marocain.',
      image: '/img/car.jpg',
      logo: '/img/KIA.png',
      socialMedia: {
        website: 'https://kia.ma',
        instagram: 'https://www.instagram.com/kiamarocofficiel',
        facebook: 'https://www.facebook.com/kiamorocco',
        linkedin: 'https://www.linkedin.com/company/kia-motors-maroc',
        youtube: 'https://www.youtube.com/@kiamaroc8098',
      },
    },
    {
      name: 'Le Petit Bouillon',
      description:
        'Concept unique de restauration française au Maroc, accompagné dans sa direction artistique et sa stratégie de communication.',
      image: '/img/petit.png',
      logo: '/img/logo-petit.png',
      socialMedia: {
        instagram: 'https://www.instagram.com/lepetitbouillon/?hl=en',
      },
    },
    {
      name: 'Nuances Maison',
      description:
        'Magasin d\'ameublement et de décoration haut de gamme, spécialisé dans la création d\'espaces élégants et contemporains. Nous accompagnons cette marque dans sa stratégie digitale et sa communication visuelle.',
      image: '/img/nunacess.jpg',
      logo: '/img/nuances.png',
      socialMedia: {
        instagram: 'https://www.instagram.com/nuances.maison',
      },
    },
    {
      name: "Art's by Passion",
      description:
        'Bijouterie artisanale proposant des créations uniques et raffinées. Nous développons leur identité visuelle et leur présence digitale pour mettre en valeur leur savoir-faire exceptionnel.',
      image: '/img/pp.png',
      logo: '/img/passion.jpg',
      socialMedia: {
        instagram: 'https://www.instagram.com/arts_bypassion',
      },
    },
    {
      name: 'Geely',
      description:
        'Constructeur automobile innovant accompagné dans sa stratégie de communication et son déploiement créatif au Maroc.',
      image: '/img/car2.png',
      logo: '/img/geely.jpg',
      socialMedia: {
        website: 'https://geely.ma',
        instagram: 'https://www.instagram.com/geelyautomorocco',
        facebook: 'https://www.facebook.com/GeelyMorocco',
        linkedin: 'https://www.linkedin.com/company/geelymaroc',
        youtube: 'https://www.youtube.com/c/geelygroup',
      },
    },
    {
      name: 'Maison Diazur',
      description:
        'Marque de luxe pour laquelle nous créons une identité visuelle raffinée et une présence digitale élégante.',
      image: '/img/aa.jpg',
      logo: '/img/maison.jpg',
      socialMedia: {
        instagram: 'https://www.instagram.com/diazur_jewelry',
      },
    },
  ];

  return (
    <section id="clients" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F4F4F1' }}>
      {/* Enhanced artistic background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'translate(40%, -40%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-6 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', clipPath: 'polygon(0 0, 100% 50%, 0 100%)', transform: 'translate(-40%, 40%)' }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-40 opacity-15 animate-gentle-float" style={{ backgroundColor: '#3B0510', transform: 'rotate(-15deg)', animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full opacity-10 animate-subtle-pulse" style={{ backgroundColor: '#2A181A', animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/2 w-16 h-2 opacity-12" style={{ backgroundColor: '#3B0510', transform: 'rotate(25deg)' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-20 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-primary font-bold mb-8" style={{ color: '#3B0510', letterSpacing: '0.02em' }}>
              ZONE CLIENT
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 animate-subtle-pulse" style={{ backgroundColor: '#3B0510' }}></div>
          </div>
          <AnimatedSection animation="animate-fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl font-secondary max-w-3xl mx-auto leading-relaxed mt-8" style={{ color: '#2A181A' }}>
              Des marques qui nous inspirent, des projets qui nous passionnent
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection animation="animate-fade-in-up" delay={400} className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <AnimatedSection key={index} animation="animate-slide-in-bottom" delay={500 + index * 100}>
                <div
                  className="relative group h-full overflow-hidden"
                >
                  {/* Card background with artistic elements */}
                  <div className="absolute inset-0 rounded-2xl opacity-20 animate-gentle-float group-hover:scale-105 transition-all duration-700" style={{ backgroundColor: '#3B0510', transform: 'rotate(-1deg)' }}></div>

                  <div
                    className="relative rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 transform h-full backdrop-blur-sm hover-lift group overflow-hidden"
                    style={{
                      backgroundColor: 'rgba(245, 234, 218, 0.95)',
                      border: '2px solid rgba(59, 5, 16, 0.1)'
                    }}
                  >
                    {/* Decorative corner element */}
                    <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#3B0510', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>
                    <div className="h-48 relative overflow-hidden rounded-t-2xl">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-all duration-500 group-hover:from-black/30"></div>
                    </div>

                    <div className="p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={client.logo}
                          alt={`${client.name} logo`}
                          className="w-16 h-16 object-contain rounded-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-lg"
                        />
                        <h3 className="text-xl md:text-2xl font-primary font-bold leading-tight" style={{ color: '#2A181A' }}>
                          {client.name.toUpperCase()}
                        </h3>
                      </div>

                      <p className="font-secondary text-lg leading-relaxed mb-8" style={{ color: '#2A181A', opacity: 0.9 }}>
                        {client.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {client.socialMedia?.website && (
                          <a
                            href={client.socialMedia.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift shadow-lg"
                            style={{ backgroundColor: '#2A181A', color: '#F4F4F1' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F4F4F1';
                              e.currentTarget.style.color = '#2A181A';
                              e.currentTarget.style.transform = 'scale(1.1) rotate(-5deg)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#2A181A';
                              e.currentTarget.style.color = '#F4F4F1';
                              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            }}
                          >
                            <Globe size={16} />
                          </a>
                        )}
                        {client.socialMedia?.instagram && (
                          <a
                            href={client.socialMedia.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift shadow-lg"
                            style={{ backgroundColor: '#3B0510', color: '#F4F4F1' }}
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
                            <Instagram size={16} />
                          </a>
                        )}
                        {client.socialMedia?.facebook && (
                          <a
                            href={client.socialMedia.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift shadow-lg"
                            style={{ backgroundColor: '#1877F2', color: '#F4F4F1' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F4F4F1';
                              e.currentTarget.style.color = '#1877F2';
                              e.currentTarget.style.transform = 'scale(1.1) rotate(3deg)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#1877F2';
                              e.currentTarget.style.color = '#F4F4F1';
                              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            }}
                          >
                            <Facebook size={16} />
                          </a>
                        )}
                        {client.socialMedia?.linkedin && (
                          <a
                            href={client.socialMedia.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift shadow-lg"
                            style={{ backgroundColor: '#0A66C2', color: '#F4F4F1' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F4F4F1';
                              e.currentTarget.style.color = '#0A66C2';
                              e.currentTarget.style.transform = 'scale(1.1) rotate(-3deg)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#0A66C2';
                              e.currentTarget.style.color = '#F4F4F1';
                              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            }}
                          >
                            <Linkedin size={16} />
                          </a>
                        )}
                        {client.socialMedia?.youtube && (
                          <a
                            href={client.socialMedia.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 hover-lift shadow-lg"
                            style={{ backgroundColor: '#FF0000', color: '#F4F4F1' }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#F4F4F1';
                              e.currentTarget.style.color = '#FF0000';
                              e.currentTarget.style.transform = 'scale(1.1) rotate(4deg)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = '#FF0000';
                              e.currentTarget.style.color = '#F4F4F1';
                              e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            }}
                          >
                            <Youtube size={16} />
                          </a>
                        )}
                      </div>

                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#3B0510' }}></div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Clients;
