"use client";
import Link from 'next/link';
import SearchButton from "@/components/SearchButton";
import React, { useState } from 'react';
import { rechercher } from "../scripts/search.mjs";
import DetailledCard from "./DetailledCard";

const Lien = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log("test : " + searchTerm);
  }

  const handleSearch = async (event) => {
    event.preventDefault();
    console.log("searchTerm: " + searchTerm);

    // Fetch data from the API or perform other actions

    // Example fetch usage
    // const res = await fetch(`http://localhost:3000/api/search?query=${encodeURIComponent(searchTerm)}`);
    // const results = await res.json();
    // setSearchResults(results);

    // Navigate to Main2.tsx
    // Note: Make sure to replace 'Main2' with the actual filename (excluding the file extension) of your Main2 component.
    // Also, provide any necessary query parameters if needed.
    // In this example, I'm assuming you don't need any query parameters.
    window.location.href = '/Main2.tsx';
  }

  return (
    <>
      <div>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <input onChange={handleChange} type="search" id="default-search" required />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Lien;
