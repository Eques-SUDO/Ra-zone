import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Play } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';

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
    <div className="w-full max-w-7xl mx-auto py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Découvrez en vidéo</h2>

      <Swiper
        spaceBetween={16}
        navigation
        loop={true}
        modules={[Navigation]}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="overflow-visible"
      >
        {videos.map((videoUrl, index) => {
          const videoId = getVideoId(videoUrl);
          const isPlaying = playingIndex === index;

          return (
            <SwiperSlide key={index}>
              <div
                className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow ${
                  vertical ? 'aspect-[9/16]' : 'aspect-video'
                }`}
              >
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={`YouTube video player ${index}`}
                    className="w-full h-full"
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
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                        <Play className="text-primary ml-1" size={24} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
