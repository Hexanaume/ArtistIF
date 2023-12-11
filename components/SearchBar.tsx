"use client";
import SearchButton from "@/components/SearchButton";
import React, {useState} from 'react';
import { rechercher } from "../scripts/search.mjs";

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = (event) => {
        event.preventDefault();
        setSearchTerm(event.target.value);
        console.log("test : "+ searchTerm);
    }

    const handleSearch = async (event) => {
        event.preventDefault();

        console.log("searchTerm: "+searchTerm);
        const res = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(searchTerm)}`);
        console.log("res: ", res);

        const results = await res.json();
        console.log("results: ", results);
        setSearchResults(results);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input onChange={handleChange} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-gray-800 focus:border-gray-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-400 dark:focus:border-gray-400" placeholder="Search Mockups, Logos..." required/>
                        <button onClick={handleSearch} type="button" className="text-white absolute end-2.5 bottom-2.5 bg-gray-800 hover:bg-grey-800 focus:ring-4 focus:outline-none focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600">Search</button>
                    </div>
                </form>
            </div>

        </>
);
}
function onSearch(){
    console.log("test");
}

export default SearchBar
