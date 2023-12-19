'use client';
import SearchBar from '@/components/SearchBar';
import siteMetadata from '@/data/siteMetadata';
import Card, { SearchResult } from '@/components/Card';
import { useState } from 'react';
import SearchTypeCard from '@/components/SearchTypeCard';
import { useArtistUrl } from '@/components/UrlContext';
import { useRouter } from 'next/router';

const MAX_DISPLAY = 5;

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (results) => {
        setSearchResults(results);
    };

    function truncateText(text, maxLength) {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + '...';
        } else {
            return text;
        }
    }

    return (
        <>
            {searchResults.length === 0 && (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                    <div className="flex flex-col items-center justify-center space-y-2 pb-8 pt-6 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                            Welcome to Artistif
                        </h1>
                        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                            {siteMetadata.description}
                        </p>
                    </div>
                </div>
            )}

            <div className="mt-8">
                <div
                    className={`transform ${
                        searchResults.length > 0
                            ? '-translate-y-10 transition-transform'
                            : 'transition-transform'
                    }`}
                >
                    <div className="mb-6 flex flex-row justify-center space-x-16">
                        <SearchTypeCard
                            label="Artiste"
                            icon="/static/images/icons/artist.png"
                        />
                        <SearchTypeCard
                            label="Oeuvre"
                            icon="/static/images/icons/mona-lisa.png"
                        />
                        <SearchTypeCard
                            label="Mouvement"
                            icon="/static/images/icons/abstract.png"
                        />
                    </div>
                    <SearchBar onSearch={handleSearch} />
                </div>
            </div>

            <div className="flex flex-row flex-wrap">
                {searchResults.length > 0 &&
                    searchResults.map((result: SearchResult, index) => {
                        return (
                            <Card
                                wikiID={result.wikiPageID.value}
                                title={result.name.value}
                                description={truncateText(
                                    result.abstract.value,
                                    144,
                                )}
                                imgSrc={result.picture.value}
                                dbPediaLink={result.artist.value}
                                href={result.artist.value}
                                key={index}
                            />
                        );
                    })}
            </div>
        </>
    );
}
