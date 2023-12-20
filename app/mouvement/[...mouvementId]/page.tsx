'use client';
import React, { useEffect, useState } from 'react';
import DetailledMovement from '@/components/DetailledMovement';

type MouvementDetailsProps = {
    desc: any;
    pic: any;
    labelMovement: any;
    picture:string;
    year:string;
};

export default function MouvementDetails({ params }) {
    console.log(params);

    const [mouvementDetails, setMouvementDetails] = useState<MouvementDetailsProps | null>(null);
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
        </>
    );
}
