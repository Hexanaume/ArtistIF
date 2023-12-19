'use client';
import DetailledArt from '@/components/DetailledArt';
// import { useRouter } from 'next/router';

import DetailledArtist from '@/components/DetailledArtist';
import React, { useEffect, useState } from 'react';

type ArtDetailsProps = {
    movements: Array<{ label: string; wikiPageID: string }>;
    artist: any;
    abstract: any;
    name: any;
    imgSrc:string;
    date:string;
    location:string;
    price:string; 
};

export default function ArtDetails({ params }) {
    console.log(params);

    const [artDetails, setArtDetails] =
        useState<ArtDetailsProps | null>(null);
    const getArtDetails = async (artId: string) => {
        const res = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(
                artId,
            )}&type=getInfosOeuvre`,
        );
        const artDetails = await res.json();
        console.log(artDetails);
        setArtDetails(artDetails);
    };

    useEffect(() => {
        getArtDetails(params.artistId);
    }, []);

    return (
        <>
            {artDetails && (
                <DetailledArt 
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
