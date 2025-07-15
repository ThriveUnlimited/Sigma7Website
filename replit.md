# Sigma7 Group Business Website

## Overview

This is a full-stack web application for Sigma7 Group, a professional business solutions company. The application features a modern corporate website with contact form functionality, built using React, Express, and PostgreSQL with Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Minimal, clean design with professional appearance.

## System Architecture

The application follows a full-stack monorepo architecture with clear separation between client and server code:

- **Frontend**: React with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **UI Framework**: Shadcn/ui components with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management

## Key Components

### Frontend Architecture
- **Build Tool**: Vite with React plugin and TypeScript support
- **UI Components**: Comprehensive Shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation
- **HTTP Client**: Custom API client with TanStack Query for caching and state management

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **API Design**: RESTful endpoints with proper error handling
- **Validation**: Zod schemas shared between client and server
- **Development**: Hot reload with TSX for development server

### Database Schema
- **Users Table**: Basic user authentication structure (id, username, password)
- **Contact Submissions Table**: Contact form data storage (id, firstName, lastName, email, company, service, message, createdAt)
- **Migrations**: Drizzle-kit for database schema management

### Pages Structure
- **Home**: Minimal landing page with hero section and streamlined service preview
- **About**: Clean company overview with core values and key statistics
- **Services**: Simple service listing with clear descriptions
- **Contact**: Clean contact form with essential company information
- **404**: Not found page for unmatched routes

## Recent Changes (January 2025)
- ✓ Enhanced hero section with dynamic gradients, animations, and engaging copy
- ✓ Added interactive service cards with hover effects and gradients
- ✓ Integrated official Sigma7 Group logo throughout the site (navigation, hero, footer)
- ✓ Removed statistics section from hero based on user feedback
- ✓ Improved typography with gradient text and better spacing
- ✓ Added subtle animations and transitions for better user engagement

## Data Flow

### Contact Form Submission
1. User fills out contact form with validation (React Hook Form + Zod)
2. Form data is validated on client-side before submission
3. API request sent to `/api/contact` endpoint via TanStack Query mutation
4. Server validates data using shared Zod schema
5. Contact submission stored in PostgreSQL database via Drizzle ORM
6. Success/error feedback displayed to user via toast notifications

### Navigation and Routing
1. Client-side routing handled by Wouter
2. Fixed navigation header with responsive mobile menu
3. Active route highlighting based on current location
4. Shared navigation and footer components across all pages

## External Dependencies

### Core Technologies
- **React 18**: Frontend framework with TypeScript
- **Express**: Backend web framework
- **PostgreSQL**: Primary database (via Neon serverless)
- **Drizzle ORM**: Type-safe database operations
- **Vite**: Frontend build tool and dev server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Shadcn/ui**: Pre-built component library
- **Radix UI**: Accessible UI primitives
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Development Tools
- **TypeScript**: Type safety across the entire stack
- **Zod**: Runtime type validation and schema validation
- **React Hook Form**: Form state management and validation
- **TanStack Query**: Server state management and caching
- **ESBuild**: Production build bundling for server code

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite dev server with Express backend integration
- **Hot Reload**: Automatic reloading for both client and server code
- **Database**: Development database with Drizzle migrations
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Client Build**: Vite builds React app to `dist/public`
- **Server Build**: ESBuild bundles Express server to `dist/index.js`
- **Static Assets**: Production server serves built client files
- **Database**: Production PostgreSQL database via environment configuration

### Database Management
- **Schema**: Defined in `shared/schema.ts` with Drizzle
- **Migrations**: Generated and applied via `drizzle-kit`
- **Development**: Push schema directly with `db:push` command
- **Production**: Migration-based deployment strategy

### Storage Strategy
The application currently implements a memory-based storage interface with plans for PostgreSQL integration. The storage layer abstracts database operations for:
- User management (authentication ready)
- Contact form submissions
- Extensible interface for additional data models

This architecture allows for easy switching between development (memory) and production (PostgreSQL) storage implementations while maintaining type safety throughout the application.