import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  integrations: [preact({ compat: true })],
  site: 'https://voiceover-shortcuts.jeanremy.github.io',
  base: '/',
})
