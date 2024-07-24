import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), mdx(), tailwind(), react()],
  vite: {
    build: {
      sourcemap: false, // Отключаем карты исходников для устранения ошибки
    },
  },
});