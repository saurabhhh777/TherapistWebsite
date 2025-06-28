import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-slate-900 font-bold text-xl">
          Dr. Serena Blake, PsyD
        </div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center">
            {['About', 'Services', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <Button asChild variant="ghost" className="text-slate-700 hover:text-slate-900">
                  <Link href={`#${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </Button>
              </li>
            ))}
            <li>
              <Button asChild variant="secondary" className="bg-teal-500 hover:bg-teal-600 text-white">
                <Link href="#contact">
                  Book Consult
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
        
        <Button variant="outline" size="icon" className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </div>
    </header>
  );
}