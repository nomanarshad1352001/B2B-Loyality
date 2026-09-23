import { useEffect, useRef, useState } from "react";

interface CountOptions {
  /** value to animate toward while in view */
  target: number;
  /** value to animate back toward while out of view */
  from?: number;
  inView: boolean;
  duration?: number;
}

/**
 * Animates a number toward `target` when in view, and back down toward
 * `from` when it leaves the viewport — so counters count both up and down.
 */
export function useCountUp({ target, from = 0, inView, duration = 1900 }: CountOptions) {
  const [value, setValue] = useState(from);
  const current = useRef(from);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const end = inView ? target : from;
    const begin = current.current;
    if (begin === end) return;

    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      const v = begin + (end - begin) * eased;
      current.current = v;
      setValue(v);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return value;
}
