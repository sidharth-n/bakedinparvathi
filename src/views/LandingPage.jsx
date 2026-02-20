import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Star, MapPin, Coffee, Phone, ArrowRight } from 'lucide-react';
import { cafeInfo } from '../data';

const LandingPage = () => {
  return (
    <div className="bg-[#0D1B2A] min-h-screen text-white pb-24 font-body">
      {/* Fully Immersive Hero Section */}
      <Hero />

      {/* Primary Call to Action right under Hero */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 md:-mt-20 relative z-40 text-center mb-24">
        <Link 
          to="/menu" 
          className="inline-flex items-center gap-3 bg-gradient-to-tr from-amber-600 to-amber-400 text-stone-900 font-bold text-xl py-5 px-10 rounded-full shadow-[0_10px_30px_rgba(217,119,6,0.3)] hover:scale-105 hover:shadow-[0_10px_40px_rgba(217,119,6,0.5)] active:scale-95 transition-all"
        >
          <Coffee size={24} />
          Dive In
          <ArrowRight size={24} />
        </Link>
      </div>

      {/* About The Host & Cafe */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center border-t border-white/10">
        <h2 className="text-4xl font-display text-amber-500 mb-6 drop-shadow-md">The Parvathi Vibe</h2>
        <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8 font-light">
          Nestled at 8,500 feet in the misty village of Kalga, Baked in Parvathi is more than just a café—it's a high-altitude sanctuary. Hosted by Chanpreet, we serve wood-fired pizzas, hearty mountain meals, and the warmest hospitality in the Himalayas.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { label: "Wood-Fired Bakery", desc: "Fresh every day" },
            { label: "Pet Friendly", desc: "Bring your furry friends" },
            { label: "High Speed WiFi", desc: "Work from the mountains" },
            { label: "Valley Views", desc: "Unmatched scenery" }
          ].map((feature, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col items-center justify-center">
              <span className="font-bold text-amber-400 mb-1">{feature.label}</span>
              <span className="text-xs text-gray-400">{feature.desc}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-chalk text-center text-amber-400 mb-12 tracking-wider">Words from the Trail</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { text: "Amazing Walnut Brownies and Apple Pie. Chanpreet's hospitality makes you feel right at home!", author: "Gaurav S." },
            { text: "Best wood-fired pizza in the valley. The cottage stay was cozy and the views are breathtaking.", author: "Neha M." },
            { text: "Perfect pitstop before the Kheerganga trek. Great vegan options and an adorable dog!", author: "Alex R." }
          ].map((review, i) => (
            <div key={i} className="chalkboard p-6 relative">
              <div className="flex gap-1 text-amber-500 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm text-gray-300 italic mb-4 leading-relaxed">"{review.text}"</p>
              <span className="text-xs font-bold text-amber-400 font-mono">- {review.author}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Map & Contact Info */}
      <div className="max-w-4xl mx-auto px-4 py-16 border-t border-white/10">
        <div className="bg-stone-900 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <MapPin size={200} />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-display text-white mb-6">Find Us</h3>
              <p className="text-gray-300 flex items-start gap-3 mb-4">
                <MapPin className="text-amber-500 shrink-0 mt-1" />
                <span>{cafeInfo.location}<br/>Parvathi Valley</span>
              </p>
              <p className="text-gray-300 flex items-center gap-3 mb-8">
                <Phone className="text-amber-500 shrink-0" />
                <span>+91 {cafeInfo.phone.slice(2)}</span>
              </p>
            </div>
            
            <div className="flex flex-col justify-center">
               <div className="bg-black/50 p-6 rounded-2xl border border-white/5 text-center">
                 <h4 className="font-bold text-amber-400 mb-2">How to reach</h4>
                 <p className="text-sm text-gray-400 leading-relaxed">
                   Trek up from Barshaini Dam. The trail takes about 30-45 minutes. Follow the signs for Kalga Village.
                 </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
