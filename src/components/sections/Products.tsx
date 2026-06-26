"use client";

import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const products = [
  {
    id: "original",
    name: "WHISKY + COMBO",
    type: "Classic",
    image: "/images/drinks/drink-original.png",
    color: "#140d02",
    glow: "#4d320a",
    abv: "8%",
    desc: "Descubra a experiência única do Whisky + Combo Mansão Maromba, uma bebida alcoólica já preparada que combina o sabor clássico do whisky com um toque sabor energético refrescante.",
  },
  {
    id: "gin-melancia",
    name: "GIN + MELANCIA",
    type: "Premium Gin",
    image: "/images/drinks/drink-gin-melancia.png",
    color: "#1a050d",
    glow: "#4a1024",
    abv: "8%",
    desc: "Sinta o frescor surpreendente do Gin + Combo Melancia Mansão Maromba — uma bebida pronta que leva a clássica leveza do gin combinada com o sabor doce e suculento da melancia.",
  },
  {
    id: "whisky-maca-verde",
    name: "MAÇÃ VERDE",
    type: "Surpreendente",
    image: "/images/drinks/drink-maca-verde.png",
    color: "#051a0a",
    glow: "#104a1b",
    abv: "8%",
    desc: "O Whisky + Combo Maçã Verde Mansão Maromba traz uma combinação surpreendente: o caráter intenso do whisky encontra o frescor ácido da maçã verde, resultando em uma bebida ousada.",
  },
  {
    id: "whisky-tigrinho",
    name: "TIGRINHO TROPICAL",
    type: "Tropical",
    image: "/images/drinks/drink-tigrinho-tropical.png",
    color: "#1a0a00",
    glow: "#4d1e00",
    abv: "8%",
    desc: "Viva uma explosão de sabores tropicais com o Whisky + Combo Manga com Maracujá. O caráter marcante do whisky com a suavidade da manga e o toque levemente ácido do maracujá.",
  },
  {
    id: "vodka-combo",
    name: "VODKA + COMBO",
    type: "Equilíbrio",
    image: "/images/drinks/drink-vodka-combo.png",
    color: "#020b14",
    glow: "#0a294d",
    abv: "8%",
    desc: "A Vodka + Combo Mansão Maromba é a escolha perfeita. Imagine a suavidade da vodka, equilibrada pelo toque revigorante sabor energético, já pronta para ser apreciada.",
  },
  {
    id: "gin-tropical",
    name: "GIN TROPICAL",
    type: "Premium Gin",
    image: "/images/gin/gin-gin-tropical.png",
    color: "#141000",
    glow: "#4d3d00",
    abv: "8%",
    desc: "Refresque seus sentidos com o Gin + Combo Tropical, que combina a leveza e sofisticação do gin com um mix irresistível de frutas tropicais. Uma explosão de frescor e sabor.",
  },
  {
    id: "double-darkness",
    name: "DOUBLE DARKNESS",
    type: "Intenso",
    image: "/images/drinks/drink-double-darkness.webp",
    color: "#000000",
    glow: "#1a1a1a",
    abv: "10%",
    desc: "Sinta a potência do novo Whisky + Combo Double Darkness Mansão Maromba. Com um sabor mais encorpado e um teor alcoólico mais elevado. Mais força, mais intensidade.",
  }
];

