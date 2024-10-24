// hooks/useFetchMovies.ts
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const useFetchMovies = (searchQuery?: string) => {
    const [movies, setMovies] = useState<any>([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
        setLoading(true);
        try {
            const url = searchQuery
                ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
                : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

            const response = await axios.get(url);
            setMovies((prev: any) => [...prev, ...response.data.results]);
        } catch (err) {
            setError("Failed to fetch movies");
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchMovies();
    }, [page, searchQuery]);

    return { movies, loading, error, setPage };
};
