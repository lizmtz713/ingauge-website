'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Activity, Heart, Moon, Sun, Leaf, Sparkles,
  Brain, Zap, Users, Target, Compass, ChevronRight, 
  Star, CheckCircle2, Apple, Watch, Shield
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    question: "Does InGauge track my period?",
    answer: "InGauge reads cycle data from Apple HealthKit—it doesn't track directly. This means if you already use a period tracker (Clue, Flo, Apple Health, etc.), InGauge automatically gets your data. You can also enter your cycle manually if you prefer."
  },
  {
    question: "What if I don't have regular cycles?",
    answer: "Cycle Intelligence adapts to irregular cycles. It learns YOUR patterns, not textbook patterns. If your cycles vary, the AI adjusts its insights accordingly. For those with PCOS, perimenopause, or other conditions affecting cycle regularity, the pattern learning gets smarter over time."
  },
  {
    question: "How does this affect my AI conversations?",
    answer: "When cycle tracking is enabled, Gauge (the AI) automatically knows where you are in your cycle. So if you say 'I feel terrible today,' Gauge can respond with context: 'You're on Day 24—luteal phase. This dip is typical for you. It's not something wrong—it's your pattern.'"
  },
  {
    question: "Can I share cycle data with my Circle?",
    answer: "Completely optional and granular. You can share just the phase (so your partner sees 'luteal phase'), or nothing at all. Your detailed cycle data is never shared unless you explicitly choose to."
  },
  {
    question: "What data sources work?",
    answer: "Any app that syncs to Apple HealthKit: period trackers (Clue, Flo, Period Tracker), wearables (Apple Watch, Oura Ring, Whoop), or manual entry in Apple Health. InGauge reads—never writes—to HealthKit."
  },
  {
    question: "Is this only for people who menstruate?",
    answer: "Cycle Intelligence is designed for menstrual cycles, but the pattern-learning approach applies to anyone tracking biological rhythms. Future versions may include circadian rhythm intelligence, seasonal patterns, and other biological cycles that affect everyone."
  },
]

const testimonials = [
  {
    quote: "I used to think I was broken one week a month. InGauge showed me it's my luteal phase—every time. Now I schedule lighter those weeks. Revolutionary.",
    author: "Jessica M.",
    role: "Marketing Director, 34",
    rating: 5
  },
  {
    quote: "My husband now gets a heads up that I'm in luteal phase. He doesn't take it personally when I need space. Best thing we've done for our marriage.",
    author: "Aisha K.",
    role: "Mother of 3",
    rating: 5
  },
  {
    quote: "As someone with PMDD, seeing my patterns validated by data changed everything. I'm not crazy. I'm cycling. InGauge proves it.",
    author: "Rachel T.",
    role: "Therapist",
    rating: 5
  },
]

// Phase data
const phases = [
  { 
    name: 'Menstrual', 
    emoji: '🌑', 
    days: '1-5', 
    color: '#8B0000',
    energy: 'low',
    description: 'Inner winter — time for rest',
    gaugeEffects: ['Body: Lower energy is normal', 'State: Need extra gentleness', 'Direction: Rest is productive']
  },
  { 
    name: 'Follicular', 
    emoji: '🌱', 
    days: '6-14', 
    color: '#228B22',
    energy: 'rising',
    description: 'Inner spring — energy builds',
    gaugeEffects: ['Body: Energy increasing', 'Emotion: Optimism rising', 'Direction: Start new projects']
  },
  { 
    name: 'Ovulatory', 
    emoji: '☀️', 
    days: '15-17', 
    color: '#FFD700',
    energy: 'peak',
    description: 'Inner summer — peak power',
    gaugeEffects: ['Body: Peak performance', 'Connection: Social magnetism', 'Direction: Make big moves']
  },
  { 
    name: 'Luteal', 
    emoji: '🌙', 
    days: '18-28', 
    color: '#4B0082',
    energy: 'declining',
    description: 'Inner autumn — winding down',
    gaugeEffects: ['State: More sensitive', 'Emotion: Inner critic louder', 'Alignment: Doubt is normal']
  },
]

