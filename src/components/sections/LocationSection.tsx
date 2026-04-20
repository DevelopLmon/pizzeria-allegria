"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Phone, Mail, Car, Navigation, CalendarDays } from "lucide-react";
import { slideLeft, slideRight, viewportConfig } from "@/lib/motion";

const DAYS = [
  { key: "Mo", name: "Montag",     hours: "12:00 – 14:00 & 18:00 – 22:00" },
  { key: "Di", name: "Dienstag",   hours: null },
  { key: "Mi", name: "Mittwoch",   hours: "12:00 – 14:00 & 18:00 – 22:00" },
  { key: "Do", name: "Donnerstag", hours: "12:00 – 14:00 & 18:00 – 22:00" },
  { key: "Fr", name: "Freitag",    hours: "12:00 – 14:00 & 18:00 – 22:00" },
  { key: "Sa", name: "Samstag",    hours: "12:00 – 14:00 & 18:00 – 22:00" },
  { key: "So", name: "Sonntag",    hours: "12:00 – 14:00 & 18:00 – 22:00" },
];

function getTodayKey(): string {
  const formatter = new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    weekday: "short",
  });
  return formatter.format(new Date());
}

export default function LocationSection() {
  const [todayKey, setTodayKey] = useState<string | null>(null);

  useEffect(() => {
    setTodayKey(getTodayKey());
  }, []);

  const todayDay = DAYS.find((d) => d.key === todayKey);

  return (
    <section id="lage" className="scroll-mt-20 bg-cream-warm py-24 md:py-32">
      <div className="max-w-[72rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Opening Hours */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="flex items-center gap-2 mb-8">
              <Clock size={13} className="text-terracotta" />
              <span className="font-body text-xs font-semibold text-terracotta uppercase tracking-[0.2em]">
                Öffnungszeiten
              </span>
            </div>

            {/* Today badge */}
            {todayDay && (
              <div className={`mb-6 px-4 py-2.5 rounded-lg text-sm font-body font-medium inline-flex items-center gap-2 ${
                todayDay.hours
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}>
                <span className="font-semibold text-brown">Heute ({todayDay.name}):</span>
                <span className={todayDay.hours ? "text-green-700" : "text-red-500 font-semibold"}>
                  {todayDay.hours ?? "Geschlossen"}
                </span>
              </div>
            )}

            {/* Days table */}
            <div className="flex flex-col divide-y divide-brown/8">
              {DAYS.map((day) => {
                const isToday = day.key === todayKey;
                return (
                  <div
                    key={day.key}
                    className={`flex justify-between items-baseline py-3 ${
                      isToday ? "font-semibold text-brown" : ""
                    }`}
                  >
                    <span className={`font-body text-sm ${isToday ? "text-brown font-bold" : "text-brown/80"}`}>
                      {day.name}
                    </span>
                    <span className={`font-body text-sm ${
                      day.hours
                        ? isToday ? "text-brown" : "text-brown/70"
                        : "text-brown/35 italic"
                    }`}>
                      {day.hours ?? "Ruhetag"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Special dates */}
            <div className="mt-8 pt-6 border-t border-brown/10">
              <div className="flex items-center gap-2 mb-4">
                <CalendarDays size={13} className="text-terracotta" />
                <span className="font-body text-xs font-semibold text-terracotta uppercase tracking-[0.2em]">
                  Besondere Tage
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-4 text-sm font-body">
                <span className="text-brown/80">
                  Himmelfahrt · Vatertag{" "}
                  <span className="text-brown/45 text-xs">(14. Mai)</span>
                </span>
                <span className="text-terracotta font-semibold text-right shrink-0">
                  12:00 – 22:00 durchgehend
                </span>
              </div>
            </div>

            <p className="mt-6 text-xs font-body text-brown/50 italic leading-relaxed">
              Für Gruppen und besondere Anlässe sind wir auch außerhalb der regulären Öffnungszeiten gerne für Sie da. Wir bieten außerdem Catering und einen Außer-Haus-Service an.
            </p>
          </motion.div>

          {/* Map + Contact */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <div className="flex items-center gap-2">
              <MapPin size={13} className="text-terracotta" />
              <span className="font-body text-xs font-semibold text-terracotta uppercase tracking-[0.2em]">
                So finden Sie uns
              </span>
            </div>

            {/* Map */}
            <div className="relative rounded-xl overflow-hidden shadow-warm-lg ring-1 ring-brown/10">
              <iframe
                src="https://maps.google.com/maps?q=Lindenstra%C3%9Fe+5+27404+Zeven&output=embed&z=15"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full border-0"
                title="Ristorante La Locanda auf Google Maps"
              />
              <a
                href="https://maps.app.goo.gl/kz6tyvDLf2PxuCgV8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 hover:bg-white text-brown text-xs font-body font-semibold px-3 py-1.5 rounded-lg shadow-md transition-all duration-200 hover:scale-105"
              >
                In Maps öffnen
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <MapPin size={16} className="text-terracotta" />,
                  label: "Adresse",
                  content: <span className="text-brown/60">Lindenstraße 5, 27404 Zeven</span>,
                },
                {
                  icon: <Phone size={16} className="text-terracotta" />,
                  label: "Telefon",
                  content: (
                    <a href="tel:042817171000" className="text-terracotta hover:text-terracotta-dark transition-colors">
                      04281 7171000
                    </a>
                  ),
                },
                {
                  icon: <Car size={16} className="text-terracotta" />,
                  label: "Parkmöglichkeiten",
                  content: <span className="text-brown/60">Kostenlose Parkplätze direkt am Restaurant</span>,
                },
                {
                  icon: <Mail size={16} className="text-terracotta" />,
                  label: "E-Mail",
                  content: (
                    <a href="mailto:info@pizzeria-allegria.de" className="text-terracotta hover:text-terracotta-dark transition-colors">
                      pizzeria@allegia.de
                    </a>
                  ),
                },
              ].map(({ icon, label, content }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-terracotta/10 flex items-center justify-center shrink-0">
                    {icon}
                  </div>
                  <div className="pt-1">
                    <div className="font-body text-xs font-semibold text-brown/50 uppercase tracking-wide mb-0.5">
                      {label}
                    </div>
                    <div className="font-body text-sm">{content}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social + Route */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/pages/Allegria/1673029109610808"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-brown/8 hover:bg-terracotta hover:text-white text-brown/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/pizzeria_allegria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-brown/8 hover:bg-terracotta hover:text-white text-brown/50 flex items-center justify-center transition-all duration-200"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>

              <a
                href="https://maps.app.goo.gl/kz6tyvDLf2PxuCgV8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-brown hover:bg-brown-mid text-cream font-body font-semibold text-sm py-2.5 px-5 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-warm"
              >
                <Navigation size={14} />
                Route berechnen
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
