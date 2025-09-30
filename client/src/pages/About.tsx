import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ThirdEyeGlyph from "@/components/ThirdEyeGlyph";
import { Timeline } from "@/components/ui/timeline";
import TeamProfileCard from "@/components/TeamProfileCard";

export default function About() {
  const [activeFounder, setActiveFounder] = useState(0);

  const timelineMilestones = [
    {
      year: "2023",
      title: "Inception",
      subtitle: "The Vision Awakens",
      description:
        "Born from a desire to create more than just another tech event, Crescendo began as a vision to awaken the innovative spirit in every participant.",
      icon: "fas fa-lightbulb",
      achievements: [
        "First conceptualization",
        "Core team formation",
        "Vision alignment",
      ],
    },
    {
      year: "2024",
      title: "Expansion",
      subtitle: "Growing the Movement",
      description:
        "Our first successful event attracted over 500 participants, establishing Crescendo as a premier platform for innovation and creativity.",
      icon: "fas fa-rocket",
      achievements: [
        "500+ participants",
        "₹10L prize pool",
        "15 industry partners",
      ],
    },
    {
      year: "2025",
      title: "Third Eye",
      subtitle: "Seeing Beyond",
      description:
        "Achieving new heights with expanded programs, international partnerships, and a focus on emerging technologies like AI and blockchain.",
      icon: "fas fa-eye",
      achievements: [
        "1500+ participants",
        "₹25L prize pool",
        "50+ global partners",
      ],
    },
  ];

  const coreValues = [
    {
      title: "Innovation",
      description:
        "Pushing boundaries and exploring uncharted territories in technology",
      icon: "fas fa-atom",
      color: "primary",
    },
    {
      title: "Inclusion",
      description:
        "Creating opportunities for everyone, regardless of background or experience",
      icon: "fas fa-users",
      color: "accent",
    },
    {
      title: "Integrity",
      description:
        "Maintaining the highest standards of ethics and transparency",
      icon: "fas fa-shield-alt",
      color: "secondary",
    },
  ];

  const teamMembers = [
    {
      name: "Arjun Mehta",
      role: "Festival Director",
      bio: "Visionary leader with 10+ years in tech event management and startup ecosystem development.",
      image: "team-1",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Sharma",
      role: "Technical Lead",
      bio: "Former Google engineer passionate about creating platforms that empower the next generation of developers.",
      image: "team-2",
      social: { linkedin: "#", github: "#" },
    },
    {
      name: "Rahul Kumar",
      role: "Community Manager",
      bio: "Expert in building and nurturing tech communities across India with focus on inclusive growth.",
      image: "team-3",
      social: { linkedin: "#", twitter: "#" },
    },
  ];

  const impactStats = [
    { label: "Total Participants", value: "3000+", icon: "fas fa-users" },
    { label: "Projects Created", value: "850+", icon: "fas fa-code" },
    { label: "Jobs Created", value: "200+", icon: "fas fa-briefcase" },
    { label: "Startups Launched", value: "45+", icon: "fas fa-rocket" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="flex justify-center mb-8">
            <ThirdEyeGlyph size="lg" />
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            The Crescendo Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A journey of awakening innovation, fostering creativity, and
            building a community where technology serves humanity's highest
            aspirations.
          </p>
        </div>

        {/* Awakening Timeline */}
        <section className="mb-20">
          <div className="relative w-full overflow-clip">
            <Timeline
              data={[
                {
                  title: "2023",
                  content: (
                    <div>
                      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Born from a desire to create more than just another tech
                        event, Crescendo began as a vision to awaken the
                        innovative spirit in every participant.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-primary/20 flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:h-44 lg:h-60">
                          <div className="flex items-center justify-center h-full w-full">
                            <div className="text-center">
                              <i className="fas fa-lightbulb text-4xl text-primary mb-2"></i>
                              <p className="text-sm font-medium">
                                First conceptualization
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-accent/20 flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:h-44 lg:h-60">
                          <div className="flex items-center justify-center h-full w-full">
                            <div className="text-center">
                              <i className="fas fa-users text-4xl text-accent mb-2"></i>
                              <p className="text-sm font-medium">
                                Core team formation
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "2024",
                  content: (
                    <div>
                      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Our first successful event attracted over 500
                        participants, establishing Crescendo as a premier
                        platform for innovation and creativity.
                      </p>
                      <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        With over ₹10L in prize pools and 15 industry partners,
                        we set the foundation for future growth and expanded our
                        reach.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-primary/20 flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:h-44 lg:h-60">
                          <div className="flex flex-col items-center justify-center h-full w-full">
                            <i className="fas fa-users text-4xl text-primary mb-2"></i>
                            <p className="text-xl font-bold">500+</p>
                            <p className="text-sm">Participants</p>
                          </div>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-accent/20 flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:h-44 lg:h-60">
                          <div className="flex flex-col items-center justify-center h-full w-full">
                            <i className="fas fa-trophy text-4xl text-accent mb-2"></i>
                            <p className="text-xl font-bold">₹10L</p>
                            <p className="text-sm">Prize Pool</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "2025",
                  content: (
                    <div>
                      <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        Achieving new heights with expanded programs,
                        international partnerships, and a focus on emerging
                        technologies like AI and blockchain.
                      </p>
                      <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                          <i className="fas fa-check-circle text-accent"></i>{" "}
                          1500+ participants from across the globe
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                          <i className="fas fa-check-circle text-accent"></i>{" "}
                          ₹25L prize pool across all competitions
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                          <i className="fas fa-check-circle text-accent"></i>{" "}
                          50+ global partners and sponsors
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                          <i className="fas fa-check-circle text-accent"></i>{" "}
                          Introduction of the Third Eye Challenge
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                          <i className="fas fa-check-circle text-accent"></i>{" "}
                          First international satellite events
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:h-44 lg:h-60 overflow-hidden bg-primary/20">
                          <div className="flex items-center justify-center h-full w-full">
                            <ThirdEyeGlyph size="xl" className="opacity-50" />
                          </div>
                        </div>
                        <div className="h-20 w-full rounded-lg bg-accent/20 flex items-center justify-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06)] md:h-44 lg:h-60">
                          <div className="text-center">
                            <i className="fas fa-eye text-5xl text-accent mb-3"></i>
                            <p className="font-medium text-lg">
                              Third Eye Awakening
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three fundamental principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="bg-card border border-border hover-lift cursor-pointer group"
                data-testid={`value-card-${value.title.toLowerCase()}`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 bg-${
                      value.color === "accent" ? "accent" : "primary"
                    }/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <i
                      className={`${value.icon} text-3xl text-${
                        value.color === "accent" ? "accent" : "primary"
                      }`}
                    />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold mb-4 text-card-foreground group-hover:text-accent transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20 p-8">
            <CardContent className="p-8">
              <div className="text-center mb-12">
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Meet Our Visionaries
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  The passionate individuals who bring Crescendo Festival to
                  life
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="flex justify-center"
                    data-testid={`team-member-${index}`}
                  >
                    <TeamProfileCard
                      member={member}
                      isActive={activeFounder === index}
                      onClick={() => setActiveFounder(index)}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section>
          <Card className="bg-card border border-border overflow-hidden">
            <CardContent className="p-12 text-center relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-8 h-8 border border-accent rotate-45" />
                <div className="absolute top-20 right-20 w-6 h-6 border border-primary rotate-12" />
                <div className="absolute bottom-20 left-20 w-10 h-10 border border-accent rotate-45" />
                <div className="absolute bottom-10 right-10 w-4 h-4 bg-primary rotate-45" />
              </div>

              <div className="relative z-10">
                <ThirdEyeGlyph size="md" className="mx-auto mb-8" />

                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Join Our Vision
                </h2>

                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Be part of a movement that's shaping the future of technology
                  and innovation. Whether as a participant, volunteer, or
                  partner, your contribution matters.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <Button
                    className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg"
                    data-testid="button-get-involved"
                  >
                    <i className="fas fa-hands-helping mr-2" />
                    Get Involved
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg"
                    data-testid="button-contact-team"
                  >
                    <i className="fas fa-envelope mr-2" />
                    Contact Our Team
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
