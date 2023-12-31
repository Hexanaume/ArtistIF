'use client';
import SearchBar from '@/components/SearchBar';
import siteMetadata from '@/data/siteMetadata';
import Card, { SearchResult } from '@/components/Card';
import { useState } from 'react';
import SearchTypeCard from '@/components/SearchTypeCard';
import { useArtistUrl } from '@/components/UrlContext';
import { useRouter } from 'next/router';
import { truncateText } from '../scripts/utils';

const MAX_DISPLAY = 5;

export default function Home() {
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedCardType, setSelectedCardType] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const handleSearch = async (results) => {
        setSearchResults(results);
    };

    const handleCardSelection = (label, type) => {
        console.log('label: ' + label, 'type: ' + type);
        setSelectedCard(label);
        setSelectedCardType(type);
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
                            type="all"
                            label="All"
                            icon="/static/images/icons/all.png"
                            onSelect={() =>
                                handleCardSelection('rechercherAll', 'all')
                            }
                            cardName="rechercherAll"
                            selectedCard={selectedCard}
                            selectedCardType={selectedCardType}
                        />
                        <SearchTypeCard
                            type="artists"
                            label="Artist"
                            icon="/static/images/icons/artists.png"
                            onSelect={() =>
                                handleCardSelection(
                                    'rechercherArtists',
                                    'artists',
                                )
                            }
                            cardName="rechercherArtists"
                            selectedCard={selectedCard}
                            selectedCardType={selectedCardType}
                        />
                        <SearchTypeCard
                            type="mouvement"
                            label="Artwork"
                            icon="/static/images/icons/oeuvres.png"
                            onSelect={() =>
                                handleCardSelection(
                                    'rechercherOeuvres',
                                    'oeuvres',
                                )
                            }
                            cardName="rechercherOeuvres"
                            selectedCard={selectedCard}
                            selectedCardType={selectedCardType}
                        />
                        <SearchTypeCard
                            type="oeuvres"
                            label="Movement"
                            icon="/static/images/icons/mouvement.png"
                            onSelect={() =>
                                handleCardSelection(
                                    'rechercherMouvements',
                                    'mouvement',
                                )
                            }
                            cardName="rechercherMouvements"
                            selectedCard={selectedCard}
                            selectedCardType={selectedCardType}
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
                                type={result.type.value}
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
