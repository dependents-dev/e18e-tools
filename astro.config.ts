import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  vite: { plugins: [tailwindcss()], build: { cssTarget: "safari15" } },
  site: "https://e18e.rman.dev",
});
