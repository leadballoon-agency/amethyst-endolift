# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Endolift treatment landing page for Amethyst Aesthetics Beauty. This is a single-treatment focused landing page with an intelligent assessment tool that can recommend across Marianne's full treatment portfolio. Built with Next.js 15 App Router, TypeScript, and Tailwind CSS.

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production (run before deploying)
npm run lint       # Run ESLint
```

## Architecture

### Page Structure

The site is a single-page landing page with modal overlays:

- `app/page.tsx` → renders `PageWrapper` component
- `components/PageWrapper.tsx` → orchestrates all sections and manages modal state
- All booking CTAs trigger `BookingModal` with optional assessment data
- `VideoModal` handles video playback overlay

### Component Flow

`PageWrapper` manages two key state flows:
1. **Booking flow**: Any "Book Now" button sets `assessmentData.skipToCalendar = true` and opens `BookingModal`
2. **Assessment flow**: `AssessmentTool` collects user data, intelligently recommends treatment, passes to `BookingModal` via `onAssessmentComplete`

### Key Components

| Component | Purpose |
|-----------|---------|
| `PageWrapper.tsx` | Main orchestrator, holds booking/video modal state |
| `AssessmentTool.tsx` | Smart treatment finder - recommends across full portfolio |
| `BookingModal.tsx` | Booking form, receives assessment data |
| `PremiumHero.tsx` | Hero section with Endolift messaging |
| `PremiumTreatments.tsx` | Treatment options and pricing |
| `ProcessSection.tsx` | How Endolift works |
| `FAQ.tsx` | Endolift-specific FAQs |
| `StructuredData.tsx` | JSON-LD schema markup for SEO |
| `FacebookPixel.tsx` | Meta Pixel tracking |

### Intelligent Assessment Tool

The assessment asks 4 questions:
1. Primary concern (laxity, contour, texture, lines, volume, pigment)
2. Area of concern (jawline, underchin, midface, eyes, forehead, fullface)
3. Severity (mild, moderate, significant, severe)
4. Downtime tolerance (none, minimal, moderate, flexible)

Based on answers, it recommends:
- **Endolift** - for laxity/contour in jawline/neck with downtime tolerance
- **HIFU** - for zero downtime or milder concerns
- **CO2 Laser** - for texture, scars, pigmentation
- **Dermal Fillers** - for volume loss
- **Anti-Wrinkle** - for dynamic lines
- **Consultation** - for severe laxity (honest recommendation)

### API Routes

- `app/api/contact/route.ts` - Contact form POST handler

### SEO & Tracking

- Metadata in `app/layout.tsx` (title, description, OpenGraph, Twitter cards)
- `app/sitemap.ts` and `app/robots.ts` for search engines
- `components/StructuredData.tsx` for LocalBusiness schema
- Facebook Pixel in `components/FacebookPixel.tsx`

## Pricing

Current Endolift pricing (may change):
- Full Face: £1,200
- Neck & Chin: £800
- Combination: £1,800

## Related Landing Pages

Marianne has multiple treatment landing pages:
- CO2 Laser: https://co2lasersomerset.co.uk
- HIFU: https://hifusomerset.co.uk
- Endolift: https://endoliftsomerset.co.uk (this project)
- Main site: https://www.amethystaestheticsbeauty.com

## Customization Notes

### Images Needed
- `/images/endolift-hero.jpg` - Hero image
- `/images/endolift-og.jpg` - OpenGraph image (1200x675)
- `/images/team/Marianne.png` - Practitioner photo

### Content Updates
When updating content, key files:
- `PremiumHero.tsx` - Hero messaging and pricing
- `PremiumTreatments.tsx` - Treatment options and pricing
- `FAQ.tsx` - Q&A content
- `app/layout.tsx` - SEO metadata
