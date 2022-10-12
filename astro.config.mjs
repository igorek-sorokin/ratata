import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import alpinejs from "@astrojs/alpinejs";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), alpinejs(), mdx()]
});