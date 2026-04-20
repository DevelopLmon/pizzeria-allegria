"use client";

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { slideLeft, slideRight, viewportConfig } from "@/lib/motion";
import SectionHeading from "../ui/SectionHeading";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reduceMotion) {
      setCount(to);
      return;
    }
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * to));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, to, reduceMotion]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="ueber-uns" className="scroll-mt-20 bg-cream-warm py-24 md:py-32 overflow-hidden">
      <div className="max-w-[72rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Column */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            {/* Decorative "1987" */}
            <span
              className="absolute -top-8 -left-4 font-display font-black text-terracotta select-none pointer-events-none"
              style={{ fontSize: "clamp(5rem, 15vw, 12rem)", opacity: 0.06, lineHeight: 1 }}
              aria-hidden="true"
            >
              1987
            </span>

            <div className="relative">
              <SectionHeading
                eyebrow="La nostra storia"
                title="Mit Leidenschaft, seit einer Generation."
                className="mb-8"
              />

              <div className="flex flex-col gap-5 font-body text-base leading-relaxed text-brown-mid">
                <p>
                  Pizzeria Allegria wurde 1987 von Giuseppe und Maria Ferretti gegründet —
                  zwei Neapolitanern mit einem einfachen Traum: die Aromen ihrer Heimat in
                  dieser Stadt lebendig zu halten.
                </p>
                <p>
                  Bis heute backen wir unsere Pizzen im original Holzofen, den Giuseppe
                  damals aus Neapel mitbrachte. Unsere Pasta wird täglich von Hand gemacht —
                  mit Mehl, Eiern und nichts als Zeit und Sorgfalt.
                </p>
                <p>
                  <em className="font-display text-brown">Allegria</em> bedeutet Freude. Und genau das
                  wollen wir Ihnen mit jedem Teller bringen — Freude am guten Essen, an guten
                  Gesprächen, am echten Geschmack Italiens.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-cream-muted">
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-terracotta" style={{ fontSize: "2rem" }}>
                    <CountUp to={37} suffix="+" />
                  </span>
                  <span className="font-body text-xs text-brown-mid uppercase tracking-wide">
                    Jahre Leidenschaft
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-terracotta" style={{ fontSize: "2rem" }}>
                    <CountUp to={100} suffix="%" />
                  </span>
                  <span className="font-body text-xs text-brown-mid uppercase tracking-wide">
                    Handgemachte Pasta
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-display font-bold text-terracotta" style={{ fontSize: "2rem" }}>
                    ♥
                  </span>
                  <span className="font-body text-xs text-brown-mid uppercase tracking-wide">
                    Familie Ferretti
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-warm-lg">
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=85"
                alt="Küche der Pizzeria Allegria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brown/30 to-transparent" />
            </div>
            {/* Decorative terracotta border accent */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 border-2 border-terracotta/30 rounded-sm -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
