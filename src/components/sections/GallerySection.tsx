"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, scaleUp, viewportConfig } from "@/lib/motion";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Restaurant Ambiente",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Garnelen-Gericht",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Neapolitanische Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=800&q=80",
    alt: "Antipasti",
  },
  {
    src: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?w=800&q=80",
    alt: "Pasta-Gericht",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Catering-Buffet",
  },
  {
    src: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=800&q=80",
    alt: "Restaurant Eingang",
  },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="scroll-mt-20 bg-cream-warm py-24 md:py-32">
      <div className="max-w-[72rem] mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="font-display font-bold text-brown text-3xl md:text-4xl text-center mb-12"
        >
          Unsere Galerie
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-3 auto-rows-[200px] md:auto-rows-[220px] gap-3"
        >
          {/* Row 1 col 1 – restaurant (spans 2 rows) */}
          <motion.div variants={scaleUp} className="row-span-2 relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[0].src} alt={PHOTOS[0].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 1 col 2 */}
          <motion.div variants={scaleUp} className="relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[1].src} alt={PHOTOS[1].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 1 col 3 */}
          <motion.div variants={scaleUp} className="relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[2].src} alt={PHOTOS[2].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 2 col 2 */}
          <motion.div variants={scaleUp} className="relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[3].src} alt={PHOTOS[3].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 2 col 3 – buffet (spans 2 rows) */}
          <motion.div variants={scaleUp} className="row-span-2 relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[5].src} alt={PHOTOS[5].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 3 col 1 */}
          <motion.div variants={scaleUp} className="relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[6].src} alt={PHOTOS[6].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 3 col 2 */}
          <motion.div variants={scaleUp} className="relative overflow-hidden rounded-xl">
            <Image src={PHOTOS[4].src} alt={PHOTOS[4].alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
          {/* Row 3 – last item (only on md+, col 1 or 2 depending on grid) */}
        </motion.div>
      </div>
    </section>
  );
}
