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

        if (error) return <h1>{error}</h1>;

    return (
        <div>
            <h2 className="text-2xl">Movie List</h2>
        
            {movies.map(movie => {
                return <h2>{movie}</h2>
            })}
        </div>
    );
}
