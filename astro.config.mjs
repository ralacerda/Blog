import { defineConfig } from "astro/config";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), vue(), critters()],
  markdown: {
    syntaxHighlight: "prism",
  },
});
