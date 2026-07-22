import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the blog collection using the modern Astro 6 Content Layer loader API
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
};
