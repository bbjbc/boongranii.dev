import sharp from 'sharp';

export const getImageMetadata = async (path: string, containerWidth: 640) => {
  const imagePath = `${process.cwd()}/public${path}`;
  const metadata = await sharp(imagePath).metadata();
  const blurImage = await sharp(imagePath).resize(20, 20).blur().toBuffer();
  const blurDataURL = `data:image/${metadata.format};base64,${blurImage.toString('base64')}`;

  let width = metadata.width ?? 0;
  let height = metadata.height ?? 0;

  if (width < containerWidth) {
    const ratio = containerWidth / width;
    width = containerWidth;
    height = Math.round(height * ratio);
  }

  return {
    src: path,
    width,
    height,
    blurDataURL,
  };
};
