// store/useWatchlistStore.ts
import create from 'zustand';

type Movie = { id: number, title: string, poster_path: string };

interface WatchlistStore {
    watchlist: Movie[];
    addToWatchlist: (movie: Movie) => void;
    removeFromWatchlist: (id: number) => void;
}

export const useWatchlistStore = create<WatchlistStore>((set) => ({
    watchlist: [],
    addToWatchlist: (movie) => set((state) => ({ watchlist: [...state.watchlist, movie] })),
    removeFromWatchlist: (id) => set((state) => ({ watchlist: state.watchlist.filter((movie) => movie.id !== id) })),
}));
