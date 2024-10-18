import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    lib: {
      name: "App",
      entry: "./index.html",
      formats: ["iife"]
    },
  },
  plugins: [
    svelte({
      configFile: false,
    }),
    viteSingleFile()
  ],
});
