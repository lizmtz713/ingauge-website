'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Heart, Zap, Brain, Users, Compass, Target, 
  TrendingUp, BarChart3, Calendar, CheckCircle2,
  ArrowRight
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'
import Testimonials from '../../components/Testimonials'

// Gauge data with full details
const gauges = [
  {
    name: 'Body',
    icon: Heart,
    color: '#EF4444',
    tagline: 'Your physical foundation',
    description: 'Track physical sensations, energy levels, sleep quality, and how your body feels. Your body is constantly sending signals—learn to read them.',
    questions: [
      'How rested do you feel?',
      'What sensations are present in your body?',
      'How is your energy level?',
      'Any pain or tension?'
    ],
    insights: [
      'Identify physical triggers for emotional states',
      'Track sleep patterns and their effects',
      'Notice the body-mind connection',
      'Build awareness of somatic signals'
    ],
    science: 'Based on interoception research and polyvagal theory—your nervous system state affects everything.'
  },
  {
    name: 'State',
    icon: Zap,
    color: '#F59E0B',
    tagline: 'Your mental bandwidth',
    description: 'Monitor your current mental state—your capacity for focus, stress levels, and cognitive load. Not all days are created equal.',
    questions: [
      'Can you focus right now?',
      'How overwhelmed do you feel?',
      'What\'s your stress level?',
      'Do you have capacity for more?'
    ],
    insights: [
      'Know when you\'re at peak performance',
      'Recognize when to push vs. rest',
      'Understand your cognitive patterns',
      'Set realistic expectations'
    ],
    science: 'Grounded in cognitive load theory and stress research—your brain has finite resources.'
  },
  {
    name: 'Emotion',
    icon: Brain,
    color: '#8B5CF6',
    tagline: 'Your emotional landscape',
    description: 'Develop emotional granularity—the ability to identify and name exactly what you\'re feeling. "Fine" is not an emotion.',
    questions: [
      'What emotions are present?',
      'What triggered this feeling?',
      'Where do you feel it in your body?',
      'What does this emotion need?'
    ],
    insights: [
      'Build emotional vocabulary',
      'Recognize emotional patterns',
      'Understand emotional triggers',
      'Practice emotion regulation'
    ],
    science: 'Based on Lisa Feldman Barrett\'s research on emotional granularity—better naming leads to better managing.'
  },
  {
    name: 'Connection',
    icon: Users,
    color: '#3B82F6',
    tagline: 'Your social bonds',
    description: 'Track the quality and depth of your relationships. We are social creatures—connection isn\'t optional.',
    questions: [
      'How connected do you feel to others?',
      'When did you last have meaningful contact?',
      'Who do you want to reach out to?',
      'Do you feel seen and understood?'
    ],
    insights: [
      'Identify relationship patterns',
      'Track social battery levels',
      'Notice isolation tendencies',
      'Build intentional connections'
    ],
    science: 'Rooted in attachment theory and social neuroscience—our brains are wired for connection.'
  },
  {
    name: 'Direction',
    icon: Compass,
    color: '#10B981',
    tagline: 'Your purpose and drive',
    description: 'Track your sense of purpose, motivation, and movement toward your goals. Without direction, we drift.',
    questions: [
      'Do you know what you want?',
      'Are you moving toward your goals?',
      'What feels meaningful right now?',
      'Where do you want to be?'
    ],
    insights: [
      'Clarify life direction',
      'Track motivation patterns',
      'Identify what gives meaning',
      'Set aligned goals'
    ],
    science: 'Based on self-determination theory and meaning research—purpose is a fundamental need.'
  },
  {
    name: 'Alignment',
    icon: Target,
    color: '#EC4899',
    tagline: 'Your authentic self',
    description: 'Measure how well your actions match your values. The gap between who you are and who you act as creates suffering.',
    questions: [
      'Are you being authentic?',
      'Do your actions match your values?',
      'What feels out of alignment?',
      'Where are you compromising yourself?'
    ],
    insights: [
      'Identify value conflicts',
      'Track authenticity over time',
      'Notice when you\'re masking',
      'Build self-congruence'
    ],
    science: 'Grounded in values-based therapy and authenticity research—alignment is mental health.'
  },
]

