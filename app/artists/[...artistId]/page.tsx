'use client'
// import { useRouter } from 'next/router';

export default function ArtistDetails({params})  {
    // const router = useRouter();
    // const { href } = router.query;

    return <div>Artist details for {params.artistId}</div>;
}