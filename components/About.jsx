import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Dr. Serena Blake</h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/3">
            <div className="relative aspect-square w-full max-w-xs mx-auto">
              <Image 
                src="/images/headshot.jpg" 
                alt="Dr. Serena Blake"
                fill
                className="rounded-full object-cover border-8 border-white shadow-lg"
              />
            </div>
          </div>
          
          <Card className="md:w-2/3">
            <CardHeader>
              <CardTitle className="text-slate-900">
                Dr. Serena Blake, PsyD
                <span className="block text-lg font-normal text-slate-600 mt-2">Clinical Psychologist</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-slate-700">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal 
                from trauma.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Location</h4>
                  <p className="text-slate-600">1287 Maplewood Drive<br/>Los Angeles, CA 90026</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Office Hours</h4>
                  <p className="text-slate-600">
                    <span className="font-semibold">In-person:</span> Tue & Thu, 10 AM–6 PM<br/>
                    <span className="font-semibold">Virtual:</span> Mon, Wed & Fri, 1 PM–5 PM
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}