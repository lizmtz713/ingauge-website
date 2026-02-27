'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Users, Heart, Bell, Shield, MessageCircle, TrendingUp,
  UserPlus, Eye, EyeOff, ChevronRight, Star, CheckCircle2,
  Thermometer, Share2, Lock, Sparkles
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    question: "Do my Circle members see my exact gauge scores?",
    answer: "Only what you choose to share. You control visibility for each person in your Circle. You can share just temperature (overall score), specific gauges, or nothing at all while still seeing their updates. Privacy is granular."
  },
  {
    question: "Can Circle members see my AI conversations?",
    answer: "Absolutely not. AI conversations (Psych, Journal, etc.) are completely separate and private. Circle only shares what you explicitly configure—gauge data, never conversation content."
  },
  {
    question: "What if someone I add doesn't have InGauge?",
    answer: "You can still add them to your Circle and track relationship notes, but temperature sharing requires both people to have InGauge. They'll get an invitation to join when you add them."
  },
  {
    question: "Can I remove someone from my Circle?",
    answer: "Yes, anytime. Removing someone stops all sharing in both directions. They won't be notified that they were removed, and all shared data is disconnected."
  },
  {
    question: "How does temperature sharing actually help?",
    answer: "Knowing that your partner's State is at 35 before asking for a favor changes everything. Seeing your mom has been struggling gives you the prompt to reach out. It replaces the awkward 'how are you?' (fine) with actual insight."
  },
  {
    question: "Is this like social media?",
    answer: "The opposite. There's no feed, no likes, no public posting. It's private temperature sharing with 3-15 people you actually care about. Think of it as relationship infrastructure, not content creation."
  },
]

