import { useTranslation } from "react-i18next";
import Reveal from "../ui/Reveal";
import styles from "./Commitment.module.css";

export default function Commitment() {
  const { t } = useTranslation();

  return (
    <section
      id="commitment"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="commitment-title"
    >
      <Reveal className={styles.inner}>
        <p className="eyebrow">{t("commitment.eyebrow")}</p>
        <p id="commitment-title" className={styles.statement}>
          {t("commitment.body")}
        </p>
      </Reveal>
    </section>
  );
}
