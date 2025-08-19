import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Services() {
  const services = [
    { title: "Live Performances", description: "Book [Musician Name] for events, weddings, or concerts.", icon: "🎤" },
    { title: "Music Lessons", description: "Learn guitar, piano, or vocals with personalized lessons.", icon: "🎸" },
    { title: "Studio Recording", description: "Professional session work for your tracks.", icon: "🎙️" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{service.icon}</span>
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.description}</p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}