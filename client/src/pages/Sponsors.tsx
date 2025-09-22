import { useQuery } from '@tanstack/react-query';
import { type Sponsor } from '@shared/schema';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

export default function Sponsors() {
  const { data: sponsors, isLoading, error } = useQuery<Sponsor[]>({
    queryKey: ['/api/sponsors'],
  });

  const sponsorsByTier = sponsors?.reduce((acc, sponsor) => {
    if (!acc[sponsor.tier]) {
      acc[sponsor.tier] = [];
    }
    acc[sponsor.tier].push(sponsor);
    return acc;
  }, {} as Record<string, Sponsor[]>) || {};

  const tierOrder = ['platinum', 'gold', 'silver'];
  const tierConfig = {
    platinum: {
      title: 'Platinum Partners',
      description: 'Our premier partners driving innovation forward',
      color: 'bg-gradient-to-br from-gray-300 to-gray-500',
      textColor: 'text-gray-300',
      borderColor: 'border-gray-300/20'
    },
    gold: {
      title: 'Gold Sponsors',
      description: 'Supporting excellence in technology and innovation',
      color: 'bg-gradient-to-br from-accent to-yellow-600',
      textColor: 'text-accent',
      borderColor: 'border-accent/20'
    },
    silver: {
      title: 'Silver Contributors',
      description: 'Enabling opportunities for the next generation',
      color: 'bg-gradient-to-br from-gray-400 to-gray-600',
      textColor: 'text-gray-400',
      borderColor: 'border-gray-400/20'
    }
  };

  if (error) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6 text-center">
            <i className="fas fa-exclamation-triangle text-4xl text-destructive mb-4" />
            <h2 className="text-xl font-bold mb-2">Failed to Load Sponsors</h2>
            <p className="text-muted-foreground">Please try again later.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Our Visionary Partners
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the industry leaders and organizations who believe in our mission 
            to awaken the next generation of innovators and creators.
          </p>
        </div>

        {/* Sponsor Impact Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-primary text-2xl" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">25+</div>
            <div className="text-muted-foreground">Partners</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-users text-accent text-2xl" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">2000+</div>
            <div className="text-muted-foreground">Attendees Sponsored</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-trophy text-primary text-2xl" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">₹50L+</div>
            <div className="text-muted-foreground">Total Prize Pool</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-graduation-cap text-accent text-2xl" />
            </div>
            <div className="text-3xl font-bold text-accent mb-2">100+</div>
            <div className="text-muted-foreground">Workshops Funded</div>
          </div>
        </div>

        {/* Sponsor Tiers */}
        {isLoading ? (
          <div className="space-y-16">
            {tierOrder.map((tier) => (
              <div key={tier}>
                <Skeleton className="h-12 w-1/3 mb-8 mx-auto" />
                <div className="grid md:grid-cols-3 gap-8">
                  {Array(3).fill(null).map((_, i) => (
                    <Skeleton key={i} className="h-32 w-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-20">
            {tierOrder.map((tier) => {
              const tieredSponsors = sponsorsByTier[tier] || [];
              const config = tierConfig[tier as keyof typeof tierConfig];
              
              if (tieredSponsors.length === 0) return null;

              return (
                <div key={tier} className="relative">
                  {/* Tier Header */}
                  <div className="text-center mb-12">
                    <div className={`inline-block px-6 py-2 rounded-full ${config.color} mb-4`}>
                      <Badge 
                        variant="outline" 
                        className={`${config.borderColor} ${config.textColor} bg-transparent font-semibold`}
                      >
                        {tier.toUpperCase()}
                      </Badge>
                    </div>
                    <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-4 text-foreground">
                      {config.title}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                      {config.description}
                    </p>
                  </div>

                  {/* Sponsors Grid */}
                  <div className={`grid ${
                    tier === 'platinum' ? 'md:grid-cols-2 lg:grid-cols-3' :
                    tier === 'gold' ? 'md:grid-cols-3 lg:grid-cols-4' :
                    'md:grid-cols-4 lg:grid-cols-6'
                  } gap-8`}>
                    {tieredSponsors.map((sponsor) => (
                      <Card 
                        key={sponsor.id}
                        className={`bg-card border ${config.borderColor} hover:border-accent/50 transition-all duration-300 cursor-pointer group hover-lift`}
                        data-testid={`sponsor-card-${sponsor.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        <CardContent className="p-8 text-center">
                          {/* Logo placeholder */}
                          <div className="h-20 bg-muted rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                            <span className={`font-bold ${config.textColor} group-hover:text-accent transition-colors`}>
                              {sponsor.name}
                            </span>
                          </div>
                          
                          {/* Sponsor name */}
                          <h3 className="font-cinzel text-lg font-bold mb-2 text-card-foreground group-hover:text-accent transition-colors">
                            {sponsor.name}
                          </h3>
                          
                          {/* Description */}
                          {sponsor.description && (
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {sponsor.description}
                            </p>
                          )}

                          {/* Website link */}
                          {sponsor.website && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className={`${config.textColor} hover:bg-accent hover:text-accent-foreground`}
                              onClick={(e) => {
                                e.preventDefault();
                                if (sponsor.website) {
                                  window.open(sponsor.website, '_blank');
                                }
                              }}
                              data-testid={`sponsor-website-${sponsor.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              <i className="fas fa-external-link-alt mr-2" />
                              Visit Website
                            </Button>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Become a Partner CTA */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border border-accent/20 overflow-hidden">
            <CardContent className="p-12 text-center relative">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-10 left-10 w-8 h-8 border border-accent rotate-45" />
                <div className="absolute top-20 right-20 w-6 h-6 border border-primary rotate-12" />
                <div className="absolute bottom-20 left-20 w-10 h-10 border border-accent rotate-45" />
                <div className="absolute bottom-10 right-10 w-4 h-4 bg-primary rotate-45" />
              </div>

              <div className="relative z-10">
                <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
                  <i className="fas fa-star text-accent text-3xl" />
                </div>
                
                <h2 className="font-cinzel text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Become a Partner
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join us in shaping the future of innovation. Partner with Crescendo Festival 
                  to reach thousands of talented developers, designers, and creators.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  <Button 
                    className="px-8 py-4 bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-lg"
                    data-testid="button-sponsorship-package"
                  >
                    <i className="fas fa-download mr-2" />
                    Download Sponsorship Package
                  </Button>
                  <Button 
                    variant="outline"
                    className="px-8 py-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg"
                    data-testid="button-contact-partnerships"
                  >
                    <i className="fas fa-envelope mr-2" />
                    Contact Partnerships Team
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
