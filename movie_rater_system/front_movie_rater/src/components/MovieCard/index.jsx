import React from 'react';

export default function MovieCard({ movie, onClick }) {
    return (
        <div
            onClick={() => onClick(movie)}
            className='cursor-pointer border-2 border-gray-300 w-[210px] bg-slate-800 rounded-lg hover:border-white transition-colors overflow-hidden'>
            <figure className='m-0'>
                <img src={movie.poster_url} alt={movie.title} className='w-full h-60 object-cover rounded-t-lg' />
            </figure>
            <div className='p-2'>
                <h2 className='flex flex-col items-start text-base font-semibold mb-0 mt-0'>{movie.title}</h2>
                <div className='flex justify-between'>
                    <p className='text-sm text-gray-400'>{movie.year}</p>
                    <div className='flex mt-4 gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640">
                            <path fill="rgb(255, 212, 59)" d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z"/>
                        </svg>
                        <p className='font-bold m-0'>
                            {movie.avg_rating ? movie.avg_rating.toFixed(1) : '0.0'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
