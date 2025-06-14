import { notFound } from 'next/navigation';

import { getSortedPosts } from '@/data/data-accessor';
import { MDXContent } from '@/components/mdx/mdx-content';
import { extractHeadings } from '@/utils/extract-headings';
import { getImageMetadata } from '@/utils/image-metadata';
import { Figure } from '@/components/mdx';
import Title from '@/components/ui/title';
import Description from '@/components/ui/description';
import ArticleMetadata from '@/components/(article)/article-metadata';
import ContentNavigation from '@/components/(article)/content-navigation';
import Giscus from '@/components/(article)/giscus';
import TableOfContents from '@/components/ui/toc';
import FloatingButton from '@/components/actions/floating-button';

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
      siteName: 'Boongranii',
      images: {
        url: post.image?.src,
      },
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
        <div className="fixed right-[calc((100vw-1280px)/2+2rem)] top-[100px] w-56">
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
          <Figure
            src={imgMetadata.src}
            alt={post.title}
            width={imgMetadata.width}
            height={imgMetadata.height}
            className="mb-8"
            placeholder="blur"
            blurDataURL={imgMetadata.blurDataURL}
            showCaption={false}
          />
        )}
        <MDXContent code={post.code} />

        <footer className="flex flex-col gap-12">
          <ContentNavigation prevContent={prevPost} nextContent={nextPost} />
          <Giscus />
        </footer>
        <FloatingButton />
      </article>
    </div>
  );
}
