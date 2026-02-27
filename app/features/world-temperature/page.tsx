'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { 
  Globe, Users, TrendingUp, MapPin, Clock, Shield,
  ChevronRight, Star, CheckCircle2, Activity, Heart,
  BarChart3, Eye, EyeOff, Sparkles
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'

const faqItems = [
  {
    question: "How is the World Temperature calculated?",
    answer: "World Temperature is an aggregate of all InGauge users' overall scores, weighted and anonymized. No individual data is ever exposed—you're seeing a statistical aggregate of thousands of check-ins, updated in near real-time."
  },
  {
    question: "Is my data used for this?",
    answer: "Only if you opt in. By default, your data contributes to World Temperature anonymously (just a number in the aggregate). You can opt out entirely in Settings, and your individual scores will never be visible to anyone."
  },
  {
    question: "Why does seeing global mood help me?",
    answer: "It provides perspective. When you're struggling and see that humanity is at 62°, you realize you're not alone. When the world dips and you're at 80°, it reminds you to have compassion for others. It connects your personal experience to the collective."
  },
  {
    question: "How accurate is it?",
    answer: "It's as accurate as the data allows—currently representing tens of thousands of active users across 100+ countries. It's not a scientific survey, but it's a genuine pulse of how InGauge users are feeling. Accuracy improves as more people join."
  },
  {
    question: "Will there be regional data?",
    answer: "Yes! Regional World Temperature is planned for Phase 2. You'll be able to see how your city, state, or country is feeling compared to global averages. This requires more users in each region to maintain anonymity."
  },
  {
    question: "Can I see historical trends?",
    answer: "Pro users can see World Temperature trends over time—daily, weekly, and monthly patterns. You'll notice things like Monday dips, holiday effects, and even responses to world events."
  },
]

