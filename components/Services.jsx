import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Services() {
  const services = [
    {
      title: "Anxiety & Stress Management",
      description: "Learn evidence-based techniques to reduce anxiety symptoms, manage stress, and build resilience. We'll work together to identify triggers and develop practical coping strategies for daily life.",
      price: "$200 / individual session",
      image: "/images/anxiety.jpg"
    },
    {
      title: "Relationship Counseling",
      description: "Strengthen your relationships through improved communication, conflict resolution, and emotional connection. Whether you're facing partnership challenges or family dynamics, we'll navigate them together.",
      price: "$240 / couples session",
      image: "/images/relationships.jpg"
    },
    {
      title: "Trauma Recovery",
      description: "Heal from past traumatic experiences in a safe, supportive environment. Using trauma-informed approaches, we'll process difficult memories and help you regain control of your life.",
      image: "/images/trauma.jpg",
      price: "$200 / individual session"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Therapeutic Services</h2>
          <div className="h-1 w-24 bg-teal-500 mx-auto"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Specialized therapy approaches tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-56 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-teal-600">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}