'use client';
import SearchBar from '@/components/SearchBar';
import siteMetadata from '@/data/siteMetadata';
import Card, { SearchResult } from '@/components/Card';
import { useState } from 'react';
import SearchTypeCard from '@/components/SearchTypeCard';

const MAX_DISPLAY = 5;

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
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
    const handleCardSelection = (label) => {
        console.log('label: ', label);
        setSelectedCard(label);
    };
    const disableOtherCards = () => {
        // mettre clicked à false pour les autres cartes
    };
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
                            label="Artist"
                            icon="/static/images/icons/artist.png"
                            onSelect={() =>
                                handleCardSelection('rechercherArtists')
                            }
                            cardName="rechercherArtists"
                            selectedCard={selectedCard}
                        />
                        <SearchTypeCard
                            label="Artwork"
                            icon="/static/images/icons/mona-lisa.png"
                            onSelect={() =>
                                handleCardSelection('rechercherOeuvres')
                            }
                            cardName="rechercherOeuvres"
                            selectedCard={selectedCard}
                        />
                        <SearchTypeCard
                            label="Movement"
                            icon="/static/images/icons/abstract.png"
                            onSelect={() =>
                                handleCardSelection('rechercherMouvements')
                            }
                            cardName="rechercherMouvements"
                            selectedCard={selectedCard}
                        />
                    </div>
                    <SearchBar
                        onSearch={handleSearch}
                        searchType={selectedCard}
                        setErrorMessage={setErrorMessage}
                    />
                    {errorMessage && (
                        <div className="mt-4 text-red-500 dark:text-red-400">
                            {errorMessage}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-row flex-wrap">
                {searchResults.length > 0 &&
                    searchResults.map((result: SearchResult, index) => {
                        return (
                            <Card
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
