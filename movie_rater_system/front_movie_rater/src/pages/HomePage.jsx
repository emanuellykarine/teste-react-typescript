import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { movieService } from '../services/movieService';

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const result = await movieService.getAll();
                setMovies(result);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchMovies();
    }, [])

    if (error) return <h1 className='text-white'>{error}</h1>;

    return (
        <div className='text-white pl-10 pt-4'>
            <div className='flex flex-col items-start mb-6'>
                <h2 className="text-3xl m-0">Filmes</h2>
                <h3 className='text-base font-light mt-0'>Confira todos os filmes cadastrados</h3>
            </div>
            <MovieList movies={movies} />
        </div>
    );
}
