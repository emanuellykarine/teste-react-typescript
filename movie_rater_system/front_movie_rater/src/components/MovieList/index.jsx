import React, {useState, useEffect} from 'react';

export default function MovieList() {

    const [movies, setMovies] = useState([]); //acessar e seta os dados
    const [error, setError] = useState(null);

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
        <div className='text-white'>
            <h2 className="text-2xl">Filmes</h2>
            <h3 className='text-lg'>Confira todos os filmes cadastrados</h3>
        
            {movies.map(movie => {
                return (
                <div key={movie.id} className='border-2 border-white w-60'>
                    <figure>
                        <img src={movie.poster_url} alt={movie.title} />
                    </figure>
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>
                </div>
                )
            })}
        </div>
    );
}
