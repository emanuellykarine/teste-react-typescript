import React from 'react';
import { useNavigate } from 'react-router-dom';
import MovieCard from '../MovieCard';

export default function MovieList({ movies }) {
    const navigate = useNavigate();

    const movieClicked = (movie) => {
        navigate(`/movie/${movie.id}`);
    }

    return (
        <div className='grid grid-cols-5 gap-2'>
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} onClick={movieClicked} />
            ))}
        </div>
    );
}
