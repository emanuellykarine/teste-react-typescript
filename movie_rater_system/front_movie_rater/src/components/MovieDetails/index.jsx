import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';

export default function MovieDetails({ movie }) {
    return (
        <div className='text-white p-10'>
            <Link to="/" className='font-bold text-white hover:text-blue-300 mb-10 flex flex-col items-start'>
                ← Voltar
            </Link>
            
            <div className='flex gap-8'>
                <img 
                    src={movie.poster_url} 
                    alt={movie.title} 
                    className='w-80 h-auto rounded-lg'
                />
                <div className='flex flex-col items-start'>
                    <div className='flex'>
                        <p className='text-4xl font-bold m-0'>{movie.title}</p>
                        <p className='text-sm ml-2 mt-2 p-1 bg-[#242a44] rounded-lg pl-4 pr-4'>{movie.year}</p>
                    </div>
                   
                    <p className='text-justify'>{movie.description}</p>

                    <div className='w-64 bg-[#242a44] p-5 pt-1 flex flex-col items-start rounded-lg'>
                        <p className='font-bold'>Avaliação média</p>
                        <p className='font-bold text-5xl m-0 mb-2'>
                            {movie.avg_rating.toFixed(1)}
                        </p>
                        <Rating name="half-rating-read" size='large' defaultValue={movie.avg_rating} precision={0.5} readOnly />
                        <p className='text-sm'>
                            {movie.number_of_ratings === 1 
                                ? `${movie.number_of_ratings} avaliação` 
                                : `${movie.number_of_ratings} avaliações`
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
