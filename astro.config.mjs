import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { configDotenv } from "dotenv";

import react from "@astrojs/react";
import vercel from "@astrojs/vercel/static";

configDotenv();

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    isr: true,
  }),
  server: {
    host: "0.0.0.0",
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  trailingSlash: "never",
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    react({
      include: ["**/react/*"],
      experimentalReactChildren: true,
    }),
  ],
});
