import { useEffect, useState } from "react";

/** Highlights the nav item matching the section currently in view. */
export function useScrollSpy(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const probe = window.scrollY + window.innerHeight * 0.38;
      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= probe) current = id;
      }
      // If we're at the very bottom, force the last section active
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 80) {
        current = ids[ids.length - 1] ?? current;
      }
      setActive(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
