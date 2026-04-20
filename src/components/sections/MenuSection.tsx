"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { staggerContainer, scaleUp, viewportConfig } from "@/lib/motion";
import SectionHeading from "../ui/SectionHeading";
import { cn } from "../ui/cn";
import type { MenuCategory } from "@/types/menu";

const menuData: MenuCategory[] = [
  {
    id: "antipasti",
    label: "Antipasti",
    items: [
      {
        name: "Bruschetta al Pomodoro",
        description: "Röstbrot, San-Marzano-Tomaten, Basilikum, Knoblauch",
        price: "7,50 €",
      },
      {
        name: "Burrata con Prosciutto",
        description: "Cremige Burrata, Parmaschinken, Rucola, Olivenöl",
        price: "13,90 €",
        badge: "Chef's Choice",
      },
      {
        name: "Carpaccio di Manzo",
        description: "Hauchdünnes Rindercarpaccio, Parmesan, Kapern, Zitrone",
        price: "14,50 €",
      },
      {
        name: "Zuppa di Pomodoro",
        description: "Klassische Tomatensuppe, frische Kräuter, Croutons",
        price: "8,90 €",
        badge: "Hausgemacht",
      },
    ],
  },
  {
    id: "pizza",
    label: "Pizza",
    items: [
      {
        name: "Margherita Classica",
        description: "San-Marzano-Tomaten, Fior di Latte, Basilikum",
        price: "12,90 €",
        badge: "Vegetarisch",
      },
      {
        name: "Diavola",
        description: "Pikante Salami, Büffelmozzarella, Chili, Tomaten",
        price: "15,90 €",
      },
      {
        name: "Quattro Stagioni",
        description: "Prosciutto, Pilze, Artischocken, Oliven, Tomaten",
        price: "16,50 €",
      },
      {
        name: "Tartufo e Funghi",
        description: "Trüffelcreme, Steinpilze, Parmesan, frischer Thymian",
        price: "18,90 €",
        badge: "Chef's Choice",
      },
      {
        name: "Prosciutto e Rucola",
        description: "Parmaschinken, Rucola, Parmesan, Tomaten",
        price: "16,90 €",
      },
      {
        name: "Ortolana",
        description: "Gegrilltes Gemüse, Mozzarella, Tomaten, Basilikum",
        price: "14,90 €",
        badge: "Vegetarisch",
      },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      {
        name: "Tagliatelle al Ragù",
        description: "Hausgemachte Tagliatelle, langsam geschmortes Rindfleisch",
        price: "17,50 €",
        badge: "Hausgemacht",
      },
      {
        name: "Spaghetti alle Vongole",
        description: "Venusmuscheln, Knoblauch, Weißwein, Petersilie",
        price: "19,90 €",
      },
      {
        name: "Gnocchi al Gorgonzola",
        description: "Hausgemachte Kartoffelgnocchi, cremige Gorgonzolasauce",
        price: "15,90 €",
        badge: "Hausgemacht",
      },
      {
        name: "Pappardelle con Funghi Porcini",
        description: "Breite Bandnudeln, Steinpilze, Trüffelöl, Parmesan",
        price: "18,50 €",
      },
    ],
  },
  {
    id: "dolci",
    label: "Dolci & Bevande",
    items: [
      {
        name: "Tiramisù della Casa",
        description: "Klassisches Tiramisù nach Großmutters Rezept",
        price: "7,90 €",
        badge: "Hausgemacht",
      },
      {
        name: "Panna Cotta al Caramello",
        description: "Zarte Panna Cotta, Karamellsauce, Meersalzflocken",
        price: "7,50 €",
      },
      {
        name: "Vino della Casa",
        description: "Hauswein aus der Toskana, Rosso oder Bianco, 0,25 l",
        price: "5,90 €",
      },
      {
        name: "Caffè Espresso",
        description: "Traditioneller Espresso aus nachhaltigem Anbau",
        price: "2,90 €",
      },
    ],
  },
];

const badgeColors = {
  Hausgemacht: "bg-olive/15 text-olive-dark border-olive/30",
  Vegetarisch: "bg-olive/20 text-olive-dark border-olive/40",
  "Chef's Choice": "bg-terracotta/10 text-terracotta-dark border-terracotta/30",
};

export default function MenuSection() {
  const [active, setActive] = useState("antipasti");
  const reduceMotion = useReducedMotion();

  const activeCategory = menuData.find((c) => c.id === active)!;

  return (
    <section
      id="speisekarte"
      className="scroll-mt-20 bg-cream-warm py-24 md:py-32"
    >
      {/* Terrakotta-Streifen oben */}
      <div className="h-1 bg-terracotta w-full mb-0" />

      <div className="max-w-[72rem] mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <SectionHeading
            eyebrow="La Nostra Cucina"
            title="Unsere Speisekarte"
            subtitle="Alle Zutaten täglich frisch — viele unserer Gerichte werden nach traditionellen Familienrezepten zubereitet."
            align="center"
          />
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="relative flex gap-1 bg-cream-muted rounded-sm p-1">
            {menuData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={cn(
                  "relative font-body font-medium text-sm px-5 py-2.5 rounded-sm transition-colors duration-200 z-10",
                  active === cat.id ? "text-cream-warm" : "text-brown-mid hover:text-brown"
                )}
              >
                {active === cat.id && (
                  <motion.span
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-terracotta rounded-sm"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {activeCategory.items.map((item) => (
              <motion.article
                key={item.name}
                variants={scaleUp}
                className="group bg-cream rounded-sm border-l-[3px] border-terracotta p-6 shadow-card hover:-translate-y-1 hover:shadow-warm-lg transition-all duration-250"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="font-display font-semibold text-brown leading-snug">
                    {item.name}
                  </h3>
                  <span className="font-body font-semibold text-terracotta shrink-0 text-sm">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-sm text-brown-mid leading-relaxed mb-3">
                  {item.description}
                </p>
                {item.badge && (
                  <span
                    className={cn(
                      "inline-block text-xs font-body font-medium px-2.5 py-1 rounded-full border",
                      badgeColors[item.badge]
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
