import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    { title: "Live Performances", description: "Book for concerts, weddings, or events.", icon: "🎤" },
    { title: "Music Lessons", description: "Personalized guitar, piano, or vocal lessons.", icon: "🎸" },
    { title: "Studio Recording", description: "Professional session work for your tracks.", icon: "🎙️" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{service.icon}</span>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.description}</p>
              <Button variant="outline" asChild>
                <a href="/contact">Book Now</a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}