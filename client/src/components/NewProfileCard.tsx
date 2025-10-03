"use client";
import React from "react";
import { cn } from "@/lib/utils";
import "./NewProfileCard.css";

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  imagePath: string; // Path to regular image
  gifPath?: string; // Path to gif for hover effect
  isActive?: boolean;
  onClick?: () => void;
  social?: {
    [key: string]: string;
  };
}

export function NewProfileCard({
  name,
  role,
  bio,
  imagePath,
  gifPath,
  isActive = false,
  onClick,
  social,
}: ProfileCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-end p-4 border border-[var(--noir-gold)]/30 transition-all duration-500",
        "bg-cover bg-center profile-card-hover",
        "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
        isActive && "scale-105 shadow-lg shadow-[var(--noir-gold)]/30"
      )}
      style={
        {
          backgroundImage: `url(${imagePath})`,
          // Add hover effect with CSS custom properties
          "--hover-image": `url(${gifPath || imagePath})`,
        } as React.CSSProperties
      }
    >
      {/* Gold border overlay when active */}
      {isActive && (
        <div className="absolute inset-0 border-2 border-[var(--noir-gold)] rounded-md pointer-events-none z-30"></div>
      )}

      <div className="text-content relative z-20 transition-all duration-300 transform group-hover:translate-y-0 translate-y-4 opacity-90 group-hover:opacity-100">
        <h3 className="font-cinzel font-bold text-xl md:text-2xl text-[var(--noir-gold)]">
          {name}
        </h3>
        <p className="font-normal text-sm text-[var(--noir-text)] mt-1 mb-2">
          {role}
        </p>
        <p className="font-normal text-xs text-[var(--noir-text-muted)] my-2 line-clamp-2 group-hover:line-clamp-none">
          {bio}
        </p>

        {/* Social links */}
        {social && Object.keys(social).length > 0 && (
          <div className="flex gap-3 mt-3">
            {Object.entries(social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                className="text-[var(--noir-gold)] hover:text-[var(--noir-gold-light)] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <i className={`fab fa-${platform.toLowerCase()} text-lg`}></i>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Gradient overlay at bottom for better text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    </div>
  );
}

export default NewProfileCard;
