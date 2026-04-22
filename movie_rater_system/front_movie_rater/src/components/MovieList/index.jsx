import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

export default function MovieList() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]); //acessar e seta os dados
    const [error, setError] = useState(null);

    const movieClicked = (movie) => {
        navigate(`/movie/${movie.id}`);
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/movies', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Token 44aa7f4e5090a670f7f7c11a00db5b680c8424ae"
                    }
                });
                
                if (!response.ok) {
                    setError("Error getting movies")
                    return;
                }

                const result = await response.json();
                setMovies(result);
            } catch (err) {
                setError("CORS ou Network Error: " + err.message);
            }
        }
        fetchMovies();
    }, [])

        if (error) return <h1 className='text-white'>{error}</h1>;

    return (
        <div className='text-white pl-10 pt-4'>
            <div className='flex flex-col items-start'>
                <h2 className="text-3xl m-0">Filmes</h2>
                <h3 className='text-base font-light mt-0'>Confira todos os filmes cadastrados</h3>
            </div>
            
            <div className='grid grid-cols-5 gap-2'>
                {movies.map(movie => {
                    return (
                    <div key={movie.id} 
                        onClick={() => movieClicked(movie)}
                        className='cursor-pointer border-2 border-gray-300 w-[210px] bg-slate-800 rounded-lg hover:border-white transition-colors overflow-hidden'>
                        <figure className='m-0'>
                            <img src={movie.poster_url} alt={movie.title} className='w-full h-60 object-cover rounded-t-lg' />
                        </figure>
                        <div className='p-3'>
                            <h2 className='flex flex-col items-start text-base font-semibold mb-2 mt-0'>{movie.title}</h2>
                        </div>
                    </div>
                    )
                })}
            </div>
            
        </div>
    );
}
