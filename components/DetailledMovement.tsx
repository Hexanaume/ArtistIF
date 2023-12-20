import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from './ImageWithFallback';

const DetailledCard = ({ name, picture, year, description }) => (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 p-4 text-5xl font-bold">{name}</h2>
        <div className="mb-4 flex flex-col py-2 md:flex-row">
            <div className="h-full w-full p-4">
                <ImageWithFallback
                    alt={name}
                    src={picture}
                    className="rounded-lg object-cover"
                    fallback={
                        <Image src={FALLBACK_IMAGE_URL} alt={'fallback'} />
                    }
                />
            </div>
        </div>
        <div>
            <p className="mr-2 text-xl font-bold">Description:</p>
            <p className="text-lg">{description}</p>
        </div>
    </div>
);

export default DetailledCard;
