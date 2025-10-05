import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Brochure() {
  const [isLoading, setIsLoading] = useState(true);

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
    window.open('https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/view?usp=drive_link', '_blank');
  };

  const shareOnTwitter = () => {
    window.open('https://twitter.com/intent/tweet?text=Check%20out%20Crescendo%20Festival%202025!&url=https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/view', '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/view', '_blank');
  };

  const shareOnWhatsApp = () => {
    window.open('https://wa.me/?text=Check%20out%20Crescendo%20Festival%202025%20Brochure!%20https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/view', '_blank');
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-background">
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
                {/* Brochure Embed */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden" style={{ height: '800px' }}>
                  {/* Golden page edges effect */}
                  <div className="absolute inset-0 border-4 border-accent/20 rounded-lg z-10 pointer-events-none" />
                  <div className="absolute top-2 left-2 right-2 bottom-2 border border-accent/10 rounded-md z-10 pointer-events-none" />

                  {/* Loading Indicator */}
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 bg-background/50">
                      <div className="text-center">
                        <i className="fas fa-spinner fa-spin text-accent text-4xl mb-4" />
                        <p className="text-muted-foreground text-lg">Loading brochure...</p>
                      </div>
                    </div>
                  )}

                  {/* Google Drive PDF Embed */}
                  <iframe
                    src="https://drive.google.com/file/d/1dqEjFfSVVofWSUZmK4ZGDQQ6FQZ4Lolm/preview"
                    className="w-full h-full"
                    allow="autoplay"
                    onLoad={() => setIsLoading(false)}
                    title="Crescendo Brochure 2025"
                  />
                </div>

                {/* Navigation Info */}
                <div className="p-6 border-t border-border">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Use the controls in the viewer above to navigate through the brochure
                    </p>
                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <i className="fas fa-search-plus" />
                        <span>Zoom controls available</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <i className="fas fa-chevron-left" />
                        <i className="fas fa-chevron-right" />
                        <span>Navigate pages</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <i className="fas fa-download" />
                        <span>Download option</span>
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
                  Help spread the word about Crescendo Festival 2025
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shareOnTwitter}
                    className="border-blue-500/20 text-blue-400 hover:bg-blue-500/20"
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shareOnLinkedIn}
                    className="border-blue-600/20 text-blue-500 hover:bg-blue-600/20"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={shareOnWhatsApp}
                    className="border-green-500/20 text-green-400 hover:bg-green-500/20"
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
