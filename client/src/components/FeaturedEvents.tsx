import React from "react";
import InfiniteScroll from "@/components/InfiniteScroll";

// Council data - logos will be added later
const councilData = [
  {
    name: "IEEE",
    description: "Institute of Electrical and Electronics Engineers",
  },
  { name: "CSI", description: "Computer Society of India" },
  { name: "SAE", description: "Society of Automotive Engineers" },
  {
    name: "IETE",
    description: "Institution of Electronics and Telecommunication Engineers",
  },
  { name: "ASME", description: "American Society of Mechanical Engineers" },
  {
    name: "ISHRAE",
    description:
      "Indian Society of Heating, Refrigerating and Air Conditioning Engineers",
  },
  { name: "ACS", description: "Association for Computing Society" },
  { name: "ISTE", description: "Indian Society for Technical Education" },
  { name: "IICHE", description: "Indian Institute of Chemical Engineers" },
];

// Convert council data to the format needed by InfiniteScroll
const scrollItems = councilData.map((council) => ({
  content: (
    <div className="p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3 w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-white">
            {council.name.charAt(0)}
          </span>
        </div>
        <h3 className="text-lg font-medium text-foreground mb-1">
          {council.name}
        </h3>
        <p className="text-xs text-muted-foreground text-center">
          {council.description}
        </p>
      </div>
    </div>
  ),
}));

export default function FeaturedEvents() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Partnering Councils
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Crescendo brings together the brightest minds from across technical
            disciplines
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-4xl flex flex-row justify-between gap-8">
            {/* Left tilted scroll */}
            <div className="w-1/2 h-[600px] relative">
              <InfiniteScroll
                items={scrollItems}
                isTilted={true}
                tiltDirection="left"
                autoplay={true}
                autoplaySpeed={0.1}
                autoplayDirection="down"
                pauseOnHover={true}
                width="100%"
                maxHeight="600px"
                itemMinHeight={180}
              />
            </div>

            {/* Right tilted scroll */}
            <div className="w-1/2 h-[600px] relative">
              <InfiniteScroll
                items={scrollItems.slice().reverse()}
                isTilted={true}
                tiltDirection="right"
                autoplay={true}
                autoplaySpeed={0.15}
                autoplayDirection="up"
                pauseOnHover={true}
                width="100%"
                maxHeight="600px"
                itemMinHeight={180}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Council logos will be added soon. The placeholder cards will be
            replaced with actual council logos.
          </p>
        </div>
      </div>
    </section>
  );
}
