import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: { build: { cssTarget: "safari15" } },
  site: "https://e18e.rman.dev",
});
