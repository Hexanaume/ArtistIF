'use client';
// import { useRouter } from 'next/router';

import DetailledArtist from '@/components/DetailledArtist';
import React, { useEffect, useState } from 'react';

export default function ArtistDetails({ params }) {
    console.log(params);

    const [artistDetails, setArtistDetails] = useState(null);

    const getArtistDetails = async (artistId: string) => {
        const res = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(
                artistId,
            )}&type=getInfosArtist`,
        );
        const artistDetails = await res.json();

        setArtistDetails(artistDetails);
    };

    useEffect(() => {
        getArtistDetails(params.artistId).then((r) => console.log(r));
    }, []);

    return (
        <>
            <div>ouai</div>
        </>
    );
}
