import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        author: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        tags: z.array(z.string())
    })
});

const glossaryCollection = defineCollection({
    type: "data",
    schema: z.object({
        name: z.string(),
        description: z.string(),
        link: z.string().url(),
    })
});

export const collections = {
    projects: projectsCollection,
    glossary: glossaryCollection,
};