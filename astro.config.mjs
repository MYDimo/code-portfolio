import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: netlify(),
  integrations: [tailwind(), react(), mdx()],
  image: {
    remotePatterns: [{ protocol: "https" }],
  }
});