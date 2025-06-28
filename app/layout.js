import './globals.css';
import { Montserrat, Open_Sans } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: 'Dr. Serena Blake | Clinical Psychologist',
  description: 'Professional therapy services in Los Angeles',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-sans text-slate-800 bg-slate-50">
        {children}
      </body>
    </html>
  );
}