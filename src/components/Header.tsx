import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import { navItems } from "../navItems";
import styles from "./Header.module.css";

export default function Header() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Subtle header treatment once the hero scrolls away (rAF-throttled).
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        frame = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  // Return focus to the toggle when the menu closes.
  useEffect(() => {
    if (!menuOpen) menuButtonRef.current?.blur();
  }, [menuOpen]);

  // Over the dark hero (top of page, transparent header) the header content
  // must be light; once scrolled onto the light body — or with the light mobile
  // menu open — it switches to dark.
  const onLightSurface = scrolled || menuOpen;

  return (
    <header
      className={[
        styles.header,
        scrolled ? styles.scrolled : "",
        onLightSurface ? "" : styles.overHero,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`container-wide ${styles.bar}`}>
        <a href="#top" className={styles.brand} aria-label="Rokar Global — home">
          <Logo variant={onLightSurface ? "light" : "dark"} />
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`} className={styles.link}>
              {t(item.labelKey)}
            </a>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={styles.menuToggleLabel}>
            {menuOpen ? t("nav.close") : t("nav.menu")}
          </span>
          <span
            className={`${styles.menuIcon} ${menuOpen ? styles.menuIconOpen : ""}`}
            aria-hidden="true"
          >
            <span />
            <span />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="Primary mobile">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={styles.mobileLink}
              style={{ transitionDelay: menuOpen ? `${60 + i * 40}ms` : "0ms" }}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.mobileLinkIndex}>
                {String(i + 1).padStart(2, "0")}
              </span>
              {t(item.labelKey)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
