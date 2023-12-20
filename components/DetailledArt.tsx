import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from './ImageWithFallback';
import Link from 'next/link';

const DetailedArt = ({
    name,
    imgSrc,
    artist,
    date,
    movement,
    location,
    price,
    description,
}) => (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 p-4 text-5xl font-bold">{name}</h2>
        <div className="mb-4 flex flex-col py-2 md:flex-row">
            <div className="h-full w-full p-4">
                <ImageWithFallback
                    alt={name}
                    src={imgSrc}
                    className="rounded-lg object-cover"
                    fallback={
                        <Image src={FALLBACK_IMAGE_URL} alt={'fallback'} />
                    }
                />
            </div>
            <div className="-mt-2 flex flex-col gap-2 p-8 px-2 md:ml-4 md:w-1/2">
                <div className="mb-2 flex">
                    <span className="mr-2 text-xl font-bold">Artist:</span>
                    <Link href={`/artists/${artist.id}`}>
                        <span className="text-lg">{artist.name}</span>
                    </Link>
                </div>
                <div className="mb-2 flex">
                    <span className="mr-2 text-xl font-bold">Date:</span>
                    <span className="text-lg">{date}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="mr-2 text-xl font-bold">
                        Art Movement:
                    </span>
                    <span className="text-lg">{movement}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="mr-2 text-xl font-bold">
                        Storage place:
                    </span>
                    <span className="text-lg">{location}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="mr-2 text-xl font-bold">Price:</span>
                    <span className="text-lg">{price}</span>
                </div>
            </div>
        </div>
        <div>
            <p className="mr-2 text-xl font-bold">Description:</p>
            <p className="text-lg">{description}</p>
        </div>
    </div>
);

export default DetailedArt;
