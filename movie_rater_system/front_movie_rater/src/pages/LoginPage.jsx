import { MdMovieFilter } from "react-icons/md";
import { useState } from "react";
import { authService } from "../services/authService";

export default function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await authService.login(username, password);
            onLogin(); // ← avisa o App que logou
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex bg-gray-800">
            <div className="w-1/2 h-screen overflow-hidden relative">
                <img 
                    src="https://t2.tudocdn.net/687837?w=1920" 
                    alt="Capa dos filmes" 
                />
                {/* Overlay escuro em cima da imagem */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-gray-800 to-transparent"></div>

            </div>

            <div className="w-1/2 flex flex-col justify-center items-center px-10">

                <div className='flex items-center gap-2 text-5xl font-bold'>
                    <MdMovieFilter className="text-purple-800"/>
                    <p className='text-white'>Movie</p>
                    <p className='text-purple-800'>Rate</p>
                </div>
                <p className="text-white m-0">Faça login para continuar</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4 w-96">
                    {error && (
                        <p className='text-red-400 text-sm text-center bg-red-900/20 p-2 rounded'>
                            {error}
                        </p>
                    )}
                    
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" className="h-14 rounded-md bg-[#242a44] border-none text-white placeholder-gray-200 p-2" required/>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" className="h-14 rounded-md bg-[#242a44] border-none text-white placeholder-gray-200 p-2" required/>
                    <button type="submit" className="h-14 rounded-md bg-violet-800 text-white font-bold text-lg border-none">'Entrar</button>
                </form>
            </div>

        </div>
    );
}