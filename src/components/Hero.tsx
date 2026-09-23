import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, MapPin, ShieldCheck } from "lucide-react";
import { IMAGES, STATS } from "../data/content";
import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";
import { Reveal } from "./Reveal";

/** A single word that rises into place on page load. */
function W({ d, className = "", children }: { d: number; className?: string; children: ReactNode }) {
  return (
    <span className="word-anim">
      <span className={className} style={{ animationDelay: `${d}ms` }}>
        {children}
      </span>
    </span>
  );
}

function StatItem({
  stat,
  inView,
  index,
}: {
  stat: (typeof STATS)[number];
  inView: boolean;
  index: number;
}) {
  const value = useCountUp({ target: stat.to, from: stat.from, inView, duration: 2100 });
  const display = Math.round(value);
  return (
    <Reveal delay={index * 120} className="group relative px-6 py-8 transition-colors duration-500 hover:bg-gold-500/5 sm:px-8 lg:py-10">
      {index > 0 && (
        <span
          aria-hidden="true"
          className="absolute top-1/2 left-0 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold-500/40 to-transparent lg:block"
        />
      )}
      {stat.word && (
        <span className="mb-1 block font-display text-[11px] font-bold tracking-[0.5em] text-gold-400 uppercase">
          {stat.word}
        </span>
      )}
      <div
        className="font-display text-5xl font-bold text-gold-gradient tabular-nums transition-transform duration-500 group-hover:scale-[1.06] sm:text-6xl"
        style={{ transformOrigin: "left center" }}
        aria-label={`${stat.word ?? ""} ${stat.to}${stat.suffix}`}
      >
        {display}
        {stat.suffix}
      </div>
      <p className="mt-3 max-w-[15rem] text-[13px] leading-relaxed text-mist">{stat.label}</p>
    </Reveal>
  );
}

export function Hero() {
  const stats = useInView<HTMLDivElement>(0.3);

  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden">
      {/* backdrop */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={IMAGES.heroBg}
          alt=""
          className="ken-burns h-full w-full scale-105 object-cover opacity-[0.22]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/85 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/60" />
        {/* gold glow */}
        <div className="glow-drift absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_65%)] blur-2xl" />
        <div className="absolute bottom-[-20%] left-[-12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(29,56,102,0.5),transparent_65%)] blur-2xl" />
        {/* vertical hairlines */}
        <div className="absolute inset-y-0 left-1/4 hidden w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent lg:block" />
        <div className="absolute inset-y-0 left-3/4 hidden w-px bg-gradient-to-b from-transparent via-gold-500/10 to-transparent lg:block" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-40 pb-16 sm:px-8 lg:grid-cols-12 lg:items-center lg:pt-44 lg:pb-20">
        {/* copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="overline-label">Australia's independent incentive architect</p>
          </Reveal>

          <h1
            aria-label="Growing revenue through the channel you don't control."
            className="mt-7 font-display text-[2.65rem] leading-[1.04] font-bold tracking-tight text-cream sm:text-6xl lg:text-[4.6rem]"
          >
            <span aria-hidden="true">
              <W d={100}>Growing</W> <W d={180}>revenue</W> <W d={260}>through</W> <W d={340}>the</W>{" "}
              <W d={440} className="text-gold-gradient italic">
                channel
              </W>{" "}
              <W d={540}>you</W> <W d={620}>don&rsquo;t</W>{" "}
              <W d={720} className="relative">
                control.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 12"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C60 3 160 3 217 8"
                    fill="none"
                    stroke="url(#u)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="u" x1="0" x2="1">
                      <stop offset="0" stopColor="#d4af37" stopOpacity="0" />
                      <stop offset="0.5" stopColor="#d4af37" />
                      <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </W>
            </span>
          </h1>

          <Reveal delay={980}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-mist sm:text-base">
              I help manufacturers, distributors and B2B trade networks change how their dealers,
              resellers, owned stores, franchises and reps think and behave — so your turnover and
              profits grow. <span className="text-cream">Strategy first, technology second.</span>{" "}
              Education and execution without vendor bias.
            </p>
          </Reveal>

          <Reveal delay={1100}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="btn-gold pulse-glow group inline-flex items-center gap-3 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-7 py-4 font-display text-xs font-bold tracking-[0.18em] text-navy-950 uppercase transition-transform duration-300 hover:scale-[1.04]"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-gold-500/35 px-7 py-4 font-display text-xs font-bold tracking-[0.18em] text-gold-200 uppercase transition-all duration-300 hover:border-gold-400 hover:bg-gold-500/10"
              >
                Explore services
              </a>
            </div>
          </Reveal>

          <Reveal delay={1220}>
            <p className="mt-8 flex items-center gap-2.5 text-xs tracking-[0.14em] text-mist/80 uppercase">
              <ShieldCheck className="h-4 w-4 text-gold-400" />
              No commission. No vendor bias. No dependency.
            </p>
          </Reveal>
        </div>

        {/* portrait */}
        <div className="hidden lg:col-span-5 lg:block">
          <Reveal delay={300} className="relative mx-auto w-fit">
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-t-[12rem] rounded-b-[2rem] border border-gold-500/25"
            />
            <figure className="relative overflow-hidden rounded-t-[11rem] rounded-b-[1.6rem] ring-1 ring-gold-500/40">
              <img
                src={IMAGES.heroPortrait}
                alt="Mark Farrell — B2B loyalty and channel incentives architect"
                className="h-[30rem] w-[22rem] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-transparent to-navy-950/20" />
            </figure>

            {/* floating identity card */}
            <div className="floaty absolute -bottom-8 -left-16 w-64 rounded-2xl border border-hairline bg-navy-900/90 p-5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              <p className="font-display text-[10px] font-semibold tracking-[0.34em] text-gold-400 uppercase">
                The Incentive Architect
              </p>
              <p className="mt-2 font-display text-lg font-semibold text-cream">Mark Farrell</p>
              <p className="mt-1 text-xs leading-relaxed text-mist">
                Independent · Commission-free · Vendor agnostic
              </p>
            </div>

            <div className="absolute -top-5 -right-8 flex items-center gap-2 rounded-full border border-hairline bg-navy-900/90 px-4 py-2 backdrop-blur-xl">
              <MapPin className="h-3.5 w-3.5 text-gold-400" />
              <span className="font-display text-[10px] tracking-[0.28em] text-cream/80 uppercase">
                Sydney, Australia
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      {/* stats band */}
      <div ref={stats.ref} className="relative border-y border-hairline bg-navy-900/40 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} inView={stats.inView} index={i} />
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="relative flex justify-center py-7" aria-hidden="true">
        <a
          href="#experience"
          className="group flex flex-col items-center gap-2 text-mist/60 transition-colors hover:text-gold-300"
          aria-label="Scroll to experience section"
        >
          <span className="font-display text-[9px] tracking-[0.5em] uppercase">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
