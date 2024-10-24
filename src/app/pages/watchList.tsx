// pages/watchlist.tsx
import { useWatchlistStore } from '../store/useWatchlistStore';
import MovieCard from '../components/MovieCard';

export default function WatchlistPage() {
    const { watchlist } = useWatchlistStore();

    return (
        <div>
            <h1>Your Watchlist</h1>
            {watchlist.length === 0 ? (
                <p>No movies in your watchlist.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {watchlist.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
}
