import { defineConfig } from 'astro/config';
import image from "@astrojs/image";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [image(), alpinejs()]
});