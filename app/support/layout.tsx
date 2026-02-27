import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support & Help Center | InGauge',
  description: 'Get help with InGauge. Browse help articles, FAQs, contact support, and check system status. We\'re here to help you get the most from your mental health dashboard.',
  keywords: 'InGauge support, help center, customer support, InGauge FAQ, mental health app help, contact support',
  openGraph: {
    title: 'InGauge Support & Help Center',
    description: 'Get help with InGauge. Browse articles, FAQs, and contact our support team.',
    type: 'website',
    url: 'https://getingauge.com/support',
  },
  alternates: {
    canonical: 'https://getingauge.com/support',
  },
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
