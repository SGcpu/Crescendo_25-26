import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export const FestivalHighlights = () => {
  // Specific events for highlights with posters and council info
  const highlightEvents = [
    {
      name: "Roborift",
      council: "Students Council x Robix",
      poster: "/images/posters/roborift.webp",
      category: "Robotics",
      prize: "₹10,000",
      brochureLink: "https://drive.google.com/file/d/146BUZzmrsRewoWxoicjsL0M7Fsmp-ZmX/view?usp=drive_link",
    },
    {
      name: "Synergy",
      council: "Students Council",
      poster: "/images/posters/synergy.webp",
      category: "Hardware",
      prize: "₹40,000",
      brochureLink: "https://drive.google.com/file/d/1q7LjrOG3avLXbRaJ9l4Tb_VnS57jO4az/view?usp=drive_link",
    },
    {
      name: "BGMI",
      council: "Students Council x Tedx",
      poster: "/images/posters/bgmi.webp",
      category: "Esports",
      prize: "₹10,000",
    },
    {
      name: "Valorant",
      council: "Students Council x Tedx",
      poster: "/images/posters/valo.webp",
      category: "Esports",
      prize: "₹10,000",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white relative z-10">
          Crescendo Highlights
        </h2>

        {/* Increased gap and margin for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-10 mt-8">
          {highlightEvents.map((event, index) => (
            <div
              key={event.name}
              // Increased mobile margin to prevent overlap
              className="h-[400px] relative mb-16 md:mb-0"
            >
              <PinContainer
                title={event.name}
                href={event.brochureLink || `/events/${event.name.toLowerCase()}`}
                containerClassName="w-full h-full"
              >
                <div className="flex flex-col gap-2 w-[300px] mx-auto">
                  <div className="bg-gradient-to-br from-violet-800 to-purple-900 rounded-lg w-full flex items-center justify-center overflow-hidden">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {event.name}
                    </h3>
                    <p className="text-sm text-white/80 font-medium">
                      {event.council}
                    </p>
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{event.category}</span>
                      <span>Featured Event</span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-emerald-500/20 text-emerald-300 text-xs py-1 px-2 rounded-full">
                        Prize: {event.prize}
                      </span>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestivalHighlights;
