import { defineConfig, s } from 'velite';

export default defineConfig({
  collections: {
    posts: {
      name: 'Post',
      pattern: 'posts/**/*.mdx',
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
        .transform(data => ({ ...data, permalink: `/post/${data.slug}` })),
    },
  },
});
