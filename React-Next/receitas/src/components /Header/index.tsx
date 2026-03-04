import { Playfair_Display } from 'next/font/google'

const playfairDisplay = Playfair_Display({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic']
})

export function Header() {
    return (
        <div className={playfairDisplay.className}>
            <h1 className="text-4xl font-semibold py-8 text-gray-800">
                As receitas da Madalena
            </h1>
        </div>
    );
}