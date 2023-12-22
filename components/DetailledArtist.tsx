import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from '@/components/ImageWithFallback';
import Card from '@/components/Card';
import { truncateText } from '../scripts/utils';
import Link from 'next/link';

export type ArtistDetailsProps = {
    name: string;
    abstract: string;
    thumbnail_url: string;
    birth_date: string;
    death_date: string;
    movements: Array<{ label: string; wikiPageID: string }>;
    oeuvres: Array<{
        wikiPageID: string;
        name: string;
        abstract: string;
        thumbnail_url: string;
    }>;
};

export default function DetailledArtist({
    name,
    picture,
    movements,
    artworks,
    description,
    birthDate,
    deathDate,
}) {
    return (
        <div className="flex flex-col rounded-lg p-6 shadow-lg">
            <div className={'flex w-full flex-row'}>
                <div id={'title'} className={'w-1/2'}>
                    <h2 className="mb-4 p-4 text-5xl font-bold">{name}</h2>
                </div>
                <div
                    id={'movementsContainer'}
                    className="-mt-2 flex flex-col gap-2 p-8 px-2 md:w-1/2"
                >
                    <div className="mb-2 flex">
                        <span className="mr-2 text-xl font-bold">
                            Movement(s):
                        </span>
                        <div className={'flex flex-row flex-wrap'}>
                            {movements.map((movement, index) => {
                                if (index !== movements.length - 1) {
                                    return (
                                        <Link
                                            key={index}
                                            href={`/mouvement/${movement.wikiPageID}`}
                                        >
                                            <span className="text-lg hover:text-pink-500 hover:underline">
                                                {movement.label + ', '}
                                            </span>
                                        </Link>
                                    );
                                } else {
                                    return (
                                        <Link
                                            key={index}
                                            href={`/mouvement/${movement.wikiPageID}`}
                                        >
                                            <span className="text-lg hover:text-pink-500 hover:underline">
                                                {movement.label}
                                            </span>
                                        </Link>
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
                <div className={'flex w-full flex-row'}>
                    <div className="w-1/2 p-4">
                        <ImageWithFallback
                            alt={name}
                            src={picture}
                            className="rounded-lg object-cover"
                            style={{ height: '400px', width: '400px' }}
                            fallback={
                                <Image
                                    src={FALLBACK_IMAGE_URL}
                                    alt={'fallback'}
                                />
                            }
                        />
                    </div>
                    <div className={'w-1/2 p-4 px-2'} id={'information'}>
                        <div className={'flex flex-col'}>
                            <ul>
                                <li className={'mb-6 flex flex-row'}>
                                    <p className="mr-2 text-xl font-bold">
                                        Birth:
                                    </p>
                                    <p className="text-lg">{birthDate}</p>
                                </li>
                                <li className={'mb-6 flex flex-row'}>
                                    <p className={'mr-2 text-xl font-bold'}>
                                        Death:
                                    </p>
                                    <p className={'text-lg'}>{deathDate}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
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
