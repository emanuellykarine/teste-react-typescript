import Header from "../components/Header";
import { useState } from "react";
import { movieService } from "../services/movieService";    
import { useNavigate } from "react-router-dom";

export default function AddMoviePage() {
    const [formData, setFormData] = useState({
        title:'',
        description:'',
        year:'',
        genre:'',
        director:'',
        poster_url:''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = {
            ...formData,
            year: formData.year ? parseInt(formData.year) : null, // ← converte string para número
        };

        try{
            await movieService.create(payload);
            alert('Filme adicionado com sucesso')
            navigate(`/`)
        } catch (e) {
            console.error('Erro:', e);
            alert(`Erro ao adicionar filme: ${e.message}`)
        }
    }

    return (
        <div className='text-white pl-10'>
            <Header title={'Adicionar Filme'} breadcrumbs={[ {label: 'Filmes', path: '/'}, {label: 'Adicionar filme'}]} description={'Preencha os dados do filme'}/>

            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 w-full max-w-2xl">
                
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label>Titulo</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Digite o título do filme" required
                        className="w-full h-12 rounded-md bg-[#242a44] border-none text-white placeholder-gray-400 p-3"/>
                </div>
                
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label>Descrição</label>
                    <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Digite a descrição do filme" required
                        className="w-full h-12 rounded-md bg-[#242a44] border-none text-white placeholder-gray-400 p-3"/>
                </div>
                
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label>Ano de lançamento</label>
                    <input type="text" name="year" value={formData.year} onChange={handleChange} placeholder="Ex: 2024"
                        className="w-full h-12 rounded-md bg-[#242a44] border-none text-white placeholder-gray-400 p-3"/>
                </div>
                
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label>Gênero</label>
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} placeholder="Ex: Ação, Drama, Ficção científica" required
                        className="w-full h-12 rounded-md bg-[#242a44] border-none text-white placeholder-gray-400 p-3"/>
                </div>
                
                <div className='flex flex-col items-start gap-2 w-full'>
                    <label>Diretor</label>
                    <input type="text" name="director" value={formData.director} onChange={handleChange} placeholder="Ex: Quentin Tarantino" required
                        className="w-full h-12 rounded-md bg-[#242a44] border-none text-white placeholder-gray-400 p-3"/>
                </div>

                <div className='flex flex-col items-start gap-2 w-full'>
                    <label>Imagem</label>
                    <input type="text" name="poster_url" value={formData.poster_url} onChange={handleChange} placeholder="Cole a URL da imagem do pôster" required
                        className="w-full h-12 rounded-md bg-[#242a44] border-none text-white placeholder-gray-400 p-3"/>
                </div>

                <button type="submit" className="w-full h-12 rounded-md bg-violet-800 text-white font-bold hover:bg-violet-700">
                    Salvar Filme
                </button>
            </form>
        </div>
    );
}