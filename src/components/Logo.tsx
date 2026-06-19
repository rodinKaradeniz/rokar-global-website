import styles from "./Logo.module.css";

type LogoProps = {
  /** "light" = for light backgrounds (ink wordmark); "dark" = for dark backgrounds. */
  variant?: "light" | "dark";
  /** Hide the wordmark and render the mark only (e.g. tight mobile spots). */
  markOnly?: boolean;
  className?: string;
};

/**
 * Rokar Global identity: an abstract isometric volume (reads as a built
 * structure / parcel — deliberately not a house icon) paired with the
 * wordmark set in our expanded Archivo display face. The mark is inline SVG;
 * the wordmark is live text so it stays crisp, selectable, and accessible at
 * any size. Two tones: the clay accent for the top face, currentColor for the
 * walls — so it inverts cleanly between light and dark variants.
 */
export default function Logo({
  variant = "light",
  markOnly = false,
  className,
}: LogoProps) {
  return (
    <span
      className={[styles.logo, styles[variant], className]
        .filter(Boolean)
        .join(" ")}
    >
      <svg
        className={styles.mark}
        viewBox="0 0 32 34"
        role="img"
        aria-hidden={!markOnly}
        aria-label={markOnly ? "Rokar Global" : undefined}
        focusable="false"
      >
        {/* top face — clay accent */}
        <path d="M16 4 L28 11 L16 18 L4 11 Z" fill="var(--clay)" />
        {/* left wall — full tone */}
        <path d="M4 11 L16 18 L16 31 L4 24 Z" fill="currentColor" />
        {/* right wall — recessed tone */}
        <path
          d="M28 11 L16 18 L16 31 L28 24 Z"
          fill="currentColor"
          opacity="0.55"
        />
      </svg>
      {!markOnly && (
        <span className={styles.wordmark} aria-hidden="false">
          Rokar Global
        </span>
      )}
    </span>
  );
}
