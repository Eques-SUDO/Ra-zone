import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AnimatedSection } from '../hooks/useScrollAnimation';

interface VideoCarouselProps {
  videos: string[];
  vertical?: boolean;
}

// Extract video ID from URL
const getVideoId = (url: string) => {
  const shortMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
  const watchMatch = url.match(/v=([a-zA-Z0-9_-]+)/);
  return shortMatch?.[1] || watchMatch?.[1] || '';
};

// Generate thumbnail URL
const getThumbnail = (videoUrl: string) => {
  const id = getVideoId(videoUrl);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
};

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos, vertical = false }) => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden" style={{ backgroundColor: '#F4F4F1' }}>
      {/* Enhanced artistic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-8" style={{ backgroundColor: '#3B0510', transform: 'translate(40%, -40%)' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-6" style={{ backgroundColor: '#2A181A', clipPath: 'polygon(0 0, 100% 50%, 0 100%)', transform: 'translate(-40%, 40%)' }}></div>
        <div className="absolute top-1/3 left-1/4 w-3 h-40 opacity-15" style={{ backgroundColor: '#3B0510', transform: 'rotate(-15deg)' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: '#2A181A' }}></div>
        <div className="absolute top-20 left-1/2 w-16 h-2 opacity-12" style={{ backgroundColor: '#3B0510', transform: 'rotate(25deg)' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="animate-fade-in-up" className="text-center mb-20 relative z-10">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-primary font-bold mb-8" style={{ color: '#3B0510', letterSpacing: '0.02em' }}>
              ZONE D'IMPACT
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1" style={{ backgroundColor: '#3B0510' }}></div>
          </div>
          <AnimatedSection animation="animate-fade-in-up" delay={200}>
            <p className="text-xl md:text-2xl font-secondary max-w-3xl mx-auto leading-relaxed mt-8" style={{ color: '#2A181A' }}>
              Découvrez nos réalisations créatives qui marquent et transforment
            </p>
          </AnimatedSection>
        </AnimatedSection>

        <AnimatedSection animation="animate-fade-in-up" delay={400} className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {videos.map((videoUrl, index) => {
              const videoId = getVideoId(videoUrl);
              const isPlaying = playingIndex === index;

              return (
                <AnimatedSection key={index} animation="animate-slide-in-bottom" delay={500 + index * 100}>
                  <div className="relative group h-full">
                    {/* Card background with artistic elements */}
                    <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:scale-105 transition-all duration-700" style={{ backgroundColor: '#3B0510', transform: 'rotate(-1deg)' }}></div>

                    <div
                      className={`relative rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 transform backdrop-blur-sm hover-lift group overflow-hidden ${
                        vertical ? 'aspect-[9/16]' : 'aspect-video'
                      }`}
                      style={{
                        backgroundColor: 'rgba(244, 244, 241, 0.95)',
                        border: '2px solid rgba(59, 5, 16, 0.1)'
                      }}
                    >
                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: '#3B0510', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                      {isPlaying ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={`YouTube video player ${index}`}
                          className="w-full h-full rounded-2xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          onClick={() => setPlayingIndex(index)}
                          className="relative w-full h-full cursor-pointer"
                        >
                          <img
                            src={getThumbnail(videoUrl)}
                            alt={`Video thumbnail ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 rounded-2xl transition-all duration-500" style={{ backgroundColor: 'rgba(59, 5, 16, 0.3)' }}></div>
                          <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 flex items-center justify-center transition-all duration-500 rounded-2xl">
                            <div
                              className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-lg"
                              style={{ backgroundColor: '#F4F4F1' }}
                            >
                              <Play className="ml-1" size={28} fill="#3B0510" style={{ color: '#3B0510' }} />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Hover effect line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 group-hover:w-full transition-all duration-500" style={{ backgroundColor: '#3B0510' }}></div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoCarousel;