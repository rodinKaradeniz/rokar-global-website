import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Overview from "./components/sections/Overview";
import VisionMission from "./components/sections/VisionMission";
import { navItems } from "./navItems";

/**
 * Checkpoint 3 — Hero + Overview + Vision/Mission are real.
 * Remaining sections (values, services, why-us, clients, contact) are still
 * placeholders and land in Checkpoints 4–5.
 */
const BUILT = new Set(["overview", "vision"]);

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />

      <main id="main">
        <Hero />
        <Overview />
        <VisionMission />

        {/* Placeholders for sections not yet built */}
        {navItems
          .filter((item) => !BUILT.has(item.id))
          .map((item) => (
            <section
              key={item.id}
              id={item.id}
              className="container section"
              style={{ minHeight: "50svh", borderTop: "1px solid var(--line)" }}
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
