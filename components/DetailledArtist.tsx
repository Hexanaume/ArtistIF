import React from 'react';
import Image from './Image';

export default function DetailledCard({
    name,
    picture,
    movement,
    artworks,
    description,
}) {
    return (
        <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
            <h2 className="mb-4 p-4 text-5xl font-bold">{name}</h2>
            <div className="mb-4 flex flex-col py-2 md:flex-row">
                <div className="h-full w-full p-4">
                    <Image
                        alt={name}
                        src={picture}
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="-mt-2 flex flex-col gap-2 p-8 px-2 md:ml-4 md:w-1/2">
                    <div className="mb-2 flex">
                        <span className="mr-2 text-xl font-bold">
                            Movement(s):
                        </span>
                        <span className="text-lg">{movement}</span>
                    </div>
                </div>
            </div>
            <div>
                <p className="mr-2 text-xl font-bold">Artwork(s):</p>
                <p className="text-lg">{artworks}</p>
            </div>
            <div>
                <p className="mr-2 text-xl font-bold">Description:</p>
                <p className="text-lg">{description}</p>
            </div>
        </div>
    );
}
