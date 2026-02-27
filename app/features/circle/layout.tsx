import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Circle - Know How Your People Are Really Doing | InGauge',
  description: 'Temperature sharing for your closest relationships. See at a glance when partners, family, and friends need support. Privacy-first relationship intelligence without constant check-ins.',
  keywords: 'relationship app, couples app, family connection, emotional sharing, temperature sharing, relationship intelligence, partner mental health, family check-in, close friends app, support network',
  openGraph: {
    title: 'Circle - Know How Your People Are Really Doing',
    description: 'Temperature sharing for your closest relationships. No more "I\'m fine."',
    type: 'website',
    url: 'https://getingauge.com/features/circle',
    images: [
      {
        url: '/og/circle.png',
        width: 1200,
        height: 630,
        alt: 'InGauge Circle - Relationship Intelligence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Circle - Relationship Intelligence',
    description: 'Know when your people need support without constant check-ins.',
    images: ['/og/circle.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/features/circle',
  },
}

export default function CircleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
