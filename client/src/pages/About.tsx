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
      posterImage: "/images/Assets/crescendo_2023_poster.jpg", // Path to 2023 poster
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
      posterImage: "/images/Assets/crescendo_2024_poster.jpg", // Path to 2024 poster
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
      posterImage: "/images/Assets/crescendo_2025_poster.jpg", // Path to 2025 poster
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
            <ThirdEyeGlyph size="lg" className="text-[var(--noir-gold)]" />
          </div>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-[var(--noir-gold)]">
            The Crescendo Story
          </h1>
          <p className="text-xl text-[var(--noir-text)] max-w-4xl mx-auto leading-relaxed">
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
                  image: "/images/Assets/crescendo_2023_poster.jpg",
                  content: (
                    <div>
                      <p className="mb-8 text-xs font-normal text-[var(--noir-text)] md:text-sm">
                        Born from a desire to create more than just another tech
                        event, Crescendo began as a vision to awaken the
                        innovative spirit in every participant.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60 overflow-hidden">
                          <img
                            src="/images/Assets/crescendo_2023_poster.jpg"
                            alt="Crescendo 2023 Poster"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60">
                          <div className="flex flex-col items-center justify-center h-full w-full p-4">
                            <h3 className="text-lg md:text-xl font-cinzel text-[var(--noir-gold)] mb-2">
                              Key Achievements
                            </h3>
                            <ul className="text-[var(--noir-text)] list-disc pl-5">
                              <li>First conceptualization</li>
                              <li>Core team formation</li>
                              <li>Vision alignment</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "2024",
                  image: "/images/Assets/crescendo_2024_poster.jpg",
                  content: (
                    <div>
                      <p className="mb-4 text-xs font-normal text-[var(--noir-text)] md:text-sm">
                        Our first successful event attracted over 500
                        participants, establishing Crescendo as a premier
                        platform for innovation and creativity.
                      </p>
                      <p className="mb-8 text-xs font-normal text-[var(--noir-text)] md:text-sm">
                        With over ₹10L in prize pools and 15 industry partners,
                        we set the foundation for future growth and expanded our
                        reach.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60 overflow-hidden">
                          <img
                            src="/images/Assets/crescendo_2024_poster.jpg"
                            alt="Crescendo 2024 Poster"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60">
                          <div className="flex flex-col items-center justify-center h-full w-full p-4">
                            <h3 className="text-lg md:text-xl font-cinzel text-[var(--noir-gold)] mb-3">
                              Key Stats
                            </h3>
                            <div className="grid grid-cols-2 gap-4 w-full">
                              <div className="text-center">
                                <p className="text-xl font-bold text-[var(--noir-crimson)]">
                                  500+
                                </p>
                                <p className="text-sm text-[var(--noir-text)]">
                                  Participants
                                </p>
                              </div>
                              <div className="text-center">
                                <p className="text-xl font-bold text-[var(--noir-crimson)]">
                                  ₹10L
                                </p>
                                <p className="text-sm text-[var(--noir-text)]">
                                  Prize Pool
                                </p>
                              </div>
                              <div className="text-center col-span-2 mt-2">
                                <p className="text-lg font-bold text-[var(--noir-gold)]">
                                  15
                                </p>
                                <p className="text-sm text-[var(--noir-text)]">
                                  Industry Partners
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "2025",
                  image: "/images/Assets/crescendo_2025_poster.jpg",
                  content: (
                    <div>
                      <p className="mb-4 text-xs font-normal text-[var(--noir-text)] md:text-sm">
                        Achieving new heights with expanded programs,
                        international partnerships, and a focus on emerging
                        technologies like AI and blockchain.
                      </p>
                      <div className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-[var(--noir-text-muted)] md:text-sm">
                          <i className="fas fa-check-circle text-[var(--noir-crimson)]"></i>{" "}
                          1500+ participants from across the globe
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[var(--noir-text-muted)] md:text-sm">
                          <i className="fas fa-check-circle text-[var(--noir-crimson)]"></i>{" "}
                          ₹25L prize pool across all competitions
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[var(--noir-text-muted)] md:text-sm">
                          <i className="fas fa-check-circle text-[var(--noir-crimson)]"></i>{" "}
                          50+ global partners and sponsors
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[var(--noir-text-muted)] md:text-sm">
                          <i className="fas fa-check-circle text-[var(--noir-crimson)]"></i>{" "}
                          Introduction of the Third Eye Challenge
                        </div>
                        <div className="flex items-center gap-2 text-xs text-[var(--noir-text-muted)] md:text-sm">
                          <i className="fas fa-check-circle text-[var(--noir-crimson)]"></i>{" "}
                          First international satellite events
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60 overflow-hidden">
                          <img
                            src="/images/Assets/crescendo_2025_poster.jpg"
                            alt="Crescendo 2025 Poster"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60">
                          <div className="text-center p-4">
                            <ThirdEyeGlyph size="md" className="mb-4" />
                            <p className="font-cinzel text-lg text-[var(--noir-gold)] mb-2">
                              Third Eye Awakening
                            </p>
                            <p className="text-sm text-[var(--noir-text-muted)]">
                              Our signature event with a ₹25L prize pool and
                              international participation
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
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-[var(--noir-gold)]">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--noir-text-muted)] max-w-2xl mx-auto">
              Three fundamental principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="bg-[var(--noir-black)] border border-[var(--noir-gold)] hover-lift cursor-pointer group shadow-lg shadow-[var(--noir-gold)]/10"
                data-testid={`value-card-${value.title.toLowerCase()}`}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 ${
                      value.color === "accent"
                        ? "bg-[var(--noir-crimson)]/20"
                        : "bg-[var(--noir-gold)]/20"
                    } rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <i
                      className={`${value.icon} text-3xl ${
                        value.color === "accent"
                          ? "text-[var(--noir-crimson)]"
                          : "text-[var(--noir-gold)]"
                      }`}
                    />
                  </div>
                  <h3 className="font-cinzel text-2xl font-bold mb-4 text-[var(--noir-gold)] group-hover:text-[var(--noir-gold-light)] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[var(--noir-text)] leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-[var(--noir-black)] to-[var(--noir-purple)] border border-[var(--noir-gold)]/30 p-8 shadow-lg shadow-[var(--noir-gold)]/10">
            <CardContent className="p-8">
              <div className="text-center mb-12">
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-[var(--noir-gold)]">
                  Meet Our Visionaries
                </h2>
                <p className="text-lg text-[var(--noir-text-muted)] max-w-2xl mx-auto">
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
          <Card className="bg-[var(--noir-black)] border border-[var(--noir-gold)] overflow-hidden shadow-lg shadow-[var(--noir-gold)]/10">
            <CardContent className="p-12 text-center relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-8 h-8 border border-[var(--noir-crimson)] rotate-45" />
                <div className="absolute top-20 right-20 w-6 h-6 border border-[var(--noir-gold)] rotate-12" />
                <div className="absolute bottom-20 left-20 w-10 h-10 border border-[var(--noir-gold)] rotate-45" />
                <div className="absolute bottom-10 right-10 w-4 h-4 bg-[var(--noir-crimson)] rotate-45" />
              </div>

              <div className="relative z-10">
                <ThirdEyeGlyph size="md" className="mx-auto mb-8" />

                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-[var(--noir-gold)]">
                  Join Our Vision
                </h2>

                <p className="text-xl text-[var(--noir-text)] mb-8 max-w-2xl mx-auto">
                  Be part of a movement that's shaping the future of technology
                  and innovation. Whether as a participant, volunteer, or
                  partner, your contribution matters.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <Button
                    className="px-8 py-4 bg-[var(--noir-crimson)] text-white hover:bg-[var(--noir-crimson)]/90 font-semibold text-lg shadow-lg shadow-[var(--noir-crimson)]/20"
                    data-testid="button-get-involved"
                  >
                    <i className="fas fa-hands-helping mr-2" />
                    Get Involved
                  </Button>
                  <Button
                    variant="outline"
                    className="px-8 py-4 border-[var(--noir-gold)] text-[var(--noir-gold)] hover:bg-[var(--noir-gold)]/10 hover:text-[var(--noir-gold-light)] font-semibold text-lg"
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
