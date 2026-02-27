import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About InGauge - Our Story, Mission & Science | InGauge',
  description: 'InGauge was built by Elizabeth Martinez, who holds B.S. degrees in Psychology and Political Science. Learn about our mission to democratize mental health tools, the science behind the 6 Gauges, and our values.',
  keywords: 'InGauge founder, mental health app story, psychology app science, Elizabeth Martinez, PHOSM framework, mental health mission, psychology research app',
  openGraph: {
    title: 'About InGauge - Built by Someone Who Needed It',
    description: 'The story behind InGauge, our mission to democratize self-understanding, and the science that powers it.',
    type: 'website',
    url: 'https://getingauge.com/about',
    images: [
      {
        url: '/og/about.png',
        width: 1200,
        height: 630,
        alt: 'About InGauge - Our Story',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About InGauge - Our Story & Mission',
    description: 'Built by someone who needed it. Grounded in psychology research from 22+ textbooks.',
    images: ['/og/about.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
