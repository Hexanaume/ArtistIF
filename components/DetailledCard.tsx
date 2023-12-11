import React from 'react'
import Image from './Image'
// import Link from './Link'

const DetailledCard = ({ title, imgSrc, author, date, comment, era, storage, technique, price }) => (
    <div className="flex flex-col border-8 border-sky-500 w-full h-full">
        <h2 className="mb-7 mt-7 text-5xl font-semibold leading-8 tracking-tight">{title}</h2>
        <div className="flex flex-row w-full h-7/8 mb-7">
            <div className="w-1/2 h-4/5">
                <Image
                    alt={title}
                    src={imgSrc}
                    className="object-cover object-center md:h-36 lg:h-48"
                    />
            </div>
            <div className="flex flex-col w-1/2 h-4/5 ml-7">
                <div className="flex flex-row w-full">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">Artist : </h2>
                    <h2 className="mb-3 text-xl ml-2 font-medium leading-8 tracking-tight">{author}</h2>
                </div>
                <div className="flex flex-row w-full">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">Date : </h2>
                    <h2 className="mb-3 text-xl ml-2 font-medium leading-8 tracking-tight">{date}</h2>
                </div>
                <div className="flex flex-row w-full">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">Art Movement : </h2>
                    <h2 className="mb-3 text-xl ml-2 font-medium leading-8 tracking-tight">{era}</h2>
                </div>
                <div className="flex flex-row w-full">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">Storage place : </h2>
                    <h2 className="mb-3 text-xl ml-2 font-medium leading-8 tracking-tight">{storage}</h2>
                </div>
                <div className="flex flex-row w-full">
                    <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">Painting Technique : </h2>
                    <h2 className="mb-3 text-xl ml-2 font-medium leading-8 tracking-tight">{technique}</h2>
                </div>
                <div className="flex flex-row w-full">
                    <h2 className="mb-3 text-xl  font-medium leading-8 tracking-tight">Price : </h2>
                    <h2 className="mb-3 text-xl ml-2 font-medium leading-8 tracking-tight">{price}</h2>
                </div>
            </div>
        </div>
        <h2 className="mb-3 text-xl font-medium leading-8 tracking-tight">{comment}</h2>
    </div>
)

export default DetailledCard