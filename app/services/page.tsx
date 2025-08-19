import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Music, 
  Mic, 
  Users, 
  Calendar, 
  Headphones, 
  Guitar,
  Clock,
  MapPin,
  Battery,
  Volume2
} from "lucide-react";

export default function Services() {
  const performanceServices = [
    {
      title: "Solo Live Performance",
      description: "Professional solo harmonica show with over 4.5 hours of repertoire. Perfect for any venue with complete mobility and independent power system.",
      icon: Mic,
      features: [
        "4h30+ of continuous performance",
        "No electrical power needed",
        "Complete mobility and freedom",
        "Independent sound equipment",
        "Professional instrumental show"
      ],
      styles: ["Blues", "Jazz", "Rock", "Folk", "Irish Folklore"],
      highlight: "Perfect for relaxed atmospheres"
    },
    {
      title: "Band Collaborations",
      description: "Professional harmonica player available for bands and musical projects across multiple genres with 28 years of experience.",
      icon: Users,
      features: [
        "28 years of professional experience",
        "Multiple CD recordings",
        "Cross-genre expertise",
        "Live performance experience",
        "Professional collaboration"
      ],
      styles: ["Blues", "Pop", "Flamenco Fusion", "Rock", "Jazz"],
      highlight: "Recorded multiple CDs with different bands"
    }
  ];

  const studioServices = [
    {
      title: "Studio Recording & Arrangements",
      description: "Professional harmonica recording services with custom arrangements for your tracks. Using diatonic harmonicas in all keys and different tunings.",
      icon: Headphones,
      features: [
        "Diatonic harmonicas in all keys",
        "Different harmonica modifications",
        "Custom arrangements for any style",
        "Professional MP3 or WAV delivery",
        "Multiple color options for your track"
      ],
      formats: ["MP3", "WAV"],
      highlight: "Any style, any arrangement"
    },
    {
      title: "Music Lessons & Workshops",
      description: "Learn harmonica from a professional with nearly three decades of experience. Personalized lessons adapted to your level and musical goals.",
      icon: Guitar,
      features: [
        "28 years of professional experience",
        "All skill levels welcome",
        "Multiple style approaches",
        "Technique and emotion focus",
        "Practical learning methods"
      ],
      styles: ["Blues", "Jazz", "Folk", "Rock", "Beginner Basics"],
      highlight: "From beginner to advanced techniques"
    }
  ];

  const allServices = [...performanceServices, ...studioServices];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Professional Harmonica Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              28 years of professional experience bringing passion and emotion to every performance. 
              From solo shows to studio recordings, I'm an artist at the service of music.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {["Blues", "Jazz", "Rock", "Folk", "Flamenco Fusion", "Irish Folklore"].map((style) => (
                <Badge key={style} variant="secondary" className="text-sm">
                  {style}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Live Performance Services */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              Live Performance Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Professional live harmonica performances that communicate feelings and emotions to your audience
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {performanceServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      {service.highlight && (
                        <Badge variant="outline" className="text-blue-600 border-blue-600 w-fit">
                          {service.highlight}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Musical Styles:</h4>
                          <div className="flex flex-wrap gap-1">
                            {service.styles.map((style) => (
                              <Badge key={style} variant="secondary" className="text-xs">
                                {style}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Studio & Education Services */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 text-gray-900">
              Studio & Education Services
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Professional recording services and personalized harmonica education
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {studioServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-green-600" />
                        </div>
                        <CardTitle className="text-xl font-semibold text-gray-900">
                          {service.title}
                        </CardTitle>
                      </div>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      {service.highlight && (
                        <Badge variant="outline" className="text-green-600 border-green-600 w-fit">
                          {service.highlight}
                        </Badge>
                      )}
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full flex-shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        {service.styles && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Styles Taught:</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.styles.map((style) => (
                                <Badge key={style} variant="secondary" className="text-xs">
                                  {style}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {service.formats && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Audio Formats:</h4>
                            <div className="flex flex-wrap gap-1">
                              {service.formats.map((format) => (
                                <Badge key={format} variant="outline" className="text-xs">
                                  {format}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Professional Highlights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">28 Years Experience</h3>
                <p className="text-gray-600">Nearly three decades of professional harmonica performance and recording</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Volume2 className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Multiple CD Recordings</h3>
                <p className="text-gray-600">Recorded with different bands across various musical styles</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Complete Independence</h3>
                <p className="text-gray-600">Own equipment with independent power for any venue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Ready to Add Professional Harmonica to Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you need a live performance, studio recording, or want to learn harmonica, 
              let's discuss how I can bring passion and emotion to your musical vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/portfolio">Listen to My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}