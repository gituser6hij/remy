import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import { Music, Mic, Headphones, Users, Clock, Battery, Volume2, Award } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Clock,
      title: "28 Years of Experience",
      description: "Professional harmonica player dedicated to the art for nearly three decades"
    },
    {
      icon: Volume2,
      title: "Multiple CD Recordings",
      description: "Recorded with different bands across blues, pop, flamenco fusion, and rock"
    },
    {
      icon: Battery,
      title: "Complete Independence",
      description: "4h30+ solo shows with independent power system - no electrical requirements"
    },
    {
      icon: Award,
      title: "All Styles & Keys",
      description: "Diatonic harmonicas in all keys with different modifications for any arrangement"
    }
  ];

  const services = [
    {
      title: "Solo Live Performance",
      description: "Professional instrumental shows perfect for relaxed atmospheres",
      icon: Mic,
      highlight: "4h30+ repertoire"
    },
    {
      title: "Studio Recording",
      description: "Custom harmonica arrangements in MP3 or WAV format",
      icon: Headphones,
      highlight: "Any style, any color"
    },
    {
      title: "Band Collaboration",
      description: "Professional harmonica for your musical projects",
      icon: Users,
      highlight: "Multiple CD experience"
    }
  ];

  const musicalStyles = ["Blues", "Jazz", "Rock", "Folk", "Irish Folklore", "Flamenco Fusion", "Pop"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/musician-hero.png"
          alt="Remy Vrignaud performing harmonica"
          fill
          className="object-cover brightness-50"
          priority
          sizes="100vw"
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
        
        <div className="absolute text-center text-white z-10 px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
            Remy Vrignaud
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl mb-2 opacity-90 font-medium">
            Professional Harmonica Player
          </p>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 opacity-80 max-w-3xl mx-auto">
            28 years of passion and emotion • Artist at the service of music
          </p>
          
          {/* Musical Styles */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {musicalStyles.slice(0, 5).map((style) => (
              <Badge key={style} variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                {style}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="default" size="lg" asChild className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Book Performance</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black">
              <Link href="/portfolio">Listen to My Music</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Professional Highlights */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Professional Harmonica Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Bringing passion and emotion to every performance with nearly three decades of professional experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">28</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-600 mb-2">4h30+</div>
              <div className="text-gray-600 font-medium">Solo Show Duration</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-600 mb-2">All Keys</div>
              <div className="text-gray-600 font-medium">Harmonica Coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              What I Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From intimate solo performances to professional studio recordings, discover how harmonica can elevate your project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600 w-fit">
                      {service.highlight}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Musical Philosophy */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
              Music as a Universal Language
            </h2>
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-xl mb-6">
                "I consider myself an artist at the service of music, trying to communicate feelings and emotions to the audience with professionalism."
              </p>
              <p className="text-lg opacity-90">
                With diatonic harmonicas in all keys and different modifications, I can add any color you wish to your musical project. Every performance is about bringing passion and emotion to life.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/about">My Story</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Let's Create Together</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Musical Styles */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
              Musical Styles
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              From traditional blues to modern fusion, I play every style with passion and authenticity
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {musicalStyles.map((style) => (
                <Badge key={style} variant="secondary" className="text-lg px-4 py-2">
                  {style}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}