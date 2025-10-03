import React from "react";
import NewProfileCard from "./NewProfileCard";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    [key: string]: string | undefined;
  };
}

interface TeamProfileCardProps {
  member: TeamMember;
  isActive: boolean;
  onClick: () => void;
}

const TeamProfileCard: React.FC<TeamProfileCardProps> = ({
  member,
  isActive,
  onClick,
}) => {
  // Generate avatar URL based on the member's image property
  const imagePath = `/images/team/${member.image}.jpg`;
  // We can use the same image for the gif path, or a different one if you have gifs
  // For now, we'll just use the same image
  const gifPath = `/images/team/${member.image}.jpg`;

  // Process social media links
  const socialLinks = Object.entries(member.social)
    .filter(([_, url]) => url && url.length > 0)
    .reduce((acc, [platform, url]) => {
      acc[platform] = url as string;
      return acc;
    }, {} as Record<string, string>);

  return (
    <NewProfileCard
      name={member.name}
      role={member.role}
      bio={member.bio}
      imagePath={imagePath}
      gifPath={gifPath}
      isActive={isActive}
      onClick={onClick}
      social={socialLinks}
    />
  );
};

export default TeamProfileCard;
