import Image from 'next/image';

import { getImageMetadata } from '@/utils/image-metadata';

interface ArticleThumbnailProps {
  image: string;
  title: string;
}

const ArticleThumbnail = async ({ image, title }: ArticleThumbnailProps) => {
  const { blurDataURL } = await getImageMetadata(image, 640);

  return (
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={image}
        alt={`${title} thumbnail`}
        fill
        priority
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(min-width: 640px) 50vw, 100vw"
        placeholder="blur"
        blurDataURL={blurDataURL}
      />
    </div>
  );
};

export default ArticleThumbnail;
