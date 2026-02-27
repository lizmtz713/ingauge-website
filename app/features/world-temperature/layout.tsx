import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'World Temperature - See How Humanity Is Feeling | InGauge',
  description: 'Real-time aggregate of global mental wellness. World Temperature shows how InGauge users worldwide are feeling right now. Anonymous, privacy-first, connecting you to humanity\'s collective mood.',
  keywords: 'global mood, world mental health, collective consciousness, mental health data, global wellness, humanity mood, real-time wellness, anonymous mental health data, global emotions',
  openGraph: {
    title: 'World Temperature - How Is Humanity Feeling Right Now?',
    description: 'Real-time aggregate showing the collective mood of InGauge users globally. You\'re not alone.',
    type: 'website',
    url: 'https://getingauge.com/features/world-temperature',
    images: [
      {
        url: '/og/world-temperature.png',
        width: 1200,
        height: 630,
        alt: 'InGauge World Temperature - Global Mental Wellness Pulse',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Temperature - Humanity\'s Mood Right Now',
    description: 'See the real-time collective mood of thousands worldwide. You\'re not alone.',
    images: ['/og/world-temperature.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/features/world-temperature',
  },
}

export default function WorldTemperatureLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
