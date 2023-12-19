import NextImage, { ImageProps } from 'next/image';
export const FALLBACK_IMAGE_URL =
    'https://ohchouette.com/wp-content/uploads/IMG-50-20022020-08-56-601640-960x960.jpg.webp';
const Image = ({ ...rest }: ImageProps) => (
    <NextImage {...rest} layout="responsive" width={1000} height={1000} />
);

export default Image;
