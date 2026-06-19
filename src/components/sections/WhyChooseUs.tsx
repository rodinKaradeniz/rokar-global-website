import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./WhyChooseUs.module.css";

export default function WhyChooseUs() {
  const { t } = useTranslation();
  const items = t("whyUs.items", { returnObjects: true }) as string[];

  return (
    <section
      id="why-us"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="why-title"
    >
      <SectionHeader
        eyebrow={t("whyUs.eyebrow")}
        title={t("whyUs.title")}
        titleId="why-title"
      />

      <ul className={styles.grid}>
        {items.map((item, i) => (
          <Reveal
            key={item}
            as="li"
            className={styles.item}
            delay={(i % 2) * 70}
          >
            <span className={styles.check} aria-hidden="true">
              <svg viewBox="0 0 16 16" width="16" height="16">
                <path
                  d="M3 8.5 L6.5 12 L13 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </svg>
            </span>
            <span className={styles.label}>{item}</span>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
