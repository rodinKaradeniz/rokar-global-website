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

  // Brief contact info surfaced inside the full-screen mobile menu.
  const callNumber = t("contact.callNumber");
  const whatsappNumber = t("contact.whatsappNumber");
  const email = t("contact.email");
  const menuContacts = [
    { label: t("contact.callLabel"), value: callNumber, href: `tel:${callNumber.replace(/[^\d+]/g, "")}`, external: false },
    { label: t("contact.whatsappLabel"), value: whatsappNumber, href: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`, external: true },
    { label: t("contact.emailLabel"), value: email, href: `mailto:${email}`, external: false },
  ];

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
          aria-label={menuOpen ? t("nav.close") : t("nav.menu")}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <svg
              className={styles.closeIcon}
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M8 8 L24 24 M24 8 L8 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <>
              <span className={styles.menuToggleLabel}>{t("nav.menu")}</span>
              <span className={styles.menuIcon} aria-hidden="true">
                <span />
                <span />
              </span>
            </>
          )}
        </button>
      </div>

      {/* Full-viewport mobile menu */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        hidden={!menuOpen}
      >
        <div className={styles.mobileInner}>
          <nav className={styles.mobileNav} aria-label="Primary mobile">
            {navItems.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={styles.mobileLink}
                style={{ transitionDelay: menuOpen ? `${60 + i * 35}ms` : "0ms" }}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.mobileLinkIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {t(item.labelKey)}
              </a>
            ))}
          </nav>

          <div className={styles.mobileFoot}>
            <p className={styles.mobileMotto}>{t("hero.tagline")}</p>
            <ul className={styles.mobileContact}>
              {menuContacts.map((c) => (
                <li key={c.label}>
                  <a
                    className={styles.mobileContactLink}
                    href={c.href}
                    onClick={() => setMenuOpen(false)}
                    {...(c.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span className={styles.mobileContactLabel}>{c.label}</span>
                    <span className={styles.mobileContactValue}>{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
