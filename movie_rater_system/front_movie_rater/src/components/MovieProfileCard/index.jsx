import React from 'react';
import Rating from '@mui/material/Rating';

export default function MovieProfileCard({ movie, stars, onClick }) {
    return (
        <div
            onClick={() => onClick(movie)}
            className='flex cursor-pointer border-2 border-gray-300 bg-slate-800 rounded-lg hover:bg-slate-600 transition-colors overflow-hidden mr-4 mb-4'>
            <div className='p-2 flex align-middle'>
                <figure className='m-0'>
                    <img src={movie.poster_url} alt={movie.title} className='w-full h-40 object-cover rounded-lg' />
                </figure>
                <div className='flex flex-col items-start justify-center pl-3'>
                    <h2 className='text-base font-semibold m-0'>{movie.title}</h2>
                    <p className='text-sm text-gray-400 m-0'>{movie.year}</p>
                    <div className='flex flex-col items-end'>
                        <Rating
                            name="half-rating-read" 
                            size='large' 
                            defaultValue={stars}
                            precision={1} 
                            readOnly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
