import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '7 AI Tools - Psych, Relate, Replay, Decode & More | InGauge',
  description: 'AI-powered mental health tools: Talk to Psych, Relate (understand others), Replay (process events), Role Play (practice conversations), Journal, Help, Decode (message analysis), and Love. Privacy-first, psychology-trained AI.',
  keywords: 'AI mental health, AI therapy chatbot, AI counseling, emotional AI, relationship AI, conversation practice AI, message analysis AI, journaling AI, psychology AI, mental health app',
  openGraph: {
    title: '7 AI Tools That Actually Understand You',
    description: 'Psychology-trained AI tools for processing, practice, and understanding. Not generic chatbots.',
    type: 'website',
    url: 'https://getingauge.com/features/ai-tools',
    images: [
      {
        url: '/og/ai-tools.png',
        width: 1200,
        height: 630,
        alt: 'InGauge AI Tools - 7 Psychology-Trained AI Assistants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 AI Tools - Mental Health AI That Gets It',
    description: 'Psych, Relate, Replay, Decode & more. AI trained on psychology, not just chat.',
    images: ['/og/ai-tools.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/features/ai-tools',
  },
}

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
