import React, { useState } from "react";
import Folder from "./Folder";

interface SponsorCategory {
  name: string;
  color: string;
  tier: string;
}

const SponsorsFolderGroup: React.FC<{
  onCategorySelect: (tier: string) => void;
}> = ({ onCategorySelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const sponsorCategories: SponsorCategory[] = [
    { name: "Platinum", color: "#C0C0C0", tier: "platinum" },
    { name: "Gold", color: "#FFD700", tier: "gold" },
    { name: "Silver", color: "#A9A9A9", tier: "silver" },
  ];

  const handleMainFolderClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCategoryClick = (tier: string) => {
    onCategorySelect(tier);
  };

  return (
    <div className="flex flex-col items-center">
      {!isOpen ? (
        /* Initial folder view */
        <div className="mb-8 transition-all duration-300 hover:scale-105">
          <Folder
            color="#5227FF"
            size={1.5}
            items={[
              <div className="w-full h-full flex items-center justify-center">
                <span className="font-cinzel font-bold">Sponsors</span>
              </div>,
            ]}
            className="cursor-pointer"
            onClick={handleMainFolderClick}
          />
        </div>
      ) : (
        /* Categories view after folder is clicked */
        <div className="animate-fade-in">
          <p className="text-xl font-cinzel mb-8 text-center">
            Select a Sponsor Category
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sponsorCategories.map((category) => (
              <div
                key={category.name}
                className="transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => handleCategoryClick(category.tier)}
              >
                <div
                  className="w-32 h-24 rounded-lg border-2 flex items-center justify-center shadow-md"
                  style={{
                    borderColor: category.color,
                    backgroundColor: "white",
                  }}
                >
                  <span className="font-cinzel font-bold">{category.name}</span>
                </div>
              </div>
            ))}
          </div>
          <button
            className="mt-8 mx-auto block text-muted-foreground hover:text-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-1">
              <i className="fas fa-arrow-left text-xs" />
              <span>Back to folder</span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SponsorsFolderGroup;
