import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true })],
  site: 'https://jeanremy.github.io',
  base: '/voiceover-shrtcts',
})
