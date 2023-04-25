import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchResultPage = ({ location }) => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const searchQuery = new URLSearchParams(location.search).get('query');
        if (searchQuery) {
            searchMovies(searchQuery);
        }
    }, [location.search]);

    const searchMovies = async (query) => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/multi?api_key=5f5c3fe7d8050abeb782fc995a4611da&language=ru&query=${query}&include_adult=false`
            );
            setSearchResults(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Результаты поиска</h1>
            <ul>
                {searchResults.map((result) => (
                    <li key={result.id}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResultPage;
