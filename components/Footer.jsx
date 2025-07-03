"use client"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
// import toast,{Toaster} from 'react-hot-toast';

const handleChange = (e) => {
  const { name, value } = e.target;
  setEmail((data) => ({
    ...data,
    [name]: value
  }));
};



const handelSubscribe = async () => {
  try {
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });

    if (!res.ok) {
      throw new Error('Subscription failed');
    }
    else{
      // toast.success("Successfully sub");
    }

  } catch (error) {
    console.error('Error during subscription:', error);
  }
};



export default function Footer() {

  const [email ,setEmail] = useState("");

  return (
    <footer className="bg-slate-900 text-slate-100 pt-16 pb-8 relative overflow-hidden">
      {/* <Toaster/> */}
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-800 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-800 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Practice Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <HeartHandshake className="w-5 h-5 text-teal-400 mr-2" />
              Blake Psychology
            </h3>
            <p className="text-slate-400 mb-6">
              Providing compassionate, evidence-based therapy to help you overcome challenges and thrive in your personal journey.
            </p>
            <div className="flex space-x-4">
              <Link href="https://x.com/askbunnyyy" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-teal-400 hover:bg-slate-800"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Button>
              </Link>
              
              <Link href="https://instagram.com/asksaurabhhh" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-teal-400 hover:bg-slate-800"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </Button>
              </Link>
              
              <Link href="https://www.linkedin.com/in/saurabh-maurya-92b727245" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-slate-400 hover:text-teal-400 hover:bg-slate-800"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">1287 Maplewood Drive</p>
                  <p className="text-slate-400">Los Angeles, CA 90026</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">(323) 555-0192</p>
                  <p className="text-slate-300 text-sm mt-1">Text or call</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">serena@blakepsychology.com</p>
                  <p className="text-slate-300 text-sm mt-1">Typically responds within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-teal-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-slate-300">
                    <span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM
                  </p>
                  <p className="text-slate-300 mt-1">
                    <span className="font-medium">Virtual:</span> Mon, Wed & Fri, 1 PM–5 PM
                  </p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: '#contact' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6">Mental Wellness Tips</h3>
            <p className="text-slate-400 mb-4">
              Subscribe to receive helpful resources and updates on mental wellness.
            </p>
            <form className="flex flex-col space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Your email address"
                  value={email}
                  onChange={handleChange} 
                  className="w-full p-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <Button 
                type="submit" 
                onClick={handelSubscribe}
                className="bg-teal-600 hover:bg-teal-700"
              >
                Subscribe
              </Button>
            </form>
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700">
              <p className="text-slate-300 text-sm">
                "Taking care of your mental health is an act of self-love." - Dr. Serena Blake
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 mt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Dr. Serena Blake Psychology. All rights reserved.
            </p>
            <div className="flex items-center justify-center">
              <p className="text-slate-500 text-sm mr-2">Website designed with</p>
              <svg className="w-5 h-5 text-rose-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <p className="text-slate-500 text-sm ml-2">
                by <Link href="https://twitter.com/askbunnyyy" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:underline">askbunnyyy</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}