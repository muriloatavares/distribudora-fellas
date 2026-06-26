"use client";

import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-black py-32">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-full bg-primary/5 blur-[150px]"></div>
      </div>
      
      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-outfit font-black tracking-tighter uppercase text-white mb-6">
            NÃO É APENAS
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-outfit font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 mb-12">
            UM DRINK.
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl font-inter font-light tracking-wide text-white/50 max-w-3xl"
        >
          É UMA <strong className="text-white font-medium">EXPERIÊNCIA.</strong>
        </motion.p>
      </div>
    </section>
  );
}
