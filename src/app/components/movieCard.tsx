// components/MovieCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MovieCard = ({ movie }: any) => {
    const [hover, setHover] = useState<boolean>(false);
    return (
        <Link href={`pages/movies/${movie.id}`}>
            <div className={`flex flex-col items-center justify-center`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <Image
                    className='rounded-2xl'
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={200}
                    height={300}
                    loading="lazy"
                />
                <p className={`border-b-2 border-b-transparent ${hover ? "border-b-white" : ""}`}>{movie.title}</p>
            </div>
        </Link>
    );
};

export default MovieCard;
