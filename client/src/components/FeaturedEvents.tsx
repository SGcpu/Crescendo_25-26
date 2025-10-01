import { useState, useRef } from "react";
import { Link } from "wouter";
import { type Event } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { sampleEvents } from "@/data/events";
import EventCard from "@/components/EventCard";
import { Badge } from "@/components/ui/badge";

export default function FeaturedEvents() {
  const [activeCouncil, setActiveCouncil] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Extract unique council names from events
  const councils = Array.from(
    new Set(
      sampleEvents.map((event) => event.summary.split(" - ")[0]).filter(Boolean)
    )
  );

  // Get events for active council or some featured events if no council is selected
  const getEventsByCouncil = () => {
    if (!activeCouncil) {
      // If no council selected, return a few featured events
      return sampleEvents.slice(0, 4);
    }

    // Filter events by selected council
    return sampleEvents
      .filter((event) => event.summary.split(" - ")[0] === activeCouncil)
      .slice(0, 4); // Show max 4 events per council
  };

  const selectedEvents = getEventsByCouncil();

  const handleCouncilClick = (council: string) => {
    setActiveCouncil(council === activeCouncil ? null : council);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="font-cinzel text-4xl font-bold mb-4">
            Council Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover exciting events organized by our student councils
          </p>
        </div>

        {/* Council Filters */}
        <div className="mb-10">
          <div className="overflow-x-auto pb-4" ref={scrollContainerRef}>
            <div className="flex space-x-2 min-w-max">
              {councils.map((council) => (
                <Button
                  key={council}
                  onClick={() => handleCouncilClick(council)}
                  variant={activeCouncil === council ? "default" : "outline"}
                  className={`whitespace-nowrap ${
                    activeCouncil === council
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "border-accent/30 hover:border-accent hover:text-accent"
                  }`}
                >
                  {council}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedEvents.map((event) => (
            <EventCard key={event.slug} event={event} variant="compact" />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-12">
          <Link href="/events">
            <Button className="px-8 py-3 bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 font-semibold transition-all duration-300 transform hover:scale-105">
              Explore All Events
              <i className="fas fa-arrow-right ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
