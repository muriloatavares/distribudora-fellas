"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -50]);

  return (
    <section ref={containerRef} className="relative w-full bg-[#020202] py-40 overflow-hidden hidden md:block">
      
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
         <span className="text-[30vw] font-outfit font-black whitespace-nowrap">FELLAS</span>
      </div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        
        <div className="flex gap-8 justify-center items-center">
          
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 w-1/2">
            <div className="relative w-full h-[500px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image 
                 src="/images/banner/banner-whisky-+-combo-tigrinho-tropical.webp"
                 alt="Tigrinho Tropical"
                 fill
                 className="object-cover"
               />
            </div>
            <div className="relative w-full h-[700px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image 
                 src="/images/gin/gin-gin-limao-siciliano.png"
                 alt="Gin Limão"
                 fill
                 className="object-cover bg-neutral-900"
               />
            </div>
          </motion.div>
          
          <motion.div style={{ y: y2 }} className="flex flex-col gap-8 w-1/2 mt-32">
            <div className="relative w-full h-[800px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <Image 
                 src="/images/drinks/drink-double-darkness.png"
                 alt="Double Darkness"
                 fill
                 className="object-cover bg-neutral-900"
               />
            </div>
            <div className="p-12 bg-white flex flex-col justify-center h-[400px]">
               <h3 className="text-4xl md:text-6xl font-outfit font-black text-black uppercase leading-none mb-6">
                 O COMBO <br/> PERFEITO
               </h3>
               <p className="text-black/60 font-inter font-medium text-lg">
                 Mais giro. Mais lucro. Mais status para o seu negócio.
               </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