function HeroSection() {
  const [activePhase, setActivePhase] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase(p => (p + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <Activity className="w-4 h-4 text-pink-400" />
              <span className="text-sm text-ingauge-muted">HealthKit Integration</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Your cycle affects <span className="gradient-text">everything</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ingauge-muted mb-4 max-w-xl mx-auto lg:mx-0"
            >
              Now your dashboard knows it too.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Cycle Intelligence reads your menstrual cycle data and shows how each phase affects 
              all 6 gauges. Finally understand <em>why</em> some days feel harder.
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
          
          {/* Visual: Phase Ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Phase Ring */}
              <div className="relative w-64 h-64 mx-auto mb-6">
                {/* Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full glass flex flex-col items-center justify-center border-2 border-white/10">
                    <motion.span 
                      key={activePhase}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-3xl mb-1"
                    >
                      {phases[activePhase].emoji}
                    </motion.span>
                    <motion.span 
                      key={`name-${activePhase}`}
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-sm font-semibold"
                    >
                      {phases[activePhase].name}
                    </motion.span>
                    <span className="text-xs text-ingauge-muted">Day 14</span>
                  </div>
                </div>
                
                {/* Phase indicators */}
                {phases.map((phase, i) => {
                  const angle = i * 90 - 90
                  const x = Math.cos(angle * Math.PI / 180) * 90
                  const y = Math.sin(angle * Math.PI / 180) * 90
                  const isActive = i === activePhase
                  
                  return (
                    <motion.div
                      key={phase.name}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        opacity: isActive ? 1 : 0.5
                      }}
                    >
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all"
                        style={{ 
                          backgroundColor: `${phase.color}20`,
                          borderColor: isActive ? phase.color : 'transparent'
                        }}
                      >
                        <span className="text-xl">{phase.emoji}</span>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
              
              {/* Current phase info */}
              <motion.div 
                key={`info-${activePhase}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
              >
                <p className="text-ingauge-muted mb-3">{phases[activePhase].description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {phases[activePhase].gaugeEffects.map((effect, i) => (
                    <span key={i} className="text-xs glass px-3 py-1 rounded-full">
                      {effect}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function InsightSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The <span className="gradient-text">magic insight</span>
            </h2>
          </div>
          
          <div className="bg-white/5 rounded-2xl p-6 mb-8">
            <p className="text-lg md:text-xl text-center leading-relaxed">
              "Your State dropped to 42, but you're on <strong className="text-pink-400">Day 23</strong>. 
              Based on your history, you tend to dip here. 
              <span className="block mt-2 text-ingauge-muted">This isn't something wrong — it's your pattern.</span>"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">📊</div>
              <h4 className="font-semibold mb-1">Pattern Learning</h4>
              <p className="text-sm text-ingauge-muted">Records your gauge values by phase to build YOUR patterns</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤖</div>
              <h4 className="font-semibold mb-1">AI Context</h4>
              <p className="text-sm text-ingauge-muted">Every AI response knows where you are in your cycle</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💜</div>
              <h4 className="font-semibold mb-1">Normalization</h4>
              <p className="text-sm text-ingauge-muted">Stop pathologizing biology. Understand your rhythms.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const steps = [
    {
      icon: Apple,
      title: 'Connect HealthKit',
      description: 'One tap connects your existing cycle data from Apple Health, Oura, or any period tracker.'
    },
    {
      icon: Activity,
      title: 'See Your Phase',
      description: 'Dashboard shows current phase, day of cycle, and what to expect for energy, mood, and focus.'
    },
    {
      icon: Brain,
      title: 'Gauge Context',
      description: 'Each gauge shows how your cycle affects it. "Body: 45 — lower energy is normal for luteal phase."'
    },
    {
      icon: Sparkles,
      title: 'Smart AI',
      description: 'When you talk to Gauge, it already knows your cycle context. Personalized support, always.'
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
            How <span className="gradient-text">Cycle Intelligence</span> works
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            Your cycle runs underneath everything. Now the app sees it too.
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
                <step.icon className="w-8 h-8 text-pink-400" />
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

function GaugeEffectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const gauges = [
    { name: 'Body', icon: Heart, color: '#EF4444', effect: 'Energy levels fluctuate predictably across your cycle' },
    { name: 'State', icon: Zap, color: '#F59E0B', effect: 'Nervous system sensitivity changes by phase' },
    { name: 'Emotion', icon: Brain, color: '#8B5CF6', effect: 'Emotional intensity and inner critic volume vary' },
    { name: 'Connection', icon: Users, color: '#3B82F6', effect: 'Social needs shift from solitude to connection' },
    { name: 'Direction', icon: Compass, color: '#10B981', effect: 'Motivation peaks follicular, dips luteal' },
    { name: 'Alignment', icon: Target, color: '#EC4899', effect: 'Values clarity fluctuates with hormones' },
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
            How cycles affect <span className="gradient-text">every gauge</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            Your cycle isn't separate from who you are — it's running underneath EVERYTHING.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gauges.map((gauge, i) => (
            <motion.div
              key={gauge.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 card-hover"
              style={{ borderTop: `3px solid ${gauge.color}` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${gauge.color}20` }}
                >
                  <gauge.icon className="w-6 h-6" style={{ color: gauge.color }} />
                </div>
                <h3 className="text-xl font-bold">{gauge.name}</h3>
              </div>
              <p className="text-ingauge-muted">{gauge.effect}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DataSourcesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const sources = [
    { name: 'Apple Health', icon: Apple, description: 'Native iOS integration' },
    { name: 'Apple Watch', icon: Watch, description: 'Auto-sync from wrist' },
    { name: 'Oura Ring', icon: Activity, description: 'Via HealthKit' },
    { name: 'Period Trackers', icon: Moon, description: 'Clue, Flo, etc.' },
  ]
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works with what you <span className="gradient-text">already use</span>
          </h2>
          <p className="text-lg text-ingauge-muted mb-12 max-w-2xl mx-auto">
            InGauge reads from Apple HealthKit. If your tracker syncs there, we see it.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sources.map((source, i) => (
            <motion.div
              key={source.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <source.icon className="w-10 h-10 mx-auto mb-3 text-pink-400" />
              <h4 className="font-semibold mb-1">{source.name}</h4>
              <p className="text-xs text-ingauge-muted">{source.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 flex items-center justify-center gap-2 text-sm text-ingauge-muted"
        >
          <Shield className="w-4 h-4" />
          <span>InGauge only reads — never writes — to HealthKit</span>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Finally understood</span>
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

export default function CycleIntelligencePage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <InsightSection />
      <HowItWorksSection />
      <GaugeEffectsSection />
      <DataSourcesSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="Cycle Intelligence FAQ" />
      <CTA 
        title="Understand your rhythms"
        subtitle="Your cycle affects everything. Now your dashboard knows it too."
      />
      <Footer />
    </main>
  )
}
