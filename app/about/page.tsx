import Image from "next/image";

export default function About() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">About [Musician Name]</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/images/musician-hero.png"
            alt="[Musician Name]"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="md:w-2/3">
          <p className="text-lg mb-4">
            [Musician Name] is a [genre, e.g., jazz, rock] artist with [X years] of experience, performing at [notable events/venues].
          </p>
          <p className="text-lg">
            Specializing in [specific skills, e.g., guitar, vocals], they bring passion and energy to every project. Contact them for bookings or lessons!
          </p>
        </div>
      </div>
    </div>
  );
}