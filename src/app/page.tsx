// pages/index.tsx
"use client"
import { useState } from 'react';
import SearchBar from './components/searchBar';
import MovieList from './components/movieList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className='pl-[10%] pr-[10%]'>
      <SearchBar setSearchQuery={setSearchQuery} />
      <MovieList searchQuery={searchQuery} />
    </div>
  );
}
