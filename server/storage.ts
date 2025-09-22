import { type User, type InsertUser, type Event, type InsertEvent, type Sponsor, type InsertSponsor, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getEvents(): Promise<Event[]>;
  getEvent(slug: string): Promise<Event | undefined>;
  createEvent(event: InsertEvent): Promise<Event>;
  
  getSponsors(): Promise<Sponsor[]>;
  getSponsorsByTier(tier: string): Promise<Sponsor[]>;
  createSponsor(sponsor: InsertSponsor): Promise<Sponsor>;
  
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private events: Map<string, Event>;
  private sponsors: Map<string, Sponsor>;
  private contacts: Map<string, Contact>;

  constructor() {
    this.users = new Map();
    this.events = new Map();
    this.sponsors = new Map();
    this.contacts = new Map();
    
    // Initialize with sample data
    this.initializeData();
  }

  private async initializeData() {
    // Add sample events
    const sampleEvents: InsertEvent[] = [
      {
        slug: "circuit-breaker",
        title: "Circuit Breaker — Hardware Hack",
        category: "Hackathon",
        date: "2026-02-11",
        teamSize: "1-4",
        difficulty: "Intermediate",
        location: "Main Hall",
        summary: "48-hour hardware + firmware sprint",
        description: "Build innovative hardware solutions combining IoT, AI, and cutting-edge sensors. Teams will have access to Arduino, Raspberry Pi, and professional-grade components.",
        prizePool: "₹2,00,000",
        maxTeams: 25,
        duration: "48 hours",
        assets: ["circuit-breaker-poster.jpg"],
        registrationLink: "/register/circuit-breaker"
      },
      {
        slug: "third-eye-challenge",
        title: "The Third Eye Challenge",
        category: "Final Competition",
        date: "2026-02-12",
        teamSize: "2-5",
        difficulty: "Advanced",
        location: "Main Arena",
        summary: "The ultimate test of innovation combining AI, blockchain, and IoT",
        description: "Teams will face a mystery challenge that requires innovative solutions across multiple technology domains. Only those who see beyond the obvious will claim victory.",
        prizePool: "₹10,00,000",
        maxTeams: 50,
        duration: "12 hours",
        assets: ["third-eye-poster.jpg"],
        registrationLink: "/register/third-eye-challenge"
      },
      {
        slug: "ai-symposium",
        title: "AI Symposium & Workshop Series",
        category: "Workshop",
        date: "2026-02-10",
        teamSize: "Individual",
        difficulty: "Beginner",
        location: "Workshop Hall A",
        summary: "Learn from industry leaders and AI pioneers",
        description: "Interactive workshops covering machine learning, neural networks, and AI ethics. Led by top researchers and industry experts.",
        prizePool: "Certificates",
        maxTeams: 100,
        duration: "6 hours",
        assets: ["ai-workshop-poster.jpg"],
        registrationLink: "/register/ai-symposium"
      }
    ];

    for (const event of sampleEvents) {
      await this.createEvent(event);
    }

    // Add sample sponsors
    const sampleSponsors: InsertSponsor[] = [
      {
        name: "TechCorp",
        tier: "platinum",
        logo: "/logos/techcorp.svg",
        website: "https://techcorp.com",
        description: "Leading technology innovation company"
      },
      {
        name: "InnovateLabs",
        tier: "gold",
        logo: "/logos/innovatelabs.svg",
        website: "https://innovatelabs.com",
        description: "Research and development excellence"
      },
      {
        name: "StartupHub",
        tier: "silver",
        logo: "/logos/startuphub.svg",
        website: "https://startuphub.com",
        description: "Supporting the next generation of entrepreneurs"
      }
    ];

    for (const sponsor of sampleSponsors) {
      await this.createSponsor(sponsor);
    }
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getEvents(): Promise<Event[]> {
    return Array.from(this.events.values());
  }

  async getEvent(slug: string): Promise<Event | undefined> {
    return Array.from(this.events.values()).find(event => event.slug === slug);
  }

  async createEvent(insertEvent: InsertEvent): Promise<Event> {
    const id = randomUUID();
    const event: Event = { 
      ...insertEvent, 
      id,
      description: insertEvent.description ?? null,
      prizePool: insertEvent.prizePool ?? null,
      maxTeams: insertEvent.maxTeams ?? null,
      duration: insertEvent.duration ?? null,
      assets: insertEvent.assets ?? null,
      registrationLink: insertEvent.registrationLink ?? null
    };
    this.events.set(id, event);
    return event;
  }

  async getSponsors(): Promise<Sponsor[]> {
    return Array.from(this.sponsors.values());
  }

  async getSponsorsByTier(tier: string): Promise<Sponsor[]> {
    return Array.from(this.sponsors.values()).filter(sponsor => sponsor.tier === tier);
  }

  async createSponsor(insertSponsor: InsertSponsor): Promise<Sponsor> {
    const id = randomUUID();
    const sponsor: Sponsor = { 
      ...insertSponsor, 
      id,
      logo: insertSponsor.logo ?? null,
      website: insertSponsor.website ?? null,
      description: insertSponsor.description ?? null
    };
    this.sponsors.set(id, sponsor);
    return sponsor;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      phone: insertContact.phone ?? null,
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();
