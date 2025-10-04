import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ThirdEyeGlyph from "./ThirdEyeGlyph";
import { Button } from "@/components/ui/button";
import { GoArrowUpRight } from "react-icons/go";

// Define the navigation items structure
type NavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

type NavCategory = {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
};

interface CardNavProps {
  isScrolled: boolean;
}

export default function CardNav({ isScrolled }: CardNavProps) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Nav categories configuration
  const navCategories: NavCategory[] = [
    {
      label: "Events",
      bgColor: "rgba(13, 13, 13, 0.95)",
      textColor: "#fff",
      links: [
        { label: "All Events", href: "/events", ariaLabel: "View all events" },
        {
          label: "Hackathons",
          href: "/events?category=Hackathon",
          ariaLabel: "View hackathon events",
        },
        {
          label: "Workshops",
          href: "/events?category=Workshop",
          ariaLabel: "View workshop events",
        },
      ],
    },
    {
      label: "About",
      bgColor: "rgba(26, 0, 31, 0.95)",
      textColor: "#fff",
      links: [
        {
          label: "About Us",
          href: "/about",
          ariaLabel: "About Trinetra Festival",
        },
        { label: "Sponsors", href: "/sponsors", ariaLabel: "Our sponsors" },
        { label: "Contact", href: "/contact", ariaLabel: "Contact us" },
      ],
    },
    {
      label: "Resources",
      bgColor: "rgba(20, 5, 25, 0.95)",
      textColor: "#fff",
      links: [
        {
          label: "Brochure",
          href: "/brochure",
          ariaLabel: "Download brochure",
        },
        {
          label: "Register",
          href: "/register",
          ariaLabel: "Register for the festival",
        },
      ],
    },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    if (href.includes("?")) return location.startsWith(href.split("?")[0]);
    return location.startsWith(href);
  };

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div
        ref={navRef}
        className={`relative max-w-[1100px] mx-auto rounded-xl shadow-lg transition-all duration-300 ${
          isOpen ? "h-auto" : "h-[60px]"
        } overflow-hidden`}
        style={{
          backgroundColor: isScrolled
            ? "rgba(13, 13, 13, 0.85)"
            : "rgba(26, 0, 31, 0.5)",
          backdropFilter: isScrolled ? "blur(8px)" : "none",
        }}
      >
        {/* Header bar */}
        <div className="h-[60px] px-4 flex items-center justify-between relative">
          {/* Hamburger menu */}
          <div
            className="flex flex-col justify-center items-center gap-[6px] cursor-pointer"
            onClick={toggleMenu}
            role="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            tabIndex={0}
          >
            <div
              className={`w-[30px] h-[2px] bg-[var(--noir-gold)] transition-all ${
                isOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            ></div>
            <div
              className={`w-[30px] h-[2px] bg-[var(--noir-gold)] transition-all ${
                isOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            ></div>
          </div>

          {/* Logo */}
          <Link href="/">
            <a className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center space-x-2">
              <img
                src="/images/Assets/trinetra_eye.png"
                alt="Third Eye Emblem"
                className="w-12 h-16 eye-glow animate-float"
              />
              <span className="font-cinzel text-xl md:text-2xl font-bold text-[var(--noir-gold)]">
                TRINETRA
              </span>
            </a>
          </Link>

          {/* Register button */}
          <Link href="/register">
            <a className="hidden md:block">
              <Button className="bg-[var(--noir-crimson)] text-white hover:bg-[var(--noir-crimson)]/90 shadow-lg shadow-[var(--noir-crimson)]/20 eye-glow">
                Register Now
              </Button>
            </a>
          </Link>
        </div>

        {/* Expandable content */}
        <div
          className={`transition-all duration-300 px-2 pb-2 grid grid-cols-1 md:grid-cols-3 gap-2 ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none absolute"
          }`}
        >
          {navCategories.map((category, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`rounded-lg p-4 ${isOpen ? "animate-fadeIn" : ""}`}
              style={{
                backgroundColor: category.bgColor,
                color: category.textColor,
                animationDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-xl mb-2">{category.label}</h3>
              <div className="flex flex-col gap-2">
                {category.links.map((link, i) => (
                  <Link key={i} href={link.href}>
                    <a
                      className={`flex items-center gap-2 ${
                        isActive(link.href) ? "text-[var(--noir-crimson)]" : ""
                      } hover:text-[var(--noir-crimson)] transition-colors`}
                      aria-label={link.ariaLabel}
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      <GoArrowUpRight className="flex-shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
