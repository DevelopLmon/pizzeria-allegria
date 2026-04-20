"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "../ui/cn";
import { staggerContainer, fadeUp } from "@/lib/motion";

const navLinks = [
  { label: "Speisekarte", href: "#speisekarte" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Reservierung", href: "#kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    setScrolled(val > 80);
  });

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-cream-warm/95 backdrop-blur-sm shadow-card"
            : "bg-transparent"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[72rem] mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={cn(
              "font-display font-bold italic text-2xl transition-colors duration-300",
              scrolled ? "text-brown" : "text-cream-warm"
            )}
          >
            Allegria
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "font-body text-sm font-medium tracking-wide transition-colors duration-300 hover:text-terracotta",
                  scrolled ? "text-brown-mid" : "text-cream/90"
                )}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className={cn(
                "font-body text-sm font-medium px-5 py-2.5 rounded-sm border transition-all duration-300 hover:scale-[1.02]",
                scrolled
                  ? "bg-terracotta text-cream-warm border-terracotta hover:bg-terracotta-dark"
                  : "bg-cream-warm/15 text-cream-warm border-cream-warm/40 hover:bg-cream-warm/25"
              )}
            >
              Tisch reservieren
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden p-2 transition-colors",
              scrolled ? "text-brown" : "text-cream-warm"
            )}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-cream-warm shadow-warm-lg md:hidden"
          >
            <motion.nav
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col px-6 py-6 gap-1"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={fadeUp}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-brown font-medium py-3 border-b border-cream-muted hover:text-terracotta transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontakt"
                variants={fadeUp}
                onClick={() => setMobileOpen(false)}
                className="mt-4 bg-terracotta text-cream-warm font-body font-medium text-center py-3 rounded-sm hover:bg-terracotta-dark transition-colors"
              >
                Tisch reservieren
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
