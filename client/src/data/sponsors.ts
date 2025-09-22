import { type Sponsor } from '@shared/schema';

export const sampleSponsors: Omit<Sponsor, 'id'>[] = [
  // Platinum Tier
  {
    name: "TechCorp Global",
    tier: "platinum",
    logo: "/logos/techcorp.svg",
    website: "https://techcorp.com",
    description: "Leading technology innovation company specializing in AI, cloud computing, and enterprise solutions with operations across 50+ countries."
  },
  {
    name: "InnovateLabs",
    tier: "platinum", 
    logo: "/logos/innovatelabs.svg",
    website: "https://innovatelabs.com",
    description: "Premier research and development company focused on emerging technologies, quantum computing, and next-generation computing platforms."
  },
  {
    name: "FutureTech Ventures",
    tier: "platinum",
    logo: "/logos/futuretech.svg", 
    website: "https://futuretech.vc",
    description: "Venture capital firm investing in breakthrough technologies, supporting startups from seed to Series A with $500M+ under management."
  },

  // Gold Tier
  {
    name: "CloudMaster Solutions",
    tier: "gold",
    logo: "/logos/cloudmaster.svg",
    website: "https://cloudmaster.io",
    description: "Cloud infrastructure and DevOps automation platform serving enterprise clients with scalable, secure cloud solutions."
  },
  {
    name: "DataFlow Analytics",
    tier: "gold", 
    logo: "/logos/dataflow.svg",
    website: "https://dataflow.ai",
    description: "Advanced data analytics and machine learning platform helping businesses extract insights from complex datasets."
  },
  {
    name: "CyberShield Security",
    tier: "gold",
    logo: "/logos/cybershield.svg",
    website: "https://cybershield.com", 
    description: "Cybersecurity solutions provider offering threat detection, incident response, and security consulting services."
  },
  {
    name: "MobileFirst Studios",
    tier: "gold",
    logo: "/logos/mobilefirst.svg",
    website: "https://mobilefirst.studio",
    description: "Mobile app development company creating award-winning iOS and Android applications for Fortune 500 companies."
  },
  {
    name: "BlockTech Networks",
    tier: "gold",
    logo: "/logos/blocktech.svg", 
    website: "https://blocktech.network",
    description: "Blockchain technology company building decentralized finance protocols and Web3 infrastructure solutions."
  },
  {
    name: "GreenCode Initiative",
    tier: "gold",
    logo: "/logos/greencode.svg",
    website: "https://greencode.org",
    description: "Non-profit organization promoting sustainable technology practices and environmental responsibility in software development."
  },

  // Silver Tier
  {
    name: "StartupHub Mumbai",
    tier: "silver",
    logo: "/logos/startuphub.svg",
    website: "https://startuphub.mumbai", 
    description: "Startup incubator and co-working space supporting early-stage technology companies with mentorship and funding connections."
  },
  {
    name: "CodeCraft Academy",
    tier: "silver",
    logo: "/logos/codecraft.svg",
    website: "https://codecraft.academy",
    description: "Coding bootcamp and online education platform teaching modern programming languages and software development practices."
  },
  {
    name: "TechRecruiters Pro",
    tier: "silver", 
    logo: "/logos/techrecruiters.svg",
    website: "https://techrecruiters.pro",
    description: "Specialized recruitment agency connecting top technology talent with innovative companies across India and Southeast Asia."
  },
  {
    name: "DigitalMedia Works",
    tier: "silver",
    logo: "/logos/digitalmedia.svg",
    website: "https://digitalmedia.works",
    description: "Digital marketing and content creation agency helping tech companies build their brand presence and reach target audiences."
  },
  {
    name: "OpenSource Foundation", 
    tier: "silver",
    logo: "/logos/opensource.svg",
    website: "https://opensource.foundation",
    description: "Foundation supporting open source software projects and promoting collaborative development in the technology community."
  },
  {
    name: "IoT Innovations Ltd",
    tier: "silver",
    logo: "/logos/iot-innovations.svg", 
    website: "https://iot-innovations.com",
    description: "Internet of Things solutions provider specializing in smart city technologies, industrial automation, and connected devices."
  },
  {
    name: "GameDev Studios",
    tier: "silver",
    logo: "/logos/gamedev.svg",
    website: "https://gamedev.studios",
    description: "Independent game development studio creating innovative mobile and PC games with focus on immersive storytelling."
  },
  {
    name: "FinTech Partners",
    tier: "silver", 
    logo: "/logos/fintech-partners.svg",
    website: "https://fintech.partners",
    description: "Financial technology consulting firm helping traditional banks and financial institutions adopt modern digital solutions."
  },
  {
    name: "CloudCafe Coworking",
    tier: "silver",
    logo: "/logos/cloudcafe.svg",
    website: "https://cloudcafe.space",
    description: "Premium co-working space and tech community hub providing modern workspaces and networking opportunities for developers."
  },
  {
    name: "DevTools Plus",
    tier: "silver",
    logo: "/logos/devtools.svg", 
    website: "https://devtools.plus",
    description: "Developer tools and productivity software company creating IDE extensions, debugging tools, and development workflow solutions."
  },
  {
    name: "TechBooks Publishing",
    tier: "silver",
    logo: "/logos/techbooks.svg",
    website: "https://techbooks.pub",
    description: "Technology publishing house specializing in programming books, technical documentation, and educational content for developers."
  },
  {
    name: "RoboticsLab India",
    tier: "silver", 
    logo: "/logos/roboticslab.svg",
    website: "https://roboticslab.in",
    description: "Robotics research lab and manufacturing company developing autonomous systems for industrial and consumer applications."
  }
];

export const sponsorTiers = ["platinum", "gold", "silver"] as const;

export const tierConfigs = {
  platinum: {
    title: "Platinum Partners",
    description: "Our premier partners driving innovation forward",
    color: "from-gray-300 to-gray-500",
    textColor: "text-gray-300", 
    borderColor: "border-gray-300/20",
    minContribution: "₹10,00,000+"
  },
  gold: {
    title: "Gold Sponsors", 
    description: "Supporting excellence in technology and innovation",
    color: "from-accent to-yellow-600",
    textColor: "text-accent",
    borderColor: "border-accent/20", 
    minContribution: "₹5,00,000+"
  },
  silver: {
    title: "Silver Contributors",
    description: "Enabling opportunities for the next generation", 
    color: "from-gray-400 to-gray-600",
    textColor: "text-gray-400",
    borderColor: "border-gray-400/20",
    minContribution: "₹2,00,000+"
  }
} as const;

export const sponsorshipBenefits = {
  platinum: [
    "Logo on all marketing materials",
    "Keynote speaking opportunity", 
    "Dedicated exhibition booth",
    "Access to participant resumes",
    "Social media promotion",
    "Workshop hosting opportunity",
    "VIP networking access",
    "Award ceremony participation"
  ],
  gold: [
    "Logo on event materials",
    "Exhibition booth space",
    "Recruiting table access", 
    "Social media mentions",
    "Workshop co-hosting",
    "Networking session access",
    "Prize distribution opportunity"
  ],
  silver: [
    "Logo on website and banners",
    "Shared exhibition space",
    "Resume book access",
    "Social media recognition", 
    "Networking access",
    "Event participation"
  ]
} as const;
