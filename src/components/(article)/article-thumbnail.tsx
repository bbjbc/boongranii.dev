import Image from 'next/image';

interface ArticleThumbnailProps {
  image: string;
  title: string;
}

const ArticleThumbnail = ({ image, title }: ArticleThumbnailProps) => {
  return (
    <div className="relative aspect-video overflow-hidden">
      <Image
        src={image}
        alt={`${title} thumbnail`}
        fill
        priority
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
};

export default ArticleThumbnail;
