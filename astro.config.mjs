// @ts-check
import 'dotenv/config'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_URL,
  vite: {
    css: {
      devSourcemap: true,
    },
  },
})
