import Rating from '@mui/material/Rating';

export default function MovieAverageRating ( {movie} ) {
    return (
        <div className='mt-4 w-64 bg-[#242a44] p-5 pt-1 flex flex-col items-start rounded-lg'>
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
    );
}