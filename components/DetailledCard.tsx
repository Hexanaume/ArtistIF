import React from 'react';
import Image from './Image';
// import Link from './Link'

const DetailledCard = ({
    title,
    imgSrc,
    author,
    date,
    comment,
    era,
    storage,
    technique,
    price,
}) => (
    <div className="flex h-full w-full flex-col border-8 border-sky-500">
        <h2 className="mb-7 mt-7 text-5xl font-semibold leading-8 tracking-tight">
            {title}
        </h2>
        <div className="h-7/8 mb-7 flex w-full flex-row">
            <div className="h-4/5 w-1/2">
                <Image
                    alt={title}
                    src={imgSrc}
                    className="object-cover object-center md:h-36 lg:h-48"
                />
            </div>
            <div className="ml-7 flex h-4/5 w-1/2 flex-col">
                <div className="flex w-full flex-row">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                        Artist :{' '}
                    </h2>
                    <h2 className="mb-3 ml-2 text-xl font-medium leading-8 tracking-tight">
                        {author}
                    </h2>
                </div>
                <div className="flex w-full flex-row">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                        Date :{' '}
                    </h2>
                    <h2 className="mb-3 ml-2 text-xl font-medium leading-8 tracking-tight">
                        {date}
                    </h2>
                </div>
                <div className="flex w-full flex-row">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                        Art Movement :{' '}
                    </h2>
                    <h2 className="mb-3 ml-2 text-xl font-medium leading-8 tracking-tight">
                        {era}
                    </h2>
                </div>
                <div className="flex w-full flex-row">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                        Storage place :{' '}
                    </h2>
                    <h2 className="mb-3 ml-2 text-xl font-medium leading-8 tracking-tight">
                        {storage}
                    </h2>
                </div>
                <div className="flex w-full flex-row">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
                        Painting Technique :{' '}
                    </h2>
                    <h2 className="mb-3 ml-2 text-xl font-medium leading-8 tracking-tight">
                        {technique}
                    </h2>
                </div>
                <div className="flex w-full flex-row">
                    <h2 className="mb-3 text-xl  font-medium leading-8 tracking-tight">
                        Price :{' '}
                    </h2>
                    <h2 className="mb-3 ml-2 text-xl font-medium leading-8 tracking-tight">
                        {price}
                    </h2>
                </div>
            </div>
        </div>
        <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">
            {comment}
        </h2>
    </div>
);

export default DetailledCard;
