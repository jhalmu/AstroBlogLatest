// @ts-check
import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import tailwindcss from '@tailwindcss/vite'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
        devToolbar: {
                enabled: false
        },
        output: 'static',
        markdown: {
                shikiConfig: {
                        theme: 'github-dark-dimmed',
                        wrap: true,
                },
        },
        site: 'https://juhahalmu.net',
        server: {
                allowedHosts: true,
                port: 4321,
                host: true
        },
        integrations: [svelte(), sitemap(), mdx()],
        vite: {
                plugins: [tailwindcss()]
        },
        prefetch: {
                prefetchAll: true,
                defaultStrategy: 'load'
        },
        adapter: node({
                mode: 'standalone'
        })
})
