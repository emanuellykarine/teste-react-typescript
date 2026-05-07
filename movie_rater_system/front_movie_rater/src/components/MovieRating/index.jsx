import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { movieService} from '../../services/movieService';

export default function MovieRating ({movie}) {
    const [rating, setRating] = useState(movie.user_rating); //recebe o valor inicial

    const handleRating = async (event, newValue) => {
        setRating(newValue);
        try {
            await movieService.rateMovie(movie.id, newValue);
        } catch (err) {
            return err;
        }
    }

    return (
        <div className='mt-4 w-64 bg-[#242a44] p-5 pt-1 flex flex-col items-start rounded-lg'>
            <p className='font-bold'>Sua avaliação</p>
            <p className='text-sm m-0 mb-2 text-slate-400'> Clique em uma estrela para avaliar</p>
            <Rating 
                name="half-rating" 
                size='large' 
                value={rating} //conecta o componente com o estado
                precision={1}
                onChange={handleRating} //atualiza o estado ao clicar
            />
            
        </div>
    );
}