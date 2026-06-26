"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems = ["O Produto", "Campanhas", "Para Adegas", "Contato"];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastYRef = useRef(0);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    
    // Esconde a navbar ao rolar para baixo (para dar 100% de foco no produto)
    // E mostra novamente assim que rolar para cima. Ignora se o menu mobile estiver aberto.
    if (latest > 200 && latest > lastYRef.current && !isMobileMenuOpen) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    
    lastYRef.current = latest;
  });

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isHidden ? -100 : 0, opacity: isHidden ? 0 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-12 transition-all duration-700",
          isScrolled || isMobileMenuOpen ? "py-4" : "py-8"
        )}
      >
        {/* Background Global Translúcido (Apenas no scroll ou menu aberto) */}
        <div 
          className={cn(
            "absolute inset-0 transition-all duration-700 -z-10",
            (isScrolled || isMobileMenuOpen) ? "bg-black/40 backdrop-blur-md" : "bg-transparent"
          )} 
        />

        {/* Logo */}
        <div className="flex items-center z-50">
          <Image 
            src="/images/logo/logo.png" 
            alt="Fellas Distribuidora" 
            width={120} 
            height={40} 
            className="object-contain relative z-50"
            priority
          />
        </div>

        {/* Central Pill Navigation (Desktop) */}
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

        {/* CTA Button & Hamburger */}
        <div className="flex items-center gap-4 z-50">
          <Button asChild variant="premium" size="sm" className="hidden md:inline-flex uppercase tracking-widest text-[10px] font-bold rounded-full px-6">
            <a href="#para-adegas">Seja Revendedor</a>
          </Button>
          
          <button 
            className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[6px] relative z-50 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={cn("block w-8 h-[2px] bg-white transition-all duration-300", isMobileMenuOpen ? "translate-y-[8px] rotate-45" : "")}></span>
            <span className={cn("block w-8 h-[2px] bg-white transition-all duration-300", isMobileMenuOpen ? "-translate-y-[8px] -rotate-45" : "")}></span>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Fullscreen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm">
              {navItems.map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-outfit font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-colors text-center"
                >
                  {item}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1, duration: 0.4 }}
                className="w-full pt-10 border-t border-white/10 mt-4 flex justify-center"
              >
                <Button asChild variant="premium" size="lg" className="w-full rounded-full h-14 text-sm font-bold tracking-widest uppercase">
                  <a href="#para-adegas" onClick={() => setIsMobileMenuOpen(false)}>Seja Revendedor</a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
