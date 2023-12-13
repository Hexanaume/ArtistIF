/* eslint-disable prettier/prettier */
'use client';
import React, { useState } from 'react';
import { rechercher } from '../scripts/search.mjs';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DetailledCard from './DetailledCard';

const ButtonTest = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleTest = async (event) => {
        event.preventDefault();
        // const testString = 'test';
        // console.log('searchTerm: ' + searchTerm);
        // const res = await fetch(
        //     `http://localhost:3000/api/search?query=${testString}&type=rechercher`,
        // );
        // console.log('res: ', res);

        // const results = await res.json();
        // console.log('results: ', results);
        //setSearchResults(results);
        event.preventDefault();
        // Autres actions...
        // Redirection vers DetailledCard avec les données
        //push vers DetailledCard
    };

    return (
        <>
            <div>
                <button
                    onClick={handleTest}
                    type="button"
                    className="hover:bg-grey-800 rounded-lg bg-gray-800 px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-gray-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                    Test
                </button>
            </div>
        </>
    );
};
function onSearch() {
    console.log('test');
}

export default ButtonTest;
