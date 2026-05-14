import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { movieService } from '../services/movieService';
import MovieDetails from '../components/MovieDetails';
import MovieAverageRating from '../components/MovieAverageRating';
import MovieRating from '../components/MovieRating';
import Header from '../components/Header';

export default function MovieDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const result = await movieService.getById(id);
                setMovie(result);
            } catch (err) {
                setError(err.message);
            }
        };
        fetchMovie();
    }, [id]); //id é a dependencia, o useeffect roda sempre que o id mudar

    const handleDelete = async () => {
        try {
            await movieService.delete(id);
            setShowConfirm(false);
            setShowSuccess(true);
            navigate(`/`);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleClose = () => {
        setShowConfirm(false);
        setShowSuccess(false);
    };

  const handleOpenConfirm = () => {
        setShowConfirm(true);
    };

  const handleBackToForm = () => {
    setShowConfirm(false);
  };

    if (error) return <h1 className='text-white'>{error}</h1>;
    if (!movie) return <h1 className='text-white'>Carregando...</h1>;

    return (
        <div>
            {!showSuccess && !showConfirm ? (
                <div className='text-white p-10 pt-0'>
                    <Header breadcrumbs={[ {label: 'Filmes', path: '/'}, {label: movie.title}]}/>

                <div className='flex justify-end'>
                    <button className='bg-red-600 text-white border-none rounded-sm p-2 font-bold hover:bg-red-400' onClick={handleOpenConfirm}>Excluir</button>
                </div>

                    <MovieDetails movie={movie} /> 
                    <div className='flex gap-4'>
                        <MovieAverageRating movie={movie}/>
                        <MovieRating movie={movie}/>
                    </div>
                </div> 
            ) :  showConfirm ? (
                <div className='text-white p-10'>
                    <p>Tem certeza que deseja excluir?</p>
                    <button onClick={handleDelete}>Sim, excluir</button>
                    <button onClick={handleBackToForm}>Cancelar</button>
                </div>
            ) : (
                <div className='text-white p-10'>
                    <p>Filme excluído com sucesso!</p>
                    <button onClick={handleClose}>Fechar</button>
                </div>
            )}
        </div>
    );
}
