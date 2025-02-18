import type { MetadataRoute } from 'next';

import { BLOG_URL } from '@/constants/path';

function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: new URL('/sitemap.xml', BLOG_URL).toString(),
  };
}

export default robots;
