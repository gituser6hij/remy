import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Music, Heart, Award, Users } from "lucide-react";

export default function About() {
  const milestones = [
    {
      age: "8 years old",
      title: "First Harmonica",
      description: "Received my first harmonica as a gift from my father and immediately took it apart to understand how it made so many sounds."
    },
    {
      age: "14 years old",
      title: "Marine Band Harmonica",
      description: "A friend gave me my first real harmonica - a Marine Band. It became my escape during difficult times at home."
    },
    {
      age: "19 years old",
      title: "First Jam Sessions",
      description: "Started attending jam sessions in Paris, learning to improvise and connecting with other self-taught musicians."
    },
    {
      age: "24 years old",
      title: "Life-Changing Accident",
      description: "A motorcycle accident left me bedridden for over a year. The harmonica became my greatest source of comfort during recovery."
    },
    {
      age: "After Recovery",
      title: "New Beginning",
      description: "Made the decision to leave my job and country, moving to Fuerteventura to dedicate my life entirely to music."
    },
    {
      age: "Present",
      title: "Music School",
      description: "Founded my own music school to share the simple, practical methods I wish I had when learning."
    }
  ];

  const achievements = [
    {
      icon: Music,
      title: "Multiple Genres",
      description: "Blues, Jazz, Irish Folk, Flamenco Fusion, and New Age"
    },
    {
      icon: Award,
      title: "International Experience",
      description: "Performed with renowned national and international musicians"
    },
    {
      icon: Users,
      title: "Studied with Howard Levy",
      description: "Learned from one of the harmonica world's greatest masters"
    },
    {
      icon: Heart,
      title: "10+ Years Experience",
      description: "Over a decade of professional performance and teaching"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-900">
              About Remy Vrignaud
            </h1>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
              <div className="lg:w-1/3 flex-shrink-0">
                <Image
                  src="/images/musician-hero.png"
                  alt="Remy Vrignaud playing harmonica"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
                  priority
                />
              </div>
              
              <div className="lg:w-2/3">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                    I'm Remy Vrignaud, and I've been playing the harmonica for over ten years. What started as childhood curiosity has become my life's passion and profession.
                  </p>
                  
                  <p className="text-lg text-gray-600 mb-6">
                    When I was eight, my father gave me a harmonica as a toy. Like most children, I immediately took it apart to see where all those sounds came from. I had seen a man playing harmonica in the park, and I was amazed by how much music could come from such a small object.
                  </p>
                  
                  <p className="text-lg text-gray-600">
                    Today, I can say that music saved my life in every sense, and I'm immensely grateful for that. Being able to live from your passion is truly a fortune.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              My Musical Journey
            </h2>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <div className="sm:w-32 flex-shrink-0">
                        <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                          {milestone.age}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
              Musical Experience
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">
                        {achievement.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {achievement.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why I Teach */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
              Why I Created My Music School
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              <p className="text-xl mb-6">
                As a musician, it's rare to finish a performance without someone approaching to examine my harmonicas and ask about the technique. Like I experienced myself, they can't believe so much music can come from something so small.
              </p>
              
              <p className="text-lg mb-6">
                As a self-taught learner, I've realized how much a simple, practical, and effective method is needed when facing this complex yet popular instrument. Not just for those who want to learn the technique, but for anyone who wants to accompany a friend on guitar, entertain themselves in their free time, or learn some of their favorite songs for pure pleasure.
              </p>
              
              <p className="text-lg">
                I want to offer the courses and classes I would have loved to find when I started my journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/services">View Lessons</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Play Harmonica */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-900">
              Why Play the Harmonica?
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                For its personality, charisma, small size, and incredible sound, I recommend the harmonica to anyone at any time and in any situation.
              </p>
              
              <p className="text-lg text-gray-600 mb-6">
                During my childhood, it helped me get distracted. In my adolescence, it helped me escape and channel my emotions. During my youth, it gave me the opportunity to dream of getting on stage. And now, at 38, it still helps me with concentration and mindful attention.
              </p>
              
              <p className="text-lg text-gray-600">
                Any moment and age is good to get to know, even in a basic way, this incredible instrument.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}