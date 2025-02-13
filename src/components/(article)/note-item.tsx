import Link from 'next/link';

import type { Note as TNote } from '~content';
import ArticleMetadata from './article-metadata';

const NoteItem = ({ note }: { note: TNote }) => {
  return (
    <li className="group">
      <Link
        href={`/notes/${note.slug}`}
        className="block text-gray-600 transition-colors duration-200 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100"
      >
        <article className="space-y-2">
          <h2 className="line-clamp-2 font-medium">{note.title}</h2>
          <ArticleMetadata date={note.date} readingTime={note.readingTime} />
        </article>
      </Link>
    </li>
  );
};

export default NoteItem;
