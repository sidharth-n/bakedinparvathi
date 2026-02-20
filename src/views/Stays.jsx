import React from 'react';
import { motion } from 'framer-motion';
import { stays, experiences } from '../data';
import { Home, Wifi, Coffee, Music, Map } from 'lucide-react';

const Stays = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 mt-4"
      >
        <h2 className="text-5xl font-display text-amber-500 mb-2 drop-shadow-md">Stay & Rest</h2>
        <p className="text-stone-400 font-body text-sm max-w-xl mx-auto italic">
          Wake up to the mighty Himalayas.
        </p>
        <div className="flex items-center justify-center gap-3 mt-4">
          <div className="h-px w-12 bg-amber-600/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60" />
          <div className="h-px w-12 bg-amber-600/40" />
        </div>
      </motion.div>

      {/* Accommodations */}
      <div className="space-y-8 mb-16">
        {stays.map((stay, idx) => (
          <motion.div 
            key={stay.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-black/40 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm"
          >
            <div className="md:flex">
              {/* Image Placeholder */}
              <div className="md:w-1/3 bg-stone-800 relative min-h-[200px] flex items-center justify-center border-r border-white/5">
                <Home className="text-stone-700 w-16 h-16" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-bold text-white tracking-widest uppercase bg-amber-900/50 px-2 py-1 rounded backdrop-blur">
                  {stay.name.includes('Weekly') ? 'Extended Stay' : 'Nightly'}
                </span>
              </div>
              
              {/* Content */}
              <div className="p-6 md:p-8 md:w-2/3 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-chalk text-amber-400 tracking-wider font-bold">{stay.name}</h3>
                    <div className="text-right">
                      <span className="text-xl font-mono font-bold text-white">₹{stay.pricePerNight}</span>
                      <span className="text-xs text-gray-500 block">/ package</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-6 leading-relaxed">{stay.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {stay.features.map(f => (
                      <span key={f} className="text-xs text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1 flex items-center gap-1">
                        {f.includes('WiFi') && <Wifi size={10} />}
                        {f.includes('Café') && <Coffee size={10} />}
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-xs text-amber-500/70 italic mt-auto">
                  * Tap the floating cart to message us and check availability!
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Experiences Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="chalkboard p-8 text-center"
      >
        <h3 className="text-3xl font-chalk text-amber-400 mb-8 border-b border-white/10 inline-block pb-2">Cafe Experiences</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div key={i} className="flex flex-col items-center bg-black/20 p-4 rounded-xl border border-white/5">
              {i === 0 ? <Map className="text-amber-500 mb-3" /> : i === 1 ? <Home className="text-amber-500 mb-3" /> : <Music className="text-amber-500 mb-3" />}
              <h4 className="text-white font-body font-medium mb-2">{exp.name}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{exp.info}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Stays;
