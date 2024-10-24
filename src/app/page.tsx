// pages/index.tsx
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchBar setSearchQuery={setSearchQuery} />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}
