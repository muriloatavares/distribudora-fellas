"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const faqData = [
  {
    question: "Como funciona a distribuição?",
    answer: "Trabalhamos com logística própria e parceiros homologados para garantir que seu pedido chegue intacto e dentro do prazo, independente do volume.",
  },
  {
    question: "Qual o pedido mínimo?",
    answer: "Atendemos desde pequenos comércios até grandes redes de atacado. O pedido mínimo é negociado diretamente com nosso time comercial.",
  },
  {
    question: "Vocês atendem todo o Brasil?",
    answer: "Nossa rede de distribuição cobre as principais capitais e regiões metropolitanas, com expansão constante. Consulte nossa equipe para sua localidade.",
  },
  {
    question: "Qual o prazo de validade dos drinks?",
    answer: "Os Drinks Mansão Maromba possuem excelente Shelf Life (tempo de prateleira), garantindo que você tenha tempo hábil para giro de estoque sem perdas.",
  },
];

export function FAQ() {
  return (
    <section className="relative w-full bg-background py-32">
      <div className="container px-6 md:px-12 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-outfit font-bold mb-4">DÚVIDAS FREQUENTES</h2>
          <p className="text-white/50 font-inter text-lg">Tudo o que você precisa saber sobre nossa operação.</p>
        </div>

        <Accordion.Root type="single" collapsible className="w-full space-y-4">
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Accordion.Item 
                value={`item-${i}`} 
                className="overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] data-[state=open]:bg-white/[0.05] transition-colors"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between p-6 text-left font-outfit text-lg font-medium text-white transition-all [&[data-state=open]>svg]:rotate-180">
                    {item.question}
                    <ChevronDown className="h-5 w-5 text-white/50 transition-transform duration-300" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm text-white/60 font-inter data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="p-6 pt-0 leading-relaxed">
                    {item.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