// Live World Temperature Component
function LiveWorldTemperature() {
  const [temperature, setTemperature] = useState(72)
  const [mood, setMood] = useState('balanced')
  const [activeUsers, setActiveUsers] = useState(47832)
  const [trend, setTrend] = useState('+2.3')
  
  useEffect(() => {
    const interval = setInterval(() => {
      const newTemp = 68 + Math.random() * 15
      setTemperature(Math.round(newTemp))
      setActiveUsers(prev => prev + Math.floor(Math.random() * 20 - 10))
      setTrend(Math.random() > 0.5 ? `+${(Math.random() * 3).toFixed(1)}` : `-${(Math.random() * 2).toFixed(1)}`)
      
      if (newTemp < 50) setMood('struggling')
      else if (newTemp < 65) setMood('processing')
      else if (newTemp < 80) setMood('balanced')
      else setMood('thriving')
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])
  
  const getMoodColor = () => {
    if (temperature < 50) return '#EF4444'
    if (temperature < 65) return '#F59E0B'
    if (temperature < 80) return '#10B981'
    return '#8B5CF6'
  }

  return (
    <div className="glass rounded-3xl p-8 relative overflow-hidden">
      {/* Pulsing background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-40 h-40 rounded-full pulse-ring" style={{ border: `2px solid ${getMoodColor()}40` }} />
        <div className="absolute w-60 h-60 rounded-full pulse-ring" style={{ border: `2px solid ${getMoodColor()}20`, animationDelay: '0.5s' }} />
        <div className="absolute w-80 h-80 rounded-full pulse-ring" style={{ border: `2px solid ${getMoodColor()}10`, animationDelay: '1s' }} />
      </div>
      
      {/* Globe */}
      <div className="relative flex justify-center mb-6">
        <div className="relative w-48 h-48">
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${getMoodColor()}40, ${getMoodColor()}10, transparent)`,
              boxShadow: `0 0 80px ${getMoodColor()}40, inset 0 0 50px ${getMoodColor()}20`
            }}
          />
          
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full globe-rotate" viewBox="0 0 100 100">
            <defs>
              <clipPath id="globeClip2">
                <circle cx="50" cy="50" r="48" />
              </clipPath>
            </defs>
            <g clipPath="url(#globeClip2)" stroke={getMoodColor()} strokeWidth="0.5" fill="none" opacity="0.3">
              {[0, 30, 60, 90, 120, 150].map((deg) => (
                <ellipse key={deg} cx="50" cy="50" rx={48 * Math.cos(deg * Math.PI / 180)} ry="48" />
              ))}
              {[-30, 0, 30].map((lat) => (
                <ellipse key={lat} cx="50" cy={50 + lat * 0.8} rx="48" ry={48 * Math.cos(lat * Math.PI / 180) * 0.3} />
              ))}
            </g>
          </svg>
          
          {/* Hotspots */}
          <div className="absolute inset-0">
            {[
              { top: '20%', left: '30%', size: 8 },
              { top: '40%', left: '60%', size: 12 },
              { top: '60%', left: '25%', size: 6 },
              { top: '35%', left: '45%', size: 10 },
              { top: '55%', left: '70%', size: 8 },
              { top: '25%', left: '55%', size: 6 },
              { top: '70%', left: '40%', size: 7 },
            ].map((spot, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: spot.top,
                  left: spot.left,
                  width: spot.size,
                  height: spot.size,
                  background: getMoodColor(),
                  boxShadow: `0 0 ${spot.size * 2}px ${getMoodColor()}`
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
          
          {/* Center temperature */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              key={temperature}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl font-bold"
              style={{ color: getMoodColor(), textShadow: `0 0 30px ${getMoodColor()}` }}
            >
              {temperature}°
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Status */}
      <div className="text-center relative z-10">
        <p className="text-sm text-ingauge-muted mb-1">Right now, humanity is feeling...</p>
        <motion.h3 
          key={mood}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold capitalize mb-4"
          style={{ color: getMoodColor() }}
        >
          {mood}
        </motion.h3>
        
        {/* Stats */}
        <div className="flex justify-center gap-8 mb-4">
          <div className="text-center">
            <div className="text-2xl font-semibold text-white">{activeUsers.toLocaleString()}</div>
            <div className="text-xs text-ingauge-muted">Active now</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-semibold text-white">127</div>
            <div className="text-xs text-ingauge-muted">Countries</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-semibold ${trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
              {trend}°
            </div>
            <div className="text-xs text-ingauge-muted">vs yesterday</div>
          </div>
        </div>
        
        <p className="text-xs text-ingauge-muted/60">
          Anonymous, aggregate data • Updated in real-time
        </p>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] animate-pulse-slow" />
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
              <Globe className="w-4 h-4 text-green-400" />
              <span className="text-sm text-ingauge-muted">Killer Feature</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              See how <span className="gradient-text">humanity</span> is feeling right now
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              World Temperature aggregates anonymous data from InGauge users globally. 
              See the collective mood of humanity in real-time. You're not alone in what you're feeling.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#how-it-works" className="btn-primary">
                Learn How It Works
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </a>
            </motion.div>
          </div>
          
          {/* Visual: Live World Temperature */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <LiveWorldTemperature />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhyItMattersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const reasons = [
    {
      icon: Heart,
      title: 'You\'re Not Alone',
      description: 'When you\'re struggling and see thousands of others are too, it normalizes your experience. Mental health isn\'t individual—it\'s collective.'
    },
    {
      icon: TrendingUp,
      title: 'Perspective',
      description: 'Seeing global trends helps contextualize your own patterns. Mondays are hard for everyone. Holiday seasons affect millions. You\'re part of something larger.'
    },
    {
      icon: Users,
      title: 'Compassion',
      description: 'When the world is struggling and you\'re doing okay, it\'s a reminder to extend grace to others. When you\'re down and others are up, it shows recovery is possible.'
    },
    {
      icon: Globe,
      title: 'Connection',
      description: 'In an age of isolation, World Temperature creates a sense of shared humanity. Your check-in isn\'t just for you—it\'s a heartbeat in a global pulse.'
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
            Why World Temperature <span className="gradient-text">matters</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            More than a number—it's a reminder that we're all in this together.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-ingauge-muted">{reason.description}</p>
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
  const isInView = useInView(ref, { once: true })
  
  const steps = [
    {
      icon: Activity,
      title: 'Users Check In',
      description: 'Tens of thousands of InGauge users complete daily check-ins around the world.'
    },
    {
      icon: Shield,
      title: 'Data Anonymized',
      description: 'Individual scores are stripped of all identifying information and aggregated.'
    },
    {
      icon: BarChart3,
      title: 'Temperature Calculated',
      description: 'Statistical algorithms compute the weighted average, filtered for outliers.'
    },
    {
      icon: Globe,
      title: 'World Temperature Updates',
      description: 'The global pulse updates in near real-time, showing humanity\'s collective state.'
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
            How it <span className="gradient-text">works</span>
          </h2>
        </motion.div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-green-500/30 to-transparent hidden lg:block" />
          
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="glass w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-green-400" />
                </div>
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm z-20">
                  {i + 1}
                </div>
                <h3 className="font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-ingauge-muted">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function PrivacySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">
              <Shield className="w-7 h-7 text-green-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Privacy First</h2>
              <p className="text-ingauge-muted">Your data, your control</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <strong>100% Anonymous:</strong> Your individual score is never visible. Only aggregates of thousands.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <strong>Opt-Out Available:</strong> Don't want to contribute? Toggle off in Settings. No judgment.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <strong>No Location Tracking:</strong> Regional data (coming soon) uses timezone, not GPS.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
              <div>
                <strong>Minimum Thresholds:</strong> Regional data only shows when enough users exist to prevent identification.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ComingSoonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const upcoming = [
    {
      title: 'Regional Temperature',
      description: 'See how your city, state, or country is feeling compared to global averages.',
      eta: 'Q2 2026'
    },
    {
      title: 'Historical Trends',
      description: 'View World Temperature patterns over days, weeks, months—and correlate with world events.',
      eta: 'Q2 2026'
    },
    {
      title: 'Gauge Breakdown',
      description: 'See which gauges are driving global mood—is it Connection? State? Body?',
      eta: 'Q3 2026'
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
          <Sparkles className="w-10 h-10 text-ingauge-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Coming Soon</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {upcoming.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="text-xs bg-ingauge-accent/20 text-ingauge-accent px-2 py-1 rounded-full inline-block mb-4">
                {item.eta}
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-ingauge-muted">{item.description}</p>
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
      quote: "Seeing the world at 58° on a Monday morning made me realize it's not just me. We're all in this together.",
      author: "Sam R.",
      role: "Remote Worker",
      rating: 5
    },
    {
      quote: "I check World Temperature before doom-scrolling news. It tells me more about how people are actually doing.",
      author: "Elena V.",
      role: "Journalist",
      rating: 5
    },
    {
      quote: "When I'm thriving and the world is struggling, it reminds me to reach out to people. Beautiful feature.",
      author: "Marcus L.",
      role: "Life Coach",
      rating: 5
    },
  ]
  
  return (
    <section ref={ref} className="py-20">
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

export default function WorldTemperaturePage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyItMattersSection />
      <HowItWorksSection />
      <PrivacySection />
      <ComingSoonSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="World Temperature FAQ" />
      <CTA 
        title="Join the global pulse"
        subtitle="Your check-in becomes part of something larger. See how humanity is feeling—and know you're not alone."
      />
      <Footer />
    </main>
  )
}
