import React from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const PhotoCarousel = () => {
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

  const photos = [
    { src: '/img/placeholder1.jpg' },
    { src: '/img/gallery8.png' },
    { src: '/img/gallery9.png' },
    { src: '/img/gallery10.png' },
    { src: '/img/gallery11.png' },
    { src: '/img/gallery1.jpg' },
    { src: '/img/gallery2.jpg' },
    { src: '/img/gallery3.jpg' },
    { src: '/img/gallery4.jpg' },
    { src: '/img/gallery5.jpg' },
    { src: '/img/gallery6.png' },
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galerie Photo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nos shootings professionnels qui subliment vos créations culinaires
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {photos.map((photo, index) => (
                <div 
                  key={index}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4"
                >
                  <div className="relative group cursor-pointer mr-4">
                    <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={photo.src}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <div className="flex items-center space-x-2 text-white mb-2">
                            <Camera size={16} />
                            <span className="text-sm font-medium">Galerie</span>
                          </div>
                          <h3 className="text-white font-semibold">
                            Image {index + 1}
                          </h3>
                        </div>
                      </div>
                    </div>
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

export default PhotoCarousel;
