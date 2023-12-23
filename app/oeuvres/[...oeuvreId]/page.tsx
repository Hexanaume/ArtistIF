'use client';
import DetailledArt from '@/components/DetailledArt';
// import { useRouter } from 'next/router';

import DetailledArtist from '@/components/DetailledArtist';
import React, { useEffect, useState } from 'react';
import DetailedArt from '@/components/DetailledArt';

type ArtDetailsProps = {
    name: string;
    artist: {
        id: string;
        name: string;
    };
    abstract: string;
    movement: {
        id: string;
        label: string;
    };
    thumbnail_url: string;
    completionDate: string;
    locationLabel: string;
    price: string;
};

export default function ArtDetails({ params }) {
    console.log(params);

    const [artDetails, setArtDetails] = useState<ArtDetailsProps | null>(null);
    const getArtDetails = async (artId: string) => {
        const res = await fetch(
            `https://artist-if.vercel.app/api/search?query=${encodeURIComponent(
                artId,
            )}&type=getInfosOeuvre`,
        );
        console.log(res);
        const artDetails = await res.json();
        setArtDetails(artDetails);
    };

    useEffect(() => {
        getArtDetails(params.oeuvreId);
    }, []);

    return (
        <>
            {artDetails && (
                <DetailledArt
                    name={artDetails.name}
                    artist={artDetails.artist}
                    description={artDetails.abstract}
                    movement={artDetails.movement}
                    imgSrc={artDetails.thumbnail_url}
                    date={artDetails.completionDate}
                    location={artDetails.locationLabel}
                    price={artDetails.price}
                />
            )}
        </>
    );
}
