import { defineCollection, z } from 'astro:content'
import { rssSchema } from '@astrojs/rss'
//import { blueskyPostsLoader } from 'astro-loader-bluesky-posts'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().optional(),
		image: z
			.object({
				src: z.string(),
				alt: z.string()
			})
			.optional(),
		tags: z.array(z.string()).default([]),
		lang: z.string().default('fi'),
		draft: z.boolean().default(false)
		//relatedPosts: z.array(reference('blog')).optional()
	})
})
// RSS stuff
const rss = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: rssSchema
})

// // Bluesky stuff
// const bluesky = defineCollection({
// 	loader: blueskyPostsLoader({
// 		uris: ['https://bsky.app/profile/bsky.app/post/3l6oveex3ii2l']
// 		// Check the configuration below
// 	})
// })

export const collections = { blog, rss }
