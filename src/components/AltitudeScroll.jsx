import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';

const AltitudeScroll = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map 0 to 1 scroll progress to 7500 ft to 8500 ft
  const altitude = useTransform(smoothProgress, [0, 1], [7500, 8500]);
  const displayedAltitude = useTransform(altitude, (value) => `${Math.round(value)} ft`);

  // Map text based on altitude ranges
  const locationText = useTransform(altitude, (value) => {
    if (value < 7800) return "Barshaini";
    if (value < 8100) return "Trail to Kalga";
    if (value < 8400) return "Kalga Village";
    return "Baked in Parvati";
  });

  return (
    <div className="hidden md:flex fixed right-8 top-1/4 h-1/2 flex-col items-center z-40 pointer-events-none">
      {/* Altitude display */}
      <div className="bg-stone-900/80 backdrop-blur-md text-amber-400 font-mono text-xs px-2 py-1 rounded-md mb-2 border border-amber-900/30 whitespace-nowrap shadow-xl">
        <motion.span>{displayedAltitude}</motion.span>
      </div>

      {/* The Line */}
      <div className="relative w-1 flex-grow bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 w-full bg-gradient-to-b from-amber-600 to-amber-400 rounded-full origin-top"
          style={{ height: useTransform(smoothProgress, [0, 1], ['0%', '100%']) }}
        />
      </div>

      {/* Current Location Badge */}
      <div className="mt-2 flex items-center gap-1 text-white bg-forest-dark/80 backdrop-blur px-2 py-1 rounded-full text-[10px] tracking-wider uppercase shadow-xl border border-white/5">
        <MapPin size={10} className="text-amber-500" />
        <motion.span>{locationText}</motion.span>
      </div>
    </div>
  );
};

export default AltitudeScroll;
