export default function SideBar(){
    return (
        <div className="flex flex-col items-start p-4 w-fit min-h-screen">
            <div className="px-4">
                <div className='flex text-2xl font-bold'>
                    <p className='text-white'>Movie</p>
                    <p className='text-purple-800'>Rate</p>
                </div>
            </div>

            <nav className="flex flex-col text-lg text-gray-500 font-semibold list-none items-start mt-4">
                <li className="w-full h-12 flex items-center px-4 mb-2 cursor-pointer hover:text-white hover:bg-slate-600 rounded">Filmes</li>
                <li className="w-full h-12 flex items-center px-4 mb-2 cursor-pointer hover:text-white hover:bg-slate-600 rounded">Adicionar Filme</li>
                <li className="w-full h-12 flex items-center px-4 mb-2 cursor-pointer hover:text-white hover:bg-slate-600 rounded">Sair</li>
            </nav>
        </div>
    );
}