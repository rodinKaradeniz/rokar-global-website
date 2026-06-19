// Single source of truth for the anchored section nav.
// `labelKey` points into en.json `nav.*`; `id` is the section's DOM id.
export const navItems = [
  { id: "overview", labelKey: "nav.overview" },
  { id: "vision", labelKey: "nav.vision" },
  { id: "values", labelKey: "nav.values" },
  { id: "services", labelKey: "nav.services" },
  { id: "why-us", labelKey: "nav.whyUs" },
  { id: "clients", labelKey: "nav.clients" },
  { id: "contact", labelKey: "nav.contact" },
] as const;
