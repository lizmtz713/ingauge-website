'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Sparkles, Brain, Target, Zap, RefreshCw, 
  ChevronRight, Star, CheckCircle2, TrendingUp,
  Clock, Heart, Users, Compass
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    question: "How does it know what prompts to generate?",
    answer: "The Prompt Generator analyzes your complete context: current gauge scores, recent patterns, time of day, day of week, what you've journaled about, your goals, and even your past responses to prompts. It's not random—it's hyper-personalized."
  },
  {
    question: "Can I generate prompts anytime?",
    answer: "Yes! While InGauge suggests prompts during check-ins and at optimal times, you can manually generate prompts whenever you want. Just tap the Prompt Generator in the app and get context-aware suggestions."
  },
  {
    question: "What makes these better than generic journaling prompts?",
    answer: "Generic prompts ignore your context. Our prompts know that your Body is low today, that you've been struggling with a work situation, that it's Monday and you tend to dip early in the week. They meet you where you ARE."
  },
  {
    question: "Do prompts change based on my progress?",
    answer: "Absolutely. If you've been working on a specific pattern or goal, prompts will reference that journey. If your scores improve, prompts celebrate and explore what's working. If scores drop, prompts get more supportive."
  },
  {
    question: "Can I save or favorite prompts?",
    answer: "Yes! If a prompt resonates, you can save it to revisit later. You can also tell the system which prompts helped most, and it learns to generate more like those."
  },
  {
    question: "Is this available in the free version?",
    answer: "Free users get access to basic daily prompts. The full Prompt Generator with context-awareness, unlimited generation, and personalization is part of InGauge Pro."
  },
]

const samplePrompts = [
  {
    context: 'Body: 42, stressed week, Monday morning',
    prompt: 'Your body has been sending signals all week. If it could speak right now, what would it say it needs most?',
    why: 'Low Body + start of week = physical self-care prompt'
  },
  {
    context: 'Connection: 35, mentioned feeling isolated',
    prompt: 'Who is one person you could reach out to today, even with just a simple message? What\'s stopping you?',
    why: 'Low Connection + isolation pattern = gentle social push'
  },
  {
    context: 'Direction: 78, set goal last week',
    prompt: 'You set a goal to [X] last week. What\'s one small action you could take today that would move you closer?',
    why: 'High Direction + recent goal = momentum building'
  },
  {
    context: 'All gauges dropping, pattern detected',
    prompt: 'I notice things have been harder lately. Instead of fixing anything, what would it look like to just be gentle with yourself today?',
    why: 'Downward trend = self-compassion prompt'
  },
]

function HeroSection() {
  const [currentPrompt, setCurrentPrompt] = useState(0)
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-ingauge-muted">Killer Feature</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              AI prompts that know <span className="gradient-text">exactly where you are</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Not generic journaling prompts. AI-generated questions based on your current state, patterns, 
              goals, and history. The right question at the right moment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#how-it-works" className="btn-primary">
                See Examples
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </a>
            </motion.div>
          </div>
          
          {/* Visual: Prompt generator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500" />
              
              {/* Context display */}
              <div className="mb-4">
                <div className="text-xs text-ingauge-muted uppercase tracking-wider mb-2">Your Current Context</div>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">Body: 42</span>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">Stressed Week</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Monday AM</span>
                </div>
              </div>
              
              {/* Generated prompt */}
              <motion.div
                key={currentPrompt}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/5 rounded-2xl p-6 mb-4"
              >
                <Sparkles className="w-6 h-6 text-yellow-400 mb-3" />
                <p className="text-lg font-medium leading-relaxed">
                  {samplePrompts[currentPrompt].prompt}
                </p>
              </motion.div>
              
              {/* Why this prompt */}
              <div className="text-xs text-ingauge-muted mb-4 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                <span>{samplePrompts[currentPrompt].why}</span>
              </div>
              
              {/* Regenerate button */}
              <button
                onClick={() => setCurrentPrompt((p) => (p + 1) % samplePrompts.length)}
                className="w-full glass rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Generate Another</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const inputs = [
    { icon: Target, label: 'Current Gauges', desc: 'Your 6 gauge scores right now' },
    { icon: TrendingUp, label: 'Patterns', desc: 'Trends over days/weeks' },
    { icon: Clock, label: 'Timing', desc: 'Time, day, season context' },
    { icon: Compass, label: 'Goals', desc: 'What you\'re working toward' },
    { icon: Heart, label: 'History', desc: 'Past conversations and entries' },
    { icon: Users, label: 'Circle', desc: 'Relationship context' },
  ]
  
  return (
    <section ref={ref} id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What the AI <span className="gradient-text">considers</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            Every prompt is generated by analyzing your complete context—not just your mood.
          </p>
        </motion.div>
        
        {/* Inputs flowing to prompt */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {inputs.map((input, i) => (
              <motion.div
                key={input.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-4 text-center"
              >
                <input.icon className="w-6 h-6 mx-auto mb-2 text-ingauge-accent" />
                <div className="font-medium text-sm">{input.label}</div>
                <div className="text-xs text-ingauge-muted">{input.desc}</div>
              </motion.div>
            ))}
          </div>
          
          {/* Arrow down */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </motion.div>
          
          {/* Output */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="glass rounded-3xl p-8 max-w-2xl mx-auto text-center"
          >
            <div className="text-sm text-ingauge-muted uppercase tracking-wider mb-4">Generated Prompt</div>
            <p className="text-xl font-medium">
              "What would happen if you treated today as a recovery day instead of a productive day?"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ExamplesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Context-aware</span> examples
          </h2>
          <p className="text-lg text-ingauge-muted">Different states, different prompts</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {samplePrompts.map((sample, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="text-xs text-ingauge-muted mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Context: {sample.context}
              </div>
              <p className="text-lg font-medium mb-4">"{sample.prompt}"</p>
              <div className="flex items-center gap-2 text-sm text-yellow-400">
                <Sparkles className="w-4 h-4" />
                <span>{sample.why}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const benefits = [
    {
      title: 'Deeper Self-Reflection',
      description: 'Prompts that push past surface-level responses into genuine insight.'
    },
    {
      title: 'Pattern Breaking',
      description: 'Questions that interrupt automatic thinking and open new perspectives.'
    },
    {
      title: 'Right Timing',
      description: 'Support prompts when you\'re struggling, growth prompts when you\'re thriving.'
    },
    {
      title: 'No Blank Page Anxiety',
      description: 'Never stare at an empty journal wondering what to write about.'
    },
  ]
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why personalized prompts <span className="gradient-text">matter</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <CheckCircle2 className="w-6 h-6 text-green-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">{benefit.title}</h3>
                <p className="text-ingauge-muted">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const testimonials = [
    {
      quote: "The prompts feel like they're written specifically for what I'm going through. Because they are.",
      author: "Nina S.",
      role: "Writer",
      rating: 5
    },
    {
      quote: "I've journaled for years but never this deep. The AI asks questions I wouldn't think to ask myself.",
      author: "Robert J.",
      role: "Therapist (uses for self)",
      rating: 5
    },
    {
      quote: "Monday morning prompts hit different than Friday night prompts. It actually understands timing.",
      author: "Tara M.",
      role: "Nurse",
      rating: 5
    },
  ]
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-3xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg mb-6">"{t.quote}"</p>
              <div>
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-ingauge-muted">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function PromptGeneratorPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ExamplesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="Prompt Generator FAQ" />
      <CTA 
        title="Get prompts that actually know you"
        subtitle="The right question at the right moment. That's the power of personalized prompts."
      />
      <Footer />
    </main>
  )
}
