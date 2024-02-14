import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
	// Must be 'static' or 'hybrid'
	output: "static",
	adapter: vercelStatic(),
	integrations: [
		tailwind(),
		react({
			include: ["**/react/*"],
		}),
		mdx(),
	],
	image: {
		domains: ["apod.nasa.gov"],
	},
});
