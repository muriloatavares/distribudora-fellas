# Fellas Distribuidora 🏴‍☠️ - Premium Landing Page

> Uma experiência digital imersiva, desenvolvida para o lançamento oficial dos produtos Mansão Maromba.

Este projeto é uma Landing Page moderna, projetada com estética cinematográfica (Dark Mode Premium), transições de hardware acelerado, "Sticky Scroll" e UX focada em conversão para captação de lojistas (Adegas/Revendedores) da **Fellas Distribuidora**.

## 🚀 Tecnologias Utilizadas

A aplicação foi desenvolvida seguindo o estado-da-arte do ecossistema React:

- **[Next.js 15](https://nextjs.org/)** (App Router & React Server Components)
- **[React 19](https://react.dev/)**
- **[Tailwind CSS v4](https://tailwindcss.com/)** (Design System dinâmico)
- **[Framer Motion](https://www.framer.com/motion/)** (Para engine física e animações complexas)
- **[Lenis](https://github.com/darkroomengineering/lenis)** (Smooth Scrolling de alta performance)
- **[shadcn/ui](https://ui.shadcn.com/) & Radix UI** (Para componentes de acessibilidade)
- **[Lucide Icons](https://lucide.dev/)**

## ✨ Funcionalidades em Destaque

* **Experiência "Sticky Scroll" (Nível Awwwards):** Ao rolar a página sobre os produtos, a navegação "trava" enquanto a interface e o fundo transicionam organicamente (mudança contínua de paletas de cor, glows, blur e refrações no "chão de vidro").
* **Smart Navbar:** Uma barra de navegação responsiva em formato de pílula centralizada que usa propriedades "Magnéticas" nos links e auto-hide de scroll inteligente.
* **Carrossel Cinematográfico:** Exposição de banners institucionais com transições parallax via `framer-motion`.
* **Zero Backend:** Arquitetura 100% Client-Side de altíssima velocidade para carregamento instantâneo.
* **Copywriting Oficial:** Toda a estruturação de textos e porcentagem de teor alcoólico já inseridos baseados nos ativos oficiais "Mansão Maromba".

## 📦 Como rodar o projeto localmente

1. Faça o clone do repositório:
```bash
git clone https://github.com/muriloatavares/distribudora-fellas.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra o seu navegador em [http://localhost:3000](http://localhost:3000).

## 🗂 Estrutura de Diretórios

O projeto utiliza a flag `@/` apontando para a pasta `src/`:

- `src/components/sections/` → Todas as divisões maiores da tela (Ex: `Hero.tsx`, `Products.tsx`).
- `src/components/layout/` → `Navbar.tsx` e `Footer.tsx`.
- `src/components/ui/` → Botões e inputs (shadcn base).
- `public/images/` → Assets otimizados da marca (Logos, Garrafas, Banners).

---
*Landing page desenvolvida sob medida para impacto visual extremo no mercado de distribuição de bebidas.*
