# ROKAR GLOBAL — Real Estate Website Rebuild

You are rebuilding an existing real-estate company website. The current site is vanilla HTML/CSS/JS in this repo — read it first. We are migrating to a modern stack, redesigning, and narrowing scope to real estate only.

Work in PHASES. Stop at the end of each phase and report before proceeding. Do not build the whole thing in one pass.

---

## PHASE 0 — Discovery & Plan (DO THIS FIRST, then STOP and report)

1. **Read the existing codebase.** Inventory: all pages, all copy/text content, all images in the repo. Identify which content is real-estate-related vs. other services (asphalt/road building, recycling, etc.). The non-real-estate services are being REMOVED.

2. **List your available MCP servers and tools.** I have several design-oriented MCPs installed (animation, typography, front-end/component, layout tooling). Identify every MCP tool available to you, and specifically flag which ones are useful for: typography/font systems, animation/motion, spacing/layout, and component or front-end design. Report what you found and how you intend to use each during the build.

3. **Note the key asset:** there is an aerial photograph of Masaki (Dar es Salaam) in the repo. Confirm you found it, report its resolution. This is a featured visual — plan to use it full-bleed (hero or a major anchor section). If it's under ~2000px wide, tell me.

4. **Propose your plan:** stack confirmation, page structure, design direction, which MCPs power what. Then STOP and wait for my go-ahead.

---

## STACK

- **React + Vite** (not Next.js — this is a static marketing site, no SSR/SEO-per-page needs).
- Plan to deploy as a static build (Vercel/Netlify/Cloudflare Pages compatible).
- TypeScript.
- **i18n from day one** using `react-i18next`. Ship English only, but structure ALL copy as key-value pairs in `src/locales/en.json`. No hardcoded strings in components. Build so a `sw.json` (Swahili) can be dropped in later with a language switcher — but do NOT build the switcher UI yet, just structure for it.

---

## SCOPE & CONTENT

- **Single-page, long-scroll layout with anchored nav** (sticky header, smooth-scroll to sections).
- Content comes ONLY from the company profile below. Remove all non-real-estate services from the old site.
- Sections to include, derived from the profile:
  - Hero (company name + tagline "Building Value. Creating Opportunities. Delivering Excellence.")
  - Company Overview
  - Vision & Mission
  - Core Values (Integrity, Professionalism, Customer Focus, Excellence, Innovation, Accountability)
  - Services (Property Sales; Leasing & Rentals; Property Management; Real Estate Development; Land Acquisition & Sales; Real Estate Consultancy — include their sub-bullets)
  - Why Choose Us
  - Target Clients
  - Our Commitment
  - Contact (dedicated section)

- **Contact details:** pull existing contact info from the old codebase into the `en.json` content file. Use the name **ROKAR GLOBAL** consistently everywhere (the old content has inconsistent naming — ROKAR GLOBAL / ROKAR ESTATE / placeholder — normalize all to ROKAR GLOBAL). Leave any genuinely missing fields as clearly-marked TODO placeholders, do not invent details.

### Profile content (source of truth for copy)

[CONTENT PROVIDED IN THE PDF FILE, TEXT OF IT PASTED HERE BEFORE SENDING]
REAL ESTATE COMPANY PROFILE
COMPANY NAME
ROKAR GLOBAL
REAL ESTATE
COMPANY OVERVIEW
ROKAR ESTATE is a professional real estate company specializing in property sales, leasing,
property management, real estate development, and investment advisory services. We are
committed to delivering exceptional real estate solutions that meet the evolving needs of
homeowners, investors, businesses, and communities.
Our company focuses on creating value through quality service, market expertise, integrity, and
innovation. We strive to build lasting relationships with our clients by providing reliable,
transparent, and efficient real estate services.
VISION
To be a leading and trusted real estate company recognized for excellence, innovation, and
sustainable property solutions.
MISSION
To provide professional real estate services that help clients achieve their property ownership,
investment, and development goals while maintaining the highest standards of integrity and
customer satisfaction.
CORE VALUES
Integrity
We conduct our business with honesty, transparency, and ethical practices.
Professionalism
We deliver quality services through skilled expertise and industry best practices.
Customer Focus
Our clients are at the center of everything we do.
Excellence
We are committed to exceeding expectations and delivering outstanding results.
Innovation
We embrace modern technologies and innovative solutions to improve service delivery.
Accountability
We take responsibility for our actions and commitments.
OUR SERVICES
Property Sales
We facilitate the buying and selling of residential, commercial, industrial, and investment
properties.
Property Leasing and Rentals
We assist landlords and tenants with leasing, rental management, and occupancy solutions.
Property Management
We provide comprehensive property management services including:
• Rent collection
• Tenant screening
• Property maintenance
• Financial reporting
• Facility management
Real Estate Development
We undertake and support property development projects including:
• Residential housing projects
• Commercial buildings
• Mixed-use developments
• Land development projects
Land Acquisition and Sales
We help clients identify, acquire, verify, and sell land for residential, agricultural, commercial,
and industrial purposes.
Real Estate Consultancy
We offer expert advice on:
• Property valuation
• Market analysis
• Investment opportunities
• Development planning
• Property documentation
OUR OBJECTIVES
• To provide reliable and professional real estate services.
• To facilitate profitable and secure property investments.
• To contribute to sustainable urban and community development.
• To build long-term relationships with clients and stakeholders.
• To continuously improve service quality and operational efficiency.
TARGET CLIENTS
• Individual home buyers
• Property investors
• Corporate organizations
• Developers and contractors
• Government institutions
• Local and international investors
WHY CHOOSE US
✓ Professional and experienced team
✓ Transparent and ethical business practices
✓ Extensive market knowledge
✓ Strong client support and communication
✓ Customized property solutions
✓ Commitment to quality and customer satisfaction
OUR COMMITMENT
We are dedicated to helping our clients make informed real estate decisions while ensuring
smooth, secure, and successful transactions. Through professionalism, trust, and innovation, we
aim to become a preferred partner in the real estate industry.
CONTACT INFORMATION
[Your Company Name] Real Estate Limited
Address: [Insert Physical Address]
Phone: [Insert Phone Number]
Email: [Insert Email Address]
Website: [Insert Website]
Social Media: [Insert Social Media Links]
Building Value. Creating Opportunities. Delivering Excellence.
[END OF CONTENT]

