"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

const campaigns = [
  { id: 1, image: "/images/banner/hero-banner.webp", title: "Gin + Melancia" },
  { id: 2, image: "/images/banner/banner-vodka-+-combo.webp", title: "Vodka + Combo" },
  { id: 3, image: "/images/banner/banner-whisky-+-combo-maca-verde.webp", title: "Whisky + Maçã Verde" },
  { id: 4, image: "/images/banner/banner-whisky-+-combo-tigrinho-tropical.webp", title: "Whisky Tigrinho" },
];

export function Campaigns() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="campanhas" ref={containerRef} className="relative w-full bg-[#020202] py-40 overflow-hidden border-t border-white/5">
      <div className="container px-6 md:px-12 mx-auto mb-16">
        <h2 className="text-4xl md:text-6xl font-outfit font-black uppercase text-white mb-4">
          CAMPANHAS E DESTAQUES
        </h2>
        <p className="text-white/50 font-inter text-xl max-w-2xl">
          Estratégias agressivas de visibilidade para impulsionar as suas vendas.
        </p>
      </div>

      <div className="w-full overflow-hidden">
        <motion.div 
          style={{ x: x1 }}
          className="flex gap-8 px-6 md:px-12 w-max"
        >
          {campaigns.map((camp) => (
            <div 
              key={camp.id} 
              className="relative w-[300px] h-[400px] md:w-[600px] md:h-[400px] rounded-[30px] overflow-hidden group cursor-grab active:cursor-grabbing"
            >
              <Image 
                src={camp.image} 
                alt={camp.title} 
                fill 
                className="object-cover filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-8 left-8">
                <h3 className="text-white font-outfit font-bold text-2xl md:text-3xl uppercase">{camp.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
