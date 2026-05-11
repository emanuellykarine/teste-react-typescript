
export default function Header( {title, description}) {
    return (
        <div>
           
            <div className='flex flex-col items-start mb-6'>
                <h2 className="text-3xl m-0">{title}</h2>
                <h3 className='text-base font-light mt-0'>{description}</h3>
            </div>

        </div>
            
        );
}