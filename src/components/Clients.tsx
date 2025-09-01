import React from 'react';
import { Instagram, Globe } from 'lucide-react';

const Clients = () => {
  const clients = [
    {
      name: 'KIA',
      description:
        'Leader automobile mondial qui nous fait confiance pour notre créativité et notre vision innovante dans le marché marocain.',
      image: '/img/kia.jpg',
      logo: '/img/logo-kia.png',
      socialMedia: {
        website: 'https://www.kia.com/ma/',
      },
    },
    {
      name: 'Le Petit Bouillon',
      description:
        'Concept unique de restauration française au Maroc, accompagné dans sa direction artistique et sa stratégie de communication.',
      image: '/img/petit-bouillon.jpg',
      logo: '/img/logo-petit.png',
      socialMedia: {
        instagram: 'https://www.instagram.com/lepetitbouillon.ma',
      },
    },
    {
      name: 'Nuances Maison',
      description:
        'Marque de décoration haut de gamme pour laquelle nous avons développé une identité visuelle distinctive.',
      image: '/img/nuances.jpg',
      logo: '/img/logo-nuances.png',
      socialMedia: {
        instagram: 'https://www.instagram.com/nuances.maison',
      },
    },
    {
      name: "Art's by Passion",
      description:
        'Galerie d\'art contemporain sublimée par notre approche créative et notre expertise en communication digitale.',
      image: '/img/arts.jpg',
      logo: '/img/logo-arts.png',
      socialMedia: {
        instagram: '',
      },
    },
    {
      name: 'Geely',
      description:
        'Constructeur automobile innovant accompagné dans sa stratégie de communication et son déploiement créatif au Maroc.',
      image: '/img/geely.jpg',
      logo: '/img/logo-geely.png',
      socialMedia: {
        website: 'https://geely.ma',
      },
    },
    {
      name: 'Maison Diazur',
      description:
        'Marque de luxe pour laquelle nous créons une identité visuelle raffinée et une présence digitale élégante.',
      image: '/img/diazur.jpg',
      logo: '/img/logo-diazur.png',
      socialMedia: {
        instagram: 'https://www.instagram.com/maisondiazur',
      },
    },
  ];

  return (
    <section id="clients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des marques qui nous inspirent, des projets qui nous passionnent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-600 relative overflow-hidden">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-10 h-10 object-contain rounded-full"
                  />
                  <h3 className="text-2xl font-bold text-gray-900">{client.name}</h3>
                </div>

                <p className="text-gray-600 mb-4">{client.description}</p>

                <div className="flex gap-4 mt-4">
                  {client.socialMedia?.instagram && (
                    <a
                      href={client.socialMedia.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 hover:text-orange-700"
                    >
                      <Instagram size={20} />
                    </a>
                  )}
                  {client.socialMedia?.website && (
                    <a
                      href={client.socialMedia.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-800"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
