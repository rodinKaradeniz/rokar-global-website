import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./TargetClients.module.css";

export default function TargetClients() {
  const { t } = useTranslation();
  const items = t("clients.items", { returnObjects: true }) as string[];

  return (
    <section
      id="clients"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="clients-title"
    >
      <SectionHeader
        eyebrow={t("clients.eyebrow")}
        title={t("clients.title")}
        titleId="clients-title"
      />

      <div className={styles.grid}>
        {items.map((item, i) => (
          <Reveal
            key={item}
            className={styles.cell}
            delay={(i % 3) * 60}
          >
            <span className={styles.dot} aria-hidden="true" />
            <span className={styles.label}>{item}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
