import rehypeShiki from '@shikijs/rehype';
import { defineConfig, s } from 'velite';

const getReadingTime = (content: string): number => {
  return Math.max(Math.floor(content.split(' ').length / 180), 1);
};

export default defineConfig({
  mdx: {
    rehypePlugins: [
      [rehypeShiki, { themes: { light: 'github-light', dark: 'github-dark' } }],
    ],
  },
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/index.mdx',
      schema: s
        .object({
          title: s.string(),
          slug: s.slug('posts'),
          date: s.isodate(),
          video: s.file().optional(),
          subTitle: s.string(),
          image: s.image().optional(),
          metadata: s.metadata(),
          code: s.mdx(),
          content: s.markdown(),
        })
        .transform(data => ({
          ...data,
          permalink: `/posts/${data.slug}`,
          readingTime: getReadingTime(data.content),
        })),
    },
  },
});
