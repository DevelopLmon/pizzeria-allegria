import { MapPin, Phone, Mail, Clock } from "lucide-react";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brown text-cream/80 font-body">
      <div className="max-w-[72rem] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="font-display font-bold italic text-3xl text-terracotta">
              Allegria
            </a>
            <p className="text-sm text-cream/60 italic font-display">
              Cucina autentica dal 1987
            </p>
            <p className="text-sm leading-relaxed text-cream/70 mt-2">
              Echte neapolitanische Küche, täglich frisch zubereitet — mit Liebe und Leidenschaft.
            </p>
          </div>

          {/* Col 2 — Contact & Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body font-semibold text-cream tracking-wide uppercase text-sm">
              Besuchen Sie uns
            </h3>
            <div className="flex flex-col gap-3 text-sm text-cream/70">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-terracotta shrink-0 mt-0.5" />
                <span>Via della Allegria 12<br />10115 Berlin-Mitte</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-terracotta shrink-0" />
                <a href="tel:+493012345678" className="hover:text-cream transition-colors">
                  +49 30 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-terracotta shrink-0" />
                <a href="mailto:ciao@pizzeria-allegria.de" className="hover:text-cream transition-colors">
                  ciao@pizzeria-allegria.de
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-terracotta shrink-0 mt-0.5" />
                <div>
                  <div>Mo–Fr: 12:00–14:30 & 17:30–23:00</div>
                  <div>Sa–So: 12:00–23:30</div>
                  <div className="text-cream/50">Montag: Ruhetag</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 — Links & Social */}
          <div className="flex flex-col gap-4">
            <h3 className="font-body font-semibold text-cream tracking-wide uppercase text-sm">
              Navigation
            </h3>
            <nav className="flex flex-col gap-2 text-sm text-cream/70">
              {[
                { label: "Speisekarte", href: "#speisekarte" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Reservierung", href: "#kontakt" },
                { label: "Datenschutz", href: "#" },
                { label: "Impressum", href: "#" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-terracotta transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-2">
              <p className="text-sm font-semibold text-cream mb-3">Folgen Sie uns</p>
              <div className="flex gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-cream/60 hover:text-terracotta transition-colors"
                >
                  <IconInstagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-cream/60 hover:text-terracotta transition-colors"
                >
                  <IconFacebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-xs text-cream/40">
          © 2024 Pizzeria Allegria. Mit ♥ gemacht in Berlin.
        </div>
      </div>
    </footer>
  );
}
