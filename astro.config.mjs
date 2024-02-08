import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [tailwind(), react(), mdx()]
  // image: {
  //   domains: ["astro.build"],
  // }
});