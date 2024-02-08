import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify({
    imageCDN: false,
  }),
  integrations: [tailwind(), react(), mdx()],
  image: {
    domains: ["astro.build"],
  }
});