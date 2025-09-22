import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, jsonb, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const events = pgTable("events", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  teamSize: text("team_size").notNull(),
  difficulty: text("difficulty").notNull(),
  location: text("location").notNull(),
  summary: text("summary").notNull(),
  description: text("description"),
  prizePool: text("prize_pool"),
  maxTeams: integer("max_teams"),
  duration: text("duration"),
  assets: jsonb("assets"),
  registrationLink: text("registration_link"),
});

export const sponsors = pgTable("sponsors", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  tier: text("tier").notNull(), // 'platinum', 'gold', 'silver'
  logo: text("logo"),
  website: text("website"),
  description: text("description"),
});

export const contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  type: text("type").notNull(), // 'general', 'volunteer', 'press', 'partnership'
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertEventSchema = createInsertSchema(events).omit({
  id: true,
});

export const insertSponsorSchema = createInsertSchema(sponsors).omit({
  id: true,
});

export const insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Event = typeof events.$inferSelect;
export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Sponsor = typeof sponsors.$inferSelect;
export type InsertSponsor = z.infer<typeof insertSponsorSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertContact = z.infer<typeof insertContactSchema>;
