'use client';

import { useState } from 'react';

const SearchTypeCard = ({ label, icon, onSelect, cardName, selectedCard }) => {
    // handle the hover of the card
    // if hovered, change the border color to blue
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    const handleClick = () => {
        onSelect(); // Envoie le label de la carte sélectionnée
    };

    return (
        <>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <div
                className={
                    'flex cursor-pointer flex-row justify-center rounded-lg border-2 hover:border-pink-600 hover:shadow-lg'
                }
                style={{
                    width: '300px',
                    borderColor: cardName === selectedCard ? '#db2777' : '',
                    scale: cardName === selectedCard ? '1.02' : '1',
                    transition: 'all 0.15s ease-in-out',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <div className={'bg- w-1/4 p-1'}>
                    <img
                        className={'max-h-20'}
                        src={icon}
                        alt={'Search type'}
                    />
                </div>
                <div
                    className={
                        'flex w-3/4 flex-col items-center justify-center'
                    }
                >
                    <h1 className={'font-semibold'}>{label}</h1>
                </div>
            </div>
        </>
    );
};

export default SearchTypeCard;
