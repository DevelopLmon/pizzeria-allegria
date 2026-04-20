"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { scaleUp, viewportConfig } from "@/lib/motion";

export default function ContactSection() {
  return (
    <section id="kontakt" className="scroll-mt-20 bg-brown py-24 md:py-32">
      <div className="max-w-[72rem] mx-auto px-6 flex justify-center">
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="w-full max-w-sm"
        >
          <div className="rounded-2xl bg-terracotta-dark p-8 shadow-[0_8px_48px_rgba(44,24,16,0.6)]">
            <h2 className="font-display font-bold text-cream-warm text-3xl md:text-4xl mb-3">
              Jetzt reservieren
            </h2>
            <p className="font-body text-cream/70 text-sm leading-relaxed mb-8">
              Der einfachste Weg zu Ihrem Tisch? Rufen Sie uns direkt an. Wir beraten Sie gerne und finden den perfekten Platz für Ihren Anlass.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:042817171000"
                className="flex items-center justify-center gap-2.5 bg-[#C8933A] hover:bg-[#D4A04A] text-white font-body font-semibold text-sm py-3.5 px-6 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-md"
              >
                <Phone size={16} />
                Jetzt anrufen
              </a>

              <a
                href="mailto:info@pizzeria-allegria.de"
                className="flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/10 text-cream font-body font-semibold text-sm py-3.5 px-6 rounded-full border border-cream/30 transition-all duration-200 hover:scale-[1.02]"
              >
                <Mail size={16} />
                E-Mail schreiben
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
