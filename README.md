# InGauge Website

Marketing website for InGauge - The Human Cockpit for Mental Health.

**Live URL:** https://getingauge.com

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Site Structure

```
/                           # Homepage - Hero, features overview, pricing
/features/gauges            # The 6 Gauges - Deep dive on each gauge
/features/human-manual      # Human Manual - 48+ lesson curriculum
/features/ai-tools          # AI Tools - All 7 tools explained
/features/circle            # Circle - Relationship intelligence
/features/prompt-generator  # Prompt Generator - AI personalized prompts
/features/world-temperature # World Temperature - Global mood pulse
/pricing                    # Pricing - Detailed plans & comparison
/about                      # About - Story, mission, science
/support                    # Support - Help center, FAQ, contact
/crisis                     # Crisis - 24/7 support resources
```

## SEO Features

- ✅ Page-level metadata (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card support
- ✅ JSON-LD structured data (FAQ schema, App schema)
- ✅ Canonical URLs
- ✅ Sitemap ready
- ✅ Mobile-first responsive design

## Components

Reusable components in `/app/components/`:

- `Navigation` - Site-wide header with dropdown
- `Footer` - Site-wide footer with links
- `CTA` - Call-to-action sections
- `FAQ` - Accordion FAQ with schema markup
- `FeatureHero` - Hero section for feature pages
- `Testimonials` - Customer testimonials grid

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment (Vercel)

1. Connect to GitHub repo
2. Set domain to `getingauge.com`
3. Configure DNS in GoDaddy:
   - A record: `@` → `76.76.21.21`
   - CNAME: `www` → `cname.vercel-dns.com`

## Content Notes

### Each Feature Page Includes:
- Hero with value proposition
- How it works explanation
- Detailed feature breakdown
- Use cases with examples
- FAQ section (SEO structured data)
- Testimonials
- Call-to-action

### Pricing:
- Free: $0 forever
- Pro: $4.99/mo or $39.99/yr
- Family: $7.99/mo for 5 people

### Crisis Support:
Always available, never paywalled. Links to:
- 988 Suicide & Crisis Lifeline
- Crisis Text Line
- Trans Lifeline
- Trevor Project
- Veterans Crisis Line
- International resources

## Brand Colors

```css
--bg-primary: #0A0A0F
--bg-surface: #1A1A2E
--accent: #8B5CF6 (purple)
--gauge-body: #EF4444 (red)
--gauge-state: #F59E0B (amber)
--gauge-emotion: #8B5CF6 (purple)
--gauge-connection: #3B82F6 (blue)
--gauge-direction: #10B981 (green)
--gauge-alignment: #EC4899 (pink)
```

## TODO

- [ ] Add real testimonials
- [ ] Create OG images for each page
- [ ] Add TestFlight link
- [ ] Set up analytics (Plausible/Vercel)
- [ ] Create favicon and app icons
- [ ] Add blog section
- [ ] Add legal pages (Privacy, Terms)
