'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Toaster , {toast} from "react-hot-toast";
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Mail, MapPin, Phone } from 'lucide-react';

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().regex(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(10, "Please share what brings you here"),
  preferredTime: z.string().optional(),
  service: z.string().optional(),
  agree: z.boolean().refine(val => val, "Agreement is required"),
});

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
      preferredTime: "",
      service: "",
      agree: false,
    },
  });

  const onSubmit = async (data) => {
  try {
    setIsSubmitting(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (res.ok) {
      toast.success("form submit");
      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } else {
      alert("Failed to send: " + result.message);
    }
  } catch (err) {
    alert("Something went wrong. Try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">

      <Toaster/>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Contact Me</h2>
            <div className="h-1 w-24 bg-teal-500 mx-auto"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              Reach out to schedule a consultation or ask questions about my services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 h-full border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                      <p className="text-slate-600">1287 Maplewood Drive</p>
                      <p className="text-slate-600">Los Angeles, CA 90026</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Phone</h4>
                      <p className="text-slate-600">(323) 555-0192</p>
                      <p className="text-slate-600 text-sm mt-1">Text or call</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                      <p className="text-slate-600">serena@blakepsychology.com</p>
                      <p className="text-slate-600 text-sm mt-1">Typically responds within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Office Hours</h4>
                      <p className="text-slate-600">
                        <span className="font-medium">In-person:</span> Tue & Thu, 10 AM–6 PM
                      </p>
                      <p className="text-slate-600">
                        <span className="font-medium">Virtual:</span> Mon, Wed & Fri, 1 PM–5 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-4">New Client Process</h4>
                  <ol className="space-y-4">
                    {[
                      "Schedule a free 15-minute consultation",
                      "Complete intake forms online",
                      "Attend your first session",
                      "Begin your healing journey"
                    ].map((step, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-3 flex-shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-slate-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              {submitSuccess ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-teal-200">
                  <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. I'll contact you within 24 hours to discuss next steps.
                  </p>
                  <Button 
                    onClick={() => setSubmitSuccess(false)}
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form 
                    onSubmit={form.handleSubmit(onSubmit)} 
                    className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-slate-200"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-slate-800">Full Name *</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} className="py-6 px-4" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-medium text-slate-800">Phone *</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} className="py-6 px-4" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="font-medium text-slate-800">Email *</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" {...field} className="py-6 px-4" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="font-medium text-slate-800">Service Interest</FormLabel>
                            <FormControl>
                              <select {...field} className="w-full p-4 border border-slate-300 rounded-lg bg-white">
                                <option value="">Select a service</option>
                                <option value="anxiety">Anxiety & Stress Management</option>
                                <option value="relationship">Relationship Counseling</option>
                                <option value="trauma">Trauma Recovery</option>
                                <option value="other">Other</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="font-medium text-slate-800">What brings you here? *</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Briefly share what you'd like to work on..." 
                                rows={5}
                                {...field}
                                className="p-4"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="font-medium text-slate-800">Preferred Contact Time</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Weekdays after 5 PM" {...field} className="py-6 px-4" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="agree"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2 flex items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                className="mt-1"
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel className="font-normal text-slate-700">
                                I agree to be contacted by Dr. Blake Psychology and understand that this form is not for emergencies. *
                              </FormLabel>
                            </div>
                            <FormMessage className="mt-0" />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
                      <div className="text-slate-500 text-sm">
                        <p>For emergencies, call 911 or go to your nearest emergency room.</p>
                        <p className="mt-1">National Suicide Prevention Lifeline: 988</p>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="py-6 px-10 bg-teal-600 hover:bg-teal-700 text-lg min-w-[200px]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
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