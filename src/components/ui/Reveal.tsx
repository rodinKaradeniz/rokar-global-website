import type { ElementType, ReactNode } from "react";
import { useReveal } from "../../hooks/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger child entrance by this many ms (applied via transition-delay). */
  delay?: number;
};

/**
 * One-shot scroll reveal — our single, restrained motion device for section
 * entrances. Resolves immediately under prefers-reduced-motion (see useReveal).
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={["reveal", visible ? "is-visible" : "", className]
        .filter(Boolean)
        .join(" ")}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
