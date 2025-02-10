import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getSortedPosts } from '@/data/data-accessor';
import { MDXContent } from '@/components/mdx-content';
import { extractHeadings } from '@/app/utils/extract-headings';
import { getImageMetadata } from '@/app/utils/image-metadata';
import Title from '@/components/title';
import Description from '@/components/description';
import ArticleMetadata from '@/components/(article)/article-metadata';
import ContentNavigation from '@/components/(article)/content-navigation';
import TableOfContents from '@/components/toc';
import FloatingButton from '@/components/common/floating-button';

interface Params {
  params: Promise<{ slug: string }>;
}

const posts = getSortedPosts();

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

  const prevPost = posts[posts.indexOf(post) - 1];
  const nextPost = posts[posts.indexOf(post) + 1];

  const imgMetadata = post.image
    ? await getImageMetadata(post.image.src, 640)
    : null;
  const headings = extractHeadings(post.content);

  return (
    <div className="relative">
      <aside className="hidden xl:block">
        <div className="xl:fixed xl:right-[calc(60vw-640px-8rem)] xl:top-[100px] xl:w-56">
          <TableOfContents headings={headings} />
        </div>
      </aside>

      <article className="container">
        <header className="mb-12">
          <Title>{post.title}</Title>
          <Description>{post.subTitle}</Description>
          <ArticleMetadata date={post.date} readingTime={post.readingTime} />
        </header>

        <div className="mb-8 xl:hidden">
          <TableOfContents headings={headings} />
        </div>

        {imgMetadata && (
          <Image
            src={imgMetadata.src}
            alt={post.title}
            width={imgMetadata.width}
            height={imgMetadata.height}
            className="mb-8 w-full rounded-md shadow-lg dark:shadow-gray-800"
            placeholder="blur"
            blurDataURL={imgMetadata.blurDataURL}
          />
        )}
        <MDXContent code={post.code} />
        <ContentNavigation prevContent={prevPost} nextContent={nextPost} />
        <FloatingButton />
      </article>
    </div>
  );
}
