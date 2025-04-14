// <reference types="astro/client" />
interface ImportMetaEnv {
	readonly GITHUB_TOKEN: string
	readonly API_TOKEN: string
	readonly XAPI_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
