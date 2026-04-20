"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LiquidButton } from "../liquid-glass-button";
import { ease } from "@/lib/motion";

const words = ["Buon", "Gusto,", "ogni", "giorno."];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.0 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1400&q=85"
          alt="Neapolitanische Pizza aus dem Holzofen"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(44,24,16,0.92) 0%, rgba(44,24,16,0.65) 45%, rgba(44,24,16,0.25) 70%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[72rem] mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-[600px]">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
          >
            <span className="inline-flex items-center gap-2 font-body text-sm font-semibold tracking-[0.18em] uppercase text-cream/70 mb-6">
              <span className="w-8 h-px bg-terracotta" />
              Ristorante dal 1987
            </span>
          </motion.div>

          {/* Headline — word by word */}
          <h1
            className="font-display font-bold text-cream-warm leading-tight mb-6"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={word + i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1, ease }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subline */}
          <motion.p
            className="font-body text-lg leading-relaxed text-cream/80 mb-10 max-w-[480px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease }}
          >
            Hausgemachte Pasta, neapolitanische Pizzen aus dem Holzofen — echte
            italienische Küche mitten in der Stadt.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease }}
          >
            <LiquidButton
              size="xl"
              className="font-body font-semibold text-cream-warm tracking-wide"
              onClick={() => document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })}
            >
              Tisch reservieren
            </LiquidButton>
            <LiquidButton
              size="xl"
              className="font-body font-semibold text-cream/80 tracking-wide"
              onClick={() => document.getElementById("speisekarte")?.scrollIntoView({ behavior: "smooth" })}
            >
              Speisekarte entdecken
            </LiquidButton>
          </motion.div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        className="absolute top-32 right-8 md:top-40 md:right-16 z-10"
        initial={{ opacity: 0, rotate: -15, scale: 0 }}
        animate={{ opacity: 1, rotate: -6, scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 1.1 }}
      >
        <div className="bg-terracotta text-cream-warm font-body font-semibold text-sm px-4 py-3 rounded-full flex items-center gap-2 shadow-warm-lg">
          <span className="w-2 h-2 rounded-full bg-olive-light animate-pulse" />
          Jetzt geöffnet
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
      >
        <span className="font-body text-xs tracking-widest uppercase">Scrollen</span>
        <motion.div
          animate={reduceMotion ? {} : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
