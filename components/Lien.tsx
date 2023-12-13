"use client";
import SearchButton from "@/components/SearchButton";
import React, {useState} from 'react';
import { rechercher } from "../scripts/search.mjs";


const Lien = () => {

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
        const res = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent("Leonardo")}`);
        console.log("res: ", res);

        const results = await res.json();
        console.log("results: ", results);
        setSearchResults(results);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSearch}>
                    <div className="relative">
                        <input onChange={handleChange} type="search" id="default-search"  required/>
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

export default Lien
