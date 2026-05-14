const BASE_URL = 'http://127.0.0.1:8000/api';

const getHeaders = () => ({
    "Content-Type": "application/json",
    "Authorization": `Token ${localStorage.getItem('token')}`
});

export const movieService = {
    getAll: async () => {
        const response = await fetch(`${BASE_URL}/movies/`, {
            method: "GET",
            headers: getHeaders()
        });
        if (!response.ok) throw new Error("Erro ao buscar filmes");
        return response.json();
    },

    getById: async (id) => {
        const response = await fetch(`${BASE_URL}/movies/${id}/`, {
            method: "GET",
            headers: getHeaders()
        });
        if (!response.ok) throw new Error("Erro ao buscar filme");
        return response.json();
    },

    create: async (movieData) => {
        const response = await fetch(`${BASE_URL}/movies/`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(movieData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro do backend:', errorData); // ← mostra o erro exato
            throw new Error(JSON.stringify(errorData));
        }
        return response.json();
    },

    delete: async (movieId) => {
        const response = await fetch(`${BASE_URL}/movies/${movieId}/`, {
            method:"DELETE",
            headers:getHeaders()
        });
        if (!response.ok) {
            throw new Error('Error ao deletar filme');
        }
        return response;
    }, 

    update: async (movieId, movieData) => {
        const response = await fetch(`${BASE_URL}/movies/`, {
            method:"UPDATE",
            headers:getHeaders(),
            body: JSON.stringify(movieId, movieData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Erro do backend:', errorData);
            throw new Error(JSON.stringify(errorData));
        }
        return response.json();
    },

    rateMovie: async (id, stars) => {
        const response = await fetch(`${BASE_URL}/movies/${id}/rate_movie/`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ stars })
        });
        if (!response.ok) throw new Error("Erro ao avaliar filme");
        return response.json();
    },

    userRatedMovies: async () => {
        const response = await fetch(`${BASE_URL}/ratings/user_ratings/`, {
            method: "GET",
            headers:getHeaders(),
        });
        if (!response.ok) throw new Error("Erro ao buscar filmes");
        return response.json();
    }
};
