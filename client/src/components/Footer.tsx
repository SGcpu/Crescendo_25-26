import { useState } from "react";
import { Link } from "wouter";
import ThirdEyeGlyph from "./ThirdEyeGlyph";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        className: "bg-accent text-accent-foreground",
      });
      setEmail("");
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
    if (!email || !email.includes("@")) {
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
    { icon: "fab fa-instagram", href: "#", label: "Instagram" },
    { icon: "fab fa-linkedin", href: "#", label: "LinkedIn" },
  ];

  const importantDates = [
    { label: "Roborift", date: "10 Oct, 2025" },
    { label: "Synergy", date: "12 Oct, 2025" },
    { label: "Esports", date: "9 ,10 ,11 Oct 2025" },
  ];

  const credits = [
    {
      name: "Elish Mark",
      role: "Technical Representative",
      socials: {
        instagram:
          "https://www.instagram.com/elish_mark?igsh=MWE2cWZtZjlzZGQ3OA%3D%3D&utm_source=qr",
        linkedin: "https://www.linkedin.com/in/elish-mark4444",
        github: "https://github.com/Elish-4444",
      },
    },
    {
      name: "Sian George",
      role: "Technical Representative",
      socials: {
        instagram: "https://www.instagram.com/sg.phil_",
        linkedin: "https://www.linkedin.com/in/sian-george-864a69352",
        github: "https://github.com/SGcpu",
      },
    },
    {
      name: "Jack Sequeira",
      role: "Technical Secretary",
      socials: {
        instagram: "https://www.instagram.com/gabbar_v7/",
        linkedin: "https://www.linkedin.com/in/gabbar-v7",
        github: "https://github.com/Gabbar-v7",
      },
    },
  ];

  return (
    <footer
      className="bg-noir-black border-t border-noir-gold/40 py-12"
      data-testid="footer"
    >
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src="/images/Assets/trinetra_eye.png"
                alt="Third Eye Emblem"
                className="w-12 h-16 animate-float"
              />
              <span className="font-cinzel text-2xl font-bold text-[#D4AF37]">
                Crescendo Festival 2025
              </span>
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Awakening the next generation of innovators through immersive
              technology experiences and transformative challenges.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-noir-gold/10 rounded-full flex items-center justify-center text-noir-gold hover:bg-noir-gold hover:text-noir-black transition-colors"
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
            <h4 className="font-cinzel font-bold text-lg mb-4 text-[#D4AF37]">
              Important Dates
            </h4>
            <ul className="space-y-2">
              {importantDates.map((date) => (
                <li key={date.label}>
                  <strong className="text-[#D4AF37]">{date.label}:</strong>{" "}
                  <span className="text-white">{date.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-cinzel font-bold text-lg mb-4 text-[#D4AF37]">
              Stay Updated
            </h4>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-noir-black border-noir-gold/30 focus-visible:ring-noir-gold/30 text-white placeholder:text-white/40"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                className="w-full bg-[#E63946] text-white hover:bg-[#c72633]"
                disabled={newsletterMutation.isPending}
                data-testid="button-newsletter-subscribe"
              >
                {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>

        {/* Credits Section */}
        <div className="mt-16">
          <h3 className="font-cinzel text-center text-2xl font-bold mb-8 text-[#D4AF37]">
            Meet the Team
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {credits.map((person) => (
              <div
                key={person.name}
                className="p-4 rounded-2xl shadow-md bg-gradient-to-b from-[#121212] to-[#1A001F] text-center border border-noir-gold/30"
              >
                <h5 className="font-semibold text-[#D4AF37]">{person.name}</h5>
                <p className="text-sm text-white/70 mb-4">{person.role}</p>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={person.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-noir-gold/10 rounded-full flex items-center justify-center text-noir-gold hover:bg-noir-gold hover:text-noir-black transition-colors"
                    aria-label={`${person.name} Instagram`}
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href={person.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-noir-gold/10 rounded-full flex items-center justify-center text-noir-gold hover:bg-noir-gold hover:text-noir-black transition-colors"
                    aria-label={`${person.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href={person.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-noir-gold/10 rounded-full flex items-center justify-center text-noir-gold hover:bg-noir-gold hover:text-noir-black transition-colors"
                    aria-label={`${person.name} GitHub`}
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-noir-gold/30 text-center">
          <p className="text-sm text-white/70" data-testid="footer-copyright">
            © {new Date().getFullYear()} Crescendo Festival. All rights
            reserved. Created with <span className="text-[#E63946]">HONOR AND LOVE</span> by
            Student Council CRCE.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-white/70 mt-4">
            <Link href="/privacy">
              <a
                className="hover:text-[#D4AF37] transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms">
              <a
                className="hover:text-[#D4AF37] transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
            </Link>
            <Link href="/code-of-conduct">
              <a
                className="hover:text-[#D4AF37] transition-colors"
                data-testid="link-code-of-conduct"
              >
                Code of Conduct
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
