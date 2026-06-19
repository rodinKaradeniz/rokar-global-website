import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./VisionMission.module.css";

export default function VisionMission() {
  const { t } = useTranslation();

  const blocks = [
    {
      index: "01",
      label: t("vision.visionTitle"),
      body: t("vision.visionBody"),
    },
    {
      index: "02",
      label: t("vision.missionTitle"),
      body: t("vision.missionBody"),
    },
  ];

  return (
    <section
      id="vision"
      className={`container-wide section ${styles.section}`}
      aria-label={t("vision.eyebrow")}
    >
      <SectionHeader eyebrow={t("vision.eyebrow")} />

      <div className={styles.grid}>
        {blocks.map((block, i) => (
          <Reveal key={block.index} as="article" className={styles.block} delay={i * 90}>
            <span className={`index ${styles.index}`}>{block.index}</span>
            <h2 className={styles.label}>{block.label}</h2>
            <p className={styles.body}>{block.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
