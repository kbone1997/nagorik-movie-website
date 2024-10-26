// pages/watchlist.tsx
"use client"
import { useWatchlistStore } from '../../store/useWatchlistStore';
import MovieCard from '../../components/movieCard';

export default function WatchlistPage() {
    const { watchlist } = useWatchlistStore();

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            {watchlist.length === 0 ? (
                <p>No movies in your watchlist.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {watchlist.map((movie: any) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}
