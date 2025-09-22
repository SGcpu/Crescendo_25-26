import { useState } from 'react';
import { Link } from 'wouter';
import ThirdEyeGlyph from './ThirdEyeGlyph';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest('POST', '/api/newsletter', { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        className: "bg-accent text-accent-foreground",
      });
      setEmail('');
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
    { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-discord', href: '#', label: 'Discord' },
  ];

  const importantDates = [
    { label: 'Early Bird', date: 'Dec 15, 2025' },
    { label: 'Registration', date: 'Jan 31, 2026' },
    { label: 'Festival', date: 'Feb 10-12, 2026' },
  ];

  return (
    <footer className="bg-background border-t border-border py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <ThirdEyeGlyph size="sm" />
              <span className="font-cinzel text-2xl font-bold text-foreground">
                Crescendo Festival 2026
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Awakening the next generation of innovators through immersive technology 
              experiences and transformative challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                  data-testid={`social-link-${social.label.toLowerCase()}`}
                >
                  <i className={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Important Dates */}
          <div>
            <h4 className="font-cinzel font-bold text-lg mb-4 text-foreground">
              Important Dates
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              {importantDates.map((date) => (
                <li key={date.label}>
                  <strong className="text-accent">{date.label}:</strong> {date.date}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-cinzel font-bold text-lg mb-4 text-foreground">
              Stay Updated
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border text-card-foreground placeholder-muted-foreground"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-subscribe"
              >
                {newsletterMutation.isPending ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 Crescendo Festival. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/privacy">
              <a className="hover:text-accent transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-accent transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </Link>
            <Link href="/code-of-conduct">
              <a className="hover:text-accent transition-colors" data-testid="link-code-of-conduct">
                Code of Conduct
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
