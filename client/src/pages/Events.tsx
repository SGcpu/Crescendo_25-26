import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Event } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import Hyperspeed from "@/components/Hyperspeed";
import "./Events.css";

export default function Events() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const {
    data: events,
    isLoading,
    error,
  } = useQuery<Event[]>({
    queryKey: ["/api/events"],
  });

  const filteredEvents =
    events?.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || event.category === categoryFilter;
      const matchesDifficulty =
        difficultyFilter === "all" || event.difficulty === difficultyFilter;

      return matchesSearch && matchesCategory && matchesDifficulty;
    }) || [];

  const categories = Array.from(
    new Set(events?.map((event) => event.category) || [])
  );
  const difficulties = Array.from(
    new Set(events?.map((event) => event.difficulty) || [])
  );

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: string } = {
      Hackathon: "fas fa-code",
      Workshop: "fas fa-chalkboard-teacher",
      "Final Competition": "fas fa-trophy",
      Competition: "fas fa-medal",
    };
    return iconMap[category] || "fas fa-calendar";
  };

  const getDifficultyColor = (difficulty: string) => {
    const colorMap: { [key: string]: string } = {
      Beginner: "bg-green-500/20 text-green-400",
      Intermediate: "bg-yellow-500/20 text-yellow-400",
      Advanced: "bg-red-500/20 text-red-400",
    };
    return colorMap[difficulty] || "bg-muted text-muted-foreground";
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-destructive mb-4" />
            <h2 className="text-xl font-bold mb-2">Failed to Load Events</h2>
            <p className="text-muted-foreground">Please try again later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12 relative events-page-container">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Hyperspeed
          effectOptions={{
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0x03b3c3,
              brokenLines: 0xd856bf,
              leftCars: [0xd856bf, 0x6750a2, 0xc247ac],
              rightCars: [0x03b3c3, 0x0e5ea5, 0x324555],
              sticks: 0x03b3c3,
            },
            distortion: "turbulentDistortion",
            fov: 90,
            speedUp: 1.5,
          }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 events-header">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Festival Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover hackathons, workshops, and competitions that will challenge
            your limits and expand your horizons
          </p>
        </div>

        {/* Filters */}
        <CardSpotlight
          className="mb-12 rounded-lg"
          radius={600}
          color="rgba(30, 12, 51, 0.8)"
        >
          <div className="grid md:grid-cols-4 gap-4 p-4">
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent border-accent/50"
              data-testid="input-search-events"
            />

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger
                className="bg-transparent border-accent/50"
                data-testid="select-category"
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={difficultyFilter}
              onValueChange={setDifficultyFilter}
            >
              <SelectTrigger
                className="bg-transparent border-accent/50"
                data-testid="select-difficulty"
              >
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                {difficulties.map((difficulty) => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={() => {
                setSearchTerm("");
                setCategoryFilter("all");
                setDifficultyFilter("all");
              }}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              data-testid="button-clear-filters"
            >
              Clear Filters
            </Button>
          </div>
        </CardSpotlight>

        {/* Events Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <CardSpotlight
                  key={i}
                  radius={450}
                  color="rgba(30, 12, 51, 0.8)"
                  className="h-full"
                >
                  <div className="px-2 pt-2">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardSpotlight>
              ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <CardSpotlight
            className="text-center py-16 rounded-lg"
            radius={600}
            color="rgba(30, 12, 51, 0.8)"
          >
            <div className="p-8">
              <i className="fas fa-search text-6xl text-muted-foreground mb-6" />
              <h3 className="font-cinzel text-2xl font-bold mb-4 text-foreground">
                No Events Found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or clear the filters.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setDifficultyFilter("all");
                }}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                data-testid="button-clear-filters-empty"
              >
                Clear All Filters
              </Button>
            </div>
          </CardSpotlight>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`}>
                <CardSpotlight
                  className="h-full cursor-pointer group"
                  radius={450}
                  color="rgba(30, 12, 51, 0.8)"
                >
                  <div className="px-2 pt-2">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <i
                          className={`${getCategoryIcon(
                            event.category
                          )} text-primary`}
                        />
                        <Badge variant="secondary" className="text-xs">
                          {event.category}
                        </Badge>
                      </div>
                      <Badge className={getDifficultyColor(event.difficulty)}>
                        {event.difficulty}
                      </Badge>
                    </div>
                    <h3 className="font-cinzel text-xl group-hover:text-accent transition-colors font-bold mt-2">
                      {event.title}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1 mb-2">
                      <span className="flex items-center space-x-1">
                        <i className="fas fa-calendar" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="fas fa-users" />
                        <span>{event.teamSize}</span>
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {event.summary}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <i className="fas fa-map-marker-alt" />
                        <span>{event.location}</span>
                      </div>
                      {event.prizePool && (
                        <span className="text-accent font-semibold">
                          {event.prizePool}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-accent font-medium hover:underline">
                        Learn More <i className="fas fa-arrow-right ml-2" />
                      </span>
                    </div>
                  </div>
                </CardSpotlight>
              </Link>
            ))}
          </div>
        )}

        {/* Empty space to showcase background animation */}
        <div className="mt-40"></div>
      </div>
    </div>
  );
}
