'use client';
import DetailledArt from '@/components/DetailledArt';
// import { useRouter } from 'next/router';

import DetailledArtist from '@/components/DetailledArtist';
import React, { useEffect, useState } from 'react';
import DetailedArt from '@/components/DetailledArt';

type ArtDetailsProps = {
    movements: Array<{ label: string; wikiPageID: string }>;
    artist: never;
    abstract: string;
    name: string;
    imgSrc: string;
    date: string;
    location: string;
    price: string;
};

export default function ArtDetails({ params }) {
    console.log(params);

    const [artDetails, setArtDetails] = useState<ArtDetailsProps | null>(null);
    const getArtDetails = async (artId: string) => {
        const res = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(
                artId,
            )}&type=getInfosOeuvre`,
        );
        const artDetails = await res.json();
        setArtDetails(artDetails);
    };

    useEffect(() => {
        getArtDetails(params.oeuvreId);
    }, []);

    return (
        <>
            {artDetails && (
                <DetailedArt
                    name={artDetails.name}
                    imgSrc={artDetails.imgSrc}
                    author={artDetails.artist}
                    date={artDetails.date}
                    movement={artDetails.movements}
                    location={artDetails.location}
                    price={artDetails.price}
                    description={artDetails.abstract}
                />
            )}
        </>
    );
}
