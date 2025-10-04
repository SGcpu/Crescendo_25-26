import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useIsMobile } from "@/hooks/use-mobile";
import ThirdEyeGlyph from "./ThirdEyeGlyph";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [location] = useLocation();
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/events", label: "Events" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const NavLink = ({
    href,
    label,
    onClick,
  }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) => {
    const handleClick = () => {
      // Close mobile menu if it's open
      if (mobileMenuOpen) setMobileMenuOpen(false);
      // Call any passed onClick handler
      if (onClick) onClick();
    };

    return (
      <Link href={href} onClick={handleClick}>
        <a
          className={`font-medium transition-colors hover:text-[var(--noir-gold)] ${
            isActive(href)
              ? "text-[var(--noir-gold)]"
              : "text-[var(--noir-text)]"
          }`}
          data-testid={`nav-link-${label.toLowerCase()}`}
        >
          {label}
        </a>
      </Link>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-noir-black/90 backdrop-blur-md border-b border-noir-gold"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-4" data-testid="logo-link">
              <img
                src="/images/Assets/trinetra_eye.png"
                alt="Third Eye Emblem"
                className="w-12 h-14 eye-glow"
              />
              <span className="font-cinzel text-2xl font-bold text-[var(--noir-gold)]">
                TRINETRA
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </div>
          )}

          {/* CTA Buttons */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <Link href="/brochure">
                <Button
                  variant="outline"
                  className="border-[var(--noir-gold)] text-[var(--noir-gold)] hover:bg-[var(--noir-gold)] hover:text-[var(--noir-black)]"
                  data-testid="button-brochure"
                >
                  Brochure
                </Button>
              </Link>
              <Button
                className="bg-[var(--noir-crimson)] text-white hover:bg-[var(--noir-crimson)]/90 shadow-lg shadow-[var(--noir-crimson)]/20"
                data-testid="button-register"
              >
                Register Now
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-[var(--noir-gold)] bg-[var(--noir-black)]/80 text-[var(--noir-gold)]"
                  data-testid="button-mobile-menu"
                >
                  <i className="fas fa-bars text-xl" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-noir-black border-noir-gold"
              >
                <div className="flex flex-col space-y-6 mt-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.href}
                      {...link}
                      onClick={() => setMobileMenuOpen(false)}
                    />
                  ))}
                  <div className="flex flex-col space-y-4 pt-6 border-t border-border">
                    <Link href="/brochure">
                      <Button
                        variant="outline"
                        className="w-full border-[var(--noir-gold)] text-[var(--noir-gold)] hover:bg-[var(--noir-gold)] hover:text-[var(--noir-black)]"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="button-brochure-mobile"
                      >
                        Brochure
                      </Button>
                    </Link>
                    <Button
                      className="w-full bg-[var(--noir-crimson)] text-white hover:bg-[var(--noir-crimson)]/90 shadow-lg shadow-[var(--noir-crimson)]/20"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="button-register-mobile"
                    >
                      Register Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </nav>
  );
}
