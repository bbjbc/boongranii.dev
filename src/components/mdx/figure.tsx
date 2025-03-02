import Image from 'next/image';
import { ImageProps } from 'next/image';

import { getImageMetadata } from '@/utils/image-metadata';

interface FigureProps extends Omit<ImageProps, 'src'> {
  src: string;
  alt: string;
}

const Figure = async ({ src, alt, ...props }: FigureProps) => {
  const metadata = await getImageMetadata(src, 640);

  return (
    <>
      <Image
        src={metadata.src}
        alt={alt || ''}
        width={metadata.width}
        height={metadata.height}
        className="w-full rounded-md shadow-lg dark:shadow-gray-800"
        placeholder="blur"
        blurDataURL={metadata.blurDataURL}
        {...props}
      />
      {alt && (
        <span className="mb-6 mt-2 block text-center text-sm text-gray-400">
          {alt}
        </span>
      )}
    </>
  );
};

export default Figure;
