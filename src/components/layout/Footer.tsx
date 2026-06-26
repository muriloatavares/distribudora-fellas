"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-black py-24 border-t border-white/10">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
          <div className="w-48">
            <Image 
              src="/images/logo/logo.png" 
              alt="Fellas Distribuidora" 
              width={180} 
              height={60} 
              className="object-contain filter grayscale opacity-80"
            />
          </div>
          <div className="flex flex-wrap gap-8 text-sm font-outfit font-bold tracking-widest uppercase text-white/50">
            <a href="https://www.instagram.com/mansaomarombazl/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/5511964847002" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
            <a href="#para-adegas" className="hover:text-white transition-colors">Seja Revendedor</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-10 border-t border-white/10 text-xs font-inter text-white/30 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} FELLAS DISTRIBUIDORA. TODOS OS DIREITOS RESERVADOS.</p>
          <p className="mt-4 md:mt-0">SÃO PAULO - BRASIL</p>
        </div>
      </div>
    </footer>
  );
}
