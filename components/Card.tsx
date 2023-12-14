import Image from './Image';
import Link from './Link';
import ImageWithFallback from './ImageWithFallback';
//test

const FALLBACK_IMAGE_URL =
    'https://ohchouette.com/wp-content/uploads/IMG-50-20022020-08-56-601640-960x960.jpg.webp';
export interface SearchResult {
    artist: {
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
}
const Card = ({ title, description, imgSrc, href }) => {
    return (
        <div className="md max-w-[544px] p-4 md:w-1/2">
            <div
                className={`${
                    imgSrc && 'h-full'
                }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
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

                <div className="p-6">
                    <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
                        {href ? (
                            <Link href={href} aria-label={`Link to ${title}`}>
                                {title}
                            </Link>
                        ) : (
                            title
                        )}
                    </h2>
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                        {href ? (
                            <Link
                                href={href}
                                aria-label={`Link to ${description}`}
                            >
                                {description}
                            </Link>
                        ) : (
                            description
                        )}
                    </h2>

                    {href && (
                        <Link
                            href={href}
                            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Link to ${title}`}
                        >
                            Voir plus &rarr;
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
