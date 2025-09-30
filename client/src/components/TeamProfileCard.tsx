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
            ? "radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#ffce00c4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#ffbe00ff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#ffcc00ff 40%,#ffcc00ff 60%,#c137ffff 100%)"
            : undefined
        }
        innerGradient={
          isActive
            ? "linear-gradient(145deg,#60496e8c 0%,#ffcc0044 100%)"
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
