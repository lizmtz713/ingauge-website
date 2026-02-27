import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Human Manual - 48+ Psychology Lessons on Understanding Yourself | InGauge',
  description: 'The manual you were never given. 48+ science-backed lessons on emotions, relationships, identity, resilience, and the mind-body connection. Based on 22+ psychology textbooks.',
  keywords: 'psychology lessons, emotional intelligence course, self-help education, mental health education, understanding emotions, attachment styles, resilience training, mind body connection, psychology curriculum',
  openGraph: {
    title: 'Human Manual - 48+ Lessons on Understanding Yourself',
    description: 'The manual you were never given. Learn how your mind actually works with science-backed lessons.',
    type: 'website',
    url: 'https://getingauge.com/features/human-manual',
    images: [
      {
        url: '/og/human-manual.png',
        width: 1200,
        height: 630,
        alt: 'InGauge Human Manual - 48+ Psychology Lessons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Human Manual - Learn How Your Mind Works',
    description: '48+ science-backed lessons on emotions, relationships, and resilience.',
    images: ['/og/human-manual.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/features/human-manual',
  },
}

export default function HumanManualLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
