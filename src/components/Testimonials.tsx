import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/content";
import { Reveal } from "./Reveal";

const AUTO_MS = 6500;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [offset, setOffset] = useState(0);
  const t = TESTIMONIALS[active];

  const go = useCallback((i: number, manual = true) => {
    setActive((i + TESTIMONIALS.length) % TESTIMONIALS.length);
    if (manual) setAuto(false);
  }, []);

  /* measure the active slide and centre the rail on it */
  const measure = useCallback(() => {
    const container = containerRef.current;
    const slide = slideRefs.current[active];
    if (!container || !slide) return;
    setOffset(slide.offsetLeft - (container.clientWidth - slide.clientWidth) / 2);
  }, [active]);

  useEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  useEffect(() => {
    if (!auto || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % TESTIMONIALS.length), AUTO_MS);
    return () => clearInterval(id);
  }, [auto, paused]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    }
  };

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      aria-roledescription="carousel"
      className="relative border-t border-hairline bg-navy-900/20 py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={onKeyDown}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="overline-label">In their words</p>
            <h2 className="mt-6 font-display text-3xl leading-tight font-bold text-cream sm:text-[2.6rem] sm:leading-[1.15]">
              What clients say <span className="text-gold-gradient italic">afterwards.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <button
              type="button"
              onClick={() => go(active + 1)}
              className="group inline-flex items-center gap-2 font-display text-[11px] font-bold tracking-[0.24em] text-gold-300 uppercase transition-colors hover:text-gold-200"
            >
              Read every testimonial
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </Reveal>
        </div>
      </div>

      {/* ---------------- rail slider ---------------- */}
      <Reveal delay={160} className="mt-14">
        <p className="sr-only" aria-live="polite">
          {`Showing testimonial ${active + 1} of ${TESTIMONIALS.length}: ${t.name}, ${t.role}`}
        </p>

        <div ref={containerRef} className="relative overflow-hidden py-2" tabIndex={0} aria-label="Testimonial rail — use arrow keys to browse">
          {/* edge fades */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-navy-950 to-transparent sm:w-24" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-navy-950 to-transparent sm:w-24" />

          <ul
            className="rail-track flex items-stretch gap-5 sm:gap-7"
            style={{ transform: `translate3d(${-offset}px, 0, 0)` }}
          >
            {TESTIMONIALS.map((slide, i) => {
              const isActive = i === active;
              return (
                <li
                  key={slide.id}
                  ref={(el) => {
                    slideRefs.current[i] = el;
                  }}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${TESTIMONIALS.length}`}
                  aria-hidden={!isActive}
                  className={`rail-slide w-[88%] shrink-0 sm:w-[74%] lg:w-[62%] xl:w-[55%] ${
                    isActive ? "scale-100 opacity-100" : "scale-[0.92] opacity-35 saturate-50"
                  }`}
                >
                  <article
                    className={`card-sheen grid h-full overflow-hidden rounded-[2rem] border bg-navy-900/60 transition-colors duration-700 md:grid-cols-[0.8fr_1.2fr] ${
                      isActive
                        ? "border-gold-500/45 shadow-[0_35px_80px_-35px_rgba(212,175,55,0.35)]"
                        : "border-hairline"
                    }`}
                  >
                    {/* image */}
                    <div className="relative h-44 overflow-hidden md:h-full md:min-h-[21rem]">
                      <img
                        src={slide.image}
                        alt=""
                        loading="lazy"
                        className={`h-full w-full object-cover transition-transform duration-[1400ms] ${
                          isActive ? "scale-100" : "scale-110"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/25 md:bg-gradient-to-r md:from-transparent md:via-navy-950/10 md:to-navy-900/70" />
                      <span
                        aria-hidden="true"
                        className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-600 font-display text-xs font-bold text-navy-950 shadow-[0_10px_28px_rgba(212,175,55,0.4)]"
                      >
                        {slide.initials}
                      </span>
                    </div>

                    {/* quote */}
                    <div className="relative flex flex-col justify-between p-7 sm:p-9">
                      <Quote aria-hidden="true" className="absolute top-6 right-7 h-12 w-12 text-gold-500/12" />
                      <blockquote>
                        <p className="relative font-display text-base leading-relaxed font-medium text-cream/95 italic sm:text-lg sm:leading-[1.65]">
                          &ldquo;{slide.quote}&rdquo;
                        </p>
                      </blockquote>
                      <footer className="mt-7 flex items-center justify-between gap-4 border-t border-hairline pt-5">
                        <div>
                          <p className="font-display text-[15px] font-bold text-gold-gradient">
                            {slide.name}
                          </p>
                          <p className="mt-1 text-xs text-mist sm:text-sm">{slide.role}</p>
                        </div>
                        <span
                          aria-hidden="true"
                          className="hidden h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/40 bg-navy-950 font-display text-xs font-bold text-gold-300 sm:grid"
                        >
                          {slide.initials}
                        </span>
                      </footer>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        {/* controls */}
        <div className="mx-auto mt-9 flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <div className="flex gap-2">
            {TESTIMONIALS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show testimonial from ${s.name}`}
                aria-current={i === active}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === active ? "w-9 bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.6)]" : "w-1.5 bg-navy-600 hover:bg-gold-700"
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="font-display text-xs tracking-[0.25em] text-mist tabular-nums">
              0{active + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-hairline text-cream transition-all duration-300 hover:border-gold-500 hover:text-gold-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-300 transition-all duration-300 hover:bg-gold-500/25"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
