import { Link } from "wouter";
import ParticleBackground from "@/components/ParticleBackground";
import ThirdEyeGlyph from "@/components/ThirdEyeGlyph";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const quickEntryCards = [
    {
      icon: "fas fa-calendar-star",
      title: "Events",
      description:
        "Discover hackathons, workshops, and competitions that will challenge your limits",
      href: "/events",
      color: "primary",
    },
    {
      icon: "fas fa-handshake",
      title: "Sponsors",
      description:
        "Meet our visionary partners making innovation accessible to all",
      href: "/sponsors",
      color: "accent",
    },
    {
      icon: "fas fa-file-pdf",
      title: "Brochure",
      description:
        "Download our complete festival guide with schedules and venue maps",
      href: "/brochure",
      color: "secondary",
    },
  ];

  const highlights = [
    {
      icon: "fas fa-code",
      title: "48 Hour Hackathon",
      description: "Non-stop coding marathon with prizes worth ₹5 lakhs",
      color: "primary",
    },
    {
      icon: "fas fa-robot",
      title: "AI Workshops",
      description: "Learn from industry leaders and AI pioneers",
      color: "accent",
    },
    {
      icon: "fas fa-microchip",
      title: "Hardware Arena",
      description: "Build, prototype, and showcase physical innovations",
      color: "secondary",
    },
    {
      icon: "fas fa-users",
      title: "Networking Hub",
      description: "Connect with 2000+ innovators and entrepreneurs",
      color: "primary",
    },
  ];

  const partnerLogos = Array(6)
    .fill(null)
    .map((_, i) => `Partner ${i + 1}`);

  return (
    <div className="min-h-screen swirl-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground density="heavy" />

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          {/* Central Third Eye Emblem */}
          <div className="flex justify-center mb-8">
            <ThirdEyeGlyph size="xl" className="mystical-glow" />
          </div>

          {/* Main Headline */}
          <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6">
            <span className="block text-[var(--lavender-gray)]">TRINETRA</span>
            <span className="block text-[var(--red)] eye-glow">AWAKENING</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[var(--wild-blue-yonder)] mb-8 max-w-3xl mx-auto font-light">
            Join the ultimate convergence of innovation, creativity, and
            transcendent technology at Crescendo Festival 2026
          </p>

          {/* Date and Location */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 text-lg">
            <div className="flex items-center space-x-2 text-accent">
              <i className="fas fa-calendar" />
              <span className="font-medium">February 10-12, 2026</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <i className="fas fa-map-marker-alt" />
              <span className="font-medium">Innovation District, Mumbai</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Button
              className="px-8 py-4 bg-[var(--blue)] text-white rounded-xl hover:bg-[var(--dark-blue)]/90 font-semibold text-lg eye-glow"
              data-testid="button-register-hero"
            >
              <i className="fas fa-ticket-alt mr-2" />
              Register Now
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 border-2 border-accent text-accent rounded-xl hover:bg-accent hover:text-accent-foreground font-semibold text-lg"
              data-testid="button-watch-trailer"
            >
              <i className="fas fa-play mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-bounce">
          <i className="fas fa-chevron-down text-2xl" />
        </div>
      </section>

      {/* Quick Entry Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {quickEntryCards.map((card, index) => (
              <Link key={index} href={card.href}>
                <Card className="bg-card rounded-2xl border border-border hover-lift cursor-pointer group h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-${card.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-${card.color}/30 transition-colors`}
                    >
                      <i
                        className={`${card.icon} text-2xl text-${
                          card.color === "accent" ? "accent" : "primary"
                        }`}
                      />
                    </div>
                    <h3 className="font-cinzel text-2xl font-bold mb-4 text-card-foreground group-hover:text-accent transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {card.description}
                    </p>
                    <span className="text-accent font-medium hover:underline">
                      Explore {card.title}{" "}
                      <i className="fas fa-arrow-right ml-2" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Festival Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Festival Highlights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three days of pure innovation, featuring cutting-edge
              competitions, enlightening workshops, and transformative
              experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-20 h-20 bg-${highlight.color}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                >
                  <i
                    className={`${highlight.icon} text-3xl text-${
                      highlight.color === "accent" ? "accent" : "primary"
                    }`}
                  />
                </div>
                <h4 className="font-cinzel text-xl font-bold mb-4 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-muted-foreground">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Event Callout */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="relative bg-card rounded-3xl border border-border overflow-hidden">
            <CardContent className="p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-4 h-4 border border-accent rotate-45" />
                <div className="absolute top-20 right-20 w-6 h-6 border border-primary rotate-12" />
                <div className="absolute bottom-20 left-20 w-5 h-5 border border-accent rotate-45" />
                <div className="absolute bottom-10 right-10 w-3 h-3 bg-primary rotate-45" />
              </div>

              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                      HEADLINE EVENT
                    </span>
                    <span className="text-muted-foreground text-sm">
                      Day 3 Finale
                    </span>
                  </div>
                  <h3 className="font-cinzel text-4xl font-bold mb-6 text-card-foreground">
                    The Third Eye Challenge
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    The ultimate test of innovation awaits. Teams will have 12
                    hours to solve a mystery challenge that combines AI,
                    blockchain, and IoT. Only those who see beyond the obvious
                    will claim victory.
                  </p>
                  <div className="flex items-center space-x-6 mb-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">₹10L</div>
                      <div className="text-sm text-muted-foreground">
                        Prize Pool
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">50</div>
                      <div className="text-sm text-muted-foreground">
                        Teams Max
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">12h</div>
                      <div className="text-sm text-muted-foreground">
                        Duration
                      </div>
                    </div>
                  </div>
                  <Button
                    className="px-8 py-3 bg-accent text-accent-foreground hover:bg-accent/90"
                    data-testid="button-register-challenge"
                  >
                    Register for Challenge
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border">
                    <div className="text-center">
                      <ThirdEyeGlyph size="lg" />
                      <p className="text-muted-foreground mt-4">
                        Challenge Visualization
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse">
                    <i className="fas fa-eye text-accent-foreground text-xl" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="font-cinzel text-2xl font-bold mb-4 text-foreground">
              Powered By Visionary Partners
            </h3>
            <p className="text-muted-foreground">
              Industry leaders who believe in the future we're building together
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((partner, index) => (
              <Card
                key={index}
                className="bg-card rounded-lg border border-border hover:border-accent/50 transition-colors cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="h-12 bg-muted rounded flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <span className="text-muted-foreground text-sm font-medium group-hover:text-accent transition-colors">
                      {partner}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
