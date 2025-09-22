import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import ThirdEyeGlyph from '@/components/ThirdEyeGlyph';

export default function About() {
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [activeFounder, setActiveFounder] = useState(0);

  const timelineMilestones = [
    {
      year: '2023',
      title: 'Inception',
      subtitle: 'The Vision Awakens',
      description: 'Born from a desire to create more than just another tech event, Crescendo began as a vision to awaken the innovative spirit in every participant.',
      icon: 'fas fa-lightbulb',
      achievements: ['First conceptualization', 'Core team formation', 'Vision alignment']
    },
    {
      year: '2024',
      title: 'Expansion',
      subtitle: 'Growing the Movement',
      description: 'Our first successful event attracted over 500 participants, establishing Crescendo as a premier platform for innovation and creativity.',
      icon: 'fas fa-rocket',
      achievements: ['500+ participants', '₹10L prize pool', '15 industry partners']
    },
    {
      year: '2025',
      title: 'Third Eye',
      subtitle: 'Seeing Beyond',
      description: 'Achieving new heights with expanded programs, international partnerships, and a focus on emerging technologies like AI and blockchain.',
      icon: 'fas fa-eye',
      achievements: ['1500+ participants', '₹25L prize pool', '50+ global partners']
    }
  ];

  const coreValues = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries and exploring uncharted territories in technology',
      icon: 'fas fa-atom',
      color: 'primary'
    },
    {
      title: 'Inclusion',
      description: 'Creating opportunities for everyone, regardless of background or experience',
      icon: 'fas fa-users',
      color: 'accent'
    },
    {
      title: 'Integrity',
      description: 'Maintaining the highest standards of ethics and transparency',
      icon: 'fas fa-shield-alt',
      color: 'secondary'
    }
  ];

  const teamMembers = [
    {
      name: 'Arjun Mehta',
      role: 'Festival Director',
      bio: 'Visionary leader with 10+ years in tech event management and startup ecosystem development.',
      image: 'team-1',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'Technical Lead',
      bio: 'Former Google engineer passionate about creating platforms that empower the next generation of developers.',
      image: 'team-2',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Rahul Kumar',
      role: 'Community Manager',
      bio: 'Expert in building and nurturing tech communities across India with focus on inclusive growth.',
      image: 'team-3',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  const impactStats = [
    { label: 'Total Participants', value: '3000+', icon: 'fas fa-users' },
    { label: 'Projects Created', value: '850+', icon: 'fas fa-code' },
    { label: 'Jobs Created', value: '200+', icon: 'fas fa-briefcase' },
    { label: 'Startups Launched', value: '45+', icon: 'fas fa-rocket' }
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
            A journey of awakening innovation, fostering creativity, and building a community 
            where technology serves humanity's highest aspirations.
          </p>
        </div>

        {/* Awakening Timeline */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Awakening Timeline
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our journey from vision to reality, marked by three transformative milestones
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary opacity-50" />
            
            {timelineMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1 px-8">
                  <Card 
                    className={`bg-card border border-border cursor-pointer transition-all duration-300 ${
                      activeTimeline === index ? 'border-accent/50 shadow-lg shadow-accent/20' : 'hover:border-accent/30'
                    }`}
                    onClick={() => setActiveTimeline(index)}
                    data-testid={`timeline-card-${index}`}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-${index === 1 ? 'accent' : 'primary'}/20 rounded-full flex items-center justify-center`}>
                          <i className={`${milestone.icon} text-${index === 1 ? 'accent' : 'primary'} text-xl`} />
                        </div>
                        <div>
                          <Badge variant="outline" className="border-accent text-accent mb-2">
                            {milestone.year}
                          </Badge>
                          <CardTitle className="font-cinzel text-2xl">{milestone.title}</CardTitle>
                          <p className="text-accent font-semibold">{milestone.subtitle}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-card-foreground leading-relaxed mb-4">
                        {milestone.description}
                      </p>
                      {activeTimeline === index && (
                        <div className="mt-4 pt-4 border-t border-border">
                          <h4 className="font-semibold text-foreground mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {milestone.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-center text-muted-foreground text-sm">
                                <i className="fas fa-check-circle text-accent mr-2 text-xs" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline dot */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-background ${
                  activeTimeline === index ? 'bg-accent animate-pulse-gold' : 'bg-primary'
                }`} />
              </div>
            ))}
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
                  <div className={`w-20 h-20 bg-${value.color === 'accent' ? 'accent' : 'primary'}/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <i className={`${value.icon} text-3xl text-${value.color === 'accent' ? 'accent' : 'primary'}`} />
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
          <div className="text-center mb-12">
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Meet Our Visionaries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals who bring Crescendo Festival to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index}
                className={`bg-card border border-border hover-lift cursor-pointer transition-all duration-300 ${
                  activeFounder === index ? 'border-accent/50 shadow-lg shadow-accent/20' : ''
                }`}
                onClick={() => setActiveFounder(index)}
                data-testid={`team-member-${index}`}
              >
                <CardContent className="p-8 text-center">
                  {/* Avatar placeholder with golden iris effect */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto border-2 border-accent/20">
                      <i className="fas fa-user text-3xl text-accent" />
                    </div>
                    {activeFounder === index && (
                      <div className="absolute inset-0 w-24 h-24 border-2 border-accent rounded-full mx-auto animate-pulse-gold" />
                    )}
                  </div>
                  
                  <h3 className="font-cinzel text-xl font-bold mb-2 text-card-foreground">
                    {member.name}
                  </h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-colors"
                        data-testid={`social-${platform}-${index}`}
                      >
                        <i className={`fab fa-${platform}`} />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Impact Numbers */}
        <section className="mb-20">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-foreground">
                  Our Impact Journey
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Measurable outcomes that demonstrate our commitment to fostering innovation
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <i className={`${stat.icon} text-accent text-2xl`} />
                    </div>
                    <div className="text-3xl font-bold text-accent mb-2 font-cinzel">
                      {stat.value}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
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
                  Be part of a movement that's shaping the future of technology and innovation. 
                  Whether as a participant, volunteer, or partner, your contribution matters.
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
