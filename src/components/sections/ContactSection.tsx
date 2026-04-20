"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { slideLeft, slideRight, viewportConfig } from "@/lib/motion";
import SectionHeading from "../ui/SectionHeading";
import { LiquidButton } from "../liquid-glass-button";
import { cn } from "../ui/cn";

type FormState = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full font-body text-sm text-brown bg-cream-warm border border-cream-muted rounded-sm px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta placeholder:text-brown/40";

export default function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 1500);
  }

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-brown py-24 md:py-32"
    >
      <div className="max-w-[72rem] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Info Block */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <SectionHeading
              eyebrow="Kommen Sie vorbei"
              title="Besuchen Sie uns"
              subtitle="Wir freuen uns auf Sie — reservieren Sie Ihren Tisch oder kommen Sie einfach vorbei."
              light
              className="mb-10"
            />

            <div className="flex flex-col gap-6 font-body text-sm text-cream/70">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-terracotta" />
                </div>
                <div>
                  <div className="font-semibold text-cream mb-0.5">Adresse</div>
                  <div>Lindenstraße 5, 27404 Zeven</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-terracotta" />
                </div>
                <div>
                  <div className="font-semibold text-cream mb-0.5">Telefon</div>
                  <a href="tel:+49042817171000" className="hover:text-cream transition-colors">
                    +49 04281 7171000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-terracotta" />
                </div>
                <div>
                  <div className="font-semibold text-cream mb-0.5">E-Mail</div>
                  <a href="mailto:ciao@pizzeria-allegria.de" className="hover:text-cream transition-colors">
                    ciao@pizzeria-allegria.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-terracotta/20 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-terracotta" />
                </div>
                <div>
                  <div className="font-semibold text-cream mb-1">Öffnungszeiten</div>
                  <div className="flex flex-col gap-0.5">
                    <span>Mo–So: 12:00–14:00 & 19:00–22:00</span>
                    <span className="text-cream/40">Dienstag: Ruhetag</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <div className="bg-cream-warm rounded-sm shadow-warm-lg p-8 md:p-10">
              <h3 className="font-display font-bold text-brown text-xl mb-1">
                Tisch reservieren
              </h3>
              <p className="font-body text-sm text-brown-mid mb-8">
                Füllen Sie das Formular aus — wir bestätigen Ihre Anfrage per E-Mail.
              </p>

              {formState === "success" ? (
                <motion.div
                  initial={reduceMotion ? {} : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center text-center gap-4 py-10"
                  role="alert"
                >
                  <CheckCircle size={48} className="text-olive" />
                  <div>
                    <div className="font-display font-bold text-brown text-xl mb-2">
                      Grazie mille!
                    </div>
                    <p className="font-body text-sm text-brown-mid">
                      Wir bestätigen Ihre Reservierung in Kürze per E-Mail.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {formState === "error" && (
                    <div
                      role="alert"
                      className="flex items-center gap-2 text-sm text-terracotta-dark bg-terracotta/10 border border-terracotta/30 rounded-sm px-4 py-3"
                    >
                      <AlertCircle size={16} />
                      Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-body text-xs font-semibold text-brown uppercase tracking-wide">
                        Name <span className="text-terracotta" aria-label="Pflichtfeld">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Ihr vollständiger Name"
                        className={inputBase}
                        disabled={formState === "submitting"}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-body text-xs font-semibold text-brown uppercase tracking-wide">
                        E-Mail <span className="text-terracotta" aria-label="Pflichtfeld">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="ihre@email.de"
                        className={inputBase}
                        disabled={formState === "submitting"}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="font-body text-xs font-semibold text-brown uppercase tracking-wide">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+49 ..."
                        className={inputBase}
                        disabled={formState === "submitting"}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="persons" className="font-body text-xs font-semibold text-brown uppercase tracking-wide">
                        Personen <span className="text-terracotta" aria-label="Pflichtfeld">*</span>
                      </label>
                      <select
                        id="persons"
                        name="persons"
                        required
                        className={cn(inputBase, "cursor-pointer")}
                        disabled={formState === "submitting"}
                      >
                        <option value="">Bitte wählen</option>
                        {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Person" : "Personen"}
                          </option>
                        ))}
                        <option value="8-10">8–10 Personen</option>
                        <option value="10+">Mehr als 10</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="datetime" className="font-body text-xs font-semibold text-brown uppercase tracking-wide">
                      Datum & Uhrzeit <span className="text-terracotta" aria-label="Pflichtfeld">*</span>
                    </label>
                    <input
                      id="datetime"
                      name="datetime"
                      type="datetime-local"
                      required
                      className={inputBase}
                      disabled={formState === "submitting"}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-body text-xs font-semibold text-brown uppercase tracking-wide">
                      Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Besondere Wünsche, Allergien, Anlass..."
                      className={cn(inputBase, "resize-none")}
                      disabled={formState === "submitting"}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="mt-0.5 w-4 h-4 accent-terracotta"
                      disabled={formState === "submitting"}
                    />
                    <label htmlFor="privacy" className="font-body text-xs text-brown-mid leading-relaxed">
                      Ich habe die{" "}
                      <a href="#" className="underline text-terracotta hover:text-terracotta-dark">
                        Datenschutzerklärung
                      </a>{" "}
                      gelesen und stimme der Verarbeitung meiner Daten zu.{" "}
                      <span className="text-terracotta" aria-label="Pflichtfeld">*</span>
                    </label>
                  </div>

                  <LiquidButton
                    type="submit"
                    size="xl"
                    className="w-full mt-2 font-body font-semibold text-brown tracking-wide disabled:opacity-50 disabled:pointer-events-none"
                    disabled={formState === "submitting"}
                  >
                    {formState === "submitting" ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      "Reservierung anfragen"
                    )}
                  </LiquidButton>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
