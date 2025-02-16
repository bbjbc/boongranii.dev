import Image from 'next/image';
import { notFound } from 'next/navigation';

import { getSortedNotes } from '@/data/data-accessor';
import { MDXContent } from '@/components/mdx/mdx-content';
import { extractHeadings } from '@/app/utils/extract-headings';
import { getImageMetadata } from '@/app/utils/image-metadata';
import TableOfContents from '@/components/toc';
import Title from '@/components/title';
import ArticleMetadata from '@/components/(article)/article-metadata';
import ContentNavigation from '@/components/(article)/content-navigation';
import Giscus from '@/components/(article)/giscus';
import FloatingButton from '@/components/common/floating-button';

interface Params {
  params: Promise<{ slug: string }>;
}

const notes = getSortedNotes();

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const note = notes.find(note => note.slug === slug);

  if (!note) return;

  return {
    title: note.title,
    openGraph: {
      title: note.title,
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return notes.map(note => ({ slug: note.slug }));
}

export default async function Note({ params }: Params) {
  const { slug } = await params;
  const note = notes.find(note => note.slug === slug);

  if (!note) notFound();

  const prevNote = notes[notes.indexOf(note) - 1];
  const nextNote = notes[notes.indexOf(note) + 1];

  const imgMetadata = note.image
    ? await getImageMetadata(note.image.src, 640)
    : null;
  const headings = extractHeadings(note.content);

  return (
    <div className="relative">
      <aside className="hidden xl:block">
        <div className="xl:fixed xl:right-[calc(60vw-640px-8rem)] xl:top-[100px] xl:w-56">
          <TableOfContents headings={headings} />
        </div>
      </aside>

      <article className="container">
        <header className="mb-12">
          <Title>{note.title}</Title>
          <ArticleMetadata date={note.date} readingTime={note.readingTime} />
        </header>

        <div className="mb-8 xl:hidden">
          <TableOfContents headings={headings} />
        </div>

        {imgMetadata && (
          <Image
            src={imgMetadata.src}
            alt={note.title}
            width={imgMetadata.width}
            height={imgMetadata.height}
            className="mb-8 w-full rounded-md shadow-lg dark:shadow-gray-800"
            placeholder="blur"
            blurDataURL={imgMetadata.blurDataURL}
          />
        )}
        <MDXContent code={note.code} />

        <footer className="flex flex-col gap-12">
          <ContentNavigation prevContent={prevNote} nextContent={nextNote} />
          <Giscus />
        </footer>
        <FloatingButton />
      </article>
    </div>
  );
}
