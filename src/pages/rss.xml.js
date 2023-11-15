import rss from "@astrojs/rss";
import { getCollection } from 'astro:content';

export async function GET(context) {
  const projects = await getCollection("projects");
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: projects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projekty/${project.slug}/`,
    })),
    customData: `<language>cs</language>`,
  });
}