"use client";
import React, { Component, useState } from "react";
import { ReactDOM } from "react";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        console.log(searchTerm);
    };

    // make a call to the api to get the search results

    const handleSearch = async () => {
        try {
            const res = await fetch(
                `http://localhost:3000/api/search?query=${searchTerm}`,
            );

            console.log(res);

            if (!res.ok) {
                throw new Error(res.statusText);
            }

            const results = await res.json();
            setSearchResults(results);

            console.log(results);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="mx-auto max-w-md">
                <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg">
                    <div className="grid h-full w-12 place-items-center text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                        onChange={handleChange}
                    />
                    <button
                        className="absolute right-0 top-0 h-full w-12 rounded-l-lg text-gray-600 transition-colors duration-300 hover:text-gray-900 focus:outline-none peer-focus:bg-gray-300 peer-focus:text-gray-900"
                        onClick={handleSearch}
                    />
                </div>
            </div>
        </>
    );
}

export default SearchBar;
