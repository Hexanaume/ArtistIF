import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from './ImageWithFallback';
import Card from '@/components/Card';
import { truncateText } from '../scripts/utils';

const DetailledCard = ({ name, picture, description, oeuvres, artists, year }) => (
    <div className="flex flex-col rounded-lg p-6 shadow-lg">
        <h2 className="mb-4 p-4 text-5xl font-bold">{name}</h2>
        <div className="mb-4 flex flex-row justify-center py-2 md:flex-row">
            <div className="p-4">
                <ImageWithFallback
                    alt={name}
                    src={picture}
                    style={{ height: '400px', width: '400px' }}
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
        <div>
            <p className="mr-2 text-xl font-bold">Artwork(s):</p>
            <div className={'flex flex-row flex-wrap'}>
                {oeuvres.map((oeuvre, index) => {
                    return (
                        <Card
                            key={index}
                            type={'oeuvres'}
                            wikiID={oeuvre.wikiPageID}
                            title={oeuvre.name}
                            description={truncateText(oeuvre.abstract, 144)}
                            imgSrc={oeuvre.thumbnail_url}
                        />
                    );
                })}
            </div>
            <p className="mr-2 text-xl font-bold">Artists(s):</p>
            <div className={'flex flex-row flex-wrap'}>
                {artists.map((artist, index) => {
                    return (
                        <Card
                            key={index}
                            type={'artists'}
                            wikiID={artist.wikiPageID}
                            title={artist.name}
                            description={truncateText(artist.abstract, 144)}
                            imgSrc={artist.thumbnail_url}
                        />
                    );
                })}
            </div>
        </div>
    </div>
);

export default DetailledCard;
