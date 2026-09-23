import { BRANDS } from "../data/content";
import { Reveal } from "./Reveal";

function BrandRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {BRANDS.map((brand) => (
        <span key={`${ariaHidden ? "b" : "a"}-${brand}`} className="flex items-center">
          <span className="px-7 font-display text-sm font-semibold tracking-[0.22em] whitespace-nowrap text-cream/45 uppercase transition-colors duration-300 hover:text-gold-300 sm:text-base">
            {brand}
          </span>
          <span aria-hidden="true" className="h-1.5 w-1.5 rotate-45 bg-gold-500/50" />
        </span>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section aria-label="Brands and programs worked on" className="relative py-16 sm:py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <p className="overline-label centered justify-center">Brands &amp; programs worked on</p>
        <p className="mt-5 font-display text-lg font-medium text-cream/85 sm:text-xl">
          Over 20 years serving <span className="text-gold-gradient font-bold">100+ clients</span>{" "}
          with incentives, channel &amp; loyalty programs
        </p>
      </Reveal>

      <div className="marquee marquee-mask mt-12 overflow-hidden border-y border-hairline bg-navy-900/30 py-7">
        <div className="marquee-track flex" role="list" aria-label="Client brands">
          <BrandRow />
          <BrandRow ariaHidden />
        </div>
      </div>
    </section>
  );
}
