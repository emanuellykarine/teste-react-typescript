import { FaFilm } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";
import { useLocation, Link } from "react-router-dom";

export default function SideBar( {onLogout}){

    const location = useLocation(); // ← pega a rota atual

    const linkClass = (path) => 
        `w-full h-12 flex items-center gap-3 px-4 mb-2 cursor-pointer rounded no-underline
        ${location.pathname === path ? 'text-white bg-slate-600' : 'text-gray-500 hover:text-white hover:bg-slate-600'}`;
    

    return (
        <div className="sidebar flex flex-col items-start p-4 w-fit min-h-screen">
            <div className="px-4">
                <div className='flex items-center gap-2 text-2xl font-bold'>
                    <MdMovieFilter className="text-purple-800"/>
                    <p className='text-white'>Movie</p>
                    <p className='text-purple-800'>Rate</p>
                </div>
            </div>

            <nav className="flex flex-col text-lg text-gray-500 font-semibold list-none items-start mt-4">
                
                <Link to="/" className={linkClass('/')}> 
                    <FaFilm/> Filmes
                </Link>
            
                <Link to="/adicionar-filme" className={linkClass('/adicionar-filme')}>
                    <FaPlusCircle/> Adicionar Filme
                </Link>
                
                <Link to="/perfil" className={linkClass('/perfil')}>
                    <FaRegUser/> Meu Perfil
                </Link>

                <li onClick={onLogout} className="w-full h-12 flex items-center gap-3 px-4 mb-2 cursor-pointer hover:text-white hover:bg-slate-600 rounded no-underline text-gray-500">
                    <FaSignOutAlt/> Sair
                </li>
            </nav>
        </div>
    );
}