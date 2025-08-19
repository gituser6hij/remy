import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Live at [Event Name]",
      type: "video",
      src: "https://www.youtube.com/embed/[VIDEO_ID]",
      description: "Performance at [Event Name], 2023.",
    },
    {
      title: "Studio Track: [Song Name]",
      type: "audio",
      src: "/audio/song.mp3",
      description: "Original track recorded in [Year].",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioItems.map((item, index) => (
          <Card key={index} className="shadow-lg">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {item.type === "video" ? (
                <iframe
                  width="100%"
                  height="200"
                  src={item.src}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <audio controls className="w-full">
                  <source src={item.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
              <p className="mt-4">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}