import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from './ImageWithFallback';

const DetailledCard = ({
    name,
    picture,
    year,
    description,
}) => (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <h2 className="text-5xl font-bold mb-4 p-4">{name}</h2>
        <div className="flex flex-col md:flex-row mb-4 py-2">
            <div className="p-4 w-full h-full">
                <ImageWithFallback
                    alt={name}
                    src={picture}
                    className="object-cover rounded-lg"
                    fallback={
                        <Image src={FALLBACK_IMAGE_URL} alt={'fallback'} />
                    }
                />
            </div>
        </div>
        <div>
            <p className="text-xl font-bold mr-2">Description:</p>
            <p className="text-lg">{description}</p>
        </div>
    </div>
);

export default DetailledCard;