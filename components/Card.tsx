import Image from './Image';
import Link from './Link';
import ImageWithFallback from './ImageWithFallback';
import { useState } from 'react';
//test

const FALLBACK_IMAGE_URL =
    'https://ohchouette.com/wp-content/uploads/IMG-50-20022020-08-56-601640-960x960.jpg.webp';
export interface SearchResult {
    movements: never;
    artist: {
        type: string;
        value: string;
    };
    type: {
        type: string;
        value: string;
    };
    name: {
        type: string;
        value: string;
    };

    labelMovement: {
        type: string;
        value: string;
    };

    abstract: {
        type: string;
        value: string;
    };

    picture: {
        type: string;
        value: string;
    };
    wikiPageID: {
        type: string;
        value: string;
    };
    //ajout d'un type
    year: {
        type: string;
        value: string;
    };
    price: {
        type: string;
        value: string;
    };
    date: {
        type: string;
        value: string;
    };
    era: {
        type: string;
        value: string;
    };
    storage: {
        type: string;
        value: string;
    };
}
const Card = ({ type, wikiID, title, description, imgSrc }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="p-4 md:w-1/2">
            <Link href={`/${type}/${wikiID}`} passHref>
                <div
                    className={`${imgSrc && 'h-full'}  
                    overflow-hidden rounded-md border-2 
                    border-gray-200 border-opacity-60 transition
                    ease-in hover:scale-105 hover:border-2 
                    hover:border-solid hover:border-pink-600 
                    dark:border-gray-700 dark:hover:border-2 
                    dark:hover:border-pink-600 `}
                >
                    <div className="p-0">
                        <ImageWithFallback
                            src={imgSrc}
                            alt="foo"
                            className="aspect-square object-cover object-center"
                            width={544}
                            height={306}
                            fallback={
                                <Image
                                    src={FALLBACK_IMAGE_URL}
                                    alt="ornythorinque"
                                    className="aspect-square h-full w-full object-cover object-center"
                                />
                            }
                        />
                    </div>

                    <div className="pb-6 pl-6 pr-6 pt-2">
                        <div
                            className={
                                'mb-4 flex flex-row-reverse items-center justify-between'
                            }
                        >
                            <img
                                className="h-14 w-14"
                                src={`/static/images/icons/${type}.png`}
                                alt={'type of result'}
                            />
                            <h2 className="text-2xl font-bold leading-8 tracking-tight hover:text-pink-500 hover:underline">
                                {title}
                            </h2>
                        </div>
                        <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                            {description}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
