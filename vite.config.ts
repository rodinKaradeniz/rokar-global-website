import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static marketing site — builds to dist/, deployable to Vercel/Netlify/Cloudflare Pages.
export default defineConfig({
  plugins: [react()],
});
