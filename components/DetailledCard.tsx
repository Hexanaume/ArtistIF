import React from 'react';
import Image from './Image';

const DetailledCard = ({
    title,
    imgSrc,
    author,
    date,
    era,
    storage,
    price,
    description,
}) => (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col">
        <h2 className="text-5xl font-bold mb-4 p-4">{title}</h2>
        <div className="flex flex-col md:flex-row mb-4 py-2">
            <div className="p-4 w-full h-full">
                <Image
                    alt={title}
                    src={imgSrc}
                    className="object-cover rounded-lg"
                />
            </div>
            <div className="md:w-1/2 md:ml-4 flex flex-col p-8 px-2 -mt-2 gap-2">
                <div className="mb-2 flex">
                    <span className="text-xl font-bold mr-2">Artist:</span>
                    <span className="text-lg">{author}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="text-xl font-bold mr-2">Date:</span>
                    <span className="text-lg">{date}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="text-xl font-bold mr-2">Art Movement:</span>
                    <span className="text-lg">{era}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="text-xl font-bold mr-2">Storage place:</span>
                    <span className="text-lg">{storage}</span>
                </div>
                <div className="mb-2 flex">
                    <span className="text-xl font-bold mr-2">Price:</span>
                    <span className="text-lg">{price}</span>
                </div>
            </div>
        </div>
        <div>
            <p className="text-xl font-bold mr-2">Description:</p>
            <p className="text-lg">{description}</p>
        </div>
    </div>
);

export default DetailledCard;

