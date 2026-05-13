import { Link } from 'react-router-dom';

export default function Header({ title, description, breadcrumbs = [] }) {
    return (
        <div>
            {/* Migalhas de pão */}
            {breadcrumbs.length > 0 && (
                <nav className='flex items-center gap-2 text-sm text-gray-400 mb-3'>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className='flex items-center gap-2'>
                            {index > 0 && <span>/</span>}
                            {crumb.path ? (
                                <Link to={crumb.path} className='hover:text-white no-underline text-gray-400'>
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className='text-white'>{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
            )}

            <div className='flex flex-col items-start mb-6'>
                <h2 className="text-3xl m-0">{title}</h2>
                <h3 className='text-base font-light mt-0'>{description}</h3>
            </div>
        </div>
    );
}