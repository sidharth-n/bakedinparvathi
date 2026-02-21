import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedHero from '../components/AnimatedHero';
import { Star, MapPin, Coffee, Phone, ArrowRight, Instagram, Quote, TreePine } from 'lucide-react';
import { cafeInfo } from '../data';

const LandingPage = () => {
  return (
    <div className="bg-[#0D1B2A] min-h-screen text-white overflow-x-hidden font-body">
      {/* 1. The Epic Animated Hero */}
      <AnimatedHero />

      {/* 2. Primary CTA floating over the transition */}
      <div className="relative z-40 text-center -mt-28 md:-mt-36 mb-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p className="text-amber-200/80 mb-6 font-chalk text-xl tracking-widest max-w-md mx-auto">
            Order online, chill offline.
          </p>
          <Link 
            to="/menu" 
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-900 font-bold text-xl py-5 px-12 rounded-full shadow-[0_10px_40px_rgba(217,119,6,0.3)] hover:scale-105 hover:shadow-[0_15px_50px_rgba(217,119,6,0.5)] active:scale-95 transition-all w-full max-w-sm"
          >
            <Coffee size={24} />
            Explore the Cafe
            <ArrowRight size={24} />
          </Link>
        </motion.div>
      </div>

      {/* 3. The Story / Vibe Section (More elaborate layout) */}
      <div className="max-w-6xl mx-auto px-4 py-24 border-t border-white/5 relative">
        <div className="absolute top-10 right-10 opacity-5">
           <TreePine size={300} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="text-5xl md:text-6xl font-display text-amber-500 mb-6 leading-tight drop-shadow-lg">
              Not your <br/>average cafe.
            </h2>
            <div className="w-24 h-1 bg-amber-600 mb-8 rounded-full" />
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light mb-8">
              Hidden deep within the apple orchards of Kalga village, accessible only by a scenic trek, baked in Parvati is a high-altitude sanctuary for wanderers, artists, and peace-seekers.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light mb-8">
              We bake fresh wood-fired pizzas, brew the finest Himalayan teas, and offer cozy cottage stays under the clearest starry night skies you'll ever witness. Hosted with love by Chanpreet.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="border-l-2 border-amber-600 pl-4">
                <span className="block text-3xl font-display text-white mb-2">8,500ft</span>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Altitude</span>
              </div>
              <div className="border-l-2 border-amber-600 pl-4">
                <span className="block text-3xl font-display text-white mb-2">100%</span>
                <span className="text-sm text-gray-500 font-bold uppercase tracking-widest">Wood-fired</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Visual placeholders for stunning cafe photos */}
            <div className="bg-stone-800 rounded-3xl h-64 md:h-80 shadow-2xl relative overflow-hidden group">
               <img src="/landing-page/image1.webp" alt="Cafe View" className="absolute w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal" />
            </div>
            <div className="bg-stone-800 rounded-3xl h-64 md:h-80 shadow-2xl relative overflow-hidden mt-12 group">
              <img src="/landing-page/image2.jpg" alt="Mountain View" className="absolute w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity hover:mix-blend-normal" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Feature Highlights */}
      <div className="bg-black/50 py-16 md:py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: "Artisan Bakery", desc: "Fresh sourdough, brownies & pies baked daily." },
              { title: "Cottage Stays", desc: "Cozy rooms with valley views & indoor heating." },
              { title: "Guided Treks", desc: "Kheerganga and Bhunbuni trail packages." },
              { title: "Creative Space", desc: "Pottery, wood carving, and stargazing." }
            ].map((feature, i) => (
              <div key={i} className="bg-[#0A1420] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/5 hover:border-amber-500/30 transition-colors group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-900/30 rounded-xl md:rounded-2xl mb-4 md:mb-6 flex items-center justify-center group-hover:bg-amber-600 transition-colors">
                  <Star className="text-amber-500 group-hover:text-black w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 leading-tight">{feature.title}</h4>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Elaborate Reviews Section (Swipeable) */}
      <div className="w-full py-24 md:py-32 relative overflow-hidden">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h3 className="text-5xl font-display text-amber-500 drop-shadow-md">Tale of the Trail</h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Don't just take our word for it. Hear from fellow travelers who made the climb.</p>
        </div>
        
        {/* Horizontal scroll container */}
        <div className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-8 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { text: "Finding this place after a long trek was like finding heaven. The Walnut Brownies are out of this world. Chanpreet makes you feel like family the moment you step in.", author: "Gaurav Singh" },
            { text: "The vibe here is unmatched. Sitting by the tandoor, eating wood-fired pizza while watching the snow fall over the Parvati valley. Best stay in Kalga.", author: "Neha Malik" },
            { text: "A sanctuary. The WiFi is surprisingly fast if you need to work, but honestly, the scenery and the ginger honey lemon tea demand all your attention.", author: "Alex R." },
            { text: "If you want a true Himalayan experience, this is the place. The cottage was warm, and the starry sky at night was the clearest I've ever seen.", author: "Sarah W." }
          ].map((review, i) => (
             <div 
               key={i} 
               className="chalkboard p-8 md:p-10 relative shrink-0 w-[85vw] md:w-[400px] snap-center flex flex-col justify-between"
             >
               <Quote size={40} className="absolute -top-6 -left-2 text-stone-800 rotate-180" />
               <div>
                 <div className="flex gap-1 text-amber-500 mb-6">
                   {[...Array(5)].map((_, j) => <Star key={j} size={14} fill="currentColor" />)}
                 </div>
                 <p className="text-base text-gray-300 italic mb-8 leading-relaxed font-light">"{review.text}"</p>
               </div>
               <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                  <div className="w-10 h-10 bg-amber-900/50 rounded-full flex items-center justify-center font-display text-amber-400 shrink-0">
                    {review.author[0]}
                  </div>
                  <span className="text-sm font-bold text-white uppercase tracking-wider">{review.author}</span>
               </div>
             </div>
          ))}
        </div>
      </div>

      {/* 6. Stunning Footer / Contact / Map */}
      <footer className="w-full bg-[#050B14] border-t border-white/5 pt-24 pb-12 rounded-t-[3rem] md:rounded-t-[5rem] relative mt-24">
        {/* Overlapping Map Card */}
        <div className="max-w-4xl mx-auto px-4 absolute left-0 right-0 -top-32 md:-top-32">
          <div className="bg-gradient-to-br from-stone-900 to-[#0A1420] border-t border-l border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 w-full">
              <h3 className="text-4xl font-display text-white mb-6">Locate Us</h3>
              <p className="text-gray-300 flex items-start gap-4 mb-6">
                <MapPin className="text-amber-500 shrink-0 mt-1" size={24} />
                <span className="text-lg font-light">{cafeInfo.location}<br/>Parvati Valley, 175105</span>
              </p>
              <p className="text-gray-300 flex items-center gap-4">
                <Phone className="text-amber-500 shrink-0" size={24} />
                <span className="text-lg font-mono tracking-widest">+91 {cafeInfo.contactPhone.slice(2)}</span>
              </p>
            </div>
            
            <div className="flex-1 w-full flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
               <h4 className="font-bold text-amber-500 mb-4 text-xl font-chalk tracking-widest">How to reach</h4>
               <p className="text-base text-gray-400 leading-relaxed font-light mb-6">
                 From Barshaini Dam, cross the bridge and take the upward trail. It's a beautiful 30-45 minute hike through the woods to Kalga Village. Look for our signboards!
               </p>
               <a href={cafeInfo.gmap} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-colors">
                 Open in Google Maps <ArrowRight size={16} />
               </a>
            </div>
          </div>
        </div>

        {/* Footer Deep content */}
        <div className="max-w-6xl mx-auto px-4 pt-32 md:pt-24 mt-32 md:mt-16 flex flex-col items-center">
          <h2 className="text-5xl font-display text-white/20 mb-8">Baked in Parvati</h2>
          
          <div className="flex gap-6 mb-12">
            <a href={cafeInfo.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-500 hover:border-amber-500/50 transition-all">
              <Instagram size={20} />
            </a>
            <a href={`https://wa.me/${cafeInfo.contactPhone}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all">
              <Phone size={20} />
            </a>
          </div>

          <p className="text-sm text-gray-600 font-mono">
            &copy; {new Date().getFullYear()} Baked in Parvati. High Altitude Bakery & Cafe.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
