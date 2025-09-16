import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VideoCarousel from './components/VideoCarousel';
import Valeurs from './components/Valeurs';

function App() {
  const videoUrls: string[] = [
    'https://www.youtube.com/shorts/5wor0A8C5_c',
    'https://www.youtube.com/shorts/S0eoTSsFpog',
    'https://www.youtube.com/shorts/Gi6pVnJZHBk',
    'https://www.youtube.com/shorts/BREqXX_oV00',
    'https://www.youtube.com/shorts/4SLm9RImzeU',
    'https://www.youtube.com/shorts/BgYmN8Sh_iE',
    'https://www.youtube.com/shorts/Z2q0c8ZnO_A'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Valeurs />
        <VideoCarousel videos={videoUrls} vertical />
        <Clients />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
