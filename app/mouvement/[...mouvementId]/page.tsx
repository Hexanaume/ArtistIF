/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';
import DetailledMovement from '@/components/DetailledMovement';
import { List } from 'postcss/lib/list';

type MouvementDetailsProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    desc: any;
    pic: any;
    labelMovement: any;
    picture: string;
    year: string;
    oeuvres: Array<{
        wikiPageID: string;
        name: string;
        abstract: string;
        thumbnail_url: string;
    }>;
    artists: Array<{
        wikiPageID: string;
        name: string;
        abstract: string;
        thumbnail_url: string;
    }>;
};

export default function MouvementDetails({ params }) {
    console.log(params);

    const [mouvementDetails, setMouvementDetails] =
        useState<MouvementDetailsProps | null>(null);
    const getMouvementDetails = async (mouvementId: string) => {
        const res = await fetch(
            `https://artist-if.vercel.app/api/search?query=${encodeURIComponent(
                mouvementId,
            )}&type=getInfosMouvement`,
        );
        console.log(res);
        const mouvementDetails = await res.json();
        setMouvementDetails(mouvementDetails);
    };

    useEffect(() => {
        getMouvementDetails(params.mouvementId);
    }, []);

    return (
        <>
            {mouvementDetails && (
                <DetailledMovement
                    name={mouvementDetails.labelMovement}
                    picture={mouvementDetails.pic}
                    year={mouvementDetails.labelMovement}
                    description={mouvementDetails.desc}
                    oeuvres={mouvementDetails.oeuvres}
                    artists={mouvementDetails.artists}
                />
            )}
        </>
    );
}
