const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export async function fetchMovieData(id: string) {
    const movieResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
    const creditsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`);
    const recommendationsResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`);

    if (!movieResponse.ok || !creditsResponse.ok || !recommendationsResponse.ok) {
        throw new Error('Failed to fetch data');
    }

    const movie = await movieResponse.json();
    const credits = await creditsResponse.json();
    const recommendations = await recommendationsResponse.json();

    return { movie, credits, recommendations };
}