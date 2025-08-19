import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/images/musician-hero.png"
          alt="Musician performing"
          fill
          className="object-cover"
        />
        <div className="absolute text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Live Music That Moves You</h1>
          <Button variant="default" size="lg" asChild>
            <a href="/contact">Book Now</a>
          </Button>
        </div>
      </section>
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Discover the music of [Musician Name], offering live performances, music lessons, and studio recordings.
        </p>
      </section>
    </div>
  );
}