---

## LOGO

No image generation. Build a **typographic SVG wordmark** for "ROKAR GLOBAL" — a strong typeface paired with a small, simple geometric mark (something that reads as real-estate/architecture without being a literal house icon cliché). Inline SVG, scales cleanly, works in header and footer at different sizes. Provide a light and dark variant if the design needs it.

---

## DESIGN DIRECTION

Target: **editorial / architectural backbone, with motion as a deliberate accent — NOT motion everywhere.**

- The goal is for a designer looking at this to wonder who built it. Achieve that through **restraint, a distinctive typographic system, intentional spacing, and one or two signature interactions** — NOT by animating every element. Generic AI sites are recognizable precisely by their wall-to-wall scroll animations; avoid that trap.
- Light/neutral palette (NOT dark mode). Sophisticated neutrals — choose a refined palette (off-whites, warm greys, a single restrained accent). You have latitude here; make it feel intentional and premium, not default-Tailwind.
- Strong type hierarchy. Use the typography MCP to select a non-generic, professional font pairing (a display face for headings with character, a clean readable body). Avoid Inter/Roboto defaults unless deliberately chosen.
- **Signature moves (pick 1–2, execute well):** e.g., the Masaki aerial revealing/scaling on scroll; a refined custom hero interaction; tasteful section transitions. Use the animation MCP for these. Quality over quantity.
- Generous whitespace, asymmetry where it serves the content, considered grid.

---

## RESPONSIVENESS

- Fully responsive: mobile, tablet, desktop.
- Test/handle in-app browser contexts (links opened from Instagram, WhatsApp, X, LinkedIn) and odd viewport sizes/safe-area insets.
- Mobile nav (anchor links collapse into a menu). Touch-friendly targets. No horizontal overflow at any breakpoint.
- Respect `prefers-reduced-motion` — disable/reduce the signature animations for users who request it.

---

## FINAL PHASE — Review (after build, before declaring done)

Run a focused review appropriate to a **static marketing site** (small attack surface — no auth, no database, no backend). Specifically check:

**Security:**

- Contact form (if any) — validate/sanitize input, no injection vectors, no secrets/keys committed to the repo, check for exposed `.env` or API keys in client code.
- External links use `rel="noopener noreferrer"` where `target="_blank"`.
- No `dangerouslySetInnerHTML` with unsanitized content.
- Dependency check: flag any package with known vulnerabilities (`npm audit`), report don't auto-fix breaking changes.

**Efficiency:**

- Image optimization (the Masaki aerial and stock images — proper formats/sizes, lazy-loading below the fold, responsive `srcset`).
- Bundle size — flag anything bloated, confirm animations aren't tanking performance.
- No unnecessary re-renders from animation libs.
- Lighthouse-style pass on performance/accessibility — report scores and the top fixes.

Report findings. Don't silently rewrite large sections — propose fixes for anything non-trivial.

---

## WORKING STYLE

- Stop and report at the end of Phase 0 and the Final Phase. Within the build, work section-by-section and keep me in the loop on design decisions — I want to stay involved, not receive a finished black box.
- Keep commits logical and scoped.
- Don't over-engineer. This is a brochure site; resist adding state management, routers, or abstractions it doesn't need.
