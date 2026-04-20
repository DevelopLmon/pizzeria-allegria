import { MapPin, Phone, Mail, Clock } from "lucide-react";

function IconInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-brown text-cream/80 font-body overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(255,140,0,0.3),transparent_70%)]" />

      <div className="relative max-w-[72rem] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="font-display font-bold italic text-3xl text-terracotta tracking-wide">
              Allegria
            </span>
            <p className="text-xs text-cream/50 italic font-display">
              Cucina autentica dal 1987
            </p>
            <p className="text-xs leading-relaxed text-cream/60">
              Echte neapolitanische Küche, täglich frisch zubereitet — mit Liebe, Leidenschaft und einem Hauch Napoli.
            </p>
            <div className="flex gap-1 mt-1">
              <div className="w-5 h-[2px] bg-green-500" />
              <div className="w-5 h-[2px] bg-white" />
              <div className="w-5 h-[2px] bg-red-500" />
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-body font-semibold text-cream tracking-wide uppercase text-xs">
              Besuchen Sie uns
            </h3>
            <div className="flex flex-col gap-3 text-xs text-cream/60">
              <div className="flex items-start gap-2.5">
                <MapPin size={13} className="text-terracotta mt-0.5 shrink-0" />
                <span>Lindenstraße 5, 27404 Zeven</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-terracotta shrink-0" />
                <a href="tel:042817171000" className="hover:text-terracotta transition-colors">04281 7171000</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={13} className="text-terracotta shrink-0" />
                <a href="mailto:pizzeria@allegria.de" className="hover:text-terracotta transition-colors">pizzeria@allegria.de</a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock size={13} className="text-terracotta mt-0.5 shrink-0" />
                <div>
                  <div>Mo, Mi–So: 12:00–14:00 & 18:00–22:00</div>
                  <div className="text-cream/40">Dienstag: Ruhetag</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation + Social */}
          <div className="flex flex-col gap-3">
            <h3 className="font-body font-semibold text-cream tracking-wide uppercase text-xs">
              Navigation
            </h3>
            <nav className="flex flex-col gap-1.5 text-xs text-cream/60">
              {[
                { label: "Speisekarte", href: "#speisekarte" },
                { label: "Über uns", href: "#ueber-uns" },
                { label: "Reservierung", href: "#kontakt" },
                { label: "Datenschutz", href: "#" },
                { label: "Impressum", href: "#" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="hover:text-terracotta transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-2">
              <p className="text-xs font-semibold text-cream mb-2">Folgen Sie uns</p>
              <div className="flex gap-3">
                {[IconInstagram, IconFacebook].map((Icon, i) => (
                  <a
                    key={i}
                    href={i === 0 ? "https://www.instagram.com/pizzeria_allegria/" : "https://www.facebook.com/pages/Allegria/1673029109610808"}
                    className="p-1.5 rounded-full bg-white/5 hover:bg-terracotta hover:text-black transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-8 pt-5 grid grid-cols-3 items-center text-xs text-cream/35">
          <span>© {new Date().getFullYear()} Pizzeria Allegria</span>
          <a
            href="https://lemon-developing.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center hover:text-cream/70 transition-colors"
          >
            made with ❤️ by Lemon-Developing
          </a>
          <span />
        </div>
      </div>
    </footer>
  );
}
