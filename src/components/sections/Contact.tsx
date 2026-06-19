import { useTranslation } from "react-i18next";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const { t } = useTranslation();

  const callNumber = t("contact.callNumber");
  const whatsappNumber = t("contact.whatsappNumber");
  const email = t("contact.email");
  const office = t("contact.office");

  const telHref = `tel:${callNumber.replace(/[^\d+]/g, "")}`;
  const waHref = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`;
  const mailHref = `mailto:${email}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    office,
  )}`;

  const methods = [
    { label: t("contact.callLabel"), value: callNumber, href: telHref, external: false },
    { label: t("contact.whatsappLabel"), value: whatsappNumber, href: waHref, external: true },
    { label: t("contact.emailLabel"), value: email, href: mailHref, external: false },
  ];

  return (
    <section
      id="contact"
      className={`container-wide section ${styles.section}`}
      aria-labelledby="contact-title"
    >
      <SectionHeader
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        titleId="contact-title"
      />

      <div className={styles.grid}>
        {/* Direct contact methods */}
        <Reveal className={styles.methods}>
          <p className={styles.intro}>{t("contact.intro")}</p>
          <ul className={styles.methodList}>
            {methods.map((m) => (
              <li key={m.label}>
                <a
                  className={styles.method}
                  href={m.href}
                  {...(m.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className={styles.methodLabel}>{m.label}</span>
                  <span className={styles.methodValue}>{m.value}</span>
                  <span className={styles.methodArrow} aria-hidden="true">
                    &rarr;
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Addresses + map + pending fields */}
        <Reveal className={styles.details} delay={80}>
          <div className={styles.detailBlock}>
            <h3 className={styles.detailLabel}>{t("contact.officeLabel")}</h3>
            <p className={styles.detailValue}>{office}</p>
            <a
              className={styles.mapLink}
              href={mapHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("contact.mapCta")}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>

          <div className={styles.detailBlock}>
            <h3 className={styles.detailLabel}>{t("contact.warehouseLabel")}</h3>
            <p className={styles.detailValue}>{t("contact.warehouse")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
