// @ts-check
import 'dotenv/config'
import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_URL,

  vite: {
    css: {
      devSourcemap: true,
    },
  },

  devToolbar: {
    enabled: false,
  },

  integrations: [sitemap()],
})
