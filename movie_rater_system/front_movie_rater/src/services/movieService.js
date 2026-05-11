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

    rateMovie: async (id, stars) => {
        const response = await fetch(`${BASE_URL}/movies/${id}/rate_movie/`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ stars })
        });
        if (!response.ok) throw new Error("Erro ao avaliar filme");
        return response.json();
    }
};
