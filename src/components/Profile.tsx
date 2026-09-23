import { useCallback, useRef, useState } from "react";
import { Check, Quote } from "lucide-react";
import { FOCUS_AREAS, IMAGES } from "../data/content";
import { Reveal } from "./Reveal";

export function Profile() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
      e.preventDefault();
      const dir = e.key === "ArrowRight" ? 1 : -1;
      const next = (active + dir + FOCUS_AREAS.length) % FOCUS_AREAS.length;
      setActive(next);
      tabRefs.current[next]?.focus();
    },
    [active]
  );

  const current = FOCUS_AREAS[active];

  return (
    <section id="experience" aria-label="Profile and experience" className="relative py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-[-15%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.09),transparent_65%)] blur-2xl"
      />
      <div className="relative mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* portrait side */}
        <div className="relative">
          <Reveal className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-4 translate-x-4 translate-y-4 rounded-[2rem] border border-gold-500/20"
            />
            <figure className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-gold-500/30">
              <img
                src={IMAGES.portrait}
                alt="Mark Farrell standing in an elegant modern office"
                className="h-[30rem] w-full object-cover object-top sm:h-[34rem]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
              <figcaption className="absolute bottom-5 left-5 rounded-full border border-hairline bg-navy-950/70 px-4 py-2 font-display text-[10px] tracking-[0.3em] text-gold-300 uppercase backdrop-blur-md">
                The incentive architect
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={160}>
            <blockquote className="relative z-10 -mt-10 ml-6 max-w-md rounded-2xl border border-hairline bg-navy-900/95 p-6 shadow-[0_30px_70px_-25px_rgba(0,0,0,0.85)] backdrop-blur-xl sm:ml-10">
              <Quote aria-hidden="true" className="h-6 w-6 text-gold-500" />
              <p className="mt-3 font-display text-[15px] leading-relaxed font-medium text-cream/95 italic">
                The work almost always comes down to this — what behaviour do you need from the
                people who sell on your behalf, and what is that behaviour worth?
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold-300 to-gold-600 font-display text-xs font-bold text-navy-950">
                  MF
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-cream">Mark Farrell</p>
                  <p className="text-xs text-mist">Principal — B2B Loyalty &amp; Channel Incentives</p>
                </div>
              </footer>
            </blockquote>
          </Reveal>

          <Reveal delay={240} className="mt-8 ml-6 flex flex-wrap gap-3 sm:ml-10">
            {["Bridgestone", "James Hardie", "FUJIFILM"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-hairline px-4 py-1.5 font-display text-[10px] tracking-[0.26em] text-cream/60 uppercase"
              >
                {b}
              </span>
            ))}
          </Reveal>
        </div>

        {/* copy side */}
        <div>
          <Reveal>
            <p className="overline-label">Profile</p>
            <h2 className="mt-6 font-display text-3xl leading-tight font-bold text-cream sm:text-[2.6rem] sm:leading-[1.15]">
              Independent advice that builds your{" "}
              <span className="text-gold-gradient italic">incentive architecture.</span>
            </h2>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-7 space-y-5 text-[15px] leading-relaxed text-mist">
              <p>
                Most people advising on loyalty and incentive technology in this country are paid
                wages — and commission — by the vendor they work for. Companies with a narrow lens
                that pretend to be all things to every client, walking each one down a clearly
                defined sales path.
              </p>
              <p>
                <span className="text-cream">I&rsquo;m very different — unique in Australia&rsquo;s
                B2B channel, incentive and loyalty landscape.</span> As your Incentive Architect I
                design the behaviour you need, engineer the mechanics that pay for it, and stay with
                you until your team can run the program without me. Just independent architecture
                that turns your trade channel into measurable engagement and revenue.
              </p>
            </div>
          </Reveal>

          {/* tabbed focus areas */}
          <Reveal delay={220} className="mt-10">
            <p className="mb-4 font-display text-[10px] font-semibold tracking-[0.34em] text-gold-400 uppercase">
              Where the architecture lands
            </p>
            <div
              role="tablist"
              aria-label="Focus areas"
              onKeyDown={onKeyDown}
              className="flex flex-wrap gap-2.5"
            >
              {FOCUS_AREAS.map((area, i) => {
                const selected = i === active;
                return (
                  <button
                    key={area.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    role="tab"
                    id={`tab-${area.id}`}
                    aria-selected={selected}
                    aria-controls={`panel-${area.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`rounded-full border px-4 py-2 font-display text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300 ${
                      selected
                        ? "border-gold-500 bg-gold-500/15 text-gold-200 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                        : "border-hairline text-mist hover:border-gold-500/40 hover:text-cream"
                    }`}
                  >
                    {area.label}
                  </button>
                );
              })}
            </div>

            <div
              key={current.id}
              role="tabpanel"
              id={`panel-${current.id}`}
              aria-labelledby={`tab-${current.id}`}
              className="fade-slide mt-6 rounded-2xl border border-hairline bg-navy-900/50 p-6"
            >
              <p className="text-[15px] leading-relaxed text-cream/90">{current.detail}</p>
              <p className="mt-4 flex items-start gap-2.5 text-sm leading-relaxed text-gold-300/90">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                {current.point}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
