import { useState } from "react";
import { FaFilm } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { MdMovieFilter } from "react-icons/md";
import { Link } from "react-router-dom";

export default function SideBar( {onLogout}){

    const [select, setSelect] = useState('/');
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    const linkClass = (path) => 
        `w-full h-12 flex items-center gap-3 pl-2 mb-2 cursor-pointer rounded no-underline
        ${select === path ? 'text-white bg-slate-600' : 'text-gray-500 hover:text-white hover:bg-slate-600'}`;
    

    return (
        <div className="nav-small relative flex flex-col items-start p-4">
            <button className="nav-small-button" onClick={handleToggle}>Menu</button>

            {toggleMenu ?
            <div className='relative transition-all'>
                <div className="px-4">
                    <div className='flex items-center gap-2 text-2xl font-bold'>
                        <MdMovieFilter className="text-purple-800"/>
                        <p className='text-white'>Movie</p>
                        <p className='text-purple-800'>Rate</p>
                    </div>
                </div>
                
                <nav className="flex flex-col text-sm text-gray-500 font-semibold list-none items-start mt-4">
                
                    <Link to="/" onClick={() => setSelect('/')} className={linkClass('/')}> 
                        <FaFilm/> Filmes
                    </Link>
                
                    <Link to="/adicionar-filme" onClick={() => setSelect('/adicionar-filme')} className={linkClass('/adicionar-filme')}>
                        <FaPlusCircle/> Adicionar Filme
                    </Link>
                    
                    <Link to="/perfil" onClick={() => setSelect('/perfil')} className={linkClass('/perfil')}>
                        <FaRegUser/> Meu Perfil
                    </Link>

                    <li onClick={onLogout} className="w-full h-12 flex items-center gap-3 pl-2 mb-2 cursor-pointer hover:text-white hover:bg-slate-600 rounded no-underline text-gray-500">
                        <FaSignOutAlt/> Sair
                    </li>
                </nav> 
            </div> 
                : ""
            }
           
        </div>
    );
}