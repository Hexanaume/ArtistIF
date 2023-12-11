import NextImage, { ImageProps } from 'next/image'

const Image = ({ ...rest }: ImageProps) => <NextImage {...rest} layout="responsive" width={1000} height={1000} />

export default Image
