import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const AnimatedHero = () => {
  // Generate random stars
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="relative w-full h-[85vh] md:h-screen bg-gradient-to-b from-[#050B14] to-[#0D1B2A] overflow-hidden flex items-center justify-center">
      
      {/* 1. Starlight Background & Shooting Stars */}
      <div className="absolute inset-0 z-0">
        {/* Static Twinkling Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.2, 1] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Shooting Stars */}
        {/* Star 1 */}
        <div className="absolute top-[10%] left-[-10%] md:left-[10%] rotate-[15deg]">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, 800], opacity: [0, 1, 0] }}
            transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 4, ease: "easeOut" }}
          >
            <div className="w-24 md:w-40 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent to-white/70" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white shadow-[0_0_20px_4px_rgba(255,255,255,1)]" />
          </motion.div>
        </div>

        {/* Star 2 */}
        <div className="absolute top-[25%] left-[30%] rotate-[10deg]">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, 600], opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 6, delay: 2, ease: "easeOut" }}
          >
            <div className="w-20 md:w-32 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent to-amber-100/70" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-amber-100 shadow-[0_0_15px_4px_rgba(255,240,200,1)]" />
          </motion.div>
        </div>

        {/* Star 3 */}
        <div className="absolute top-[15%] left-[60%] rotate-[20deg]">
          <motion.div
            className="flex items-center"
            animate={{ x: [0, 700], opacity: [0, 1, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 5, delay: 1, ease: "easeOut" }}
          >
            <div className="w-32 md:w-48 h-[1px] md:h-[2px] bg-gradient-to-r from-transparent to-white/80" />
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white shadow-[0_0_20px_4px_rgba(255,255,255,1)]" />
          </motion.div>
        </div>
      </div>

      {/* 2. Full Moon with Glowing Halo */}
      <motion.div 
        className="absolute top-[10%] left-[10%] md:top-[12%] md:left-[15%] z-0"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {/* Pulsating Halo Layer */}
        <motion.div 
          className="absolute inset-0 bg-[#FFE5B4] rounded-full blur-[40px] opacity-40 md:blur-[60px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Solid Moon Body */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 bg-[#FFE5B4] rounded-full shadow-[0_0_30px_rgba(255,229,180,0.6)]">
          {/* Subtle Craters */}
          <div className="absolute top-[20%] left-[30%] w-3 h-3 rounded-full bg-orange-900/10" />
          <div className="absolute top-[40%] left-[60%] w-4 h-4 rounded-full bg-orange-900/10" />
          <div className="absolute top-[65%] left-[25%] w-3.5 h-3.5 rounded-full bg-orange-900/10" />
        </div>
      </motion.div>

      {/* 3. Distant Mountains & Snow Peaks (SVG) */}
      <div className="absolute bottom-0 w-full h-1/2 z-10 opacity-80">
        <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full preserve-3d" preserveAspectRatio="none">
           {/* Snow Peaks */}
           <path fill="#1A2A3A" d="M100,200 L250,50 L400,200 Z" opacity="0.6"/>
           <path fill="#FFFFFF" d="M100,200 L175,125 L210,140 L250,50 L280,100 L320,80 L400,200 Z" opacity="0.2"/>
           
           <path fill="#1A2A3A" d="M800,250 L1000,80 L1200,250 Z" opacity="0.6"/>
           <path fill="#FFFFFF" d="M800,250 L900,165 L940,180 L1000,80 L1040,130 L1100,100 L1200,250 Z" opacity="0.2"/>

           {/* Rolling Dark Hills */}
           <path fill="#08101A" d="M0,192L60,202.7C120,213,240,235,360,218.7C480,203,600,149,720,138.7C840,128,960,160,1080,186.7C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
           <path fill="#0A1420" d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" opacity="0.8"></path>
        </svg>
      </div>

      {/* 4. Cafe Silhouette & Villages (Foreground) */}
      <div className="absolute bottom-0 w-full z-20 h-64 flex justify-center items-end pb-8 md:pb-12">
        {/* The Base Hill - Made wider to ground the cottages */}
        <div className="w-[150%] h-40 md:h-56 bg-[#04080F] rounded-t-[100%] absolute -bottom-20 md:-bottom-24" />
        
        {/* Small Cottage 1 (Left) */}
        <div className="relative mb-16 md:mb-20 mr-4 md:mr-10 flex flex-col items-center opacity-80 scale-75 md:scale-90">
           <div className="w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[50px] border-b-[#02050A]" />
           <div className="w-16 h-12 bg-[#02050A] relative flex justify-center items-end pb-1">
              <div className="w-4 h-4 bg-amber-600/50 rounded-sm absolute top-3 left-2" />
           </div>
        </div>

        {/* Main Cafe Silhouette */}
        <div className="relative mb-24 md:mb-32 flex flex-col items-center z-10">
           {/* Roof */}
           <div className="w-0 h-0 border-l-[60px] md:border-l-[80px] border-l-transparent border-r-[60px] md:border-r-[80px] border-r-transparent border-b-[60px] md:border-b-[80px] border-b-[#02050A]" />
           {/* Building Body */}
           <div className="w-24 md:w-32 h-20 md:h-28 bg-[#02050A] relative flex justify-center items-end pb-2">
              {/* Glowing Window */}
              <motion.div 
                className="w-8 h-8 md:w-10 md:h-10 bg-amber-500 rounded-sm shadow-[0_0_20px_rgba(245,158,11,0.6)] absolute top-4 left-4"
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div 
                className="w-4 h-8 md:w-6 md:h-12 bg-amber-600 rounded-t-sm shadow-[0_0_15px_rgba(217,119,6,0.5)] absolute bottom-0 right-4"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
           </div>
           
           {/* Chimney Smoke */}
           <motion.div 
             className="absolute -top-12 right-2 md:-top-16 md:right-4 w-4 h-4 bg-gray-500 rounded-full blur-md opacity-50"
             animate={{ y: [-10, -50], opacity: [0.6, 0], scale: [1, 3] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
           />
        </div>

        {/* Small Cottage 2 (Right) */}
        <div className="relative mb-12 md:mb-16 ml-8 md:ml-16 flex flex-col items-center opacity-70 scale-50 md:scale-75">
           <div className="w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[40px] border-b-[#02050A]" />
           <div className="w-12 h-10 bg-[#02050A] relative flex justify-center items-end pb-1" />
        </div>

        {/* 5. The Animated Campfire */}
        <div className="absolute bottom-12 md:bottom-20 ml-48 md:ml-64 w-16 h-16 flex items-end justify-center z-30">
          {/* Logs */}
          <div className="absolute bottom-0 flex z-10">
            <div className="w-8 h-2 bg-amber-950 rounded-full rotate-12 relative left-2" />
            <div className="w-8 h-2 bg-amber-900 rounded-full -rotate-12 relative right-2" />
          </div>
          {/* Flames */}
          <div className="absolute bottom-1 w-full h-full flex justify-center items-end">
            <motion.div
              className="w-6 h-12 bg-orange-600 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] mix-blend-screen shadow-[0_0_30px_rgba(234,88,12,0.8)] absolute"
              animate={{ height: [40, 55, 45], scaleX: [1, 1.1, 0.9], x: [-1, 1, -1] }}
              style={{ originY: 1 }}
              transition={{ duration: 0.15, repeat: Infinity, repeatType: 'mirror' }}
            />
            <motion.div
              className="w-4 h-8 bg-yellow-500 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] mix-blend-screen absolute mb-1 ml-2"
              animate={{ height: [25, 35, 20], scaleX: [0.8, 1, 0.9], x: [1, -1, 1] }}
              style={{ originY: 1 }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror' }}
            />
            <motion.div
              className="w-3 h-6 bg-red-500 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] mix-blend-screen absolute mb-1 -ml-3"
              animate={{ height: [20, 30, 15], scaleX: [0.9, 1.2, 0.8], x: [-2, 0, -1] }}
              style={{ originY: 1 }}
              transition={{ duration: 0.12, repeat: Infinity, repeatType: 'mirror' }}
            />
          </div>
          {/* Fire Glow Aura */}
          <motion.div 
            className="absolute bottom-0 w-32 h-32 bg-orange-500 rounded-full blur-[40px] opacity-30 z-0"
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Hero Typography Context */}
      <div className="relative z-40 text-center flex flex-col items-center mt-[-15vh]">
        <motion.h1 
          className="text-6xl md:text-8xl font-display text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Baked in
        </motion.h1>
        <motion.h1 
          className="text-6xl md:text-8xl font-display text-transparent bg-clip-text bg-gradient-to-b from-amber-400 to-orange-600 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mt-[-10px] pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Parvati
        </motion.h1>
        <motion.p 
          className="font-chalk text-2xl md:text-4xl text-stone mt-2 drop-shadow-[0_2px_5px_rgba(0,0,0,0.8)] tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          A sanctuary at 8,500 ft.
        </motion.p>
      </div>

    </div>
  );
};

export default AnimatedHero;
