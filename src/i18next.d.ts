import "i18next";
import type { resources } from "./i18n";

// Type-safe translation keys derived from en.json.
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: (typeof resources)["en"];
  }
}