const faqItems = [
  {
    question: "Why 6 gauges specifically?",
    answer: "The 6 gauges were designed based on psychological research to cover the core dimensions of human experience: physical (Body), cognitive (State), emotional (Emotion), social (Connection), motivational (Direction), and identity (Alignment). Together, they give you a complete picture without overwhelming you with too many variables."
  },
  {
    question: "How often should I check my gauges?",
    answer: "We recommend checking in at least once daily—ideally at a consistent time like morning or evening. Some people check in multiple times during challenging days. The key is consistency, not frequency. Even 2-3 times per week can reveal powerful patterns."
  },
  {
    question: "What if I can't answer a question?",
    answer: "That's actually valuable information! Not knowing how you feel is data. The app doesn't require perfect answers—it helps you develop awareness over time. Start with what you DO know, and your emotional vocabulary will grow."
  },
  {
    question: "How accurate are the insights?",
    answer: "Insights improve with more data. After 2 weeks of consistent check-ins, the app starts identifying meaningful patterns. After a month, you'll see correlations you never noticed before. The more you use it, the smarter it gets."
  },
  {
    question: "Can I customize the gauges?",
    answer: "The 6 core gauges are fixed to maintain the scientific framework, but you can customize the specific questions within each gauge in Pro. You can also set focus areas to get more detailed tracking on gauges that matter most to you."
  },
  {
    question: "Is this based on real science?",
    answer: "Yes. Each gauge is grounded in established psychological frameworks: polyvagal theory (Body), cognitive load theory (State), emotional granularity research (Emotion), attachment theory (Connection), self-determination theory (Direction), and values-based therapy (Alignment). InGauge was developed by someone with B.S. degrees in Psychology and Political Science."
  },
]

const testimonials = [
  {
    quote: "The 6 gauges completely changed how I understand myself. I finally have language for what I'm experiencing.",
    author: "Rachel T.",
    role: "Psychologist",
    rating: 5,
    feature: "6 Gauges"
  },
  {
    quote: "I used to just say 'I'm stressed.' Now I can pinpoint if it's my State (overwhelmed), Connection (isolated), or Alignment (doing things against my values).",
    author: "Michael B.",
    role: "Entrepreneur",
    rating: 5,
    feature: "6 Gauges"
  },
  {
    quote: "After 3 weeks of tracking, I discovered my 'bad days' always correlate with low Body and Connection scores. Now I can intervene early.",
    author: "Lisa K.",
    role: "Nurse",
    rating: 5,
    feature: "6 Gauges"
  },
]

function GaugeDetailSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} id="learn-more" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deep dive into <span className="gradient-text">each gauge</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            Each gauge tracks a fundamental dimension of your experience. Together, they form your complete mental dashboard.
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {gauges.map((gauge, index) => (
            <motion.div
              key={gauge.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Visual */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="glass rounded-3xl p-8 relative overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 w-full h-1" 
                    style={{ background: `linear-gradient(90deg, ${gauge.color}, transparent)` }}
                  />
                  
                  {/* Gauge visualization */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-48">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" stroke="#1A1A2E" strokeWidth="8" fill="none" />
                        <motion.circle
                          cx="50" cy="50" r="45"
                          stroke={gauge.color}
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 45}
                          initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                          animate={isInView ? { strokeDashoffset: 2 * Math.PI * 45 * 0.25 } : {}}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                          style={{ filter: `drop-shadow(0 0 10px ${gauge.color}80)` }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <gauge.icon className="w-10 h-10 mb-2" style={{ color: gauge.color }} />
                        <span className="text-2xl font-bold" style={{ color: gauge.color }}>75</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sample questions */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-ingauge-muted uppercase tracking-wider">Sample Questions</h4>
                    {gauge.questions.map((q, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: gauge.color }} />
                        <span className="text-ingauge-muted">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                  style={{ backgroundColor: `${gauge.color}20` }}
                >
                  <gauge.icon className="w-5 h-5" style={{ color: gauge.color }} />
                  <span className="font-medium" style={{ color: gauge.color }}>{gauge.name}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{gauge.tagline}</h3>
                <p className="text-lg text-ingauge-muted mb-6">{gauge.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-ingauge-accent" />
                    What you'll learn
                  </h4>
                  <ul className="space-y-2">
                    {gauge.insights.map((insight, i) => (
                      <li key={i} className="flex items-center gap-3 text-ingauge-muted">
                        <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                        {insight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="glass rounded-xl p-4">
                  <h4 className="font-semibold text-sm text-ingauge-accent mb-2">🧠 The Science</h4>
                  <p className="text-sm text-ingauge-muted">{gauge.science}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const steps = [
    {
      icon: Calendar,
      title: "Daily Check-In",
      description: "Take 2 minutes to rate each gauge. The app guides you with smart questions that adapt to your patterns."
    },
    {
      icon: BarChart3,
      title: "See Patterns",
      description: "After a week, start seeing trends. Which gauges correlate? What triggers drops? What helps recovery?"
    },
    {
      icon: TrendingUp,
      title: "Get Insights",
      description: "The AI analyzes your data and surfaces actionable insights. 'When your Body drops below 40, State follows within 24 hours.'"
    },
  ]
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How the <span className="gradient-text">gauges work</span>
          </h2>
          <p className="text-lg text-ingauge-muted">Simple process, powerful results</p>
        </motion.div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-ingauge-accent/30 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 }}
                className="text-center relative"
              >
                <div className="glass w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center relative z-10">
                  <step.icon className="w-10 h-10 text-ingauge-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-ingauge-accent text-white flex items-center justify-center font-bold text-sm z-20 hidden md:flex">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-ingauge-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Hero component
function GaugesHero() {
  const gaugeColors = ['#EF4444', '#F59E0B', '#8B5CF6', '#3B82F6', '#10B981', '#EC4899']
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <div className="flex -space-x-1">
                {gaugeColors.map((color, i) => (
                  <div key={i} className="w-3 h-3 rounded-full border border-ingauge-bg" style={{ backgroundColor: color }} />
                ))}
              </div>
              <span className="text-sm text-ingauge-muted">Core Feature</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              The <span className="gradient-text">6 Gauges</span>
              <br />Your Personal Dashboard
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Track the six dimensions that matter most for mental wellness: Body, State, Emotion, Connection, Direction, and Alignment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#learn-more" className="btn-primary">
                Learn About Each Gauge
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </a>
            </motion.div>
          </div>
          
          {/* Right: Visual - Cockpit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ingauge-accent/10 to-transparent" />
              
              {/* Gauge grid */}
              <div className="grid grid-cols-3 gap-4 relative z-10">
                {gauges.map((gauge, i) => (
                  <motion.div
                    key={gauge.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-20 h-20 mb-2">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" stroke="#1A1A2E" strokeWidth="6" fill="none" />
                        <motion.circle
                          cx="50" cy="50" r="40"
                          stroke={gauge.color}
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                          strokeDasharray={2 * Math.PI * 40}
                          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                          animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - (60 + i * 5) / 100) }}
                          transition={{ delay: 0.8 + i * 0.1, duration: 1 }}
                          style={{ filter: `drop-shadow(0 0 8px ${gauge.color}60)` }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold" style={{ color: gauge.color }}>
                          {60 + i * 5}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-ingauge-muted">{gauge.name}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Overall score */}
              <div className="text-center mt-6 pt-6 border-t border-white/10">
                <div className="text-3xl font-bold gradient-text">72</div>
                <div className="text-sm text-ingauge-muted">Overall System Health</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function GaugesPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <GaugesHero />
      <HowItWorksSection />
      <GaugeDetailSection />
      <Testimonials testimonials={testimonials} title="What users say about the 6 Gauges" />
      <FAQ items={faqItems} title="Gauges FAQ" schemaId="gauges-faq" />
      <CTA 
        title="Start tracking your system"
        subtitle="Join thousands who have discovered the power of knowing themselves through the 6 Gauges."
      />
      <Footer />
    </main>
  )
}
