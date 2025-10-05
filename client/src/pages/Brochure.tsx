import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Brochure() {
  const [currentPage, setCurrentPage] = useState(0);

  const brochurePages = [
    {
      title: 'Crescendo Festival 2025',
      content: 'Awaken Your Vision',
      description: 'The ultimate convergence of innovation, creativity, and transcendent technology',
      image: 'cover'
    },
    {
      title: 'Festival Overview',
      content: 'Four Days of Innovation',
      description: 'October 9-12, 2025 • Fr. Conceicao Rodrigues College of Engineering',
      image: 'overview'
    },
    {
      title: 'Flagship Events',
      content: 'The Big Three',
      description: 'RoboRift 2.0, Synergy Hackathon, and CRCE Esports - the crown jewels of Crescendo',
      image: 'flagship'
    },
    {
      title: 'RoboRift 2.0',
      content: 'Intercollegiate Robo Fight',
      description: '120+ teams battle it out in the ultimate robotics showdown on October 10th',
      image: 'roborift'
    },
    {
      title: 'Synergy Hackathon',
      content: 'Hardware & Simulation',
      description: '100+ participants create innovative solutions in 48 hours of pure innovation',
      image: 'synergy'
    },
    {
      title: 'CRCE Esports',
      content: 'BGMI & Valorant',
      description: '400+ players compete across 3 days in the ultimate gaming championship',
      image: 'esports'
    },
    {
      title: 'Points Table',
      content: 'Scoring System',
      description: 'Complete breakdown of points distribution and prize pool of ₹70K+',
      image: 'points'
    },
    {
      title: 'Event Schedule',
      content: 'Timeline & Venues',
      description: 'Detailed schedule of all events from October 9-12 with venue information',
      image: 'schedule'
    },
    {
      title: 'Registration & Rules',
      content: 'How to Participate',
      description: 'Registration process, team formation, and competition guidelines',
      image: 'registration'
    },
    {
      title: 'Contact Information',
      content: 'Get in Touch',
      description: 'Student Council contacts and support for all your queries',
      image: 'contact'
    }
  ];

  const highlights = [
    { label: 'RoboRift Teams', value: '120+', icon: 'fas fa-robot' },
    { label: 'Synergy Participants', value: '100+', icon: 'fas fa-code' },
    { label: 'Esports Players', value: '400+', icon: 'fas fa-gamepad' },
    { label: 'Prize Pool', value: '₹70K+', icon: 'fas fa-trophy' }
  ];

  const keyEvents = [
    { name: 'RoboRift 2.0', date: '10th Oct', type: 'Robotics' },
    { name: 'Synergy Hackathon', date: '12th Oct', type: 'Hardware' },
    { name: 'CRCE Esports', date: '9th-11th Oct', type: 'Gaming' }
  ];

  const downloadBrochure = () => {
    // Open the Google Drive link in a new tab
    window.open('https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/view?usp=drive_link', '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            CRESCENDO BROCHURE 2025
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dive into the official Crescendo brochure featuring event registrations, schedules, venues, and the points table carving your roadmap to an experience you will cherish forever.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Interactive Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-border overflow-hidden">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-cinzel text-2xl">Live Brochure</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">
                      Full Document
                    </span>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Live
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Brochure Embed with Google Drive */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 aspect-[3/4] overflow-hidden">
                  {/* Golden page edges effect */}
                  <div className="absolute inset-0 border-4 border-accent/20 rounded-lg z-10" />
                  <div className="absolute top-2 left-2 right-2 bottom-2 border border-accent/10 rounded-md z-10" />
                  
                  {/* Google Drive PDF Embed - Full Document */}
                  <iframe
                    src="https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/preview?usp=sharing&embedded=true"
                    className="w-full h-full border-0"
                    allow="autoplay"
                    title="Crescendo 2025 Brochure Preview"
                  />
                  
                  {/* Page number indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold z-20">
                    {currentPage + 1}
                  </div>
                </div>

                {/* Navigation */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">
                        Use the PDF controls below to navigate through the brochure
                      </p>
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <i className="fas fa-mouse" />
                          <span>Scroll to zoom</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <i className="fas fa-arrows-alt" />
                          <span>Drag to pan</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <i className="fas fa-chevron-left" />
                          <span>Previous/Next</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Download Options */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl flex items-center">
                  <i className="fas fa-eye text-accent mr-2" />
                  Unveil the Vision
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={downloadBrochure}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold py-3 text-base"
                  data-testid="button-download-brochure"
                >
                  <i className="fas fa-eye mr-2" />
                  Awaken Trinetra
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Your gateway to all events, schedules, and the spirit of Trinetra.
                </p>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">Crescendo Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <i className={`${highlight.icon} text-primary`} />
                      </div>
                      <div className="text-lg font-bold text-accent">{highlight.value}</div>
                      <div className="text-sm text-muted-foreground">{highlight.label}</div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Events</h4>
                  <div className="space-y-2">
                    {keyEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-card-foreground">{event.name}</span>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {event.type}
                          </Badge>
                          <span className="text-muted-foreground">{event.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Share Options */}
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="font-cinzel text-xl">Share Brochure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Help spread the word about Crescendo Festival 2026
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                    data-testid="button-share-twitter"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-600/20 text-blue-500 hover:bg-blue-600/20"
                    data-testid="button-share-linkedin"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-green-500/20 text-green-400 hover:bg-green-500/20"
                    data-testid="button-share-whatsapp"
                  >
                    <i className="fab fa-whatsapp" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <Card className="bg-card border border-border">
            <CardHeader>
              <CardTitle className="font-cinzel text-2xl text-center">What's Inside the Brochure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-robot text-accent text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Flagship Events</h3>
                  <p className="text-muted-foreground text-sm">
                    RoboRift 2.0, Synergy Hackathon, and CRCE Esports with detailed rules and guidelines
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-chart-line text-accent text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Points Table</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete scoring system and point distribution for all competitions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-calendar text-accent text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Event Schedule</h3>
                  <p className="text-muted-foreground text-sm">
                    Detailed timeline of all events from 9th-12th October with venue information
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
