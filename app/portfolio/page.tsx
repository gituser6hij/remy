"use client";


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";




export default function Portfolio() {
  const portfolioItems = [
    {
      title: "STAIRWAY TO HEAVEN (Bole and Remy) GUITAR AND HARMONICA",
      type: "video",
      category: "live",
      src: "https://www.youtube.com/embed/De_KRwr1Q5Y",
      description: "Bole and Remy, 2024.",
    },
    {
      title: "Studio Track: Blue Horizon",
      type: "audio",
      category: "studio",
      src: "/audio/6.mp3",
      description: "Original track recorded in 2022.",
    },
    {
      title: "SANJUÁN: HALCÓN INVICTO (con Amor Hernández y Remy Vrignaud)",
      type: "video",
      category: "live",
      src: "https://www.youtube.com/embed/FJIhMK89-og",
      description: "Description en camino, 2024.",
    },
  ];

  const categories = ["all", "live", "studio"];

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4">Portfolio</h1>
      <p className="text-center text-muted-foreground mb-10">
        Explore a selection of my live performances and studio recordings.
      </p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="flex justify-center mb-8">
          {categories.map((cat) => (
            <TabsTrigger key={cat} value={cat} className="capitalize">
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => (
          <TabsContent key={cat} value={cat}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioItems
                .filter((item) => cat === "all" || item.category === cat)
                .map((item, index) => (
                  <Card
                    key={index}
                    className="shadow-lg hover:shadow-xl hover:scale-[1.02] transition-transform"
                  >
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                    {item.type === "video" ? (
  <Dialog>
    <DialogTrigger asChild>
      
      <div className="aspect-video cursor-pointer relative group">
        <iframe
          className="w-full h-full rounded-md pointer-events-none"
          src={item.src}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className="text-white text-lg font-semibold">▶ Play</span>
        </div>
      </div>
    </DialogTrigger>
    <DialogContent className="max-w-4xl p-0">
    <DialogTitle className="sr-only">{item.title}</DialogTitle> 
      <div className="aspect-video">
        <iframe
          className="w-full h-full rounded-md"
          src={item.src}
          title={item.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </DialogContent>
  </Dialog>
) : (
  <audio controls className="w-full">
    <source src={item.src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
)}

                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

