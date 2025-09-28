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
  }) => (
    <Link href={href} onClick={onClick}>
      <a
        className={`font-medium transition-colors hover:text-[var(--red)] ${
          isActive(href) ? "text-[var(--red)]" : "text-[var(--lavender-gray)]"
        }`}
        data-testid={`nav-link-${label.toLowerCase()}`}
      >
        {label}
      </a>
    </Link>
  );

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-4" data-testid="logo-link">
              <ThirdEyeGlyph size="sm" className="eye-glow" />
              <span className="font-cinzel text-2xl font-bold text-[var(--lavender-gray)]">
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
                  className="border-[var(--orange-roughy)] text-[var(--orange-roughy)] hover:bg-[var(--orange-roughy)] hover:text-white"
                  data-testid="button-brochure"
                >
                  Brochure
                </Button>
              </Link>
              <Button
                className="bg-[var(--blue)] text-white hover:bg-[var(--dark-blue)] eye-glow"
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
                  variant="ghost"
                  size="icon"
                  data-testid="button-mobile-menu"
                >
                  <i className="fas fa-bars text-xl" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-card border-border"
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
                        className="w-full border-[var(--orange-roughy)] text-[var(--orange-roughy)] hover:bg-[var(--orange-roughy)] hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid="button-brochure-mobile"
                      >
                        Brochure
                      </Button>
                    </Link>
                    <Button
                      className="w-full bg-[var(--blue)] text-white hover:bg-[var(--dark-blue)] eye-glow"
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
