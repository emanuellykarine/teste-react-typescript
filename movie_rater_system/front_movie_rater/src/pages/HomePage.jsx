import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import { movieService } from '../services/movieService';
import Header from '../components/Header';

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
        <div className='text-white pl-10'>
            <Header title={'Filmes'} 
            breadcrumbs={[{label: "Filmes", path:'/'}]}
            description={'Confira todos os filmes cadastrados'}/>
            <MovieList movies={movies} />
        </div>
    );
}
