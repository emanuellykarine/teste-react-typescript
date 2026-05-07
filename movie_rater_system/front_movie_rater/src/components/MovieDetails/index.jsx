import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieDetails({ movie }) {
    return (
        <div>
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

                    <p><b>Gênero: </b> {movie.genre}</p>
                    <p><b>Diretor:</b> {movie.director}</p>
                </div>

            </div>
        </div>
    );
}
