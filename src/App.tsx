import { useTranslation } from "react-i18next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/sections/Hero";
import Overview from "./components/sections/Overview";
import VisionMission from "./components/sections/VisionMission";
import CoreValues from "./components/sections/CoreValues";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import TargetClients from "./components/sections/TargetClients";
import Commitment from "./components/sections/Commitment";

/**
 * Checkpoint 4 — all content sections are real. Contact (Checkpoint 5) is the
 * last placeholder.
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
        <Hero />
        <Overview />
        <VisionMission />
        <CoreValues />
        <Services />
        <WhyChooseUs />
        <TargetClients />
        <Commitment />

        {/* Contact placeholder — built in Checkpoint 5 */}
        <section
          id="contact"
          className="container section"
          style={{ minHeight: "50svh", borderTop: "1px solid var(--line)" }}
        >
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2 className="display" style={{ fontSize: "var(--step-3)", marginTop: "0.5rem" }}>
            {t("contact.title")}
          </h2>
          <p style={{ color: "var(--ink-faint)", marginTop: "var(--space-sm)" }}>
            Section content — coming in the next checkpoint.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
