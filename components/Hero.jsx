import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full opacity-50"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100 rounded-full opacity-50"></div>
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center bg-teal-100 text-teal-800 text-sm font-medium px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Accepting new clients
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-800">
              Healing Minds, <br className="hidden sm:block" /><span className="text-teal-600">Restoring Hearts</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Compassionate therapy for anxiety, relationships, and trauma recovery. 
              Evidence-based approaches tailored to your unique journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#contact">
                <Button className="py-5 px-8 text-lg bg-teal-600 hover:bg-teal-700 transition-all duration-300 shadow-md">
                  Book a Free Consultation
                </Button>
              </Link>
              <Link href="#services">
                <Button className="py-5 px-8 text-lg bg-white text-teal-600 border border-teal-600 hover:bg-teal-50 transition-all duration-300">
                  View Services
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Licensed Therapist</p>
                  <p className="text-slate-600 text-sm">California License #12345</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">Confidential</p>
                  <p className="text-slate-600 text-sm">HIPAA Compliant</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Visual elements */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              {/* Card header */}
              <div className="bg-slate-50 p-4 border-b border-slate-200">
                <h3 className="text-lg font-bold text-slate-800">Next Available Appointments</h3>
              </div>
              
              {/* Card content */}
              <div className="p-6">
                {/* Calendar section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-medium text-slate-800">This Week</h4>
                    <span className="text-sm text-teal-600">Virtual or In-Person</span>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { day: 'Tuesday', date: 'May 14', time: '10:00 AM - 10:45 AM', type: 'In-person' },
                      { day: 'Wednesday', date: 'May 15', time: '2:30 PM - 3:15 PM', type: 'Virtual' },
                      { day: 'Thursday', date: 'May 16', time: '4:00 PM - 4:45 PM', type: 'In-person' }
                    ].map((appointment, index) => (
                      <div key={index} className="flex items-start p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                        <div className="bg-teal-50 text-teal-800 p-2 rounded-lg mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-slate-800">{appointment.day}, {appointment.date}</h4>
                          <p className="text-slate-600">{appointment.time}</p>
                          <span className="inline-flex items-center mt-1 text-sm text-slate-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {appointment.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  See All Availability
                </Button>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-48 z-10 border border-slate-200">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">8+ Years</p>
                  <p className="text-slate-600 text-sm">Experience</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg w-56 z-10 border border-slate-200">
              <div className="flex items-start">
                <div className="bg-teal-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">500+ Sessions</p>
                  <p className="text-slate-600 text-sm">Completed</p>
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