import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { sampleEvents } from "@/data/events";

export const FestivalHighlights = () => {
  // Get the top 4 events for highlights
  const highlightEvents = sampleEvents.slice(0, 4);

  return (
    <section className="py-16 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
          Crescendo Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {highlightEvents.map((event, index) => (
            <div key={event.slug} className="h-[400px] relative">
              <PinContainer
                title={event.title}
                href={`/events/${event.slug}`}
                containerClassName="w-full h-full"
              >
                <div className="flex flex-col gap-2 w-[300px]">
                  <div className="bg-gradient-to-br from-violet-800 to-purple-900 rounded-lg h-[180px] w-full flex items-center justify-center">
                    {Array.isArray(event.assets) && event.assets.length > 0 ? (
                      <img
                        src={`/images/events/${event.assets[0]}`}
                        alt={event.title}
                        className="w-full h-full object-cover rounded-lg opacity-70"
                      />
                    ) : (
                      <div className="text-xl font-bold text-white">
                        {event.category}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-white">
                      {event.title}
                    </h3>
                    <p className="text-sm text-white/80">{event.summary}</p>
                    <div className="flex justify-between text-xs text-white/60">
                      <span>{event.date}</span>
                      <span>{event.category}</span>
                    </div>
                    <div className="mt-2">
                      <span className="bg-emerald-500/20 text-emerald-300 text-xs py-1 px-2 rounded-full">
                        Prize: {event.prizePool}
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
