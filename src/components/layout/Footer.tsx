import { MapPin, Phone, Mail, Clock } from "lucide-react";

function IconInstagram({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-brown text-cream/80 font-body overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.3),transparent_70%)]" />

      <div className="relative max-w-[72rem] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <a className="font-display font-bold italic text-4xl text-terracotta tracking-wide hover:scale-105 transition-transform">
              Allegria
            </a>

            <p className="text-sm text-cream/60 italic font-display">
              Cucina autentica dal 1987
            </p>

            <p className="text-sm leading-relaxed text-cream/70">
              Echte neapolitanische Küche, täglich frisch zubereitet — mit Liebe,
              Leidenschaft und einem Hauch Napoli.
            </p>

            {/* 🇮🇹 Italien Akzent */}
            <div className="flex gap-1 mt-2">
              <div className="w-6 h-[2px] bg-green-500" />
              <div className="w-6 h-[2px] bg-white" />
              <div className="w-6 h-[2px] bg-red-500" />
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-body font-semibold text-cream tracking-wide uppercase text-sm">
              Besuchen Sie uns
            </h3>

            <div className="flex flex-col gap-4 text-sm text-cream/70">

              <div className="flex items-start gap-3 hover:text-cream transition">
                <MapPin size={16} className="text-terracotta mt-0.5" />
                <span>
                  Lindenstraße 5 <br /> 27404 Zeven
                </span>
              </div>

              <div className="flex items-center gap-3 hover:text-cream transition">
                <Phone size={16} className="text-terracotta" />
                <a href="tel:+49042817171000">
                  +49 04281 7171000
                </a>
              </div>

              <div className="flex items-center gap-3 hover:text-cream transition">
                <Mail size={16} className="text-terracotta" />
                <a href="mailto:ciao@pizzeria-allegria.de">
                  ciao@pizzeria-allegria.de
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock size={16} className="text-terracotta mt-0.5" />
                <div>
                  <div>Mo–So: 12:00–14:00 & 19:00–22:00</div>
                  <div className="text-cream/50">Dienstag: Ruhetag</div>
                </div>
              </div>

            </div>
          </div>

          {/* Navigation + Social */}
          <div className="flex flex-col gap-5">
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
                  className="relative hover:text-terracotta transition-colors after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-terracotta after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social */}
            <div className="mt-3">
              <p className="text-sm font-semibold text-cream mb-3">
                Folgen Sie uns
              </p>

              <div className="flex gap-4">
                {[IconInstagram, IconFacebook].map((Icon, i) => (
                  <a
                    key={i}
                    href={i === 0 ? "https://www.instagram.com/pizzeria_allegria/" : "https://www.facebook.com/pages/Allegria/1673029109610808"}
                    className="p-2 rounded-full bg-white/5 hover:bg-terracotta hover:text-black transition-all duration-300 hover:scale-110 shadow-md"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-16 pt-6 text-center text-xs text-cream/40">
          © {new Date().getFullYear()} Pizzeria Allegria · Made with ♥ & 🍝 in Italy
        </div>
      </div>
    </footer>
  );
}