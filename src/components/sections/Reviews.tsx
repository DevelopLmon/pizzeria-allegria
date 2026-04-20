"use client";

import { Star } from "lucide-react";

const reviews = [
  {
    name: "Li Wi",
    text: "Essen war sehr schnell am Tisch, hat super geschmeckt und große Portionen. Service ist sehr nett und Preise total in Ordnung.",
    rating: 5,
  },
  {
    name: "Capt. Pipinos",
    text: "Das Essen war sehr lecker und die Portion größer als wo anders üblich. Zudem wurde auf Sonderwünsche eingegangen.",
    rating: 5,
  },
  {
    name: "Matthias Stoppe",
    text: "Wir haben an einem schönen Sommerabend draußen gesessen. Der Service war aufmerksam und freundlich. Das Essen, es gab Pizza, war gut und nach kurzer Zeit am Tisch.",
    rating: 4,
  },
];

export default function Reviews() {
  return (
    <section className="bg-brown py-20 px-6 text-cream">
      <div className="max-w-6xl mx-auto text-center">

        {/* ⭐ Gesamtbewertung */}
        <div className="mb-10">
          <div className="flex justify-center items-center gap-2 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-lg font-semibold text-cream">
            4.6 von 5 Sternen
          </p>
          <p className="text-sm text-cream/50">
            basierend auf Google Bewertungen
          </p>
        </div>

        <h2 className="text-3xl font-display italic mb-10 text-terracotta">
          Was unsere Gäste sagen
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white/5 p-6 rounded-2xl backdrop-blur hover:scale-105 transition duration-300 shadow-lg"
            >
              <div className="flex justify-center mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm italic text-cream/80 mb-4">
                “{r.text}”
              </p>

              <p className="text-xs text-cream/50">{r.name}</p>
            </div>
          ))}
        </div>

        {/* Google CTA */}
        <div className="mt-10 flex flex-col items-center gap-2">
          <a
            href="https://maps.app.goo.gl/kz6tyvDLf2PxuCgV8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-terracotta hover:underline"
          >
            Alle Bewertungen auf Google ansehen →
          </a>

          <a
            href="https://www.google.com/search?sca_esv=a3d84300357be008&rlz=1C1VDKB_deDE1185DE1185&sxsrf=ANbL-n58q5cuZsu57N7dT1oxKpcZapvtUA:1776681669209&si=AL3DRZFIhG6pAqfNLal55wUTwygCG0fClF3UxiOmgw9Hq7nbWfDBK1j6Z5rbowezrJmlXHO6-IcsltZQ-Z_by3n8FkBUMM8pwr1vz2RJoMJUX69VpricTkWbmHJ45HF6EZC_-8GNER6CnmowANjFm66SSlG-r2ehmw%3D%3D&q=Pizzeria+Allegria+Rezensionen&sa=X&ved=2ahUKEwiLrpb-nvyTAxVKRf4FHb5_OkwQ0bkNegQIHhAF&biw=1920&bih=919&dpr=1"
            target="_blank"
            className="text-xs text-cream/50 hover:text-cream"
          >
            Bewertung schreiben
          </a>
        </div>
      </div>
    </section>
  );
}