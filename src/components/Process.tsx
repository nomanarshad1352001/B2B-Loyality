import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { STEPS } from "../data/content";
import { Reveal } from "./Reveal";

const AUTO_MS = 6800;

export function Process() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const nodeRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const step = STEPS[active];

  const go = useCallback(
    (i: number, manual = true) => {
      setActive((i + STEPS.length) % STEPS.length);
      if (manual) setAuto(false);
    },
    []
  );

  useEffect(() => {
    if (!auto || paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % STEPS.length), AUTO_MS);
    return () => clearInterval(t);
  }, [auto, paused]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const next = (active + (e.key === "ArrowRight" ? 1 : -1) + STEPS.length) % STEPS.length;
      go(next);
      nodeRefs.current[next]?.focus();
    }
  };

  return (
    <section
      id="process"
      aria-label="Engagement process"
      className="relative overflow-hidden py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10%] bottom-[-20%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(29,56,102,0.45),transparent_65%)] blur-2xl"
      />
      <div
        className="relative mx-auto max-w-7xl px-5 sm:px-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="overline-label centered justify-center">The engagement arc</p>
          <h2 className="mt-6 font-display text-3xl leading-tight font-bold text-cream sm:text-[2.6rem] sm:leading-[1.15]">
            From diagnostic to a team that{" "}
            <span className="text-gold-gradient italic">runs without me.</span>
          </h2>
        </Reveal>

        {/* -------- horizontal step tracker -------- */}
        <Reveal delay={140} className="mt-16">
          <div
            role="tablist"
            aria-label="Engagement stages"
            onKeyDown={onKeyDown}
            className="relative"
          >
            {/* baseline + progress (desktop) */}
            <div aria-hidden="true" className="absolute top-6 right-[10%] left-[10%] hidden h-px bg-navy-700 lg:block" />
            <div
              aria-hidden="true"
              className="step-line absolute top-6 left-[10%] hidden h-[2px] -translate-y-1/2 rounded-full lg:block"
              style={{ width: `${(active / (STEPS.length - 1)) * 80}%` }}
            />

            <ol className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
              {STEPS.map((s, i) => {
                const selected = i === active;
                const done = i < active;
                return (
                  <li key={s.id} className="flex justify-center">
                    <button
                      type="button"
                      role="tab"
                      id={`step-tab-${s.id}`}
                      aria-selected={selected}
                      aria-controls="step-panel"
                      ref={(el) => {
                        nodeRefs.current[i] = el;
                      }}
                      onClick={() => go(i)}
                      className="group flex flex-col items-center gap-3"
                    >
                      <span
                        className={`relative grid h-12 w-12 place-items-center rounded-full border font-display text-sm font-bold transition-all duration-500 ${
                          selected
                            ? "scale-110 border-gold-400 bg-gradient-to-br from-gold-300 to-gold-600 text-navy-950 shadow-[0_0_35px_rgba(212,175,55,0.45)]"
                            : done
                              ? "border-gold-500/60 bg-navy-900 text-gold-300"
                              : "border-hairline bg-navy-950 text-mist group-hover:border-gold-500/50 group-hover:text-cream"
                        }`}
                      >
                        {s.num}
                        {selected && (
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 animate-ping rounded-full border border-gold-400/60 [animation-duration:2.2s]"
                          />
                        )}
                      </span>
                      <span
                        className={`font-display text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${
                          selected ? "text-gold-300" : "text-mist group-hover:text-cream"
                        }`}
                      >
                        {s.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        {/* -------- active panel -------- */}
        <Reveal delay={220} className="mt-14">
          <div className="card-sheen relative overflow-hidden rounded-[2rem] border border-hairline bg-navy-900/50">
            <div
              key={step.id}
              id="step-panel"
              role="tabpanel"
              aria-labelledby={`step-tab-${step.id}`}
              className="fade-slide grid lg:grid-cols-[1.15fr_1fr]"
            >
              <div className="p-8 sm:p-12">
                <p className="font-display text-xs font-bold tracking-[0.4em] text-gold-500">
                  {step.num}
                </p>
                <h3 className="mt-4 font-display text-2xl font-bold text-cream sm:text-3xl">
                  {step.tagline}
                </h3>
                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mist">{step.text}</p>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {step.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2 rounded-full border border-gold-500/30 bg-navy-950/60 px-4 py-2 text-xs font-medium tracking-wide text-gold-200"
                    >
                      <Check aria-hidden="true" className="h-3.5 w-3.5" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-56">
                <img
                  src={step.image}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/35 to-transparent" />
              </div>
            </div>

            {/* controls */}
            <div className="flex items-center justify-between border-t border-hairline px-6 py-4 sm:px-8">
              <div className="flex gap-2">
                {STEPS.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to stage ${i + 1}: ${s.title}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active ? "w-8 bg-gold-400" : "w-1.5 bg-navy-600 hover:bg-gold-700"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-display text-xs tracking-[0.25em] text-mist tabular-nums">
                  0{active + 1} / 0{STEPS.length}
                </span>
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  aria-label="Previous stage"
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-cream transition-all duration-300 hover:border-gold-500 hover:text-gold-300"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  aria-label="Next stage"
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/50 bg-gold-500/10 text-gold-300 transition-all duration-300 hover:bg-gold-500/25"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
