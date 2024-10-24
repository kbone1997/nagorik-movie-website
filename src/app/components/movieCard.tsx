// components/MovieCard.tsx
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({ movie }: any) => {
    return (
        <Link href={`/pages/movies/${movie.id}`}>
            <div className="movie-card">
                <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={300}
                    loading="lazy"
                />
                <p>{movie.title}</p>
            </div>
        </Link>
    );
};

export default MovieCard;
