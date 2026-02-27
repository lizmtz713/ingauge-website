import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Prompt Generator - Personalized Journaling Prompts | InGauge',
  description: 'AI-generated prompts based on your current mental state, patterns, goals, and history. Not generic questions—hyper-personalized reflection prompts that meet you where you are.',
  keywords: 'journaling prompts, AI prompts, personalized journaling, reflection questions, mental health journaling, self-reflection AI, therapeutic prompts, guided journaling, mood-based prompts',
  openGraph: {
    title: 'AI Prompt Generator - Questions That Know You',
    description: 'Personalized prompts based on your current state, patterns, and goals. The right question at the right moment.',
    type: 'website',
    url: 'https://getingauge.com/features/prompt-generator',
    images: [
      {
        url: '/og/prompt-generator.png',
        width: 1200,
        height: 630,
        alt: 'InGauge AI Prompt Generator',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Prompt Generator - Personalized Journaling',
    description: 'AI prompts that know your context, patterns, and what you need to reflect on.',
    images: ['/og/prompt-generator.png'],
  },
  alternates: {
    canonical: 'https://getingauge.com/features/prompt-generator',
  },
}

export default function PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
