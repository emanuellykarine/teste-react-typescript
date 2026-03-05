import { Playfair_Display } from 'next/font/google'
import Link from 'next/link';

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export function Header() {
    return (
        <div className={`${playfairDisplay.className} border-b-gray-200 border-b-2 mb-10 p-6`}>
            <Link href="#" className="text-4xl font-light py-8 text-gray-700 ml-6">
                As receitas da Madalena
            </Link>
        </div>
    );
}