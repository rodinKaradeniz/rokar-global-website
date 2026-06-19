import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Self-hosted OFL fonts. Archivo's "standard" build carries BOTH the weight
// (100–900) and width (62%–125%) axes — the width axis gives us the expanded,
// architectural display register via `font-stretch`.
import "@fontsource-variable/archivo/standard.css";
import "@fontsource-variable/hanken-grotesk";

import "./styles/tokens.css";
import "./styles/global.css";
import "./i18n";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
