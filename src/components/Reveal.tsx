import { type CSSProperties, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "figure" | "li";
}

/** Fades + lifts children into view once when they enter the viewport. */
export function Reveal({ children, delay = 0, className = "", as = "div" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.12);
  const Tag = as as "div";
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
