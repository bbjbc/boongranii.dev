'use client';

import Image, { ImageProps } from 'next/image';
import { RefCallback, useRef } from 'react';

import mediumZoom, { Zoom, ZoomOptions } from 'medium-zoom';

import { cn } from '@/utils/cn';

interface ImageZoomProps extends ImageProps {
  zoomOptions?: ZoomOptions;
  children?: React.ReactNode;
}

const options: ZoomOptions = {
  background: 'rgba(0, 0, 0, 0.8)',
};

const ImageZoom = ({
  zoomOptions = options,
  children,
  ...imageProps
}: ImageZoomProps) => {
  const zoomRef = useRef<Zoom | null>(null);

  const getZoom = () => {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom(zoomOptions);
    }

    return zoomRef.current;
  };

  const attachZoom: RefCallback<HTMLImageElement> = node => {
    const zoom = getZoom();

    if (node) {
      zoom.attach(node);
    } else {
      zoom.detach();
    }
  };

  return (
    <>
      <Image
        ref={attachZoom}
        {...imageProps}
        className={cn(
          'w-full cursor-zoom-in rounded-md shadow-lg dark:shadow-gray-800',
          imageProps.className || '',
        )}
      />
      {children}
    </>
  );
};

export default ImageZoom;
