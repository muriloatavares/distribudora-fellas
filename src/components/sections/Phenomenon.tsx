"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Phenomenon() {
  return (
    <section id="a-experiencia" className="relative w-full bg-black py-40 overflow-hidden border-t border-white/5">
      <div className="container px-6 md:px-12 mx-auto flex flex-col items-center justify-center">
        
        {/* Massive Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center w-full max-w-5xl mb-32"
        >
          <h2 className="text-4xl md:text-7xl lg:text-9xl font-outfit font-black uppercase tracking-tighter text-white leading-[0.9]">
            MAIS QUE <br />
            UMA BEBIDA.
          </h2>
          <div className="mt-8 flex justify-center">
            <p className="text-xl md:text-3xl text-white/50 font-inter font-light tracking-wide max-w-3xl">
              Um movimento. Uma identidade. A Fellas conecta o seu ponto de venda ao produto mais desejado do mercado.
            </p>
          </div>
        </motion.div>

        {/* Asymmetrical Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 w-full max-w-[1400px]">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-8 relative h-[400px] md:h-[600px] bg-neutral-900 rounded-none overflow-hidden"
          >
             <Image 
                src="/images/banner/banner-vodka-+-combo.webp"
                alt="Vodka Combo Maromba"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute inset-0 bg-black/20" />
             <div className="absolute bottom-8 left-8">
               <h3 className="text-3xl md:text-5xl font-outfit font-bold text-white uppercase">VODKA + COMBO</h3>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-4 relative h-[400px] md:h-[600px] bg-primary flex flex-col justify-end p-8"
          >
             <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]" />
             <h3 className="text-4xl md:text-5xl font-outfit font-black text-white uppercase relative z-10 leading-none">
               ESTOURO <br/> DE VENDAS
             </h3>
             <p className="mt-4 text-white/80 font-inter relative z-10 font-medium">
               A demanda cresce a cada dia. Onde tem Mansão Maromba, tem giro rápido.
             </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
