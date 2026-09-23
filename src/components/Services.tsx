import { useState } from "react";
import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronDown,
  Compass,
  Gem,
  Handshake,
  Scale,
  TrendingUp,
} from "lucide-react";
import { SERVICES } from "../data/content";
import { Reveal } from "./Reveal";

const ICONS: Record<string, typeof Gem> = {
  gem: Gem,
  handshake: Handshake,
  growth: TrendingUp,
  scale: Scale,
  compass: Compass,
};

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const Icon = ICONS[service.icon] ?? Gem;
  return (
    <Reveal delay={(index % 3) * 110} className="h-full">
      <article className="card-sheen group flex h-full flex-col overflow-hidden rounded-3xl border border-hairline bg-navy-900/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-500/40 hover:shadow-[0_30px_70px_-30px_rgba(212,175,55,0.25)]">
        <div className="relative h-44 overflow-hidden">
          <img
            src={service.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-navy-950/10" />
          <span className="absolute -bottom-6 left-6 grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/50 bg-navy-950 shadow-[0_0_25px_rgba(212,175,55,0.25)]">
            <Icon aria-hidden="true" className="h-5 w-5 text-gold-400" />
          </span>
          <span className="absolute top-4 right-5 font-display text-xs font-bold tracking-[0.3em] text-gold-300/80">
            0{index + 1}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 pt-9">
          <h3 className="font-display text-lg leading-snug font-semibold text-cream">
            {service.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-mist">{service.blurb}</p>

          <div className={`expandable ${open ? "open" : ""}`}>
            <div>
              <ul className="space-y-2.5 border-t border-hairline pt-4 mt-4">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-cream/85">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`svc-${service.id}`}
            className="mt-auto inline-flex w-fit items-center gap-2 pt-5 font-display text-[11px] font-bold tracking-[0.22em] text-gold-300 uppercase transition-colors hover:text-gold-200"
          >
            {open ? "Show less" : "Read more"}
            <ChevronDown
              aria-hidden="true"
              className={`h-4 w-4 transition-transform duration-400 ${open ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
      className="relative border-t border-hairline bg-navy-900/20 py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <Reveal>
            <p className="overline-label">What I do</p>
            <h2 className="mt-6 font-display text-3xl leading-tight font-bold text-cream sm:text-[2.6rem] sm:leading-[1.15]">
              Five ways I help sales and marketing teams{" "}
              <span className="text-gold-gradient italic">perform.</span>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="max-w-md text-[15px] leading-relaxed text-mist lg:ml-auto">
              Engagements start with a diagnostic and finish with a team able to operate an
              always-on incentive architecture — one that aligns sales and marketing around the
              behaviours that drive B2B customer revenue.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}

          {/* CTA card */}
          <Reveal delay={220} className="h-full">
            <article className="card-sheen relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold-500/50 bg-[linear-gradient(150deg,#14294e_0%,#0a1730_55%,#081226_100%)] p-8">
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.22),transparent_65%)] blur-xl"
              />
              <div>
                <span className="grid h-12 w-12 place-items-center rounded-2xl border border-gold-500/60 bg-navy-950/80">
                  <CalendarClock aria-hidden="true" className="h-5 w-5 text-gold-400" />
                </span>
                <h3 className="mt-6 font-display text-2xl leading-snug font-bold text-cream">
                  Not sure which <span className="text-gold-gradient italic">you need?</span>
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">
                  A discovery call sharpens your thinking and leaves you with ideas and pathways for
                  sales growth. No sales pitch — just 25 years of learnings applied to your channel.
                </p>
              </div>
              <a
                href="#contact"
                className="btn-gold group mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-6 py-3.5 font-display text-[11px] font-bold tracking-[0.2em] text-navy-950 uppercase shadow-[0_14px_35px_-10px_rgba(212,175,55,0.6)] transition-transform duration-300 hover:scale-[1.04]"
              >
                Book a conversation
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
