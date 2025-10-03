import { useState, useEffect } from "react";
import { Link } from "wouter";
import ParticleBackground from "@/components/ParticleBackground";
import ThirdEyeGlyph from "@/components/ThirdEyeGlyph";
import { Button } from "@/components/ui/button";
import { Card as ShadcnCard, CardContent } from "@/components/ui/card";
import FestivalHighlights from "@/components/FestivalHighlights";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { sampleSponsors } from "@/data/sponsors.ts";
import CardSwap, { Card } from "@/components/ui/card-swap";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import LoadingScreen from "@/components/LoadingScreen";
import anime from "animejs";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [contentLoaded, setContentLoaded] = useState(false);

  // Handle loading completion
  const handleLoadComplete = () => {
    setLoadingComplete(true);
    // Ensure page is scrolled to top
    window.scrollTo(0, 0);
    setTimeout(() => {
      setContentLoaded(true);
      // Animate content elements after loading completes
      animateContentElements();
    }, 500);
  };

  const animateContentElements = () => {
    anime({
      targets: ".animate-in",
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(150),
      easing: "easeOutQuad",
    });
  };

  const quickEntryCards = [
    {
      icon: "fas fa-calendar-alt",
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
      href: "https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/view?usp=drive_link",
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

  return (
    <>
      {/* Loading Screen */}
      <LoadingScreen onLoadComplete={handleLoadComplete} />

      {/* Main Content - Hidden until loading complete */}
      <div
        className={`min-h-screen swirl-bg ${
          contentLoaded ? "block" : "hidden"
        }`}
      >
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
            <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 animate-in opacity-0 text-center">
              <span className="block text-[var(--noir-gold)]">TRINETRA</span>
              <span className="block text-[var(--noir-crimson)] eye-glow">
                AWAKENING
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-[var(--noir-text)] mb-8 max-w-3xl mx-auto font-light animate-in opacity-0">
              Join the ultimate convergence of innovation, creativity, and
              transcendent technology at Festival 2025
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
                className="px-8 py-4 bg-[var(--noir-crimson)] text-white rounded-xl hover:bg-[var(--noir-crimson)]/90 font-semibold text-lg shadow-lg shadow-[var(--noir-crimson)]/20"
                data-testid="button-register-hero"
              >
                <i className="fas fa-ticket-alt mr-2" />
                Register Now
              </Button>
              <Button
                variant="outline"
                className="px-8 py-4 border-2 border-[var(--noir-gold)] text-[var(--noir-gold)] rounded-xl hover:bg-[var(--noir-gold)] hover:text-[var(--noir-black)] font-semibold text-lg"
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
        <section className="py-24 bg-background relative overflow-hidden">
          {/* Background geometric elements */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-[10%] left-[15%] w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-[60%] right-[10%] w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float duration-[15s]"></div>
            <div className="absolute bottom-[20%] left-[25%] w-24 h-24 bg-accent/20 rounded-full blur-3xl animate-pulse-slow delay-700"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20 animate-in opacity-0">
              <h2 className="font-cinzel text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--noir-gold)] to-[var(--noir-gold-light)] bg-clip-text text-transparent">
                Navigate Crescendo
              </h2>
              <p className="text-[var(--noir-text-muted)] text-lg max-w-2xl mx-auto">
                Discover the core experiences that make Crescendo a festival
                like no other
              </p>
            </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 relative"> 
  {/* Left side content */}
  <div className="p-8 lg:p-12 order-2 lg:order-1">
    <div className="relative">
      {/* Decorative elements */}
      <div className="absolute -left-8 -top-8 w-16 h-16 border border-accent/30 rounded-full hidden lg:block"></div>

      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center font-cinzel relative z-10 mb-6 animate-in opacity-0">
        <LayoutTextFlip
          text="Unlock Your"
          words={[
            "Festival Experience",
            "Creative Journey",
            "Innovation Path",
            "Tech Adventure",
          ]}
          duration={3000}
        />
      </div>

      <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
        Crescendo 2025 presents a dynamic stage for innovators, creators, and changemakers to showcase originality and skill. 
        Dive into competitions, workshops, and showcases that bring together cutting-edge technology, creativity, and collaboration.
      </p>

      <ul className="space-y-5 mb-8">
        <li className="flex items-start group transition-all duration-300">
          <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1 group-hover:bg-primary/40 transition-all duration-300">
            {/* Inline SVG lightbulb — uses currentColor so Tailwind's text-* applies */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[var(--noir-gold)]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M9 21h6v-1a1 1 0 00-1-1H10a1 1 0 00-1 1v1z" />
              <path d="M12 2a6 6 0 00-4 10.9V15a1 1 0 001 1h6a1 1 0 001-1v-2.1A6 6 0 0012 2z" />
            </svg>
          </div>
          <div>
            <span className="text-[var(--noir-gold)] font-medium block mb-1">
              Exclusive Opportunities
            </span>
            <span className="text-[var(--noir-text)]">
              Compete in flagship events like the International Hackathon, RoboWars, and Hardware & Simulation Hackathon
            </span>
          </div>
        </li>

        <li className="flex items-start group transition-all duration-300">
          <div className="bg-accent/20 p-2 rounded-full mr-3 mt-1 group-hover:bg-accent/40 transition-all duration-300">
            <i className="fas fa-users text-[var(--noir-crimson)]"></i>
          </div>
          <div>
            <span className="text-[var(--noir-gold)] font-medium block mb-1">
              Industry & Community
            </span>
            <span className="text-[var(--noir-text)]">
              Connect with leading professionals, student councils, and peers from across institutions
            </span>
          </div>
        </li>

        <li className="flex items-start group transition-all duration-300">
          <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-1 group-hover:bg-secondary/40 transition-all duration-300">
            <i className="fas fa-map-marked text-[var(--noir-gold-light)]"></i>
          </div>
          <div>
            <span className="text-[var(--noir-gold)] font-medium block mb-1">
              Immersive Experience
            </span>
            <span className="text-[var(--noir-text)]">
              Engage with 15+ technical and non-technical events, plus eSports tournaments, all under one festival
            </span>
          </div>
        </li>
      </ul>

    </div>
  </div>

              {/* Right side with card swap */}
              <div className="relative h-[600px] md:h-[700px] flex justify-center items-center order-1 lg:order-2">
                {/* Background glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-6 h-6 border border-accent/30 rotate-45 hidden lg:block opacity-50"></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 border border-primary/20 rotate-12 hidden lg:block opacity-30"></div>
                <CardSwap
                  width={350}
                  height={500}
                  cardDistance={55}
                  verticalDistance={75}
                  delay={4000}
                  pauseOnHover={true}
                  skewAmount={3}
                  easing="elastic"
                >
                  {quickEntryCards.map((card, index) => (
                    <Card
                      key={index}
                      className="overflow-hidden rounded-2xl p-8 text-center"
                    >
                      {card.href.startsWith('http') ? (
                        <a
                          href={card.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col h-full no-underline"
                        >
                          <div className="absolute inset-0 opacity-40">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_top,_var(--accent)_0%,_transparent_70%)]"></div>
                          </div>

                          <div className="relative z-10">
                            <div
                              className={`w-24 h-24 bg-${card.color}/30 rounded-full flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-white/10 shadow-lg`}
                            >
                              <i
                                className={`${card.icon} text-4xl text-${
                                  card.color === "accent" ? "white" : "white"
                                }`}
                              />
                            </div>

                            <h3 className="font-cinzel text-4xl font-bold mb-8 text-white">
                              {card.title}
                            </h3>

                            <p className="text-xl text-white/90 mb-10 leading-relaxed">
                              {card.description}
                            </p>

                            <div className="mt-auto bg-gradient-to-r from-primary/40 to-accent/40 py-3 px-6 rounded-xl backdrop-blur-sm border border-white/10 transition-all hover:scale-105">
                              <span className="text-white font-medium inline-flex items-center justify-center">
                                Explore {card.title}{" "}
                                <i className="fas fa-arrow-right ml-3" />
                              </span>
                            </div>
                          </div>
                        </a>
                      ) : (
                        <Link
                          href={card.href}
                          className="flex flex-col h-full no-underline"
                        >
                          <div className="absolute inset-0 opacity-40">
                            <div className="w-full h-full bg-[radial-gradient(circle_at_top,_var(--accent)_0%,_transparent_70%)]"></div>
                          </div>

                          <div className="relative z-10">
                            <div
                              className={`w-24 h-24 bg-${card.color}/30 rounded-full flex items-center justify-center mx-auto mb-10 backdrop-blur-md border border-white/10 shadow-lg`}
                            >
                              <i
                                className={`${card.icon} text-4xl text-${
                                  card.color === "accent" ? "white" : "white"
                                }`}
                              />
                            </div>

                            <h3 className="font-cinzel text-4xl font-bold mb-8 text-white">
                              {card.title}
                            </h3>

                            <p className="text-xl text-white/90 mb-10 leading-relaxed">
                              {card.description}
                            </p>

                            <div className="mt-auto bg-gradient-to-r from-primary/40 to-accent/40 py-3 px-6 rounded-xl backdrop-blur-sm border border-white/10 transition-all hover:scale-105">
                              <span className="text-white font-medium inline-flex items-center justify-center">
                                Explore {card.title}{" "}
                                <i className="fas fa-arrow-right ml-3" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      )}
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-6"></div>

        {/* Festival Highlights */}
        <FestivalHighlights />


        {/* Featured Event Callout */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <ShadcnCard className="relative bg-card rounded-3xl overflow-hidden border border-accent/20">
              <CardContent className="p-6 md:p-12">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-10 left-10 w-4 h-4 border border-accent rotate-45" />
                  <div className="absolute top-20 right-20 w-6 h-6 border border-primary rotate-12" />
                  <div className="absolute bottom-20 left-20 w-5 h-5 border border-accent rotate-45" />
                  <div className="absolute bottom-10 right-10 w-3 h-3 bg-primary rotate-45" />
                </div>

                <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-12 items-center">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
                        HEADLINE EVENT
                      </span>
                      <span className="text-muted-foreground text-sm">
                        Day 3 Finale
                      </span>
                    </div>
                    <h3 className="font-cinzel text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-card-foreground bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Synergy : Hardware Hackathon
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Gear up for a Hardware Revolution, where innovation meets
                      sustainability, and unleash your creativity to build
                      powerful solutions that shape a better future!
                    </p>
                    <div className="flex flex-wrap items-center gap-3 md:gap-6 mb-6 md:mb-8">
                      <div className="text-center bg-primary/5 px-4 py-2 rounded-lg">
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          ₹45,000
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Prize Pool
                        </div>
                      </div>
                      <div className="text-center bg-primary/5 px-4 py-2 rounded-lg">
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          32
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Max Teams
                        </div>
                      </div>
                      <div className="text-center bg-primary/5 px-4 py-2 rounded-lg">
                        <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          12h
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Duration
                        </div>
                      </div>
                    </div>
                    <a
                      href="https://forms.gle/your-google-form-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        className="px-6 py-2 md:px-8 md:py-3 bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 font-semibold transition-all duration-300"
                        data-testid="button-register-challenge"
                      >
                        <i className="fas fa-bolt mr-2" />
                        Register for event
                      </Button>
                    </a>
                  </div>

                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center border border-border overflow-hidden">
                      <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--accent)_0%,_transparent_50%)]"></div>
                      </div>
                      <div className="relative z-10 w-full h-full flex items-center justify-center">
                        {/* Image placeholder - replace src with actual image when available */}
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <i className="fas fa-image text-4xl text-muted-foreground mb-2"></i>
                            <p className="text-muted-foreground font-medium">
                              Event Image
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 md:w-12 md:h-12 bg-accent rounded-full flex items-center justify-center">
                      <i className="fas fa-image text-accent-foreground text-lg md:text-xl" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </ShadcnCard>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12 animate-in opacity-0">
              <h3 className="font-cinzel text-3xl font-bold mb-4 text-foreground">
                Powered By Visionary Partners
              </h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Industry leaders who believe in the future we're building
                together
              </p>
            </div>

            <div className="h-[180px] my-16">
              <InfiniteMovingCards
                items={sampleSponsors.map((sponsor) => ({
                  name: sponsor.name,
                  logo: sponsor.logo || undefined,
                  description:
                    sponsor.tier.charAt(0).toUpperCase() +
                    sponsor.tier.slice(1) +
                    " Partner",
                }))}
                direction="right"
                speed="slow"
                pauseOnHover={true}
              />
            </div>

            <div className="mt-10 flex justify-center">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <i className="fas fa-handshake mr-2"></i>
                Become a Partner
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
