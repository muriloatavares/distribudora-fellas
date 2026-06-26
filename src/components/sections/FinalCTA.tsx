"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section id="contato" className="relative w-full h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      
      {/* Intense Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/images/banner/banner-whisky-+-combo-tigrinho.webp"
          alt="Whisky Combo"
          fill
          className="object-cover opacity-30 filter grayscale mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/20 to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-outfit font-black tracking-tighter uppercase text-white mb-10 leading-[0.9]">
            O PRÓXIMO <br />
            <span className="text-primary">SUCESSO</span> DA <br/> SUA ADEGA.
          </h2>
          
          <Button asChild variant="premium" size="lg" className="w-full sm:w-auto h-20 px-16 text-xl rounded-full hover:scale-105 transition-transform duration-300">
            <a href="https://wa.me/5511964847002?text=Olá!%20Gostaria%20de%20revender%20os%20produtos%20da%20Mansão%20Maromba%20na%20minha%20adega." target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
