import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), mdx(), tailwind()],
});
