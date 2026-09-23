import { ArrowUp, Mail, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

function LinkedInGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45z" />
    </svg>
  );
}
import { CONTACT } from "../data/content";

const NAV = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "experience", label: "Experience" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-navy-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* brand */}
        <div>
          <a href="#home" className="flex items-center gap-3" aria-label="Back to home">
            <svg width="34" height="34" viewBox="0 0 64 64" aria-hidden="true">
              <rect width="64" height="64" rx="14" fill="#0a1730" stroke="rgba(212,175,55,.35)" />
              <path d="M32 10l16 22-16 22-16-22z" fill="none" stroke="#d4af37" strokeWidth="3" />
              <path d="M32 22l8 10-8 10-8-10z" fill="#d4af37" />
            </svg>
            <span className="leading-none">
              <span className="block font-display text-xs font-bold tracking-[0.3em] text-cream">
                MARK FARRELL
              </span>
              <span className="mt-1 block font-display text-[9px] font-medium tracking-[0.34em] text-gold-400">
                B2B LOYALTY &amp; CHANNEL INCENTIVES
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-mist">
            Helping B2B brands turn dealers, resellers and reps into measurable revenue — with
            strategy first, technology second and zero vendor bias.
          </p>
        </div>

        {/* navigate */}
        <nav aria-label="Footer">
          <p className="font-display text-[10px] font-semibold tracking-[0.4em] text-gold-400 uppercase">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {NAV.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* connect */}
        <div>
          <p className="font-display text-[10px] font-semibold tracking-[0.4em] text-gold-400 uppercase">
            Connect
          </p>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="group inline-flex items-center gap-2.5 transition-colors hover:text-gold-300">
                <Mail aria-hidden="true" className="h-4 w-4 text-gold-500" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={`tel:${CONTACT.phoneHref}`} className="group inline-flex items-center gap-2.5 transition-colors hover:text-gold-300">
                <Phone aria-hidden="true" className="h-4 w-4 text-gold-500" />
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 transition-colors hover:text-gold-300"
              >
                <LinkedInGlyph className="h-4 w-4 text-gold-500" />
                LinkedIn — Mark Farrell
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* giant brand mark */}
      <div className="relative overflow-hidden border-t border-hairline">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-900/60 to-transparent"
        />
        <Reveal className="mark relative mx-auto max-w-[110rem] px-2 pt-16 pb-8 text-center select-none">
          <p
            aria-hidden="true"
            className="mark-shine font-display text-[clamp(2.6rem,12.5vw,10.5rem)] leading-[0.95] font-extrabold tracking-[-0.02em] whitespace-nowrap"
          >
            B2B LOYALTY
          </p>
          <span className="sr-only">B2B Loyalty</span>
          <div className="mt-5 flex items-center justify-center gap-4">
            <span aria-hidden="true" className="h-px w-14 bg-gradient-to-r from-transparent to-gold-500/60" />
            <p className="font-display text-[9px] tracking-[0.5em] text-gold-400/80 uppercase sm:text-[10px]">
              Loyalty · Channel · Incentives
            </p>
            <span aria-hidden="true" className="h-px w-14 bg-gradient-to-l from-transparent to-gold-500/60" />
          </div>
        </Reveal>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 sm:px-8">
          <p className="text-xs tracking-wide text-mist/70">
            © 2026 B2B Loyalty. All rights reserved. Sydney, Australia.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-display text-[10px] font-bold tracking-[0.3em] text-gold-300 uppercase transition-colors hover:text-gold-200"
          >
            Back to top
            <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gold-500/10">
              <ArrowUp aria-hidden="true" className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
