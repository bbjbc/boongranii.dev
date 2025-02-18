import type { MetadataRoute } from 'next';

import { getSortedPosts, getSortedNotes } from '@/data/data-accessor';
import { ROUTER_PATH, BLOG_URL } from '@/constants/path';

const lastModifiedPostDate = getSortedPosts()[0].date;
const lastModifiedNoteDate = getSortedNotes()[0].date;

function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = getSortedPosts().map(post => {
    const url = new URL(
      `${ROUTER_PATH.POSTS.PATH}/${post.slug}`,
      BLOG_URL,
    ).toString();

    return {
      url,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
    };
  });

  const notes: MetadataRoute.Sitemap = getSortedNotes().map(note => {
    const url = new URL(
      `${ROUTER_PATH.NOTES.PATH}/${note.slug}`,
      BLOG_URL,
    ).toString();

    return {
      url,
      lastModified: new Date(note.date),
      changeFrequency: 'monthly',
    };
  });

  return [
    {
      url: BLOG_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: new URL(ROUTER_PATH.POSTS.PATH, BLOG_URL).toString(),
      lastModified: new Date(lastModifiedPostDate),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: new URL(ROUTER_PATH.NOTES.PATH, BLOG_URL).toString(),
      lastModified: new Date(lastModifiedNoteDate),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...posts,
    ...notes,
  ];
}

export default sitemap;
