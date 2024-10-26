// src/app/movies/[id]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MovieCard from '@/app/components/movieCard';
import { fetchMovieData } from '@/app/fetch/moviefetch';
import type { GetStaticPaths, GetStaticProps } from 'next'

export default function MovieDetails({ params }: { params: { id: string } }) {
    const [movie, setMovie] = useState<any>(null);
    const [credits, setCredits] = useState<any>(null);
    const [recommendations, setRecommendations] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const { movie, credits, recommendations } = await fetchMovieData(params.id);
                setMovie(movie);
                setCredits(credits);
                setRecommendations(recommendations);
            } catch (error) {
                console.error("Error fetching movie data:", error);
            }
        }

        fetchData();
    }, [params.id]);

    if (!movie || !credits || !recommendations) return <div>Loading...</div>;

    return (
        <div className='w-full border-4 flex flex-col'>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={400} height={600} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Genres: {movie.genres.map((g: { name: string }) => g.name).join(', ')}</p>
            <p>Release Date: {movie.release_date}</p>

            <h2>Cast:</h2>
            <ul>
                {credits.cast.map((actor: any) => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>

            <h2>Recommendations:</h2>
            <div className='w-[80%] flex border-4 overflow-x-auto'>
                {recommendations.results.map((rec: any) => (
                    <MovieCard key={rec.id} movie={rec} />
                ))}
            </div>
        </div>
    );
}
