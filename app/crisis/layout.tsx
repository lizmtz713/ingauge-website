import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crisis Support - 24/7 Help Resources | InGauge',
  description: 'If you\'re in crisis, please reach out. 988 Suicide & Crisis Lifeline, Crisis Text Line, Trans Lifeline, Trevor Project, and more. Free, confidential, 24/7 support.',
  keywords: '988, crisis support, suicide prevention, mental health crisis, crisis hotline, suicide hotline, crisis text line, trans lifeline, trevor project',
  openGraph: {
    title: 'Crisis Support - You Matter',
    description: 'Free, confidential crisis support available 24/7. Call 988 or text HOME to 741741.',
    type: 'website',
    url: 'https://getingauge.com/crisis',
  },
  alternates: {
    canonical: 'https://getingauge.com/crisis',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CrisisLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
