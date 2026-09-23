import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { IMAGES } from "../data/content";

const SHOW_AFTER_MS = 11000;
const STORAGE_KEY = "b2b-promo-dismissed";

export function PromoPopup() {
  const [show, setShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previousFocus = useRef<Element | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      previousFocus.current = document.activeElement;
      setShow(true);
    }, SHOW_AFTER_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!show) return;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  const dismiss = () => {
    setShow(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
    (previousFocus.current as HTMLElement | null)?.focus?.();
  };

  if (!show) return null;

  const copy = (
    <>
      <p className="font-display text-[10px] font-semibold tracking-[0.34em] text-gold-400 uppercase">
        Before you spend on loyalty tech
      </p>
      <h2 className="mt-3 font-display text-xl leading-snug font-bold text-cream">
        A complimentary <span className="text-gold-gradient italic">channel diagnostic.</span>
      </h2>
      <p className="mt-2.5 text-[13px] leading-relaxed text-mist">
        Twenty-five minutes. You&rsquo;ll walk away with one behavioural insight you can use this
        quarter — whether we work together or not.
      </p>
    </>
  );

  const actions = (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <a
        href="#contact"
        onClick={dismiss}
        className="btn-gold group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-600 px-5 py-2.5 font-display text-[10px] font-bold tracking-[0.2em] text-navy-950 uppercase transition-transform duration-300 hover:scale-[1.04]"
      >
        Claim the session
        <ArrowRight aria-hidden="true" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
      <button
        type="button"
        onClick={dismiss}
        className="font-display text-[10px] font-bold tracking-[0.2em] text-mist uppercase transition-colors hover:text-cream"
      >
        Not now
      </button>
    </div>
  );

  /* ------- mobile: bottom sheet ------- */
  if (isMobile) {
    return (
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="false"
        aria-label="Limited offer — complimentary channel diagnostic"
        className="popup-sheet fixed inset-x-3 bottom-3 z-[80] rounded-3xl border border-gold-500/40 bg-navy-900/95 p-5 pt-3 shadow-[0_-20px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl"
      >
        <div aria-hidden="true" className="mx-auto h-1 w-10 rounded-full bg-gold-500/40" />
        <div className="mt-4 flex gap-4">
          <img
            src={IMAGES.harbourBridge}
            alt=""
            className="h-20 w-20 shrink-0 rounded-2xl object-cover ring-1 ring-gold-500/40"
          />
          <div className="min-w-0">
            {copy}
          </div>
        </div>
        {actions}
        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-hairline text-mist transition-colors hover:text-cream"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    );
  }

  /* ------- desktop: floating corner card ------- */
  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="false"
      aria-label="Limited offer — complimentary channel diagnostic"
      className="popup-card fixed right-8 bottom-8 z-[80] w-[380px] overflow-hidden rounded-3xl border border-gold-500/40 bg-navy-900/95 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.9)] backdrop-blur-xl"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700"
      />
      <div className="relative">
        <img src={IMAGES.harbourBridge} alt="" className="h-28 w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
        <button
          ref={closeRef}
          type="button"
          onClick={dismiss}
          aria-label="Close offer"
          className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-hairline bg-navy-950/70 text-mist backdrop-blur-md transition-colors hover:text-cream"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="p-6 pt-3">
        {copy}
        {actions}
      </div>
    </div>
  );
}
