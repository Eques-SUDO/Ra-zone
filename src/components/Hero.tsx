import React from 'react';
import { ChefHat, TrendingUp, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-egyptian from-sand-100 via-accent-1/10 to-sand-50"></div>
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="text-7xl text-primary block">Ra-Zone</span>
              <span className="text-5xl">On voit ce que vous ne voyez pas</span>
            </h1>
            <p className="text-xl text-gray-500 mb-4 leading-relaxed">
              Nous créons des idées qui bousculent, qui marquent, qui transforment une image en langage 
              et une vision en émotion. La créativité est notre moteur, l'artistique notre signature.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Commencer maintenant
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Découvrir nos services
              </button>
            </div>
          </div>
          
          
          
        </div>

        
      </div>
    </section>
  );
};

export default Hero;