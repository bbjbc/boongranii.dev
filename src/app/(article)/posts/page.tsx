import { posts } from '~content';

import Title from '@/components/title';
import PostItem from '@/components/(article)/post-item';

export default function Posts() {
  return (
    <>
      <header>
        <Title>느린 생각, 긴 기록</Title>
      </header>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {posts.map(post => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
}
