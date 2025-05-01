// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string
	readonly API_TOKEN: string
	readonly API_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
