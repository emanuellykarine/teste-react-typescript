import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/movies/${id}`, {
                    headers: {
                        "Authorization": "Token 44aa7f4e5090a670f7f7c11a00db5b680c8424ae"
                    }
                });
                
                if (!response.ok) {
                    setError("Erro ao buscar filme");
                    return;
                }

                const result = await response.json();
                setMovie(result);
            } catch (err) {
                setError("Erro de rede: " + err.message);
            }
        };

        fetchMovie();
    }, [id]);

    if (error) return <h1 className='text-white'>{error}</h1>;
    if (!movie) return <h1 className='text-white'>Carregando...</h1>;

    return (
        <div className='text-white p-10'>
            <Link to="/" className='text-blue-400 hover:text-blue-300 mb-4 inline-block'>
                ← Voltar para lista
            </Link>
            
            <div className='flex gap-8'>
                <img 
                    src={movie.poster_url} 
                    alt={movie.title} 
                    className='w-80 h-auto rounded-lg'
                />
                <div>
                    <h1 className='text-4xl font-bold mb-4'>{movie.title}</h1>
                    <p className='text-lg text-gray-300'>{movie.description}</p>
                    <p className='text-yellow-400 mt-4'>
                        Avaliação: {movie.avg_rating ? movie.avg_rating.toFixed(1) : 'Sem avaliações'}
                    </p>
                </div>
            </div>
        </div>
    );
}