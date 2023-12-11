import { AlgoliaButton } from 'pliny/search/AlgoliaButton';
import { KBarButton } from 'pliny/search/KBarButton';
import siteMetadata from '@/data/siteMetadata';
import React, {useState} from 'react';

function SearchButton () {

  const [searchTerm, setSearchTerm] = useState("");
  const onSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log("test");
  }

    return (
      <button onClick={onSearch} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    )
}

export default SearchButton
