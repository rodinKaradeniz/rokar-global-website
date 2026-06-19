import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { navItems } from "./navItems";

/**
 * Checkpoint 2 — real shell (Header + Footer) with placeholder section anchors
 * so the anchored nav, sticky header, and smooth scroll work end to end.
 * Hero + content sections replace these placeholders in Checkpoints 3–4.
 */
export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero placeholder */}
        <section
          id="top"
          style={{
            minHeight: "100svh",
            display: "grid",
            alignContent: "center",
            paddingBlock: "var(--space-3xl)",
          }}
          className="container"
        >
          <p className="eyebrow">{t("hero.eyebrow")}</p>
          <h1 className="display" style={{ fontSize: "var(--step-5)", marginTop: "0.5rem" }}>
            {t("hero.title")}
          </h1>
          <p
            className="display"
            style={{
              fontSize: "var(--step-2)",
              fontWeight: 600,
              color: "var(--ink-soft)",
              marginTop: "var(--space-md)",
              maxWidth: "24ch",
            }}
          >
            {t("hero.tagline")}
          </p>
        </section>

        {/* Section placeholders */}
        {navItems.map((item) => (
          <section
            key={item.id}
            id={item.id}
            className="container section"
            style={{ minHeight: "60svh", borderTop: "1px solid var(--line)" }}
          >
            <p className="eyebrow">{t(item.labelKey)}</p>
            <h2 className="display" style={{ fontSize: "var(--step-3)", marginTop: "0.5rem" }}>
              {t(item.labelKey)}
            </h2>
            <p style={{ color: "var(--ink-faint)", marginTop: "var(--space-sm)" }}>
              Section content — coming in the next checkpoint.
            </p>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}
