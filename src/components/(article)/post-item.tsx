import Link from 'next/link';

import type { Post as TPost } from '~content';
import ArticleThumbnail from './article-thumbnail';
import ArticleMetadata from './article-metadata';

const PostItem = ({ post }: { post: TPost }) => {
  return (
    <li key={post.slug} className="group">
      <Link
        href={`/posts/${post.slug}`}
        className="block overflow-hidden rounded-lg border border-gray-300 shadow-sm transition-all duration-300 hover:border-gray-800 hover:bg-gray-100/60 hover:shadow-md dark:border-gray-700 dark:hover:border-gray-200 dark:hover:bg-gray-600/30"
      >
        {post.image && (
          <ArticleThumbnail image={post.image.src} title={post.title} />
        )}
        <article className="space-y-3 p-4">
          <div className="flex flex-col gap-0.5">
            <h2 className="line-clamp-2 font-bold tracking-tight text-gray-600 dark:text-gray-200">
              {post.title}
            </h2>
            <p className="line-clamp-2 text-xs font-medium text-gray-600 dark:text-gray-300">
              {post.subTitle}
            </p>
          </div>

          <ArticleMetadata
            date={post.date}
            readingTime={post.metadata.readingTime}
          />
        </article>
      </Link>
    </li>
  );
};

export default PostItem;
