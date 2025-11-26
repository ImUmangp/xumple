# BrandOps Website Design Guidelines

## Design Approach
**Reference-Based**: Drawing from premium tech-forward agencies and SaaS leaders (Vercel, Linear, Stripe) combined with modern agency aesthetics. Dark premium theme with sophisticated depth and polish.

## Core Design Principles

### Dark Premium Theme Strategy
- Establish depth through layered surfaces (backgrounds at multiple elevation levels)
- Use subtle gradients for visual interest on dark surfaces
- Implement glass-morphism effects for cards and modals (backdrop blur with semi-transparent surfaces)
- Apply subtle glow effects on interactive elements and CTAs
- Ensure high contrast text for readability on dark backgrounds

### Typography System
**Font Families**: 
- Primary: Inter or DM Sans (clean, modern sans-serif via Google Fonts)
- Accent: Space Grotesk for headlines (optional distinction)

**Hierarchy**:
- Hero Headlines: text-5xl to text-7xl, font-bold, tracking-tight
- Section Headers: text-3xl to text-4xl, font-semibold
- Subheadings: text-xl to text-2xl, font-medium
- Body Text: text-base to text-lg, font-normal, increased line-height (leading-relaxed) for readability on dark
- Small Text/Captions: text-sm, slightly reduced opacity for hierarchy

### Layout System
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section Padding: py-20 lg:py-32 for major sections
- Component Gaps: gap-8 to gap-12 for grids
- Container Max-Width: max-w-7xl for standard sections, max-w-6xl for content-focused areas

## Page-Specific Layouts

### Home Page Structure
**Hero Section**:
- Full viewport height (min-h-screen) with gradient background
- Center-aligned content with dramatic typography
- Sequential text reveals: Each tagline ("You're not a typical agency", "Not just a dev shop", etc.) stacks vertically with generous spacing (space-y-3)
- Primary CTA button with glow effect and backdrop blur
- Subtle animated gradient or mesh background

**What We Do** (3-Column Grid):
- grid-cols-1 md:grid-cols-3 gap-8
- Cards with glass-morphism effect
- Icon at top, title, description, subtle hover lift effect
- Border glow on hover

**Why Choose Us**:
- 2-column layout: Left side with large heading, right side with benefit list
- Each benefit as a card with checkmark icon, title, brief description
- grid-cols-1 lg:grid-cols-2 for benefit cards within right column

**8-Step Workflow**:
- Horizontal timeline on desktop (scrollable if needed), vertical on mobile
- Each step as a numbered card with connecting line
- Cards: Circular number badge, title, brief description
- Progress line connecting steps with gradient

**Testimonials**:
- 3-column grid on desktop, single column mobile
- Cards with quote, avatar placeholder, name, company
- Subtle shadow and border treatment

**FAQs**:
- Accordion pattern, max-w-3xl centered
- 6 questions, clean expand/collapse with smooth height transitions
- Question bold, answer regular weight with increased opacity

### About Us Page
**Vision Statement**: 
- Hero-style treatment, max-w-4xl centered, large text
- py-20 section with emphasis typography

**Who We Are**: 
- 2-column split: Text content left (max-w-2xl), supporting visual/icon right
- Explain hybrid model with visual diagram or icon set

**Values**: 
- grid-cols-2 lg:grid-cols-3 gap-6
- Each value as card: Icon, title, brief description

**Team Section**:
- grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8
- Team cards: Square image placeholder, name, role, subtle hover effect
- Keep minimal, professional

### Services Page
**3 Major Service Categories**:
Each category as full-width section with:
- Large section header with category icon
- Subservices in grid-cols-1 lg:grid-cols-3 layout
- Each subservice card: Icon/number, title, bulleted list of offerings
- Alternating background treatments for visual separation between major categories

### Pricing Page
**3-Tier Pricing Cards**:
- grid-cols-1 lg:grid-cols-3 gap-8, max-w-7xl
- Middle tier (Growth) highlighted with border glow and scale emphasis
- Each card: Plan name, price placeholder or "Contact Us", feature list with checkmarks, CTA button
- Card height consistency, align CTAs at bottom

### Contact Page
**Form Layout**:
- max-w-2xl centered form
- 2-column grid for Name/Email, Phone/Business Name (stacks on mobile)
- Full-width dropdown and textarea
- Large prominent CTA button
- Contact info sidebar: Email, phone, social icons in vertical stack

## Component Library

### Navigation
- Sticky header with backdrop blur
- Logo left, nav links center/right, "Book Call" CTA button right
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with full-screen overlay

### Buttons
**Primary CTA**: 
- px-8 py-4, rounded-lg
- Backdrop blur background with glow effect
- Hover: subtle scale (scale-105) and increased glow
- Font-semibold, text-base

**Secondary**: 
- Outlined style with border
- Hover: filled background transition

### Cards
- Rounded-xl to rounded-2xl corners
- Padding: p-6 to p-8
- Glass-morphism: backdrop-blur-md with semi-transparent background
- Subtle border (1px)
- Hover: translate-y-[-4px] with shadow transition

### Footer
- Full-width, py-16
- Grid layout: 4-5 columns on desktop (About, Services, Quick Links, Contact, Social)
- Reduced opacity text, divider line at top
- Copyright and legal links at bottom

## Animation Strategy
**On Scroll Animations**: Fade-in and slide-up for sections as they enter viewport (use Intersection Observer or library)
**Hover Effects**: Subtle scale (1.02-1.05), glow intensification, shadow deepening
**Transitions**: 300ms duration for most interactions
**Avoid**: Excessive motion, complex keyframe animations, parallax effects

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column grids)
- Desktop: > 1024px (full multi-column layouts)

## Images
**Hero Section**: Large abstract gradient mesh or premium tech-themed background image with overlay
**About Page**: Team member placeholder images (professional headshots, square format)
**Testimonials**: Circular avatar placeholders
**Services**: Optional icon illustrations for each category, not photographs

All images should maintain dark theme cohesion and support glass-morphism overlay treatments where used as backgrounds.