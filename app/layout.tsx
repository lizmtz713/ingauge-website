import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://getingauge.com'),
  title: {
    default: 'InGauge - The Human Cockpit | Mental Health Dashboard App',
    template: '%s | InGauge'
  },
  description: 'You are not broken. You are a system. InGauge gives you the dashboard you were never given. Track your mental health with 6 gauges, 48+ psychology lessons, 7 AI tools, and relationship intelligence. Based on real science.',
  keywords: [
    'mental health app',
    'psychology app',
    'emotional intelligence',
    'mood tracking',
    'mental wellness',
    'self-awareness app',
    'therapy app',
    'mental health dashboard',
    'PHOSM',
    'personal health operating system',
    'emotional granularity',
    'relationship intelligence',
    'AI mental health',
    'psychology lessons',
    'human manual',
  ],
  authors: [{ name: 'Elizabeth Martinez', url: 'https://getingauge.com/about' }],
  creator: 'InGauge',
  publisher: 'InGauge',
  openGraph: {
    title: 'InGauge - The Human Cockpit',
    description: 'You are not broken. You are a system. InGauge gives you the dashboard you were never given.',
    type: 'website',
    url: 'https://getingauge.com',
    siteName: 'InGauge',
    locale: 'en_US',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'InGauge - The Human Cockpit for Mental Health',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InGauge - The Human Cockpit',
    description: 'You are not broken. You are a system. Track your mental health with the dashboard you were never given.',
    site: '@getingauge',
    creator: '@getingauge',
    images: ['/og/home.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://getingauge.com',
  },
  category: 'Health & Wellness',
}

// JSON-LD Schema for rich search results
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'InGauge',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'iOS',
  description: 'Mental health dashboard app with 6 gauges, 48+ psychology lessons, 7 AI tools, and relationship intelligence.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free tier with optional Pro upgrade at $4.99/month'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '2847',
    bestRating: '5',
    worstRating: '1'
  },
  author: {
    '@type': 'Person',
    name: 'Elizabeth Martinez'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A0A0F" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ingauge-bg text-white antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
