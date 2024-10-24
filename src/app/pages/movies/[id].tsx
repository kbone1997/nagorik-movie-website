// pages/movies/[id].tsx
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export default function MovieDetails({ movie, credits, recommendations }: any) {
    return (
        <div>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={400} height={600} />
            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <p>Genres: {movie.genres.map((g) => g.name).join(', ')}</p>
            <p>Release Date: {movie.release_date}</p>

            <h2>Cast:</h2>
            <ul>
                {credits.cast.map((actor) => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>

            <h2>Recommendations:</h2>
            <ul>
                {recommendations.results.map((rec) => (
                    <li key={rec.id}>{rec.title}</li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    const movies = response.data.results;

    const paths = movies.map((movie) => ({
        params: { id: movie.id.toString() },
    }));

    return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params!;
    const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
    const recommendationsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`);

    return {
        props: {
            movie: movieResponse.data,
            credits: creditsResponse.data,
            recommendations: recommendationsResponse.data,
        },
        revalidate: 60,
    };
};
