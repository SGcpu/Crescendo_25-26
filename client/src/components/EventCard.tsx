import { Link } from "wouter";
import { type Event } from "@shared/schema";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Omit<Event, "id">;
  variant?: "default" | "compact";
}

export default function EventCard({
  event,
  variant = "default",
}: EventCardProps) {
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

  if (variant === "compact") {
    return (
      <Link href={`/events/${event.slug}`}>
        <CardSpotlight
          className="h-full cursor-pointer group"
          radius={350}
          color="rgba(30, 12, 51, 0.8)"
        >
          <div className="p-3">
            <div className="flex items-start justify-between mb-2">
              <Badge variant="outline" className="text-xs">
                {event.category}
              </Badge>
              <Badge className={getDifficultyColor(event.difficulty)}>
                {event.difficulty}
              </Badge>
            </div>
            <h3 className="font-cinzel text-lg group-hover:text-accent transition-colors font-bold mt-2 line-clamp-1">
              {event.title}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-muted-foreground mt-1 mb-2">
              <span>{new Date(event.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{event.teamSize}</span>
            </div>

            <div className="mb-3">
              <p className="text-xs text-primary-foreground font-semibold truncate">
                {event.summary.split(" - ")[0]}
              </p>
            </div>
          </div>
        </CardSpotlight>
      </Link>
    );
  }

  return (
    <Link href={`/events/${event.slug}`}>
      <CardSpotlight
        className="h-full cursor-pointer group"
        radius={450}
        color="rgba(30, 12, 51, 0.8)"
      >
        <div className="px-2 pt-2">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <i
                className={`${getCategoryIcon(event.category)} text-primary`}
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

          <div className="mb-4">
            <p className="text-xs text-primary-foreground font-semibold mb-1">
              {event.summary.split(" - ")[0]}
            </p>
            <p className="text-muted-foreground line-clamp-2">
              {event.summary.split(" - ")[1] || event.summary}
            </p>
          </div>
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
  );
}
