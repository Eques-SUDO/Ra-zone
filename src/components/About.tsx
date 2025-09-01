import React from 'react';
import { Target, Award, Clock, Users } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Target className="text-primary" size={32} />,
      number: "∞",
      label: "Créativité"
    },
    {
      icon: <Award className="text-secondary" size={32} />,
      number: "100%",
      label: "Satisfaction"
    },
    {
      icon: <Users className="text-blue-500" size={32} />,
      number: "6+",
      label: "Clients Majeurs"
    },
    {
      icon: <Clock className="text-purple-500" size={32} />,
      number: "24/7",
      label: "Engagement"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sand from-night-50 via-sand-100 to-sand-50 opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-radial from-accent-1/5 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary via-accent-2 to-accent-3"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-night-500 mb-8 leading-tight tracking-tight">
                Chez <span className="text-primary">Ra-Zone</span>, on voit ce que vous ne voyez pas.
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-night-400 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  Nous créons des idées qui <span className="text-accent-2 font-semibold">bousculent</span>, 
                  qui <span className="text-accent-1 font-semibold">marquent</span>, qui transforment une image 
                  en langage et une vision en émotion.
                </p>
                <p className="text-xl text-night-400 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  La <span className="text-accent-2 font-semibold">créativité</span> est notre moteur, 
                  l'<span className="text-accent-1 font-semibold">artistique</span> notre signature. 
                  Chaque projet est une œuvre, pensée avec exigence, racontée avec instinct.
                </p>
                <div className="pl-6 border-l-2 border-primary my-8">
                  <p className="text-2xl font-semibold text-night-500">
                    Ra-Zone, c'est une zone libre.
                  </p>
                </div>
                <p className="text-xl text-night-400 leading-relaxed transform hover:translate-x-2 transition-transform duration-300">
                  Un espace où le marketing rencontre l'art, où la stratégie devient sensible, 
                  où chaque détail a du sens, où l'on imagine ce que vous n'avez encore jamais vu.
                </p>
                <div className="mt-12 text-center">
                  <p className="text-2xl font-light text-primary italic tracking-wide">
                    Bienvenue dans la zone.
                  </p>
                  <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-primary via-accent-2 to-accent-3"></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-sand-50 to-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 transform -rotate-6 group-hover:rotate-0">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary via-accent-2 to-accent-3 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm font-medium text-night-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-xl shadow-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Team WeFeed"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Notre Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transformer les concepts culinaires en succès durables grâce à des stratégies 
                marketing innovantes et adaptées à l'industrie de la restauration.
              </p>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500 rounded-full opacity-20"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;