import { type Post, type Note, posts, notes } from '~content';

export const getSortedPosts = (): Post[] => {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};

export const getSortedNotes = (): Note[] => {
  return notes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};
