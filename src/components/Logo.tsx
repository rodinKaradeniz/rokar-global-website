import styles from "./Logo.module.css";

type LogoProps = {
  /** "light" = for light backgrounds (ink wordmark); "dark" = for dark backgrounds. */
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Rokar Global wordmark, set in our expanded Archivo display face. Live text so
 * it stays crisp, selectable, and accessible at any size. A geometric brand
 * mark is intentionally omitted for now (pending the company's direction).
 */
export default function Logo({ variant = "light", className }: LogoProps) {
  return (
    <span
      className={[styles.logo, styles[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      <span className={styles.wordmark}>Rokar Global</span>
    </span>
  );
}
