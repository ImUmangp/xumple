# BrandOps - Complete Growth Stack for Modern Brands

## Overview

BrandOps is a professional marketing and technology agency website built as a full-stack React application. The platform showcases the company's services as a hybrid "Brand Growth Partner" combining technology development, marketing services, and business operations automation. The website features a modern dark premium theme with smooth animations, responsive design, and a contact form system for lead generation.

The application is a multi-page marketing website with 5 main pages (Home, About, Services, Pricing, Contact) plus additional legal pages (Terms, Privacy). It implements a complete contact submission system with form validation and data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Routing**
- React 18 with TypeScript as the primary UI framework
- Wouter for client-side routing (lightweight alternative to React Router)
- Single Page Application (SPA) architecture with route-based code organization

**UI Component System**
- shadcn/ui component library (Radix UI primitives with Tailwind CSS styling)
- "New York" style variant configured for consistent design language
- Dark mode as the default theme with premium design aesthetics
- Component library includes 40+ pre-built UI components (buttons, forms, cards, dialogs, etc.)

**Styling & Design**
- Tailwind CSS for utility-first styling with custom configuration
- CSS variables for theme customization (HSL color format)
- Custom design system following premium dark theme guidelines
- Typography system using Inter, DM Sans, and Space Grotesk fonts from Google Fonts
- Glass-morphism effects, subtle gradients, and glow effects for premium aesthetics

**State Management & Data Fetching**
- TanStack Query (React Query) v5 for server state management
- React Hook Form with Zod validation for form handling
- Custom query client configuration with specific refetch policies

**Form Validation**
- Zod schemas for runtime type validation
- React Hook Form for form state management
- @hookform/resolvers for integration between React Hook Form and Zod
- drizzle-zod for generating Zod schemas from database schema definitions

### Backend Architecture

**Server Framework**
- Express.js as the HTTP server framework
- Node.js runtime with ESM module support
- Separate development and production server configurations

**API Design**
- RESTful API endpoints under `/api` prefix
- JSON request/response format
- Zod-based request validation with user-friendly error messages

**Data Storage**
- In-memory storage implementation (MemStorage) for development
- Interface-based storage abstraction (IStorage) for future database integration
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver)
- Schema-first approach with TypeScript type inference

**Development vs Production**
- Development: Vite dev server with HMR (Hot Module Replacement)
- Production: Statically built assets served by Express
- Environment-aware configuration through NODE_ENV

### Database Schema

**Users Table**
- Fields: id (UUID), username (unique), password
- Currently unused but infrastructure in place for future authentication

**Contact Submissions Table**
- Fields: id (UUID), name, email, phone, businessName, serviceInterest, message, createdAt
- Captures lead information from the contact form
- Zod validation ensures data quality (email format, minimum lengths)

### Build & Development Tools

**Build Pipeline**
- Vite for frontend bundling with React plugin
- esbuild for backend bundling (production builds)
- tsx for TypeScript execution in development
- Source maps enabled for debugging

**Code Quality**
- TypeScript with strict mode enabled
- Path aliases for clean imports (@/, @shared/, @assets/)
- ESM module resolution with bundler strategy

**Development Experience**
- Replit-specific plugins for error overlay and dev banner
- Cartographer plugin for code navigation
- Hot reload for both frontend and backend changes

## External Dependencies

### Core Framework Dependencies
- **React ecosystem**: react, react-dom (v18+)
- **Routing**: wouter (lightweight React routing)
- **State management**: @tanstack/react-query (v5)

### UI Component Libraries
- **Radix UI**: 20+ headless component primitives (@radix-ui/react-*)
- **Styling**: tailwindcss, postcss, autoprefixer
- **Utility libraries**: class-variance-authority, clsx, tailwind-merge
- **Icons**: lucide-react
- **Carousel**: embla-carousel-react

### Form & Validation
- **Form handling**: react-hook-form
- **Validation**: zod, @hookform/resolvers, zod-validation-error
- **Date utilities**: date-fns

### Backend Dependencies
- **Server**: express (with TypeScript types)
- **Database**: drizzle-orm, @neondatabase/serverless
- **Database toolkit**: drizzle-kit (for migrations and schema management)
- **Session management**: connect-pg-simple (PostgreSQL session store)
- **Utilities**: nanoid (ID generation)

### Build Tools
- **Frontend bundler**: vite, @vitejs/plugin-react
- **Backend bundler**: esbuild
- **TypeScript**: tsx (for running TS files directly)
- **Replit plugins**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner

### Font Integration
- Google Fonts: Inter, DM Sans, Space Grotesk (loaded via HTML link tags)

### Database Configuration
- PostgreSQL via Neon serverless (connection via DATABASE_URL environment variable)
- Drizzle ORM configured for PostgreSQL dialect
- Schema location: ./shared/schema.ts
- Migration output: ./migrations

### API Endpoints

**POST /api/contact**
- Accepts contact form submissions
- Validates with Zod schema (email format, minimum lengths)
- Returns submission confirmation with generated ID

**GET /api/contact**
- Retrieves all contact submissions (admin/debugging endpoint)
- No authentication currently implemented