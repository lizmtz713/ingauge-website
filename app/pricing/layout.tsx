import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Free, Pro $4.99/mo, Family $7.99/mo | InGauge',
  description: 'InGauge pricing: Free forever tier, Pro at $4.99/month (or $39.99/year), Family plan for 5 people at $7.99/month. The most affordable premium mental health app. Student discounts available.',
  keywords: 'mental health app pricing, InGauge cost, mental health subscription, affordable mental health app, therapy app cost, wellness app pricing, family mental health plan',
  openGraph: {
    title: 'InGauge Pricing - Mental Health That Doesn\'t Break the Bank',
    description: 'Free forever tier, Pro at $4.99/mo, Family at $7.99/mo for 5. The most affordable premium mental health app.',
    type: 'website',
    url: 'https://getingauge.com/pricing',
    images: [
      {
        url: '/og/pricing.png',
        width: 1200,
        height: 630,
        alt: 'InGauge Pricing - Affordable Mental Health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InGauge Pricing - $4.99/mo for Everything',
    description: 'Free forever tier available. Pro unlocks 48+ lessons, 7 AI tools, Circle, and more.',
    images: ['/og/pricing.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/pricing',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
