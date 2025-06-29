import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays, MapPin, Clock, BadgeCheck, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            About Dr. Serena Blake
          </h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Licensed Clinical Psychologist with 8+ years of experience helping clients heal and grow
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Profile Image with decorative elements */}
          <div className="lg:w-2/5 relative">
            <div className="relative aspect-square w-full max-w-xs mx-auto">
              <Image 
                src="/images/headshot.jpg" 
                alt="Dr. Serena Blake"
                fill
                className="rounded-full object-cover border-8 border-white shadow-xl"
              />
            </div>
            
            {/* Floating badges */}
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg w-48 z-10 border border-slate-200">
              <div className="flex items-center">
                <BadgeCheck className="h-5 w-5 text-teal-600 mr-2" />
                <div>
                  <p className="font-medium text-slate-800">Licensed</p>
                  <p className="text-slate-600 text-sm">CA #PSY12345</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-4 bg-white p-4 rounded-xl shadow-lg w-56 z-10 border border-slate-200">
              <div className="flex items-center">
                <HeartHandshake className="h-5 w-5 text-indigo-600 mr-2" />
                <div>
                  <p className="font-medium text-slate-800">500+ Sessions</p>
                  <p className="text-slate-600 text-sm">Completed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Card */}
          <Card className="lg:w-3/5 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-slate-900 text-3xl">
                Dr. Serena Blake, PsyD
                <span className="block text-lg font-normal text-slate-600 mt-2">Clinical Psychologist</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-slate-700 text-lg">
                Dr. Serena Blake is a licensed clinical psychologist based in Los Angeles, 
                with eight years of experience helping clients overcome life's challenges. 
                She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—
                with compassionate, personalized care to help you overcome anxiety, strengthen relationships, 
                and heal from trauma.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Location</h4>
                      <p className="text-slate-600">1287 Maplewood Drive<br/>Los Angeles, CA 90026</p>
                    </div>
                  </div>
                </div>
                
                {/* Office Hours */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-indigo-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">Office Hours</h4>
                      <p className="text-slate-600">
                        <span className="font-semibold">In-person:</span> Tue & Thu, 10 AM–6 PM<br/>
                        <span className="font-semibold">Virtual:</span> Mon, Wed & Fri, 1 PM–5 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Specialties */}
              <div className="mt-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                  <CalendarDays className="h-5 w-5 text-teal-600 mr-2" />
                  Therapeutic Specialties
                </h4>
                <div className="flex flex-wrap gap-3">
                  {['Anxiety & Stress', 'Relationship Issues', 'Trauma Recovery', 'Mindfulness', 'Life Transitions'].map((specialty, index) => (
                    <span 
                      key={index} 
                      className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Approach Section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">My Therapeutic Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Evidence-Based</h4>
              <p className="text-slate-600">
                Using scientifically validated methods like CBT and mindfulness to ensure effective treatment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Client-Centered</h4>
              <p className="text-slate-600">
                Tailoring therapy to your unique needs, goals, and personal circumstances.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Compassionate</h4>
              <p className="text-slate-600">
                Creating a safe, non-judgmental space where you can explore and heal.
              </p>
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
    </section>
  );
}