// components/MovieList.tsx
import { useState, useEffect } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import MovieCard from './MovieCard';

const MovieList = ({ searchQuery }: { searchQuery?: string }) => {
    const { movies, loading, error, setPage } = useFetchMovies(searchQuery);

    const loadMoreMovies = () => setPage((prev) => prev + 1);

    // Infinite scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                loadMoreMovies();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default MovieList;