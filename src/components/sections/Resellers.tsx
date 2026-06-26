"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Resellers() {
  return (
    <section id="para-adegas" className="relative w-full bg-[#020202] py-40 border-t border-white/5 overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
         <Image 
            src="/images/banner/hero-banner.webp"
            alt="Background"
            fill
            className="object-cover filter blur-3xl saturate-200"
         />
      </div>

      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="flex flex-col items-start justify-center">
          
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl lg:text-8xl font-outfit font-black uppercase text-white mb-8 max-w-5xl leading-[0.9]"
          >
            ADEGAS VENDEM PRODUTOS. <br/>
            <span className="text-primary">AS MELHORES VENDEM EXPERIÊNCIAS.</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full h-[1px] bg-white/20 mb-12"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-10"
          >
            <p className="text-xl md:text-2xl text-white/60 font-inter font-light max-w-2xl">
              Seja o ponto de encontro de quem busca a Mansão Maromba. Ofereça exclusividade, garanta giro de estoque e torne seu negócio a referência da sua região.
            </p>
            
            <Button asChild variant="premium" size="lg" className="h-16 px-10 rounded-full uppercase font-bold tracking-widest text-sm bg-white text-black hover:bg-neutral-200 transition-colors">
              <a href="#contato">Quero Revender</a>
            </Button>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
