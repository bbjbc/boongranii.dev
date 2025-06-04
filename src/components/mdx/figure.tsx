import { ImageProps } from 'next/image';

import { getImageMetadata } from '@/utils/image-metadata';
import ImageZoom from './image-zoom';

interface FigureProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
  showCaption?: boolean;
}

const Figure = async ({
  src,
  alt,
  showCaption = true,
  ...props
}: FigureProps) => {
  const metadata = await getImageMetadata(src, 640);

  return (
    <>
      <ImageZoom
        src={metadata.src}
        alt={alt || ''}
        width={metadata.width}
        height={metadata.height}
        placeholder="blur"
        blurDataURL={metadata.blurDataURL}
        {...props}
      />
      {alt && showCaption && (
        <span className="mb-6 mt-2 block text-center text-sm text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
};

export default Figure;
