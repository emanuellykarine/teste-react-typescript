const BASE_URL = 'http://127.0.0.1:8000/';

const getHeaders = () => ({
    "Content-Type": "application/json",
    "Authorization": `Token ${localStorage.getItem('token')}` // ← token dinâmico
});

export const authService = {
    login: async (username, password) => {
        const response = await fetch(`${BASE_URL}/auth/`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify({ username, password })
        });
        if (!response.ok) throw new Error("Usuário ou senha inválidos");
        const data = await response.json();
        localStorage.setItem('token', data.token); // ← salva o token
        return data;
    },

    logout: () => {
        localStorage.removeItem('token');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};
