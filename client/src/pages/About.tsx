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
      color: "accent",
    },
  ];

  const teamMembers = [
    {
      name: "Jack Sequeira",
      role: "Technical Secretary",
      bio: "The architect of innovation, shaping ideas into brilliance",
      image: "jack",
      social: { 
        linkedin: "https://www.linkedin.com/in/gabbar-v7", 
        instagram: "https://www.instagram.com/gabbar_v7/", 
        github: "https://github.com/Gabbar-v7" 
      },
    },
    {
      name: "Yashdeep Kulkarni",
      role: "General Secretary",
      bio: "The guiding spirit who weaves vision into reality",
      image: "yashdeep",
      social: { 
        linkedin: "https://www.linkedin.com/in/yashdeep-kulkarni-33476a216", 
        instagram: "https://www.instagram.com/yashdeepkulkarni_10/?hl=en", 
        github: "https://github.com/ValourWarrior" 
      },
    },
    {
      name: "Branch Mathew",
      role: "PR Head",
      bio: "The voice that turns presence into influence",
      image: "branch",
      social: { 
        linkedin: "https://www.linkedin.com/in/branchmathew/", 
        instagram: "https://www.instagram.com/mathewbranch16/", 
        github: "https://github.com/mathewbranch16" 
      },
    },
    /* {
      name: "Elish Mark",
      role: "Technical Representative",
      bio: "The backbone of innovation, solving challenges and powering progress",
      image: "elish",
      social: { 
        linkedin: "https://www.linkedin.com/in/elish-mark4444", 
        instagram: "https://www.instagram.com/elish_mark?igsh=MWE2cWZtZjlzZGQ3OA%3D%3D&utm_source=qr", 
        github: "https://github.com/Elish-4444" 
      },
    },
    {
      name: "Sian George",
      role: "Technical Representative",
      bio: "Bridging ideas and execution with technical expertise",
      image: "sian",
      social: { 
        linkedin: "https://www.linkedin.com/in/sian-george-864a69352", 
        instagram: "https://www.instagram.com/sg.phil_", 
        github: "https://github.com/SGcpu" 
      },
    }, */
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
          <h1 className="font-cinzel text-2xl md:text-5xl lg:text-6xl font-black mb-6 text-[var(--noir-gold)] max-w-6xl mx-auto">
            The Crescendo Story
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-[var(--noir-text)] max-w-4xl mx-auto leading-relaxed font-semibold">
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
                  image: "/images/posters/matrix.webp",
                  content: (
                    <div>
                      <div className="mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--noir-gold)] mb-4 text-center">
                          MATRIX
                        </h3>
                        <p className="text-base md:text-lg font-normal text-[var(--noir-text)] text-center leading-relaxed mb-6">
                          Step into a world where reality merges with the digital, challenging your intellect, creativity, and strategy as you explore the power of technology and connections, solve innovative problems, and unlock new possibilities while redefining the boundaries between the virtual and real.
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <i className="fas fa-users text-[var(--noir-gold)] text-lg"></i>
                            <span className="text-lg md:text-xl font-bold text-[var(--noir-gold)]">2K - 3K Footfall</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-code text-[var(--noir-crimson)]"></i>
                              <span>15+ Technical Competitions</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-trophy text-[var(--noir-gold)]"></i>
                              <span>₹5L Prize Pool</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-building text-[var(--noir-gold)]"></i>
                              <span>10+ Industry Partners</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-microchip text-[var(--noir-crimson)]"></i>
                              <span>AI & IoT Workshops</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full max-w-md mx-auto flex justify-center">
                        <div className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-[var(--noir-black)] border-2 border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden group hover:scale-110 hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] hover:shadow-[0_0_100px_rgba(212,175,55,0.4)] transition-all duration-700 hover:border-[var(--noir-gold-light)] hover:-translate-y-2">
                          <img
                            src="/images/posters/matrix.webp"
                            alt="Matrix Poster"
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[var(--noir-gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "2024",
                  image: "/images/posters/singularity.webp",
                  content: (
                    <div>
                      <div className="mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--noir-gold)] mb-4 text-center">
                          SINGULARITY
                        </h3>
                        <p className="text-base md:text-lg font-normal text-[var(--noir-text)] text-center leading-relaxed mb-6">
                          Dive into the fusion of humans and technology, discovering limitless possibilities through AI and innovation, pushing the boundaries of problem-solving and creativity, celebrating forward-thinking ideas shaping the future, and experiencing a world where imagination meets cutting-edge tech.
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <i className="fas fa-users text-[var(--noir-gold)] text-lg"></i>
                            <span className="text-lg md:text-xl font-bold text-[var(--noir-gold)]">3.5K - 4K Footfall</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-robot text-[var(--noir-crimson)]"></i>
                              <span>20+ AI & ML Competitions</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-trophy text-[var(--noir-gold)]"></i>
                              <span>₹10L Prize Pool</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-handshake text-[var(--noir-gold)]"></i>
                              <span>25+ Corporate Partners</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-brain text-[var(--noir-crimson)]"></i>
                              <span>Machine Learning Hackathons</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-globe text-[var(--noir-gold)]"></i>
                              <span>International Speaker Sessions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full max-w-md mx-auto flex justify-center">
                        <div className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-[var(--noir-black)] border-2 border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden group hover:scale-110 hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] hover:shadow-[0_0_100px_rgba(212,175,55,0.4)] transition-all duration-700 hover:border-[var(--noir-gold-light)] hover:-translate-y-2">
                          <img
                            src="/images/posters/singularity.webp"
                            alt="Singularity Poster"
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[var(--noir-gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  title: "2025",
                  image: "/images/posters/trinetra.webp",
                  content: (
                    <div>
                      <div className="mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-[var(--noir-gold)] mb-4 text-center">
                          TRINETRA
                        </h3>
                        <p className="text-base md:text-lg font-normal text-[var(--noir-text)] text-center leading-relaxed mb-6">
                          Awaken the third eye to see beyond the limits of the physical, exploring realms of insight, innovation, and imagination, where vision meets intellect, creativity drives discovery, and the unseen becomes visible, guiding minds to perceive, understand, and shape the world in ways ordinary eyes cannot.
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center justify-center gap-2 mb-4">
                            <i className="fas fa-users text-[var(--noir-gold)] text-lg"></i>
                            <span className="text-lg md:text-xl font-bold text-[var(--noir-gold)]">5K - 6K Expected Footfall</span>
                          </div>
                          
                          <div className="space-y-3">
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-robot text-[var(--noir-crimson)]"></i>
                              <span>Roborift - Robotics Competition</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-gamepad text-[var(--noir-gold)]"></i>
                              <span>BGMI & Valorant Esports</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-microchip text-[var(--noir-crimson)]"></i>
                              <span>Synergy Hardware Challenge</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-code text-[var(--noir-gold)]"></i>
                              <span>20+ Technical Competitions</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-trophy text-[var(--noir-crimson)]"></i>
                              <span>₹25L Prize Pool</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-handshake text-[var(--noir-gold)]"></i>
                              <span>50+ Global Partners</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-shield-alt text-[var(--noir-crimson)]"></i>
                              <span>Cybersecurity Challenges</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm md:text-base text-[var(--noir-text)]">
                              <i className="fas fa-lightbulb text-[var(--noir-gold)]"></i>
                              <span>Startup Pitching Competitions</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="w-full max-w-md mx-auto flex justify-center">
                        <div className="h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80 rounded-full bg-[var(--noir-black)] border-2 border-[var(--noir-gold)] flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] overflow-hidden group hover:scale-110 hover:shadow-[0_0_60px_rgba(212,175,55,0.8)] hover:shadow-[0_0_100px_rgba(212,175,55,0.4)] transition-all duration-700 hover:border-[var(--noir-gold-light)] hover:-translate-y-2">
                          <img
                            src="/images/posters/trinetra.webp"
                            alt="Trinetra Poster"
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[var(--noir-gold)]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
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
                  The passionate minds who breathe life into Crescendo
                </p>
              </div>

              <div className="space-y-12">
                {/* Top row - 3 members */}
                <div className="grid md:grid-cols-3 gap-12">
                  {teamMembers.slice(0, 3).map((member, index) => (
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
                
                {/* Bottom row - 2 members */}
                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                  {teamMembers.slice(3, 5).map((member, index) => (
                    <div
                      key={index + 3}
                      className="flex justify-center"
                      data-testid={`team-member-${index + 3}`}
                    >
                      <TeamProfileCard
                        member={member}
                        isActive={activeFounder === index + 3}
                        onClick={() => setActiveFounder(index + 3)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
