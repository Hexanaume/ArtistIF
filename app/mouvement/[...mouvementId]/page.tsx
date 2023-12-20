'use client';
import React, { useEffect, useState } from 'react';
import DetailledMovement from '@/components/DetailledMovement';

type MouvementDetailsProps = {
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
};

export default function MouvementDetails({ params }) {
    console.log(params);

    const [mouvementDetails, setMouvementDetails] =
        useState<MouvementDetailsProps | null>(null);
    const getMouvementDetails = async (mouvementId: string) => {
        const res = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(
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
                />
            )}
            <div className="flex flex-row flex-wrap">
                {oeuvres.length > 0 &&
                    oeuvres.map((result: SearchResult, index) => {
                        return (
                            <Card
                                type={selectedCardType}
                                wikiID={result.wikiPageID.value}
                                title={result.name.value}
                                description={truncateText(
                                    result.abstract.value,
                                    144,
                                )}
                                imgSrc={
                                    result.picture ? result.picture.value : null
                                }
                                key={index}
                            />
                        );
                    })}
            </div>
            <div className="flex flex-row flex-wrap">
                {searchResults.length > 0 &&
                    searchResults.map((result: SearchResult, index) => {
                        return (
                            <Card
                                type={selectedCardType}
                                wikiID={result.wikiPageID.value}
                                title={result.name.value}
                                description={truncateText(
                                    result.abstract.value,
                                    144,
                                )}
                                imgSrc={
                                    result.picture ? result.picture.value : null
                                }
                                key={index}
                            />
                        );
                    })}
            </div>
        </>
    );
}
