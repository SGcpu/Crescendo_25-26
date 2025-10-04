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
      title: "Integrity",
      description:
        "The college endeavors to provide an education that instills honesty, fairness, and empathy in its students.",
      icon: "fas fa-shield-alt",
      color: "primary",
    },
    {
      title: "Discipline",
      description:
        "Fr. CRCE is committed to a disciplined approach to campus life, social behavior, and academic work.",
      icon: "fas fa-gavel",
      color: "accent",
    },
    {
      title: "Originality",
      description:
        "The college emphasizes project-based, experiential learning to encourage and stimulate the development of original ideas that can lead to innovation.",
      icon: "fas fa-lightbulb",
      color: "secondary",
    },
    {
      title: "Quality",
      description:
        "A core tenet is the pursuit of excellence in all aspects of the college's academic offerings and activities.",
      icon: "fas fa-star",
      color: "primary",
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
            <img
              src="/images/Assets/trinetra_eye.png"
              alt="Third Eye Emblem"
              className="w-24 h-26 text-[var(--noir-gold)] animate-float"
            />
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
                      <div className="w-full max-w-md mx-auto">
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60 overflow-hidden">
                          <img
                            src="/images/Assets/crescendo_2023_poster.jpg"
                            alt="Crescendo 2023 Poster"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
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
                      <div className="w-full max-w-md mx-auto">
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60 overflow-hidden">
                          <img
                            src="/images/Assets/crescendo_2024_poster.jpg"
                            alt="Crescendo 2024 Poster"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
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
                      <div className="w-full max-w-md mx-auto">
                        <div className="h-20 w-full rounded-lg bg-[var(--noir-black)] border border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_24px_rgba(212,175,55,0.15)] md:h-44 lg:h-60 overflow-hidden">
                          <img
                            src="/images/Assets/crescendo_2025_poster.jpg"
                            alt="Crescendo 2025 Poster"
                            className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Vision */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-[var(--noir-gold)]">
              Our Vision
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[var(--noir-black)] border border-[var(--noir-gold)] shadow-lg shadow-[var(--noir-gold)]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--noir-gold)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-eye text-3xl text-[var(--noir-gold)]" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold mb-4 text-[var(--noir-gold)]">
                  Vision
                </h3>
                <p className="text-lg text-[var(--noir-text)] leading-relaxed">
                  "Moulding engineers who can build the nation"
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-[var(--noir-gold)]">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--noir-text-muted)] max-w-2xl mx-auto">
              Four fundamental principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Mission */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-[var(--noir-gold)]">
              Our Mission
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-[var(--noir-black)] border border-[var(--noir-gold)] shadow-lg shadow-[var(--noir-gold)]/10">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[var(--noir-crimson)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-rocket text-3xl text-[var(--noir-crimson)]" />
                </div>
                <h3 className="font-cinzel text-2xl font-bold mb-4 text-[var(--noir-gold)]">
                  Mission
                </h3>
                <p className="text-lg text-[var(--noir-text)] leading-relaxed">
                  "Empowering excellence and values to shape ethical engineers
                  who lead with innovation and responsibility."
                </p>
              </CardContent>
            </Card>
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
      </div>
    </div>
  );
}
