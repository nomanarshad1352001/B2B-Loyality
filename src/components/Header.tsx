import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/content";
import { useScrollSpy } from "../hooks/useScrollSpy";

const IDS = NAV_LINKS.map((l) => l.id);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(IDS);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="mount-drop fixed inset-x-0 top-0 z-50">
      {/* scroll progress */}
      <div className="h-[2px] w-full bg-navy-900" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700 shadow-[0_0_12px_rgba(212,175,55,0.7)]"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-hairline bg-navy-950/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-5 sm:px-8">
          {/* brand */}
          <a href="#home" className="group flex items-center gap-3" aria-label="B2B Loyalty — home">
            <svg width="38" height="38" viewBox="0 0 64 64" aria-hidden="true" className="shrink-0">
              <rect width="64" height="64" rx="14" fill="#0a1730" stroke="rgba(212,175,55,.35)" />
              <path
                d="M32 10l16 22-16 22-16-22z"
                fill="none"
                stroke="#d4af37"
                strokeWidth="3"
                className="transition-transform duration-500 group-hover:scale-90"
                style={{ transformOrigin: "center" }}
              />
              <path d="M32 22l8 10-8 10-8-10z" fill="#d4af37" />
            </svg>
            <span className="leading-none">
              <span className="block font-display text-[13px] font-bold tracking-[0.3em] text-cream">
                B2B LOYALTY
              </span>
              <span className="mt-1 block font-display text-[9px] font-medium tracking-[0.34em] text-gold-400">
                &amp; CHANNEL INCENTIVES
              </span>
            </span>
          </a>

          {/* desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-current={active === link.id ? "true" : undefined}
                data-active={active === link.id}
                className={`nav-link font-display text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 ${
                  active === link.id ? "text-gold-300" : "text-cream/65 hover:text-cream"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-gold group ml-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-5 py-2.5 font-display text-[11px] font-bold tracking-[0.18em] text-navy-950 uppercase shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] transition-transform duration-300 hover:scale-[1.04]"
            >
              Book a conversation
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-navy-900/70 text-cream lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile overlay menu */}
      <div
        className={`fixed inset-0 z-[-1] flex flex-col justify-center bg-navy-950/[0.985] px-8 transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className="space-y-2">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className={`block border-b border-hairline py-4 font-display text-3xl font-semibold tracking-wide transition-all duration-500 ${
                active === link.id ? "text-gold-gradient" : "text-cream/80"
              } ${open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
            >
              <span className="mr-4 text-xs tracking-[0.3em] text-gold-500">
                0{i + 1}
              </span>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
          className={`btn-gold mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-7 py-3.5 font-display text-xs font-bold tracking-[0.18em] text-navy-950 uppercase transition-all duration-500 ${
            open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: open ? "560ms" : "0ms" }}
        >
          Book a conversation <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
