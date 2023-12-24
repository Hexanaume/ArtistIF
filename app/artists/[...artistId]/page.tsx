'use client';
// import { useRouter } from 'next/router';

import DetailledArtist, {
    ArtistDetailsProps,
} from '@/components/DetailledArtist';
import React, { useEffect, useState } from 'react';
import { apiUrl } from '../../../scripts/utils';

export default function ArtistDetails({ params }) {
    console.log(params);

    const [artistDetails, setArtistDetails] =
        useState<ArtistDetailsProps | null>(null);

    const getArtistDetails = async (artistId: string) => {
        const res = await fetch(
            `${apiUrl}/api/search?query=${encodeURIComponent(
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
                    birthDate={artistDetails.birth_date}
                    deathDate={artistDetails.death_date}
                />
            )}
        </>
    );
}
