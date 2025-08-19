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
          className="object-cover brightness-50"
        />
        <div className="absolute text-center text-white">
          <h1 className="text-5xl font-bold mb-4">[Musician Name]</h1>
          <p className="text-xl mb-6">Bringing Music to Life with Passion</p>
          <Button variant="default" size="lg" asChild>
            <a href="/contact">Book Now</a>
          </Button>
        </div>
      </section>
      <section className="p-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Explore Our Services</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          From live performances to music lessons, discover how [Musician Name] can elevate your event or skills.
        </p>
        <Button variant="outline" asChild>
          <a href="/services">View Services</a>
        </Button>
      </section>
    </div>
  );
}