import { Metadata } from 'next';

import { posts } from '~content';

import Title from '@/components/title';
import PostItem from '@/components/(article)/post-item';

export const metadata: Metadata = {
  title: '느린 생각, 긴 기록',
  description:
    '일상에서 마주치는 순간들과 개발하며 깨달은 것들을 천천히 기록합니다.',
};

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
