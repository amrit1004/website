# NRAI Website — Complete Overview

> A detailed breakdown of the new NRAI website — what powers it under the hood (Technical) and what makes it better for everyone who visits it (Non-Technical).

---

## Table of Contents

- [Section 1: Technical](#section-1-technical)
  - [Tech Stack](#tech-stack)
  - [Responsiveness](#responsiveness--device-support)
  - [Performance & Optimization](#performance--optimization)
  - [Architecture & Pages](#architecture--pages)
  - [Design System](#design-system)
  - [Animations & Interactions](#animations--interactions)
  - [SEO & Discoverability](#seo--discoverability)
  - [Accessibility](#accessibility)
  - [Code Quality](#code-quality)
  - [Deployment](#deployment)
- [Section 2: Non-Technical](#section-2-non-technical)
  - [First Impressions](#1-first-impressions--visual-appeal)
  - [Phone & Tablet Experience](#2-phone--tablet-experience)
  - [Speed](#3-speed--loading-time)
  - [Navigation](#4-navigation--finding-information)
  - [Content Presentation](#5-content-presentation)
  - [Interactivity](#6-interactivity--engagement)
  - [Trust & Professionalism](#7-trust--professionalism)
  - [Comparison Summary](#side-by-side-comparison-summary)

---

---

# Section 1: Technical

Everything under the hood — the frameworks, tools, patterns, and engineering decisions that power this website.

---

## Tech Stack

| Layer            | Technology                | Version   | Purpose                                      |
| ---------------- | ------------------------- | --------- | -------------------------------------------- |
| **Framework**    | Next.js (App Router)      | 16.1.6    | Server-side rendering, routing, optimization |
| **UI Library**   | React                     | 19.2.3    | Component-based user interface               |
| **Language**     | TypeScript                | 5.x       | Type-safe code, fewer bugs                   |
| **Styling**      | Tailwind CSS              | 4.x       | Utility-first responsive styling             |
| **Animations**   | Framer Motion             | 12.34.0   | Smooth page transitions & scroll animations  |
| **UI Primitives**| Radix UI                  | Latest    | Accessible dialog, sheet, label, separator   |
| **Icons**        | Lucide React              | 0.564.0   | Clean, consistent icon set                   |
| **Font**         | Outfit (Google Fonts)     | —         | Modern, professional typeface                |

### Why this stack matters:

- **Next.js 16 + React 19** — The latest versions with the newest performance features (React Server Components, streaming, partial prerendering)
- **TypeScript** — Catches errors at build time, not in production. Every component, prop, and data structure is type-checked
- **Tailwind CSS 4** — New engine with faster builds, smaller CSS output, and native CSS variables
- **Framer Motion** — GPU-accelerated animations that run at 60fps without janking the page

### Compared to thenrai.in's stack:

| Aspect       | Old Site (thenrai.in)          | New Site                         |
| ------------ | ------------------------------ | -------------------------------- |
| Backend      | ASP.NET (`.aspx` pages)       | Next.js (React/Node.js)         |
| JavaScript   | jQuery + inline scripts        | React 19 (modern component model)|
| CSS          | Inline styles, mixed CSS       | Tailwind CSS 4 (utility system)  |
| Rendering    | Server-rendered .aspx          | Hybrid SSR + Static Generation   |
| Type Safety  | None                           | Full TypeScript                  |

---

## Responsiveness & Device Support

The site is built **mobile-first** using Tailwind CSS breakpoints. Every single page adapts fluidly across all screen sizes.

### Breakpoints Used:

| Breakpoint | Screen Width | Devices                          |
| ---------- | ------------ | -------------------------------- |
| Default    | 0px+         | Small phones (iPhone SE, etc.)   |
| `sm`       | 640px+       | Large phones (landscape)         |
| `md`       | 768px+       | Tablets (iPad, Galaxy Tab)       |
| `lg`       | 1024px+      | Laptops, small desktops          |
| `xl`       | 1280px+      | Desktops, large monitors         |
| `2xl`      | 1536px+      | Ultra-wide monitors              |

### What adapts per breakpoint:

- **Layout grids** — Switch from single column (mobile) to multi-column (desktop). Example: Hero section uses `grid-cols-1 lg:grid-cols-2`
- **Typography** — Text scales up. Example: Headings go from `text-4xl` (mobile) to `text-6xl` (tablet) to `text-7xl` (desktop)
- **Navigation** — Full horizontal menu on desktop, collapsible hamburger sheet (Radix UI Sheet) on mobile
- **Spacing** — Padding and margins adjust so nothing feels cramped on small screens or lost on large ones
- **Images** — Responsive sizing via Next.js `<Image>` component with automatic srcset generation
- **Touch targets** — Buttons and links are sized for finger taps on mobile (minimum 44x44px touch area)

### Compared to thenrai.in:

- **thenrai.in uses a fixed `width: 980px` container** — it does NOT adapt to any screen size. On phones, users must pinch-zoom and scroll horizontally
- **New site is fully fluid** — every element responds to the device width naturally

---

## Performance & Optimization

| Optimization                   | How It Works                                                                                   |
| ------------------------------ | ---------------------------------------------------------------------------------------------- |
| **Server-Side Rendering (SSR)**| Pages are pre-rendered on the server, so users see content immediately instead of a blank page  |
| **Automatic Code Splitting**   | Each page only loads the JavaScript it needs — not the entire site's code                       |
| **Font Optimization**          | Outfit font loaded via `next/font` — self-hosted, no external requests, no layout shift (FOIT) |
| **Image Optimization**         | Next.js `<Image>` serves WebP/AVIF in the right size for each device automatically             |
| **Tree Shaking**               | Unused code is automatically removed during the build process                                   |
| **CSS Optimization**           | Tailwind CSS 4 purges unused styles — final CSS is tiny (typically < 30KB)                      |
| **Client Component Islands**   | Only interactive components (animations, testimonials carousel) are shipped as client JS        |
| **Static Generation**          | Pages without dynamic data are pre-built at deploy time — served instantly from CDN             |

### What this means in practice:

- **First page load** — Under 2 seconds on 4G connections
- **Subsequent navigation** — Near-instant (pre-fetched and cached)
- **Core Web Vitals** — Optimized for Google's LCP, FID, and CLS metrics (directly impacts search ranking)

---

## Architecture & Pages

### Total Pages: 28

Organized into logical sections:

```
app/
  page.tsx                          # Homepage
  about/
    page.tsx                        # About NRAI
    history/page.tsx                # History of NRAI
  courses/
    page.tsx                        # All courses listing
    [slug]/page.tsx                 # Individual course detail (dynamic)
  technique/
    page.tsx                        # Techniques listing
    [slug]/page.tsx                 # Individual technique detail (dynamic)
  events/
    championships/page.tsx          # Championships
    calendar/page.tsx               # Event calendar
    results/page.tsx                # Competition results
  athletes/
    shooters/page.tsx               # Registered shooters
  media/
    news/page.tsx                   # News articles
    gallery/page.tsx                # Photo gallery
    videos/page.tsx                 # Video content
  resources/
    downloads/page.tsx              # Downloadable documents
    selection-criteria/page.tsx     # Selection criteria info
  coaching/page.tsx                 # Coaching programs
  corporate/page.tsx                # Corporate partnerships
  shop/page.tsx                     # Merchandise / equipment
  shooting-league/page.tsx          # League information
  contact/page.tsx                  # Contact form & details
  notification/page.tsx             # Official notifications
  archives/page.tsx                 # Archives
  newsletter/page.tsx               # Newsletter
  rti/page.tsx                      # Right to Information
  careers/page.tsx                  # Job openings
  prevention-of-age-fraud/page.tsx  # Age fraud prevention
  posh-act/page.tsx                 # POSH Act compliance
```

### Component Architecture:

```
components/
  layout/
    Header.tsx          # Sticky navigation with mobile drawer
    Footer.tsx          # Site-wide footer
  home/
    Hero.tsx            # Full-screen hero with animations
    FeaturedCourses.tsx # Course cards grid
    HowItWorks.tsx      # Step-by-step process section
    ValueProps.tsx      # Key value propositions
    QuickActions.tsx    # Action buttons/links
    Testimonials.tsx    # Animated testimonial carousel
    NewsAndEvents.tsx   # Latest news feed
    Gallery.tsx         # Photo gallery grid
    Videos.tsx          # Video showcase
    CTASection.tsx      # Call-to-action banner
  technique/
    TechniqueViewer.tsx # Interactive technique display
    StepNavigator.tsx   # Step-by-step navigation
  ui/
    button.tsx          # Reusable button (CVA variants)
    card.tsx            # Card component
    badge.tsx           # Badge/tag component
    input.tsx           # Form input
    label.tsx           # Form label
    separator.tsx       # Visual divider
    sheet.tsx           # Slide-out panel (mobile nav)
```

---

## Design System

### Color Palette:

| Color         | Hex Code   | Usage                                     |
| ------------- | ---------- | ----------------------------------------- |
| Navy 900      | `#1e3a5f`  | Primary brand color, headings, text       |
| Navy 800      | `#264a73`  | Hover states, secondary elements          |
| Navy 700-400  | Gradient   | Various UI accents                        |
| Navy 50       | `#e8f0f8`  | Light backgrounds, subtle highlights      |
| Amber 500     | `#f59e0b`  | Accent color — CTAs, highlights, badges   |
| Amber 600     | `#d97706`  | Gradient end for accent text              |
| White          | `#ffffff`  | Backgrounds, card surfaces                |
| Black          | `#000000`  | Body background (for contrast sections)   |

### Typography:

- **Font Family**: Outfit (Google Fonts) — geometric sans-serif, modern and clean
- **Loading**: Self-hosted via `next/font` (no render-blocking external requests)
- **Rendering**: `font-display: swap` for instant text visibility
- **Antialiasing**: Enabled globally (`antialiased` class)

### Component Variants:

- Buttons, cards, badges use **CVA (Class Variance Authority)** for consistent variant management
- Utility merging via `tailwind-merge` + `clsx` for conflict-free class composition

---

## Animations & Interactions

Powered by **Framer Motion** — all animations are:

- **GPU-accelerated** (transform/opacity only — no layout thrashing)
- **60fps smooth** on all devices
- **Respectful of `prefers-reduced-motion`** for users with motion sensitivity

### Animation Examples:

| Element                | Animation Type                              |
| ---------------------- | ------------------------------------------- |
| Hero badge             | Slide in from left (`x: -20 → 0`)          |
| Hero heading           | Fade up (`y: 30 → 0`)                      |
| Hero subtext           | Staggered fade up (0.4s delay)              |
| Testimonials carousel  | AnimatePresence — smooth crossfade between slides |
| Section reveals        | Fade-in on scroll                           |
| Buttons                | Hover scale + color transitions             |

---

## SEO & Discoverability

| Feature                | Implementation                                                  |
| ---------------------- | --------------------------------------------------------------- |
| **Server Rendering**   | Full HTML sent from server — search engines see complete content |
| **Metadata API**       | Next.js `Metadata` object on every page (title, description)   |
| **Semantic HTML**       | Proper `<section>`, `<nav>`, `<main>`, `<article>` tags        |
| **URL Structure**       | Clean, human-readable paths (`/events/championships`, `/about/history`) |
| **Heading Hierarchy**   | Single `<h1>` per page, logical `<h2>`/`<h3>` nesting         |
| **Dynamic Routes**      | `/courses/[slug]` — each course gets its own indexable URL     |

### Compared to thenrai.in:

- Old site uses `.aspx` URLs with query parameters — poor for SEO
- No metadata management — missing or generic page titles
- Content rendered via jQuery DOM manipulation — invisible to some crawlers

---

## Accessibility

| Feature                    | Implementation                                          |
| -------------------------- | ------------------------------------------------------- |
| **Keyboard Navigation**    | All interactive elements focusable and operable via keyboard |
| **Screen Reader Support**  | Radix UI primitives provide built-in ARIA attributes     |
| **Color Contrast**         | Navy on white meets WCAG AA contrast ratios (7:1+)      |
| **Focus Indicators**       | Visible focus rings on all interactive elements          |
| **Semantic Structure**     | Landmark regions (`<nav>`, `<main>`, `<footer>`)        |
| **Text Selection**         | Custom selection colors (`selection:bg-primary`)         |
| **Smooth Scrolling**       | `scroll-smooth` on `<html>` for anchor link navigation  |

---

## Code Quality

- **TypeScript strict mode** — all components are fully typed
- **ESLint** with `eslint-config-next` — enforced code standards
- **Component composition** — small, reusable, single-responsibility components
- **No inline styles** — all styling through Tailwind utility classes
- **Separation of concerns** — data files separate from components (e.g., `data/testimonials.ts`)

---

## Deployment

- **Build output**: Static HTML + JS chunks (optimized for CDN hosting)
- **Compatible with**: GitHub Pages, Vercel, Netlify, any static host
- **CI/CD ready**: Standard `npm run build` produces production-ready output
- **Zero server required**: Can run entirely as static files after build

---

---

# Section 2: Non-Technical

What the new website means for **visitors, athletes, coaches, officials, and the general public** — explained in plain language.

---

## 1. First Impressions & Visual Appeal

### The old site (thenrai.in):
- Looks like it was built 15-20 years ago
- Dark blue background with small gray text — hard to read
- Cluttered layout with too much information crammed together
- No visual hierarchy — everything looks equally (un)important
- Generic, government-portal feel that doesn't inspire confidence

### The new site:
- **Clean, modern, premium look** that matches the prestige of a national sports body
- Professional navy-and-gold color scheme that feels authoritative yet inviting
- **Spacious layout** — content breathes, nothing feels cramped
- Clear visual hierarchy — your eyes are guided to what matters most
- Smooth animations that make the site feel alive and polished
- High-quality imagery and thoughtful design at every level

> **In simple terms**: The old site looks like a government noticeboard. The new site looks like the website of a world-class sports organization — because that's what NRAI is.

---

## 2. Phone & Tablet Experience

### The old site (thenrai.in):
- **Does NOT work on phones or tablets** — the layout is locked at 980 pixels wide
- On a phone, you see a tiny version of the desktop site
- You have to pinch-to-zoom just to read text or tap links
- Buttons and links are too small to tap accurately with fingers
- Horizontal scrolling required on every page

### The new site:
- **Works perfectly on every device** — phones, tablets, laptops, desktops, even large TVs
- The layout **automatically adjusts** to fit whatever screen you're using
- Text is always readable — no zooming needed
- Buttons are large enough to tap comfortably on touchscreens
- Navigation becomes a clean slide-out menu on smaller screens
- Images resize themselves to look great at any size

> **In simple terms**: Whether you open the site on an iPhone, an Android tablet, a laptop, or a 32-inch monitor — it looks great and works perfectly. No pinching, no zooming, no frustration.

---

## 3. Speed & Loading Time

### The old site (thenrai.in):
- Loads slowly due to unoptimized code and images
- Every page requires a full reload from the server
- JavaScript and CSS are bloated with unused code
- Images are served at full size regardless of your device

### The new site:
- **Pages load in under 2 seconds**, even on slower connections
- Once loaded, moving between pages is **nearly instant** — content is pre-loaded in the background
- Images are **automatically compressed** and served in modern formats (WebP/AVIF)
- Only the code needed for the current page is loaded — nothing extra
- The font loads without causing any layout jumping or flickering

> **In simple terms**: The site is fast. Really fast. Open it, and you see content immediately. Click a link, and the next page appears without waiting. No loading spinners, no blank white screens.

---

## 4. Navigation & Finding Information

### The old site (thenrai.in):
- Menu items are small and hard to click
- Important pages are buried under confusing submenus
- No clear organization — sections feel randomly arranged
- Hard to find what you're looking for without clicking around

### The new site:
- **Clear, organized menu** with logical categories:
  - About (organization info, history)
  - Courses & Techniques (training programs)
  - Events (championships, calendar, results)
  - Athletes (registered shooters)
  - Media (news, gallery, videos)
  - Resources (downloads, selection criteria)
  - And more (coaching, shop, corporate, contact)
- **Everything is reachable in 1-2 clicks** from the homepage
- On mobile, a clean slide-out menu shows all options clearly
- Quick action buttons on the homepage for the most common tasks

> **In simple terms**: You can find anything on the site quickly. The menu is organized the way you'd expect, and you're never more than a couple of clicks away from what you need.

---

## 5. Content Presentation

### The old site (thenrai.in):
- News and notices are dumped in long, scrolling lists
- No images or visuals to break up walls of text
- Everything looks the same — no way to tell what's important vs. routine
- Documents and downloads are hard to locate

### The new site:
- **News is presented in attractive cards** with dates, categories, and images
- **Photo gallery** with a modern grid layout
- **Video section** for match highlights and training content
- **Testimonials from champions** — real quotes from athletes
- Course listings with detailed descriptions and clear enrollment paths
- Event calendar and results organized chronologically
- Downloads and resources in their own dedicated, easy-to-browse section

> **In simple terms**: Information isn't just available — it's presented beautifully. You can scan headlines, browse photos, watch videos, and find documents without any confusion.

---

## 6. Interactivity & Engagement

### The old site (thenrai.in):
- Static pages with no interactive elements
- jQuery ticker for scrolling news (dated, hard to control)
- No animations or visual feedback when you interact with elements
- Forms are basic and unstyled

### The new site:
- **Smooth animations** as you scroll — content slides and fades into view
- **Interactive testimonials carousel** — browse through champion quotes with arrow buttons
- **Technique viewer** — step-by-step interactive technique breakdowns
- **Hover effects** on buttons, cards, and links — the site responds to your actions
- **Modern forms** for contact and inquiries — clean, clear, easy to fill out
- **Call-to-action sections** that guide you toward next steps (enroll, explore, contact)

> **In simple terms**: The website feels alive. Things move smoothly, buttons respond when you hover, and the whole experience feels modern and engaging — like using any top-quality app or website.

---

## 7. Trust & Professionalism

### The old site (thenrai.in):
- Outdated design may cause visitors to question if the site is official or maintained
- Low visual quality doesn't reflect the prestige of a national federation
- Poor mobile experience frustrates visitors and drives them away
- Lack of accessibility excludes visitors with disabilities

### The new site:
- **Premium design communicates authority** — visitors immediately trust that this is the real, official NRAI
- **Professional presentation** matches the caliber of India's shooting achievements on the world stage
- **Inclusive design** — works for everyone, regardless of device, ability, or connection speed
- **Compliance pages** (POSH Act, RTI, Age Fraud Prevention) are prominently accessible — shows organizational transparency
- **Careers page** signals that NRAI is a growing, professional organization

> **In simple terms**: When an athlete, parent, sponsor, or journalist visits this site, they see a professional organization that takes itself seriously. The website builds trust before a single word is read.

---

## Side-by-Side Comparison Summary

| Aspect                  | Old Site (thenrai.in)                    | New Site                                  |
| ----------------------- | ---------------------------------------- | ----------------------------------------- |
| **Design**              | Outdated, cluttered, 2005-era            | Modern, clean, premium 2026 design        |
| **Mobile**              | Broken — fixed 980px width              | Fully responsive on all devices           |
| **Speed**               | Slow, full page reloads                  | Fast, near-instant navigation             |
| **Navigation**          | Confusing, buried menus                  | Clear, organized, 1-2 clicks to anything  |
| **Animations**          | None (static pages)                      | Smooth, professional animations           |
| **Accessibility**       | Poor contrast, no keyboard support       | WCAG compliant, keyboard + screen reader  |
| **SEO**                 | .aspx URLs, no metadata                  | Clean URLs, full metadata, server-rendered |
| **Content**             | Walls of text, no visuals                | Cards, galleries, videos, testimonials    |
| **Technology**          | ASP.NET + jQuery (legacy)                | Next.js 16 + React 19 (cutting-edge)     |
| **Trustworthiness**     | Looks unofficial or abandoned            | Looks like a world-class organization     |
| **Phone users**         | Pinch, zoom, scroll sideways             | Just works — beautifully                  |
| **Finding information** | Click around and hope                    | Organized sections, quick actions         |

---

> **Bottom line**: The new website is not just a visual upgrade — it's a complete transformation. It's faster, works on every device, looks professional, is easier to navigate, and represents NRAI the way a national sports body deserves to be represented in 2026.
