import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Define the blog collection using the modern Astro 6 Content Layer loader API
const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('SciCalcX'),
    category: z.string().optional(),
    readTime: z.string().optional(),
    calculatorUrl: z.string().optional(),
    calculatorLabel: z.string().optional(),
    related: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Export collections
export const collections = {
  blog: blogCollection,
};
