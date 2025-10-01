import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function Brochure() {
  const [currentPage, setCurrentPage] = useState(0);

  const brochurePages = [
    {
      title: 'Welcome to Crescendo Festival 2026',
      content: 'Awaken Your Vision',
      description: 'The ultimate convergence of innovation, creativity, and transcendent technology',
      image: 'cover'
    },
    {
      title: 'Festival Overview',
      content: 'Three Days of Pure Innovation',
      description: 'February 10-12, 2026 • Innovation District, Mumbai',
      image: 'overview'
    },
    {
      title: 'Events & Competitions',
      content: 'Challenge Your Limits',
      description: 'Hackathons, workshops, and competitions for every skill level',
      image: 'events'
    },
    {
      title: 'Venue & Facilities',
      content: 'State-of-the-Art Infrastructure',
      description: 'Modern facilities designed for innovation and collaboration',
      image: 'venue'
    },
    {
      title: 'Sponsors & Partners',
      content: 'Visionary Collaborators',
      description: 'Industry leaders supporting the next generation of innovators',
      image: 'sponsors'
    },
    {
      title: 'Registration Information',
      content: 'Join the Movement',
      description: 'Everything you need to know about participating',
      image: 'registration'
    }
  ];

  const highlights = [
    { label: 'Events', value: '15+', icon: 'fas fa-calendar' },
    { label: 'Participants', value: '2000+', icon: 'fas fa-users' },
    { label: 'Prize Pool', value: '₹50L+', icon: 'fas fa-trophy' },
    { label: 'Days', value: '3', icon: 'fas fa-clock' }
  ];

  const keyEvents = [
    { name: 'Circuit Breaker', date: 'Feb 11', type: 'Hackathon' },
    { name: 'Third Eye Challenge', date: 'Feb 12', type: 'Final Competition' },
    { name: 'AI Symposium', date: 'Feb 10', type: 'Workshop' }
  ];

  const downloadBrochure = (format: 'high' | 'low') => {
    // In a real app, this would trigger a download
    console.log(`Downloading ${format} resolution brochure`);
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Festival Brochure
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get the complete festival guide with schedules, venue maps, 
            and everything you need for an amazing experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Interactive Preview */}
          <div className="lg:col-span-2">
            <Card className="bg-card border border-border overflow-hidden">
              <CardHeader className="border-b border-border">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-cinzel text-2xl">Brochure Preview</CardTitle>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-muted-foreground">
                      Page {currentPage + 1} of {brochurePages.length}
                    </span>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      Interactive
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Page Display */}
                <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 aspect-[3/4] flex items-center justify-center">
                  {/* Golden page edges effect */}
                  <div className="absolute inset-0 border-4 border-accent/20 rounded-lg" />
                  <div className="absolute top-2 left-2 right-2 bottom-2 border border-accent/10 rounded-md" />
                  
                  {/* Page content */}
                  <div className="text-center p-8 relative z-10">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <i className="fas fa-eye text-accent text-2xl" />
                    </div>
                    
                    <h2 className="font-cinzel text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {brochurePages[currentPage].title}
                    </h2>
                    
                    <h3 className="text-xl md:text-2xl font-semibold text-accent mb-4">
                      {brochurePages[currentPage].content}
                    </h3>
                    
                    <p className="text-muted-foreground max-w-md mx-auto">
                      {brochurePages[currentPage].description}
                    </p>
                  </div>

                  {/* Page number indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-accent-foreground text-sm font-bold">
                    {currentPage + 1}
                  </div>
                </div>

                {/* Navigation */}
                <div className="p-6 border-t border-border">
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                      disabled={currentPage === 0}
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      data-testid="button-prev-page"
                    >
                      <i className="fas fa-chevron-left mr-2" />
                      Previous
                    </Button>

                    {/* Page dots */}
                    <div className="flex space-x-2">
                      {brochurePages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentPage ? 'bg-accent' : 'bg-muted'
                          }`}
                          data-testid={`page-dot-${index}`}
                        />
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setCurrentPage(Math.min(brochurePages.length - 1, currentPage + 1))}
                      disabled={currentPage === brochurePages.length - 1}
                      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      data-testid="button-next-page"
                    >
                      Next
                      <i className="fas fa-chevron-right ml-2" />
                    </Button>
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
                  <i className="fas fa-download text-accent mr-2" />
                  Download Brochure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  onClick={() => downloadBrochure('high')}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  data-testid="button-download-high-res"
                >
                  <i className="fas fa-file-pdf mr-2" />
                  High Resolution PDF (5MB)
                </Button>
                
                <Button
                  onClick={() => downloadBrochure('low')}
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  data-testid="button-download-low-res"
                >
                  <i className="fas fa-mobile-alt mr-2" />
                  Mobile Optimized PDF (1MB)
                </Button>

                <Separator />

                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground hover:text-accent"
                  data-testid="button-download-text-only"
                >
                  <i className="fas fa-file-alt mr-2" />
                  Text-Only Version (Accessible)
                </Button>
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
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-map text-primary text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Venue Maps</h3>
                  <p className="text-muted-foreground text-sm">
                    Detailed floor plans and navigation guides for all festival venues
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-schedule text-accent text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Event Schedule</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete timeline of all events, workshops, and activities
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-info-circle text-primary text-2xl" />
                  </div>
                  <h3 className="font-cinzel text-lg font-bold mb-2 text-foreground">Essential Info</h3>
                  <p className="text-muted-foreground text-sm">
                    Registration details, rules, contact information, and FAQs
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
