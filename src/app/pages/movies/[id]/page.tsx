// src/app/movies/[id]/page.tsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import MovieCard from '@/app/components/movieCard';
import { fetchMovieData } from '@/app/fetch/moviefetch';

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
        <div className='w-full flex flex-col p-4 lg:px-[5%] gap-8'>
            <div className='flex flex-col lg:flex-row gap-8'>
                {/* Poster Image */}
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={400}
                    height={600}
                    className='w-full max-w-[400px] h-auto mx-auto lg:mx-0'
                />

                {/* Movie Info */}
                <div className='flex flex-col gap-4 text-sm lg:text-base'>
                    <h1 className='text-2xl lg:text-3xl font-semibold'>{movie.title}</h1>
                    <p className='text-white'>{movie.overview}</p>
                    <p className='flex gap-1'><span className='font-semibold'>Genres:</span> {movie.genres.map((g: { name: string }) => g.name).join(', ')}</p>
                    <p className='flex gap-1'><span className='font-semibold'>Release Date:</span> {movie.release_date}</p>

                    {/* Cast List */}
                    <h2 className='font-semibold text-lg lg:text-xl'>Cast:</h2>
                    <div className='h-[200px] lg:h-[350px] w-full overflow-y-auto border p-2 rounded-md shadow-inner'>
                        {credits.cast.map((actor: any) => (
                            <li key={actor.id} className="list-none text-white">{actor.name}</li>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <h2 className='text-2xl lg:text-3xl font-semibold'>Recommendations:</h2>
            <div className='w-full flex gap-4 overflow-x-auto lg:grid lg:grid-cols-3 xl:grid-cols-4'>
                {recommendations.results.map((rec: any) => (
                    <MovieCard key={rec.id} movie={rec} />
                ))}
            </div>
        </div>
    );
}
