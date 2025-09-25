import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Event } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

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
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Festival Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover hackathons, workshops, and competitions that will challenge
            your limits and expand your horizons
          </p>
        </div>

        {/* Filters */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-card border-border"
            data-testid="input-search-events"
          />

          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger
              className="bg-card border-border"
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

          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger
              className="bg-card border-border"
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

        {/* Events Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <Card key={i} className="bg-card border border-border">
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-20 w-full mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))}
          </div>
        ) : filteredEvents.length === 0 ? (
          <div className="text-center py-16">
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
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <Link key={event.id} href={`/events/${event.slug}`}>
                <Card className="bg-card border border-border hover-lift cursor-pointer group h-full">
                  <CardHeader>
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
                    <CardTitle className="font-cinzel text-xl group-hover:text-accent transition-colors">
                      {event.title}
                    </CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <i className="fas fa-calendar" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <i className="fas fa-users" />
                        <span>{event.teamSize}</span>
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Event Timeline */}
        {!isLoading && filteredEvents.length > 0 && (
          <div className="mt-20">
            <h2 className="font-cinzel text-3xl font-bold text-center mb-12 text-foreground">
              Event Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
              {filteredEvents
                .sort(
                  (a, b) =>
                    new Date(a.date).getTime() - new Date(b.date).getTime()
                )
                .map((event, index) => (
                  <div
                    key={event.id}
                    className={`relative flex items-center mb-8 ${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 px-8">
                      <Card className="bg-card border border-border">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="secondary">{event.category}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="font-cinzel text-lg font-bold mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground text-sm">
                            {event.summary}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background" />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
