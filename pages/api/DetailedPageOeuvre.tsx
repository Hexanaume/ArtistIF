import SearchButton from '@/components/SearchButton';
import React, { useState, useEffect } from 'react';
import { rechercher } from '../scripts/search.mjs';
import Card, { SearchResult } from '@/components/Card';
import DetailledOeuvre from '@/components/DetailledArt';

const DetailedPageOeuvre = ({ idPage }) => {
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
            )}&type=getInfosOeuvre`,
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
                            <DetailledOeuvre
                                key={index} // Ajout de la clé unique ici
                                title={result.name.value}
                                imgSrc={result.picture.value}
                                author={result.artist.value}
                                date={result.date.value}
                                era={result.era.value}
                                storage={result.storage.value}
                                price={result.price.value}
                                description={result.abstract.value}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default DetailedPageOeuvre;
