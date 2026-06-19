import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./CoreValues.module.css";

type Value = { name: string; description: string };

export default function CoreValues() {
  const { t } = useTranslation();
  const items = t("values.items", { returnObjects: true }) as Value[];

  return (
    <section
      id="values"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="values-title"
    >
      <SectionHeader
        eyebrow={t("values.eyebrow")}
        title={t("values.title")}
        titleId="values-title"
      />

      <ul className={styles.grid}>
        {items.map((item, i) => (
          <Reveal
            key={item.name}
            as="li"
            className={styles.item}
            delay={(i % 3) * 70}
          >
            <span className={`index ${styles.index}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.desc}>{item.description}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
