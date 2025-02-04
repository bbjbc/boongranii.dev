import { notFound } from 'next/navigation';

import { posts } from '~content';
import { MDXContent } from '@/components/mdx-content';
import Title from '@/components/title';
import Description from '@/components/description';
import ArticleMetadata from '@/components/(article)/article-metadata';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);

  if (!post) return;

  return {
    title: post.title,
    description: post.subTitle,
    openGraph: {
      title: post.title,
      description: post.subTitle,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export default async function Post({ params }: Params) {
  const { slug } = await params;
  const post = posts.find(post => post.slug === slug);

  if (!post) notFound();

  return (
    <article className="container">
      <header className="mb-12">
        <Title>{post.title}</Title>
        <Description>{post.subTitle}</Description>
        <ArticleMetadata date={post.date} readingTime={post.readingTime} />
      </header>

      <MDXContent code={post.code} />
    </article>
  );
}
