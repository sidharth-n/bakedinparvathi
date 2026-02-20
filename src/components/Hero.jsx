import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  
  // As user scrolls from 0 to 400px, transition values
  const skyColor = useTransform(scrollY, [0, 400], ['#8ECAE6', '#0D1B2A']); // Light blue to night sky
  const cloudOpacity = useTransform(scrollY, [0, 250], [1, 0]);
  const starOpacity = useTransform(scrollY, [150, 400], [0, 1]);
  const mountainBrightness = useTransform(scrollY, [0, 400], ['brightness(100%)', 'brightness(40%)']);

  return (
    <motion.div 
      className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: skyColor }}
    >
      {/* Stars Background (Fades in) */}
      <motion.div 
        className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
        style={{ opacity: starOpacity }}
      />

      {/* Clouds (Fades out) */}
      <motion.div 
        className="absolute w-[200%] h-32 top-10 flex gap-20 opacity-50 z-10"
        style={{ opacity: cloudOpacity }}
        animate={{ x: [0, -1000] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-48 h-16 bg-white/70 rounded-full blur-xl" />
        <div className="w-64 h-24 bg-white/60 rounded-full blur-2xl mt-12" />
        <div className="w-56 h-16 bg-white/70 rounded-full blur-xl mt-4" />
      </motion.div>

      {/* Mountain Silhouettes */}
      <motion.div 
        className="absolute bottom-0 w-full h-1/2 bg-cover bg-top z-20"
        style={{ filter: mountainBrightness }}
      >
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto drop-shadow-2xl text-forest-dark fill-current">
          <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          <path d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,160C840,181,960,203,1080,213.3C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" opacity="0.6"></path>
        </svg>
      </motion.div>

      {/* Cafe Logo / Typography */}
      <div className="relative z-30 text-center flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-display text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
          Baked in
        </h1>
        <h1 className="text-5xl md:text-7xl font-display text-amber-500 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] mt-[-10px]">
          Parvathi
        </h1>
        <p className="font-chalk text-2xl md:text-3xl text-stone mt-2 drop-shadow-md tracking-wider">
          Kalga, 8,500 ft.
        </p>
      </div>

      {/* Scroll indicator overlay */}
      <div className="absolute bottom-6 z-40 w-full flex justify-center opacity-70 animate-bounce">
         <span className="text-stone/60 text-sm tracking-widest uppercase font-semibold">Scroll to Explore</span>
      </div>
    </motion.div>
  );
};

export default Hero;
