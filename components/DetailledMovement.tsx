import React from 'react';
import Image, { FALLBACK_IMAGE_URL } from './Image';
import ImageWithFallback from './ImageWithFallback';
import Card from '@/components/Card';
import { truncateText } from '../scripts/utils';

const DetailledCard = ({ name, picture, year, description, oeuvres }) => (
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
        <div>
            <p className="mr-2 text-xl font-bold">Artwork(s):</p>
            <div className={'flex flex-row flex-wrap'}>
                {oeuvres.map((artwork, index) => {
                    return (
                        <Card
                            key={index}
                            type={'oeuvres'}
                            wikiID={oeuvres.wikiPageID}
                            title={oeuvres.name}
                            description={truncateText(oeuvres.abstract, 144)}
                            imgSrc={oeuvres.thumbnail_url}
                        />
                    );
                })}
            </div>
        </div>
    </div>
);

export default DetailledCard;
