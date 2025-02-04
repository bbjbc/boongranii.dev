import { type Post, posts } from '~content';

export const getSortedPosts = (): Post[] => {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};
