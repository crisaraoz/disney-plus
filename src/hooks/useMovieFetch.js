import { useState, useEffect } from "react";
import API from '../API';

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async() => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const allLogos = await API.fetchLogo(movieId);
                const logos = allLogos.logos.filter(
                    logo => logo.iso_639_1 === 'en'
                );
                const credits = await API.fetchCredits(movieId);
                // Get directors only
                const directors = credits.crew.filter(
                    member => member.job === 'Director'
                );

                setState({
                    ...movie,
                    logos,
                    actors: credits.cast,
                    directors
                });

                setLoading(false);

            } catch (error) {
                setError(true);
            }
        }
        fetchMovie();
    },[movieId]);

    console.log(state);

    return { state, loading, error };
};