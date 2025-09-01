import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import PhotoCarousel from './components/PhotoCarousel';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoCarousel from './components/VideoCarousel';

function App() {
  const videoUrls = [
    'https://www.youtube.com/shorts/1HgCpkJyaM8',
    'https://www.youtube.com/shorts/teOBpuiGSw8',
    'https://www.youtube.com/shorts/GMOUe4He3pA',
    'https://www.youtube.com/shorts/_v9TE7cnrqY',
    'https://www.youtube.com/shorts/60LB1hzECeU',
    'https://www.youtube.com/shorts/9UBe9_ZeoGE',
    'https://www.youtube.com/shorts/6zQfBTAy50I',
    'https://www.youtube.com/shorts/K_Bl-em-rSM',
    'https://www.youtube.com/shorts/yH8UtOIsK1A',
    'https://www.youtube.com/shorts/V3VRCyni6Cc',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <VideoCarousel videos={videoUrls} vertical />
        <PhotoCarousel />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
