# Overview

Crescendo Festival 2026 is a web application for a tech festival featuring events, sponsors, and contact management. The project is built as a full-stack application with a React frontend and Express.js backend, designed with a mystical technology theme using deep purple and gold color schemes. The application serves as a comprehensive platform for festival attendees to discover events, view sponsor information, and interact with the festival organizers.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with React and TypeScript, utilizing a component-based architecture with modern tooling:

- **Framework**: React 18 with TypeScript for type safety
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for the festival theme (purple/gold color scheme)
- **Component Library**: Radix UI primitives with shadcn/ui component system for consistent, accessible UI components
- **State Management**: TanStack React Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Build Tool**: Vite for fast development and optimized production builds

The frontend follows a pages-based structure with shared components and utilities. Custom theming supports both the mystical design requirements and accessibility standards.

## Backend Architecture
The server is built with Express.js using TypeScript and follows RESTful API conventions:

- **Framework**: Express.js with TypeScript for the API layer
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Schema Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development (designed to easily switch to PostgreSQL)
- **API Structure**: RESTful endpoints for events, sponsors, and contact management

The backend uses a repository pattern with an abstracted storage interface, making it easy to switch between different database implementations.

## Data Storage
- **Database**: Configured for PostgreSQL using Neon Database serverless driver
- **ORM**: Drizzle ORM with migrations support
- **Schema**: Shared TypeScript schemas between client and server using Drizzle-Zod integration
- **Tables**: Users, events, sponsors, and contacts with proper relationships and constraints

## Component Design System
The application uses a comprehensive design system built on Radix UI primitives:

- **Theme**: Custom CSS variables supporting the festival's purple/gold mystical aesthetic
- **Typography**: Cinzel serif font for headings, Inter sans-serif for body text
- **Components**: Full suite of accessible UI components (buttons, forms, dialogs, navigation, etc.)
- **Responsive Design**: Mobile-first approach with proper breakpoints
- **Accessibility**: Reduced motion support and ARIA compliance throughout

## External Dependencies

- **@neondatabase/serverless**: PostgreSQL database connectivity
- **@sendgrid/mail**: Email service integration for contact forms and notifications
- **@tanstack/react-query**: Server state management and caching
- **drizzle-orm & drizzle-kit**: Database ORM and migration tools
- **@radix-ui components**: Accessible UI primitives
- **react-hook-form**: Form state management and validation
- **zod**: Runtime type validation
- **tailwindcss**: Utility-first CSS framework
- **wouter**: Lightweight routing for React
- **vite**: Build tool and development server
- **express**: Node.js web framework
- **connect-pg-simple**: PostgreSQL session store (prepared for session management)