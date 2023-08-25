import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import bookshop from '@bookshop/astro-bookshop'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://gnarly-briars.cloudvent.net',
  integrations: [bookshop(), mdx(), sitemap(), tailwind()],
})
