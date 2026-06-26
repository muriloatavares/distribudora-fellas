"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre" className="relative w-full bg-background py-32 overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-outfit font-bold tracking-tight mb-8">
              A DISTRIBUIÇÃO DA <br/>
              <span className="text-white/50">NOVA GERAÇÃO.</span>
            </h2>
            <div className="w-20 h-[2px] bg-primary mb-8"></div>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-6 font-inter">
              A Fellas não é apenas mais uma distribuidora no mercado. Somos curadores de experiências. Nosso objetivo é conectar o que há de mais inovador em bebidas com quem busca exclusividade.
            </p>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed font-inter">
              Com uma logística impecável e um portfólio selecionado a dedo, somos o principal canal oficial dos <strong className="text-white font-medium">Drinks Mansão Maromba</strong>, entregando muito mais que um produto: entregamos um lifestyle.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] w-full rounded-2xl overflow-hidden glass-card"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 to-black"></div>
            
            {/* Minimalist graphic element representing distribution/connection */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 border border-white/5 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="absolute top-0 w-3 h-3 bg-primary rounded-full blur-[2px] primary-glow"></div>
                <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                   <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/5 rounded-full backdrop-blur-md flex items-center justify-center">
                        <span className="font-bold text-white text-xl">F.</span>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
