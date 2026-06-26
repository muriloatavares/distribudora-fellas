"use client";

import { motion } from "framer-motion";

export function Features() {
  return (
    <section className="relative w-full bg-primary py-24 overflow-hidden border-y border-white/10">
      
      {/* Marquee Effect */}
      <div className="flex w-[200%] md:w-max -ml-10">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap items-center"
        >
          {Array(6).fill("").map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-6xl md:text-8xl font-outfit font-black text-black uppercase mx-8">
                REPOSIÇÃO IMEDIATA EM SP
              </span>
              <span className="text-6xl md:text-8xl text-black/50">✦</span>
              <span className="text-6xl md:text-8xl font-outfit font-black text-black uppercase mx-8">
                ESTOQUE GARANTIDO
              </span>
              <span className="text-6xl md:text-8xl text-black/50">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
