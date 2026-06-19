import { useTranslation } from "react-i18next";
import Reveal from "../ui/Reveal";
import styles from "./Overview.module.css";

export default function Overview() {
  const { t } = useTranslation();
  const body = t("overview.body", { returnObjects: true }) as string[];

  return (
    <section
      id="overview"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="overview-title"
    >
      <div className={styles.grid}>
        <Reveal className={styles.lead}>
          <p className="eyebrow">{t("overview.eyebrow")}</p>
          <h2 id="overview-title" className={styles.title}>
            {t("overview.title")}
          </h2>
        </Reveal>

        <Reveal className={styles.body} delay={80}>
          {body.map((para, i) => (
            <p key={i} className={styles.para}>
              {para}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
