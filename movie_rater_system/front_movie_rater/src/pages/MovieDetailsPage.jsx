import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieService } from '../services/movieService';
import MovieDetails from '../components/MovieDetails';
import MovieAverageRating from '../components/MovieAverageRating';
import MovieRating from '../components/MovieRating';

export default function MovieDetailsPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const result = await movieService.getById(id);
                setMovie(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchMovie();
    }, [id]);

    if (error) return <h1 className='text-white'>{error}</h1>;
    if (!movie) return <h1 className='text-white'>Carregando...</h1>;

    return (
    <div className='text-white p-10'>
       <MovieDetails movie={movie} /> 
       <div className='flex gap-4'>
            <MovieAverageRating movie={movie}/>
            <MovieRating movie={movie}/>
       </div>
    </div>   
    );
}
