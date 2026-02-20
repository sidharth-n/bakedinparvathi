import React from 'react';
import { motion } from 'framer-motion';
import { treks } from '../data';
import { Mountain, MapPin, Flame, Star } from 'lucide-react';

const Treks = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 pb-32">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-16 relative"
      >
        {/* Decorative Mountain Icon Background */}
        <Mountain size={120} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white/5 -z-10" strokeWidth={1} />
        
        <h2 className="text-5xl font-display text-amber-500 mb-4 drop-shadow-md">Trek Packages</h2>
        <p className="text-stone-300 font-body text-sm md:text-base max-w-xl mx-auto">
          Explore the hidden gems of the Parvathi Valley. Kheerganga, Bhunbuni, and beyond.
        </p>
      </motion.div>

      {/* Trek Timeline / List */}
      <div className="relative border-l-2 border-amber-900/30 ml-4 md:ml-8 space-y-12 pb-8">
        {treks.map((trek, idx) => (
          <motion.div 
            key={trek.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[17px] top-6 w-8 h-8 bg-black border-2 border-amber-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(217,119,6,0.5)]">
               <MapPin size={12} className="text-amber-500" />
            </div>

            <div className="bg-gradient-to-br from-stone-900 to-black border border-white/5 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-amber-900/50 transition-colors">
              
              {/* Top Banner */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-chalk text-amber-400 font-bold tracking-widest">{trek.name}</h3>
                <div className="bg-amber-900/30 font-mono text-amber-200 px-3 py-1 rounded-full text-sm border border-amber-700/30">
                  ₹{trek.price}
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed max-w-2xl mb-6">
                {trek.description}
              </p>

              {/* Highlights */}
              <div className="flex gap-4 border-t border-white/5 pt-4">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Flame size={14} className="text-amber-600" /> Bonfire
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Star size={14} className="text-amber-600" /> Stargazing
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Mountain size={14} className="text-amber-600" /> Guide
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-amber-600/0 group-hover:bg-amber-600/10 transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Treks;
