import { movieService } from "../services/movieService";
import { useState, useEffect } from 'react';
import Header from "../components/Header";
import MovieProfileCard from "../components/MovieProfileCard";
import { useNavigate } from 'react-router-dom';

export default function MyProfilePage() {
    const [ratings, setRatings] = useState([]);
    const [error, setError] = useState(null);
    
    const navigate = useNavigate();

    const movieClicked = (movie) => {
        navigate(`/movie/${movie.id}`);
    }

    useEffect(() => {
        const fetchRatings = async () => {
            try {
                const result = await movieService.userRatedMovies();
                setRatings(result);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchRatings();
    }, [])

    if (error) return <h1 className='text-white'>{error}</h1>;

    return (
        <div className='text-white pl-10'>
            <Header title={'Meu perfil'} 
                breadcrumbs={[{label: "Filmes", path:'/'}, {label: "Meu perfil"}]}
                description={'Filmes que você já avaliou'}/>
            {ratings.map(rating => (
                <MovieProfileCard key={rating.id} movie={rating.movie} stars={rating.stars} onClick={movieClicked}/>
            ))}
        </div>
    );
}