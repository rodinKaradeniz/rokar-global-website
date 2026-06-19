import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./Services.module.css";

type Service = { name: string; description: string; points?: string[] };

export default function Services() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true }) as Service[];

  return (
    <section
      id="services"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="services-title"
    >
      <SectionHeader
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        titleId="services-title"
      />

      <div className={styles.grid}>
        {items.map((service, i) => (
          <Reveal
            key={service.name}
            as="article"
            className={styles.card}
            delay={(i % 2) * 80}
          >
            <span className={`index ${styles.index}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className={styles.name}>{service.name}</h3>
            <p className={styles.desc}>{service.description}</p>
            {service.points && (
              <ul className={styles.points}>
                {service.points.map((point) => (
                  <li key={point} className={styles.point}>
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
