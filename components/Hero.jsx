import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-700 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-600 rounded-full mix-blend-soft-light opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-indigo-600 rounded-full mix-blend-soft-light opacity-15 blur-3xl"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* New feature badge */}
            <div className="mb-6 inline-flex items-center bg-teal-500/20 text-teal-300 text-sm font-medium px-4 py-2 rounded-full">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Now accepting new clients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-50">
              Healing Minds, Restoring Hearts
            </h1>
            
            <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto lg:mx-0">
              Compassionate therapy for anxiety, relationships, and trauma recovery. 
              Evidence-based approaches tailored to your unique journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contact">
                <Button className="py-5 px-8 text-lg bg-teal-500 hover:bg-teal-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-teal-500/20">
                  Book a Free Consult
                </Button>
              </Link>
              <Link href="#services">
                <Button className="py-5 px-8 text-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all duration-300 transform hover:-translate-y-1">
                  View Services
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white border-2 border-slate-900 overflow-hidden">
                    <div className={`w-full h-full ${i % 2 === 0 ? 'bg-indigo-300' : 'bg-teal-300'}`}></div>
                  </div>
                ))}
              </div>
              
              <div className="text-slate-300">
                <p className="font-medium">Trusted by clients for over 8 years</p>
                <div className="flex items-center mt-1">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map((i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2">5.0 Rating</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual elements */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-xl">
              {/* Card header */}
              <div className="bg-white/10 p-4 flex items-center justify-between border-b border-white/10">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-slate-300 text-sm">app.blakepsychology.com</div>
                <div className="w-6"></div>
              </div>
              
              {/* Card content */}
              <div className="p-6">
                {/* Calendar section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-slate-50">Your Next Session</h3>
                    <span className="text-sm text-teal-400">Available</span>
                  </div>
                  
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                      <div key={i} className="text-center text-slate-400 text-sm">{day}</div>
                    ))}
                    {Array.from({ length: 28 }).map((_, i) => {
                      const day = i + 1;
                      let className = "w-8 h-8 rounded-full flex items-center justify-center text-sm";
                      
                      if (day === 15) {
                        className += " bg-teal-500 text-white font-bold";
                      } else if (day > 10 && day < 20) {
                        className += " bg-white/10 text-slate-300";
                      } else {
                        className += " text-slate-400";
                      }
                      
                      return (
                        <div key={i} className={className}>
                          {day}
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Appointment card */}
                <div className="bg-teal-900/30 border border-teal-500/30 rounded-xl p-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-teal-500/10 p-2 rounded-lg mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-50">Available Consultation</h4>
                      <p className="text-teal-300 text-sm">Tuesday, May 15 • 2:00 PM</p>
                      <p className="text-slate-300 mt-2 text-sm">15-minute video consultation</p>
                    </div>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm">Session Types</p>
                    <p className="text-xl font-bold text-slate-50">3</p>
                    <div className="h-1 w-full bg-slate-700 mt-2 rounded-full">
                      <div className="h-1 bg-teal-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg">
                    <p className="text-slate-400 text-sm">Availability</p>
                    <p className="text-xl font-bold text-slate-50">85%</p>
                    <div className="h-1 w-full bg-slate-700 mt-2 rounded-full">
                      <div className="h-1 bg-indigo-500 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-teal-500 p-4 rounded-xl shadow-lg w-48 z-10">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Privacy Focused</p>
                  <p className="text-teal-100 text-sm">HIPAA Compliant</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-indigo-600 p-4 rounded-xl shadow-lg w-56 z-10">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white">Verified Therapist</p>
                  <p className="text-indigo-100 text-sm">Licensed in California</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-current text-white w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </div>
  );
}