import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The 6 Gauges - Your Personal Mental Health Dashboard | InGauge',
  description: 'Track the 6 dimensions of mental wellness: Body, State, Emotion, Connection, Direction, and Alignment. Based on psychological research. Learn how the InGauge dashboard helps you understand yourself.',
  keywords: 'mental health tracking, emotional wellness, self-awareness, psychology app, mood tracking, body awareness, emotional intelligence, mental wellness dashboard, polyvagal theory, emotional granularity',
  openGraph: {
    title: 'The 6 Gauges - Your Personal Mental Health Dashboard',
    description: 'Track Body, State, Emotion, Connection, Direction, and Alignment. The dashboard you were never given.',
    type: 'website',
    url: 'https://getingauge.com/features/gauges',
    images: [
      {
        url: '/og/gauges.png',
        width: 1200,
        height: 630,
        alt: 'InGauge 6 Gauges Dashboard',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The 6 Gauges - Track Your Mental System',
    description: 'Track Body, State, Emotion, Connection, Direction, and Alignment.',
    images: ['/og/gauges.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/features/gauges',
  },
}

export default function GaugesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
