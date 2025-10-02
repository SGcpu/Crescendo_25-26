import React from "react";
import ProfileCard from "./ProfileCard";

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
  // This is a placeholder - update with your actual image path logic
  const avatarUrl = `/images/team/${member.image}.jpg`;

  // Convert social media links to handle format
  const socialMediaKeys = Object.keys(member.social);
  const socialHandle =
    socialMediaKeys.length > 0 ? socialMediaKeys[0] : "linkedin";
  const socialUrl = member.social[socialHandle] || "#";
  const handle =
    socialHandle === "linkedin"
      ? "in/" + member.name.toLowerCase().replace(" ", "-")
      : member.name.toLowerCase().replace(" ", "");

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${
        isActive ? "scale-105" : "scale-100"
      } transition-transform duration-300`}
    >
      <ProfileCard
        avatarUrl={avatarUrl}
        behindGradient={
          isActive
            ? "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(43,100%,80%,var(--card-opacity)) 4%,hsla(43,80%,70%,calc(var(--card-opacity)*0.75)) 10%,hsla(43,60%,60%,calc(var(--card-opacity)*0.5)) 50%,hsla(43,40%,50%,0) 100%),radial-gradient(35% 52% at 55% 20%,#D4AF37c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#D4AF37ff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#E63946ff 0%,#D4AF37ff 40%,#D4AF37ff 60%,#E63946ff 100%)"
            : undefined
        }
        innerGradient={
          isActive
            ? "linear-gradient(145deg,#0D0D0D8c 0%,#D4AF3744 100%)"
            : undefined
        }
        name={member.name}
        title={member.role}
        handle={handle}
        status={isActive ? "Active" : ""}
        contactText="Contact"
        showUserInfo={true}
        enableTilt={true}
        showBehindGradient={isActive}
        className="w-full h-[400px]"
        onContactClick={() => window.open(socialUrl, "_blank")}
      />
    </div>
  );
};

export default TeamProfileCard;
