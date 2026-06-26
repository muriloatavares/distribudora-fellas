import { SmoothScrolling } from "@/components/providers/SmoothScrolling";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Phenomenon } from "@/components/sections/Phenomenon";
import { Products } from "@/components/sections/Products";
import { Campaigns } from "@/components/sections/Campaigns";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { Resellers } from "@/components/sections/Resellers";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <SmoothScrolling>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Products />
        <Campaigns />
        <Phenomenon />
        <Resellers />
        <Features />
        <Gallery />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrolling>
  );
}
