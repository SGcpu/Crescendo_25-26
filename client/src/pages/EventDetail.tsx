import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { type Event } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { sampleEvents } from "@/data/events";

export default function EventDetail() {
  const { slug } = useParams();

  // Find event from local data instead of API call
  const {
    data: event,
    isLoading,
    error,
  } = useQuery<Event>({
    queryKey: ["/api/events", slug],
    queryFn: () => {
      // Find the event with the matching slug
      const foundEvent = sampleEvents.find(e => e.slug === slug);
      
      if (!foundEvent) {
        throw new Error("Event not found");
      }
      
      // Add fake ID to match Event type
      return {
        ...foundEvent,
        id: `event-${slug}`,
      };
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-6">
          <Skeleton className="h-12 w-1/2 mb-6" />
          <Skeleton className="h-6 w-1/3 mb-8" />
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Skeleton className="h-64 w-full mb-6" />
              <Skeleton className="h-32 w-full" />
            </div>
            <div>
              <Skeleton className="h-96 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-destructive mb-4" />
            <h2 className="text-xl font-bold mb-2">Event Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The event you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/events">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Back to Events
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
      Beginner: "bg-green-500/20 text-green-400 border-green-500/20",
      Intermediate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/20",
      Advanced: "bg-red-500/20 text-red-400 border-red-500/20",
    };
    return (
      colorMap[difficulty] || "bg-muted text-muted-foreground border-border"
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link href="/events">
            <a
              className="hover:text-accent transition-colors"
              data-testid="link-events"
            >
              Events
            </a>
          </Link>
          <span>/</span>
          <span className="text-foreground">{event.title}</span>
        </nav>

        {/* Event Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <i
                className={`${getCategoryIcon(
                  event.category
                )} text-primary text-xl`}
              />
              <Badge variant="secondary">{event.category}</Badge>
            </div>
            <Badge className={getDifficultyColor(event.difficulty)}>
              {event.difficulty}
            </Badge>
          </div>

          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            {event.title}
          </h1>

          <div className="mb-8 max-w-3xl">
            {/* Split the summary to extract council name */}
            <div className="flex flex-wrap items-center mb-2">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-sm py-1 px-3">
                {event.summary.split(" - ")[0]}
              </Badge>
            </div>
            <p className="text-xl text-muted-foreground">
              {event.summary.split(" - ")[1] || event.summary}
            </p>
          </div>

          {/* Key Info */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <i className="fas fa-calendar text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Date</div>
                <div className="text-muted-foreground">
                  {new Date(event.date).toLocaleDateString()}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <i className="fas fa-users text-accent" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Team Size</div>
                <div className="text-muted-foreground">{event.teamSize}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-secondary/40 rounded-full flex items-center justify-center">
                <i className="fas fa-clock text-secondary-foreground" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Duration</div>
                <div className="text-muted-foreground">{event.duration}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                <i className="fas fa-map-marker-alt text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Location</div>
                <div className="text-muted-foreground">{event.location}</div>
              </div>
            </div>
          </div>

          {/* Registration CTA */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Link href={event.registrationLink || "#"}>
              <Button
                className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg animate-pulse-gold"
                data-testid="button-register-event"
              >
                <i className="fas fa-ticket-alt mr-2" />
                Register for Event
              </Button>
            </Link>
            {event.prizePool && (
              <div className="flex items-center space-x-2">
                <i className="fas fa-trophy text-accent" />
                <span className="text-lg font-semibold text-accent">
                  Prize Pool: {event.prizePool}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Description */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-2xl">
                  Event Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="text-card-foreground leading-relaxed text-lg">
                    {event.description || event.summary}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Additional Details */}
            <Card className="bg-card border border-border mt-8">
              <CardHeader>
                <CardTitle className="font-cinzel text-2xl">
                  What to Expect
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <i className="fas fa-lightbulb text-accent mr-2" />
                      Innovation Focus
                    </h4>
                    <p className="text-muted-foreground">
                      Cutting-edge technology challenges that push the
                      boundaries of what's possible.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <i className="fas fa-trophy text-accent mr-2" />
                      Recognition
                    </h4>
                    <p className="text-muted-foreground">
                      Showcase your solutions to industry experts and potential
                      employers.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <i className="fas fa-handshake text-accent mr-2" />
                      Networking
                    </h4>
                    <p className="text-muted-foreground">
                      Connect with like-minded innovators and industry
                      professionals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <i className="fas fa-graduation-cap text-accent mr-2" />
                      Learning
                    </h4>
                    <p className="text-muted-foreground">
                      Gain valuable experience through hands-on challenges and
                      expert mentorship.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div>
            {/* Social Sharing */}
            <Card className="bg-card border border-border mb-8">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">
                  Share Event
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center space-x-4">
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
                    <i className="fab fa-twitter text-[#1DA1F2]" />
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
                    <i className="fab fa-facebook text-[#4267B2]" />
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
                    <i className="fab fa-linkedin text-[#0077B5]" />
                  </Button>
                  <Button variant="outline" className="w-10 h-10 p-0 rounded-full">
                    <i className="fab fa-whatsapp text-[#25D366]" />
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Event Stats */}
            <Card className="bg-card border border-border mb-8">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">
                  Event Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {event.maxTeams && (
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Max Teams</span>
                    <span className="font-semibold text-foreground">
                      {event.maxTeams}
                    </span>
                  </div>
                )}
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Difficulty</span>
                  <Badge className={getDifficultyColor(event.difficulty)}>
                    {event.difficulty}
                  </Badge>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Category</span>
                  <span className="font-semibold text-foreground">
                    {event.category}
                  </span>
                </div>
                {event.prizePool && (
                  <>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Prize Pool</span>
                      <span className="font-semibold text-accent">
                        {event.prizePool}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Related Events */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">
                  Related Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {(() => {
                    // Extract council name from event summary
                    const currentCouncil = event.summary.split(" - ")[0];
                    
                    // Get events from the same council or category, excluding current event
                    const relatedEvents = sampleEvents
                      .filter(e => 
                        e.slug !== event.slug && 
                        (
                          e.summary.startsWith(currentCouncil) || 
                          e.category === event.category
                        )
                      )
                      .slice(0, 3);
                      
                    return relatedEvents.length > 0 ? (
                      relatedEvents.map(relatedEvent => (
                        <Link key={relatedEvent.slug} href={`/events/${relatedEvent.slug}`}>
                          <div className="p-2 hover:bg-accent/10 rounded-md transition-colors cursor-pointer">
                            <h4 className="font-medium text-foreground">{relatedEvent.title}</h4>
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-accent">{relatedEvent.summary.split(" - ")[0]}</span>
                              <Badge variant="outline" className="text-xs">{relatedEvent.category}</Badge>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-muted-foreground text-sm">
                        No related events found.
                      </p>
                    );
                  })()}
                </div>
                <Link href="/events">
                  <Button
                    variant="outline"
                    className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    data-testid="button-view-all-events"
                  >
                    View All Events
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
