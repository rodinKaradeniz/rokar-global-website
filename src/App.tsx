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
import Contact from "./components/sections/Contact";

/** Full single-page site — all sections live. */
export default function App() {
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
        <Contact />
      </main>

      <Footer />
    </>
  );
}
