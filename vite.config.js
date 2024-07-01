import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

export default defineConfig({
  base: '/grand-silver/',
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@api": resolve(__dirname, "src/api"),
      "@components": resolve(__dirname, "src/components"),
      "@img": resolve(__dirname, "src/img"),
      "@styles": resolve(__dirname, "src/styles"),
      "@pages": resolve(__dirname, "src/pages"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@contexts": resolve(__dirname, "src/contexts"),
      "@fonts": resolve(__dirname, "src/fonts"),
    },
  },
});
