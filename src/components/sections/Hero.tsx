"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-[100vh] min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#020202] noise">
      
      {/* Clean, Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-primary/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-black to-transparent z-10" />
      </div>

      <div className="container relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between h-full pt-24 px-6 md:px-12 lg:px-24">
        
        {/* Typography / Copy */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left w-full md:w-1/2 z-30"
        >
          <p className="text-white/40 font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-6">
            Lançamento Oficial
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-outfit font-black tracking-tighter text-white leading-[1]">
            DISTRIBUÍMOS <br />
            UM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">FENÔMENO.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/50 font-inter font-light max-w-md">
            O produto mais desejado do mercado, agora com distribuição premium para a sua adega.
          </p>
        </motion.div>

        {/* The Product as Protagonist */}
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex relative w-full md:w-1/2 h-[60vh] md:h-[80vh] items-center justify-center md:justify-end mt-12 md:mt-0"
        >
          <div className="relative w-full h-full max-w-[400px]">
            <Image 
              src="/images/drinks/drink-original.png"
              alt="Drinks Mansão Maromba Original"
              fill
              className="object-contain drop-shadow-[0_20px_50px_rgba(225,29,72,0.15)] z-20 hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            {/* Subtle backlight directly behind the can */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[500px] bg-white/5 blur-[80px] rounded-full z-10" />
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-30"
      >
        <div className="w-[1px] h-16 bg-white/20 overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
