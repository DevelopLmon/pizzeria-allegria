"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { LiquidButton } from "../liquid-glass-button";
import { checkIsOpen } from "@/lib/opening-hours";
import { useState, useEffect } from "react";

// 🍏 Apple-like easing (crucial)
const smooth = [0.16, 1, 0.3, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: smooth },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.2, ease: smooth },
  },
};

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    setIsOpen(checkIsOpen());
    const interval = setInterval(() => setIsOpen(checkIsOpen()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: smooth }}
      >
        <Image
          src="/pizza-hero.png"
          alt="Italienische Pizza aus dem Holzofen"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Soft overlay (slightly more cinematic) */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[72rem] mx-auto px-6 w-full pt-24 pb-16">
        <div className="max-w-[600px]">

          {/* Eyebrow */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <span className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase text-cream/60 mb-6">
              <span className="w-10 h-px bg-terracotta/80" />
              Ristorante dal 1987
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-cream leading-tight mb-6"
          >
            Authentische Pizza
            <br />
            <span className="text-terracotta italic">
              wie in Neapel
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.18 }}
            className="text-cream/75 text-lg md:text-xl mb-10 font-body max-w-[480px]"
          >
            Holzofen • Frische Zutaten • Italienisches Lebensgefühl direkt bei dir.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-4"
          >
            <LiquidButton
              size="xl"
              className="font-body font-semibold text-cream-warm tracking-wide"
              onClick={() =>
                document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Tisch reservieren
            </LiquidButton>

            <a
              href="#speisekarte"
              className="px-6 py-3 border border-cream/30 text-cream rounded-full hover:bg-white/10 transition-colors duration-500"
            >
              Speisekarte ansehen
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4 }}
            className="mt-10 text-sm text-cream/55 flex flex-col sm:flex-row gap-4"
          >
            <span>⭐ 4.5 / 5 Google Bewertungen</span>
            <span>🍕 Über 1000 zufriedene Gäste</span>
            <span>🇮🇹 Authentisch seit Jahren</span>
          </motion.div>
        </div>
      </div>

      {/* Status badge (floating glass feel) */}
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: smooth }}
        className="absolute top-32 right-8 md:top-40 md:right-16 z-10"
      >
        <div
          className={`backdrop-blur-md font-body font-medium text-sm px-4 py-3 rounded-full flex items-center gap-2 shadow-lg transition-colors duration-700 ${
            isOpen
              ? "bg-terracotta/90 text-cream"
              : "bg-black/30 text-cream/70"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isOpen ? "bg-green-300 animate-pulse" : "bg-white/30"
            }`}
          />
          {isOpen === null ? " " : isOpen ? "Jetzt geöffnet" : "Derzeit geschlossen"}
        </div>
      </motion.div>

      {/* Scroll indicator (no bounce, only float) */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs tracking-widest uppercase font-body">
          Scrollen
        </span>

        <motion.div
          animate={
            reduceMotion
              ? {}
              : { y: [0, 6, 0], opacity: [0.4, 0.8, 0.4] }
          }
          transition={{
            repeat: Infinity,
            duration: 2.8,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}