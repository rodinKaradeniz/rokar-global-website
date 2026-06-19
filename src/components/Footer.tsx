import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import { navItems } from "../navItems";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container-wide ${styles.inner}`}>
        <div className={styles.brandCol}>
          <a href="#top" className={styles.brandLink} aria-label="Rokar Global — home">
            <Logo variant="dark" className={styles.logo} />
          </a>
          <p className={styles.tagline}>{t("footer.tagline")}</p>
        </div>

        <nav className={styles.navCol} aria-label="Footer">
          <p className={styles.navHeading}>{t("footer.sections")}</p>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className={styles.navLink}>
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={`container-wide ${styles.bottom}`}>
        <p className={styles.copy}>
          {t("footer.rightsPrefix")} {year} {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
