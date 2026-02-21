import React from 'react';
import { motion } from 'framer-motion';
import { stays, experiences, cafeInfo } from '../data';
import { Home, Wifi, Coffee, Music, Map, Send } from 'lucide-react';

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
              {/* Stay Image */}
              <div className="md:w-1/3 bg-stone-800 relative min-h-[200px] border-r border-white/5">
                <img src={stay.image} alt={stay.name} className="absolute inset-0 w-full h-full object-cover" />
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

                <div className="flex items-center justify-end mt-auto">
                  <a 
                    href={`https://wa.me/${cafeInfo.phone}?text=${encodeURIComponent(`Hi! I'm interested in the *${stay.name}* (₹${stay.pricePerNight}). Could you let me know about availability?\n\n_Sent via bakedinparvati.in_`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-11 h-11 bg-[#25D366] hover:bg-[#1fbe59] rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110 active:scale-95"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  </a>
                </div>
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