const testimonials = [
  {
    quote: "My wife and I share temperatures. When I see her at 45, I know to give space. When she's at 85, I know it's a good time to bring up the hard stuff. Game changer.",
    author: "Marcus T.",
    role: "Husband, 12 years",
    rating: 5,
    feature: "Circle"
  },
  {
    quote: "I check my daughter's temperature most mornings. When I see it drop, I reach out. She's told me she feels more supported than ever, even though I'm not 'checking in' constantly.",
    author: "Linda M.",
    role: "Mother of 2",
    rating: 5,
    feature: "Circle"
  },
  {
    quote: "My therapist recommended InGauge specifically for Circle. Helps me maintain awareness of my support system without the anxiety of constant texting.",
    author: "Alex K.",
    role: "Graduate Student",
    rating: 5,
    feature: "Circle"
  },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Users className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-ingauge-muted">Relationship Intelligence</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Know how your <span className="gradient-text">people</span> are really doing
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Circle is temperature sharing for your closest relationships. No more "I'm fine." 
              See at a glance when someone needs support—or when it's a good time to connect.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#how-it-works" className="btn-primary">
                See How It Works
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </a>
            </motion.div>
          </div>
          
          {/* Visual: Circle visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              <h3 className="text-lg font-semibold mb-6 text-center">Your Circle</h3>
              
              {/* Circle visualization */}
              <div className="relative w-72 h-72 mx-auto">
                {/* You in center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-ingauge-accent to-gauge-alignment flex items-center justify-center z-10">
                  <span className="text-white font-bold">You</span>
                </div>
                
                {/* Circle members */}
                {[
                  { name: 'Mom', temp: 72, color: '#10B981', angle: 0 },
                  { name: 'Jake', temp: 45, color: '#F59E0B', angle: 60 },
                  { name: 'Sarah', temp: 88, color: '#8B5CF6', angle: 120 },
                  { name: 'Dad', temp: 65, color: '#3B82F6', angle: 180 },
                  { name: 'Mia', temp: 31, color: '#EF4444', angle: 240 },
                  { name: 'Tom', temp: 78, color: '#EC4899', angle: 300 },
                ].map((person) => {
                  const radius = 100
                  const x = Math.cos((person.angle - 90) * Math.PI / 180) * radius
                  const y = Math.sin((person.angle - 90) * Math.PI / 180) * radius
                  
                  return (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + person.angle / 500 }}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      <div className="relative">
                        <div 
                          className="w-14 h-14 rounded-full flex flex-col items-center justify-center border-2"
                          style={{ 
                            backgroundColor: `${person.color}20`,
                            borderColor: person.color
                          }}
                        >
                          <span className="text-xs font-medium">{person.name}</span>
                          <span className="text-sm font-bold" style={{ color: person.color }}>
                            {person.temp}°
                          </span>
                        </div>
                        {person.temp < 40 && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                            <Bell className="w-2.5 h-2.5 text-white" />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  {[0, 60, 120, 180, 240, 300].map((angle) => {
                    const radius = 100
                    const x = Math.cos((angle - 90) * Math.PI / 180) * radius + 144
                    const y = Math.sin((angle - 90) * Math.PI / 180) * radius + 144
                    return (
                      <line
                        key={angle}
                        x1="144" y1="144"
                        x2={x} y2={y}
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    )
                  })}
                </svg>
              </div>
              
              {/* Alert */}
              <div className="mt-6 glass rounded-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                  <Bell className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-sm font-medium">Mia might need support</div>
                  <div className="text-xs text-ingauge-muted">Temperature dropped to 31° today</div>
                </div>
              </div>
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
  
  const steps = [
    {
      icon: UserPlus,
      title: 'Add Your People',
      description: 'Invite partners, family, close friends—the people you actually want to stay connected with. 3-15 people is ideal.'
    },
    {
      icon: Share2,
      title: 'Choose What to Share',
      description: 'Decide what each person sees: your overall temperature, specific gauges, or just the fact that you\'re connected.'
    },
    {
      icon: Thermometer,
      title: 'See Their Temperature',
      description: 'When they check in, you see their current state. No awkward "how are you?" needed—you already know.'
    },
    {
      icon: Heart,
      title: 'Connect When It Matters',
      description: 'Reach out when you see someone struggling. Celebrate when they\'re thriving. Be present, not intrusive.'
    },
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
            How <span className="gradient-text">Circle</span> works
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            Simple setup, profound impact on your relationships
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="glass w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative">
                <step.icon className="w-8 h-8 text-blue-400" />
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-ingauge-accent text-white flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-ingauge-muted">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrivacySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const privacyFeatures = [
    {
      icon: Eye,
      title: 'Granular Control',
      description: 'Choose exactly what each person sees. Share everything with your partner, just temperature with friends.'
    },
    {
      icon: EyeOff,
      title: 'Hide Anytime',
      description: 'Having a rough day and don\'t want to share? Pause sharing temporarily without removing anyone.'
    },
    {
      icon: Lock,
      title: 'Conversations Private',
      description: 'Your AI conversations, journal entries, and personal notes are NEVER shared with Circle members.'
    },
    {
      icon: Shield,
      title: 'No Screenshots',
      description: 'Screenshot detection alerts you if someone tries to capture your shared data (iOS).'
    },
  ]
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Privacy <span className="gradient-text">first</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            Sharing vulnerable data requires trust. We built Circle with privacy as the foundation.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {privacyFeatures.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{feature.title}</h3>
                <p className="text-sm text-ingauge-muted">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCasesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const useCases = [
    {
      title: 'Couples',
      description: 'Know when your partner needs space vs. connection. Time difficult conversations for when both are regulated.',
      example: '"I saw you were at 42 this morning. Want to talk, or want me to give you space?"'
    },
    {
      title: 'Parents & Kids',
      description: 'Stay connected with adult children or teenagers without constant check-ins. See when they\'re struggling.',
      example: '"I noticed your temperature dropped. I\'m here if you need anything, no pressure."'
    },
    {
      title: 'Close Friends',
      description: 'Maintain awareness of your people without the labor of constant texting. Reach out when it matters.',
      example: '"Hey, saw you\'ve been in the 30s this week. Coffee this weekend?"'
    },
    {
      title: 'Support Networks',
      description: 'For those in recovery or managing mental health, Circle provides accountability without surveillance.',
      example: '"I\'m adding my sponsor and therapist to Circle so they can see my patterns."'
    },
  ]
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Circle for <span className="gradient-text">every relationship</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-bold text-lg mb-2">{useCase.title}</h3>
              <p className="text-ingauge-muted mb-4">{useCase.description}</p>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-sm italic text-ingauge-muted">"{useCase.example}"</p>
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
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Stronger connections</span>
          </h2>
        </motion.div>
        
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

export default function CirclePage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <PrivacySection />
      <UseCasesSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="Circle FAQ" />
      <CTA 
        title="Know your people better"
        subtitle="Circle transforms 'how are you?' from a ritual into real connection."
      />
      <Footer />
    </main>
  )
}
