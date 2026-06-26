"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = ["O Produto", "Campanhas", "Para Adegas", "Contato"];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    // Esconde a navbar ao rolar para baixo (para dar 100% de foco no produto)
    // E mostra novamente assim que rolar para cima.
    if (latest > 200 && latest > lastYRef.current) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    lastYRef.current = latest;
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-700",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      {/* Background Global Translúcido (Apenas no scroll) */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-700 -z-10",
          isScrolled ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
        )} 
      />

      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src="/images/logo/logo.png" 
          alt="Fellas Distribuidora" 
          width={120} 
          height={40} 
          className="object-contain"
          priority
        />
      </div>

      {/* Central Pill Navigation (Estilo Ilha Flutuante Apple/Vercel) */}
      <nav 
        className={cn(
          "hidden md:flex items-center gap-1 p-1.5 rounded-full transition-all duration-700",
          isScrolled ? "bg-white/5 border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.03)]" : "bg-transparent"
        )}
      >
        {navItems.map((item, idx) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, '-')}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="relative px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
          >
            {/* Efeito Magnético de Hover (Framer Motion LayoutId) */}
            {hoveredIndex === idx && (
              <motion.div
                layoutId="nav-hover"
                className="absolute inset-0 bg-white/10 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{item}</span>
          </a>
        ))}
      </nav>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <Button asChild variant="premium" size="sm" className="hidden md:inline-flex uppercase tracking-widest text-[10px] font-bold rounded-full px-6">
          <a href="#para-adegas">Seja Revendedor</a>
        </Button>
        <button className="md:hidden flex flex-col gap-[6px] p-2">
          <span className="block w-8 h-[1px] bg-white transition-all"></span>
          <span className="block w-8 h-[1px] bg-white transition-all"></span>
        </button>
      </div>
    </motion.header>
  );
}