function ProductScene({ 
  product, 
  index, 
  total, 
  progress 
}: { 
  product: any, 
  index: number, 
  total: number, 
  progress: MotionValue<number> 
}) {
  // Ajuste matemático para evitar cruzamento excessivo (overlap) e efeito fantasma
  const center = index / (total - 1);
  const start = (index - 0.45) / (total - 1);
  const end = (index + 0.45) / (total - 1);

  const opacity = useTransform(progress, [start, center, end], [0, 1, 0]);
  const scale = useTransform(progress, [start, center, end], [0.9, 1, 1.05]);
  const y = useTransform(progress, [start, center, end], [80, 0, -80]);

  return (
    <motion.div 
      style={{ opacity, pointerEvents: opacity.get() > 0.5 ? "auto" : "none" }}
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-center container mx-auto px-6 h-full"
    >
      {/* Bottle Section */}
      <motion.div 
        style={{ scale, y }}
        className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh] flex items-center justify-center z-20"
      >
        <Image 
          src={product.image}
          alt={product.name}
          fill
          className="object-contain drop-shadow-[0_0_60px_rgba(0,0,0,0.8)]"
          priority={index === 0}
        />
      </motion.div>

      {/* Text Section (Cinematic Typography) */}
      <motion.div 
        style={{ y: useTransform(progress, [start, center, end], [50, 0, -50]) }}
        className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 z-30"
      >
        <span style={{ color: product.glow }} className="font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 brightness-150">
          {product.type}
        </span>
        <h3 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-black uppercase tracking-tighter text-white mb-6 leading-[0.9]">
          {product.name}
        </h3>
        
        <div style={{ backgroundColor: product.glow }} className="h-[2px] w-12 md:w-24 mb-6 opacity-70" />
        
        <p className="text-white/70 font-inter font-light text-base md:text-lg leading-relaxed mb-8 max-w-lg">
          {product.desc}
        </p>
        
        <div className="flex gap-8 text-white/50 font-inter text-sm md:text-base uppercase tracking-wider">
          <div>
            <span className="block text-white/30 text-xs mb-1">Volume</span>
            <span className="font-bold text-white">1L</span>
          </div>
          <div>
            <span className="block text-white/30 text-xs mb-1">ABV</span>
            <span className="font-bold text-white">{product.abv}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const points = products.map((_, i) => i / (products.length - 1));
  const bgColors = products.map(p => p.color);
  const glowColors = products.map(p => p.glow);

  const ambientColor = useTransform(scrollYProgress, points, bgColors);
  const glowColor = useTransform(scrollYProgress, points, glowColors);

  // Dynamic Radial Gradient combining Glow and Depth
  const background = useMotionTemplate`radial-gradient(circle at center, ${glowColor} 0%, ${ambientColor} 60%, #000 100%)`;

  // Glass Floor reflection
  const reflectionOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3]);

  return (
    <section 
      id="o-produto"
      ref={containerRef} 
      className="relative w-full border-t border-white/5 noise"
      style={{ height: "700vh" }} // 100vh for each of the 7 products
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
        
        {/* Animated Background */}
        <motion.div style={{ background }} className="absolute inset-0 z-0 opacity-80" />
        
        {/* Progress Bar (Top) */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
          <motion.div 
            style={{ 
              width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
              backgroundColor: glowColor 
            }} 
            className="h-full"
          />
        </div>

        {/* Global Intro Text (Fades out as first product appears) */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]), pointerEvents: 'none' }}
          className="absolute top-24 left-1/2 -translate-x-1/2 z-40 text-center w-full"
        >
          <h2 className="text-sm md:text-lg font-outfit font-black tracking-[0.4em] uppercase text-white/50">
            NÃO É APENAS O SABOR. É A EXPERIÊNCIA.
          </h2>
        </motion.div>

        {/* Render the 7 cinematic scenes on top of each other */}
        {products.map((product, index) => (
          <ProductScene 
            key={product.id} 
            product={product} 
            index={index} 
            total={products.length} 
            progress={scrollYProgress} 
          />
        ))}

        {/* Glass Floor (Reflective surface at the bottom) */}
        <motion.div 
          style={{ opacity: reflectionOpacity }}
          className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-md z-30"
        />
        <motion.div 
          style={{ backgroundColor: glowColor, opacity: 0.2 }}
          className="absolute bottom-0 left-0 w-full h-1/4 blur-3xl z-0 mix-blend-screen"
        />
      </div>
    </section>
  );
}
