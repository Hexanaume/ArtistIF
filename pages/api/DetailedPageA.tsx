import SearchButton from '@/components/SearchButton';
import React, { useState, useEffect } from 'react';
import Card, { SearchResult } from '@/components/Card';
import DetailledCard from '@/components/DetailledCard';
import DetailledArtist from '@/components/DetailledArtist';

const DetailedPageA = ({ idPage }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    const handleSearch = async () => {
        const res = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(
                idPage,
            )}&type=rechercherArtists`,
        );
        console.log('res: ', res);
        const results = await res.json();
        console.log('results: ', results);
        setSearchResults(results);
    };

    useEffect(() => {
        handleSearch();
    }, [idPage]);

    return (
        <>
            <div className="mt-8">
                <div
                    className={`transform ${
                        searchResults.length > 0
                            ? '-translate-y-10 transition-transform'
                            : 'transition-transform'
                    }`}
                ></div>
            </div>

            <div className="flex flex-row flex-wrap">
                {searchResults.length > 0 &&
                    searchResults.map((result: SearchResult, index) => {
                        return (
                            <DetailledArtist
                                key={index}
                                name={result.name.value}
                                picture={result.picture.value}
                                movement={result.movements.value}
                                description={result.abstract.value}
                                artworks={'test'}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default DetailedPageA;
