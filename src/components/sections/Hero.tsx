import { useTranslation } from "react-i18next";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import styles from "./Hero.module.css";

const POSTER = "/assets/masaki-poster.jpg";
const VIDEO = "/assets/masaki-hero.mp4";

export default function Hero() {
  const { t } = useTranslation();
  const reduced = useReducedMotion();

  return (
    <section id="top" className={styles.hero} aria-label={t("hero.title")}>
      <div className={styles.media} aria-hidden="true">
        {reduced ? (
          <img className={styles.video} src={POSTER} alt="" />
        ) : (
          <video
            className={styles.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={POSTER}
          >
            <source src={VIDEO} type="video/mp4" />
          </video>
        )}
        <div className={styles.scrim} />
      </div>

      <div className={`container-wide ${styles.inner}`}>
        <p className={styles.eyebrow}>{t("hero.eyebrow")}</p>
        <h1 className={styles.title}>{t("hero.title")}</h1>
        <p className={styles.tagline}>{t("hero.tagline")}</p>

        <div className={styles.actions}>
          <a href="#services" className={styles.cta}>
            {t("hero.cta")}
            <span className={styles.ctaArrow} aria-hidden="true">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      <a href="#overview" className={styles.scroll} aria-label={t("hero.scroll")}>
        <span className={styles.scrollLabel}>{t("hero.scroll")}</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
}
