'use client';
// import { useRouter } from 'next/router';

import DetailledArtist from '@/components/DetailledArtist';
import React, { useEffect, useState } from 'react';

type ArtistDetailsProps = {
    name: string;
    abstract: string;
    thumbnail_url: string;
    movements: Array<{ label: string; wikiPageID: string }>;
    oeuvres: Array<{
        wikiPageID: string;
        name: string;
        abstract: string;
        thumbnail_url: string;
    }>;
};

export default function ArtistDetails({ params }) {
    console.log(params);

    const [artistDetails, setArtistDetails] =
        useState<ArtistDetailsProps | null>(null);

    const getArtistDetails = async (artistId: string) => {
        const res = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(
                artistId,
            )}&type=getInfosArtist`,
        );
        const artistDetails = await res.json();
        console.log(artistDetails);
        setArtistDetails(artistDetails);
    };

    useEffect(() => {
        getArtistDetails(params.artistId);
    }, []);

    return (
        <>
            {artistDetails && (
                <DetailledArtist
                    name={artistDetails.name}
                    description={artistDetails.abstract}
                    picture={artistDetails.thumbnail_url}
                    movements={artistDetails.movements}
                    artworks={artistDetails.oeuvres}
                />
            )}
        </>
    );
}
