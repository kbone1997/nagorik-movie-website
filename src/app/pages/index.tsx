// pages/index.tsx
import { useState } from 'react';
import SearchBar from '../components/searchBar';
import MovieList from '../components/movieList';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <div>
            <SearchBar setSearchQuery={setSearchQuery} />
            <MovieList searchQuery={searchQuery} />
        </div>
    );
}
