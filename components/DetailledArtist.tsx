import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from '@/components/ImageWithFallback';
import Card from '@/components/Card';
import { truncateText } from '../scripts/utils';

export default function DetailledCard({
    name,
    picture,
    movements,
    artworks,
    description,
}) {
    return (
        <div className="flex flex-col rounded-lg p-6 shadow-lg">
            <div className={'flex flex-row justify-between'}>
                <h2 className="mb-4 p-4 text-5xl font-bold">{name}</h2>
                <div
                    id={'movementsContainer'}
                    className="-mt-2 flex flex-col gap-2 p-8 px-2 md:ml-4 md:w-1/2"
                >
                    <div className="mb-2 flex">
                        <span className="mr-2 text-xl font-bold">
                            Movement(s):
                        </span>
                        <div className={'flex flex-row flex-wrap'}>
                            {movements.map((movement, index) => {
                                if (index !== movements.length - 1) {
                                    return (
                                        <span key={index} className="mr-2">
                                            {`${movement.label},`}
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span
                                            key={index}
                                            className="mr-2 text-lg"
                                        >
                                            {`${movement.label}`}
                                        </span>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div
                id={'thumbnail'}
                className="mb-4 flex flex-col py-2 md:flex-row"
            >
                <div className="h-full w-full p-4">
                    <ImageWithFallback
                        alt={name}
                        src={picture}
                        className="rounded-lg object-cover"
                        style={{ height: '400px', width: '400px' }}
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
            <div>
                <p className="mr-2 text-xl font-bold">Artwork(s):</p>
                <div className={'flex flex-row flex-wrap'}>
                    {artworks.map((artwork, index) => {
                        return (
                            <Card
                                key={index}
                                type={'oeuvres'}
                                wikiID={artwork.wikiPageID}
                                title={artwork.name}
                                description={truncateText(
                                    artwork.abstract,
                                    144,
                                )}
                                imgSrc={artwork.thumbnail_url}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
