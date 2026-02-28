'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { 
  Brain, Heart, Compass, Users, Zap, Target, 
  BookOpen, MessageCircle, Shield, Sparkles,
  ChevronRight, Apple, Play, Check, Star,
  Globe, Activity, TrendingUp, Mail, Lock, Send
} from 'lucide-react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// World Temperature Component - The Hero Feature
function WorldTemperature() {
  const [temperature, setTemperature] = useState(72)
  const [mood, setMood] = useState('balanced')
  const [activeUsers, setActiveUsers] = useState(47832)
  
  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      const newTemp = 68 + Math.random() * 15
      setTemperature(Math.round(newTemp))
      setActiveUsers(prev => prev + Math.floor(Math.random() * 10 - 5))
      
      if (newTemp < 60) setMood('struggling')
      else if (newTemp < 70) setMood('processing')
      else if (newTemp < 80) setMood('balanced')
      else setMood('thriving')
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])
  
  const getMoodColor = () => {
    if (temperature < 60) return '#EF4444'
    if (temperature < 70) return '#F59E0B'
    if (temperature < 80) return '#10B981'
    return '#8B5CF6'
  }
  
  const getMoodGradient = () => {
    if (temperature < 60) return 'from-red-500/20 to-red-900/20'
    if (temperature < 70) return 'from-amber-500/20 to-amber-900/20'
    if (temperature < 80) return 'from-green-500/20 to-green-900/20'
    return 'from-purple-500/20 to-purple-900/20'
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className={`relative glass rounded-3xl p-8 max-w-md mx-auto bg-gradient-to-br ${getMoodGradient()}`}
    >
      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-32 h-32 rounded-full pulse-ring" style={{ border: `2px solid ${getMoodColor()}40` }} />
        <div className="absolute w-48 h-48 rounded-full pulse-ring" style={{ border: `2px solid ${getMoodColor()}20`, animationDelay: '0.5s' }} />
        <div className="absolute w-64 h-64 rounded-full pulse-ring" style={{ border: `2px solid ${getMoodColor()}10`, animationDelay: '1s' }} />
      </div>
      
      {/* Globe visualization */}
      <div className="relative flex justify-center mb-6">
        <div className="relative w-40 h-40">
          {/* Globe base */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle at 30% 30%, ${getMoodColor()}40, ${getMoodColor()}10, transparent)`,
              boxShadow: `0 0 60px ${getMoodColor()}40, inset 0 0 40px ${getMoodColor()}20`
            }}
          />
          
          {/* Grid lines */}
          <svg className="absolute inset-0 w-full h-full globe-rotate" viewBox="0 0 100 100">
            <defs>
              <clipPath id="globeClip">
                <circle cx="50" cy="50" r="48" />
              </clipPath>
            </defs>
            <g clipPath="url(#globeClip)" stroke={getMoodColor()} strokeWidth="0.5" fill="none" opacity="0.3">
              {/* Longitude lines */}
              {[0, 30, 60, 90, 120, 150].map((deg) => (
                <ellipse key={deg} cx="50" cy="50" rx={48 * Math.cos(deg * Math.PI / 180)} ry="48" />
              ))}
              {/* Latitude lines */}
              {[-30, 0, 30].map((lat) => (
                <ellipse key={lat} cx="50" cy={50 + lat * 0.8} rx="48" ry={48 * Math.cos(lat * Math.PI / 180) * 0.3} />
              ))}
            </g>
          </svg>
          
          {/* Hotspots representing user activity */}
          <div className="absolute inset-0">
            {[
              { top: '20%', left: '30%', size: 8 },
              { top: '40%', left: '60%', size: 12 },
              { top: '60%', left: '25%', size: 6 },
              { top: '35%', left: '45%', size: 10 },
              { top: '55%', left: '70%', size: 8 },
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
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
          
          {/* Center temperature display */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              key={temperature}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-4xl font-bold"
              style={{ color: getMoodColor(), textShadow: `0 0 20px ${getMoodColor()}` }}
            >
              {temperature}°
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Status text */}
      <div className="text-center relative z-10">
        <p className="text-sm text-ingauge-muted mb-1">Right now, humanity is feeling...</p>
        <motion.h3 
          key={mood}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold capitalize mb-3"
          style={{ color: getMoodColor() }}
        >
          {mood}
        </motion.h3>
        
        {/* Stats */}
        <div className="flex justify-center gap-6 mb-4">
          <div className="text-center">
            <div className="text-xl font-semibold text-white">{activeUsers.toLocaleString()}</div>
            <div className="text-xs text-ingauge-muted">Active now</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-white">127</div>
            <div className="text-xs text-ingauge-muted">Countries</div>
          </div>
        </div>
        
        <p className="text-xs text-ingauge-muted/60">
          Anonymous, aggregate data from InGauge users worldwide
        </p>
      </div>
    </motion.div>
  )
}

// Animated Gauge Component
function GaugeVisual({ name, color, value, delay }: { name: string; color: string; value: number; delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (value / 100) * circumference
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-28 h-28 mb-3">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#1A1A2E"
            strokeWidth="8"
            fill="none"
          />
          {/* Value circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : {}}
            transition={{ delay: delay + 0.3, duration: 1.5, ease: "easeOut" }}
            style={{
              filter: `drop-shadow(0 0 10px ${color}80)`
            }}
          />
        </svg>
        {/* Center value */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: delay + 0.8 }}
            className="text-2xl font-bold"
            style={{ color }}
          >
            {value}
          </motion.span>
        </div>
      </div>
      <span className="text-sm font-medium text-white">{name}</span>
    </motion.div>
  )
}

// Navigation and Footer are imported from components

// Hero Section
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  
  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-ingauge-muted">Now in TestFlight</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              You are not broken.{' '}
              <span className="gradient-text">You are a system.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              InGauge gives you the dashboard you were never given. 
              Track your mental system with precision, clarity, and compassion.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-primary flex items-center justify-center gap-2">
                <Apple className="w-5 h-5" />
                Download for iOS
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-ingauge-bg"
                    style={{ 
                      background: `linear-gradient(135deg, ${['#8B5CF6', '#EC4899', '#3B82F6', '#10B981'][i]}, ${['#EC4899', '#3B82F6', '#10B981', '#8B5CF6'][i]})` 
                    }}
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm text-ingauge-muted">Join 50,000+ tracking their system</p>
              </div>
            </motion.div>
          </div>
          
          {/* Right: World Temperature */}
          <div className="relative">
            <WorldTemperature />
          </div>
        </div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-ingauge-muted/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-ingauge-accent rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Problem/Solution Section
function ProblemSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mental health apps give you meditation.{' '}
            <span className="gradient-text">We give you a cockpit.</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500" />
            <h3 className="text-2xl font-bold mb-6 text-red-400">Other Apps</h3>
            <ul className="space-y-4">
              {[
                '"Just breathe" when you\'re in crisis',
                'Generic advice for everyone',
                'No way to track what actually works',
                'Expensive subscriptions for basic features',
                'Makes you feel broken',
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3 text-ingauge-muted"
                >
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-red-500/50 shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="glass rounded-3xl p-8 relative overflow-hidden gradient-border"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ingauge-accent to-gauge-alignment" />
            <h3 className="text-2xl font-bold mb-6 text-ingauge-accent">InGauge</h3>
            <ul className="space-y-4">
              {[
                'A complete operating system for your mind',
                'Personalized insights based on YOUR patterns',
                '6 gauges to track what matters',
                'AI tools that actually understand you',
                'You\'re not broken—you\'re learning your system',
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-3 text-white"
                >
                  <Check className="mt-1 w-5 h-5 text-ingauge-accent shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// 6 Gauges Section
function GaugesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const gauges = [
    { name: 'Body', color: '#EF4444', value: 78, icon: Heart, description: 'Physical sensations & energy levels' },
    { name: 'State', color: '#F59E0B', value: 65, icon: Zap, description: 'Current mental bandwidth' },
    { name: 'Emotion', color: '#8B5CF6', value: 82, icon: Brain, description: 'Emotional awareness & processing' },
    { name: 'Connection', color: '#3B82F6', value: 71, icon: Users, description: 'Social bonds & relationships' },
    { name: 'Direction', color: '#10B981', value: 89, icon: Compass, description: 'Purpose & motivation' },
    { name: 'Alignment', color: '#EC4899', value: 74, icon: Target, description: 'Values & authenticity' },
  ]
  
  return (
    <section ref={ref} id="gauges" className="py-32 relative">
      {/* Background element */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-ingauge-surface/50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-ingauge-surface/30" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">6 Gauges</span>
          </h2>
          <p className="text-xl text-ingauge-muted max-w-2xl mx-auto">
            Your personal dashboard. Track the six dimensions that matter most for mental wellness.
          </p>
        </motion.div>
        
        {/* Gauges grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {gauges.map((gauge, i) => (
            <GaugeVisual 
              key={gauge.name} 
              name={gauge.name} 
              color={gauge.color} 
              value={gauge.value}
              delay={i * 0.1}
            />
          ))}
        </div>
        
        {/* Gauge cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gauges.map((gauge, i) => (
            <motion.div
              key={gauge.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
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
              <p className="text-ingauge-muted">{gauge.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Features Section
function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const features = [
    {
      icon: BookOpen,
      title: 'Human Manual',
      description: '48+ lessons on understanding yourself. The manual you were never given.',
      color: '#8B5CF6'
    },
    {
      icon: Brain,
      title: 'AI Tools',
      description: 'Psych, Replay, Decode, Relate, Role Play, Journal, Help, Love — AI that gets you.',
      color: '#EC4899'
    },
    {
      icon: Users,
      title: 'Circle',
      description: 'Relationship intelligence. Understand your connections deeper.',
      color: '#3B82F6'
    },
    {
      icon: Activity,
      title: 'Cycle Intelligence',
      description: 'Your cycle affects everything. Now the app knows it too. HealthKit integration.',
      color: '#F472B6'
    },
    {
      icon: Mail,
      title: 'Heart Inbox',
      description: 'A new way to communicate. Send what you can\'t say — even anonymously.',
      color: '#EC4899'
    },
    {
      icon: Sparkles,
      title: 'Age-Adaptive',
      description: 'Every word adapts to your age. Teens to seniors — everyone understands.',
      color: '#10B981'
    },
    {
      icon: Shield,
      title: 'Crisis Support',
      description: 'Built-in support for when things get hard. You\'re never alone.',
      color: '#EF4444'
    },
  ]
  
  return (
    <section ref={ref} id="features" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-ingauge-accent/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to{' '}
            <span className="gradient-text">understand yourself</span>
          </h2>
          <p className="text-xl text-ingauge-muted max-w-2xl mx-auto">
            Powerful tools designed with intention. Every feature serves a purpose.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-3xl p-8 card-hover group"
            >
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-ingauge-muted">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Age-Adaptive Section
function AgeAdaptiveSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const ageExamples = [
    {
      age: 'Teen (13-17)',
      example: '"Your brain\'s alarm system is going off—that\'s why your heart pounds and you want to run."',
      color: '#EC4899'
    },
    {
      age: 'Young Adult (18-25)',
      example: '"Your sleep schedule is chaos? That\'s wrecking your mood more than you realize."',
      color: '#8B5CF6'
    },
    {
      age: 'Adult (26-45)',
      example: '"Running on empty makes you worse at everything—self-care isn\'t selfish, it\'s strategic."',
      color: '#3B82F6'
    },
    {
      age: 'Mature (46+)',
      example: '"Acknowledging difficulty isn\'t pessimism—it\'s honesty. From that ground, you can make real choices."',
      color: '#10B981'
    },
  ]
  
  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-ingauge-surface/30">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="text-green-400">✨</span> Industry First
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Speaks <span className="gradient-text">Your Language</span>
          </h2>
          <p className="text-xl text-ingauge-muted max-w-3xl mx-auto">
            The same concept, explained differently for a 15-year-old and a 50-year-old. 
            Every lesson, every AI response, every check-in adapts to your age and developmental level.
          </p>
          <p className="text-lg text-ingauge-muted mt-4 max-w-2xl mx-auto">
            <span className="text-green-400 font-semibold">🇲🇽 También disponible en español.</span> Full Spanish support 
            with culturally-adapted content — not just translations.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ageExamples.map((item, i) => (
            <motion.div
              key={item.age}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div 
                className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
                style={{ backgroundColor: `${item.color}20`, color: item.color }}
              >
                {item.age}
              </div>
              <p className="text-ingauge-muted italic">{item.example}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            <strong className="text-white">No dumbing down. No talking over heads.</strong> Just the right words 
            for where you are in life—so understanding yourself doesn't require a psychology degree.
          </p>
        </motion.div>
        
        {/* Spanish Support Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 glass rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-3xl mr-2">🇲🇽</span> 
                Full Spanish Support
              </h3>
              <p className="text-ingauge-muted mb-4">
                Not just translations — <strong className="text-white">culturally-adapted content</strong> for the Latino community. 
                We understand familismo, respeto, and why "los problemas se quedan en casa" keeps people from getting help.
              </p>
              <ul className="space-y-2 text-sm text-ingauge-muted">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> All AI conversations in Spanish
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Human Manual fully translated
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Crisis resources in Spanish
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Supports code-switching naturally
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <p className="text-lg italic text-ingauge-muted mb-4">
                "No estás roto. Eres un sistema. Y ahora tienes un tablero."
              </p>
              <p className="text-sm text-ingauge-muted">
                — The same philosophy, in your language
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Comprehensive Education Section
function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const topics = [
    { icon: Heart, label: 'Love & Relationships', color: '#EC4899' },
    { icon: Shield, label: 'Consent & Boundaries', color: '#EF4444' },
    { icon: Users, label: 'LGBTQ+ Identity', color: '#8B5CF6' },
    { icon: Target, label: 'Healthy vs. Toxic', color: '#F59E0B' },
    { icon: Zap, label: 'Safety & Protection', color: '#3B82F6' },
    { icon: Compass, label: 'Survivor Support', color: '#10B981' },
  ]
  
  return (
    <section ref={ref} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Education <span className="gradient-text">You Deserved</span>
          </h2>
          <p className="text-xl text-ingauge-muted max-w-3xl mx-auto">
            Real answers to real questions—about bodies, relationships, identity, and safety. 
            Science-based, judgment-free, age-appropriate. What schools should teach but don't.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-full px-5 py-3 flex items-center gap-3"
            >
              <topic.icon className="w-5 h-5" style={{ color: topic.color }} />
              <span className="font-medium">{topic.label}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="glass rounded-3xl p-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-ingauge-muted mb-4">
            Through the <strong className="text-white">LOVE tool</strong> and <strong className="text-white">Human Manual</strong>, 
            get honest, scientifically-grounded information on the topics that matter—from sexual health 
            to recognizing manipulation, from identity exploration to healing from harm.
          </p>
          <p className="text-ingauge-muted">
            All content is <span className="text-ingauge-accent font-medium">age-gated appropriately</span> and 
            <span className="text-ingauge-accent font-medium"> trauma-informed</span>. Crisis resources always available.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Heart Inbox Section
function HeartInboxSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const mailTypes = [
    {
      icon: Send,
      title: 'Open',
      description: 'They see who sent it',
      color: '#8B5CF6'
    },
    {
      icon: Lock,
      title: 'Anonymous',
      description: 'They only know it\'s from someone who loves them',
      color: '#EC4899'
    },
    {
      icon: Heart,
      title: 'Soft Share',
      description: 'They accept when ready',
      color: '#10B981'
    },
  ]
  
  return (
    <section ref={ref} className="py-32 relative overflow-hidden bg-gradient-to-b from-ingauge-bg to-ingauge-surface/50">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
            <span className="text-pink-400">💜</span> New Communication Channel
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Heart Inbox — <span className="gradient-text">Mail for the Mind</span>
          </h2>
          <p className="text-xl text-ingauge-muted max-w-3xl mx-auto">
            We have physical mailboxes. We have email. But nothing for the things that actually matter.
            Heart Inbox is where you send what you can't text — and receive truth with love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {mailTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div 
                className="w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                style={{ backgroundColor: `${type.color}20` }}
              >
                <type.icon className="w-7 h-7" style={{ color: type.color }} />
              </div>
              <h3 className="text-xl font-bold mb-2">{type.title}</h3>
              <p className="text-ingauge-muted text-sm">{type.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="glass rounded-3xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Why Anonymous Matters</h3>
              <ul className="space-y-3 text-ingauge-muted">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Tell hard truths without fear of judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>No retaliation — they don't know who sent it</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Collective care — "someone who loves you wants you to know..."</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>AI-moderated to prevent abuse</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-6 bg-ingauge-bg/50">
              <div className="text-sm text-ingauge-muted mb-3">Example anonymous Heart Mail:</div>
              <div className="space-y-3">
                <div className="text-pink-400 font-medium">💜 Someone in your Circle sent:</div>
                <p className="text-white italic">
                  "We've noticed you haven't been yourself lately. You don't have to carry everything alone. We're here if you need us."
                </p>
                <div className="text-xs text-ingauge-muted">— Sent with love by someone who cares ❤️</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            <strong className="text-white">Heart Notes + Heart Inbox</strong> = write what you need to say, 
            and send it when you're ready. Or keep it forever. Your truth, your timing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// PHOSM Section
function PHOSMSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} id="phosm" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border border-ingauge-accent/30 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full border border-gauge-alignment/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
              <div className="absolute inset-16 rounded-full border border-gauge-connection/30 animate-spin-slow" style={{ animationDuration: '30s' }} />
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass rounded-3xl p-8 text-center">
                  <div className="text-6xl font-bold gradient-text mb-2">PHOSM</div>
                  <div className="text-sm text-ingauge-muted">Personal Health Operating<br />System for the Mind</div>
                </div>
              </div>
              
              {/* Floating elements */}
              {['Body', 'State', 'Emotion', 'Connection', 'Direction', 'Alignment'].map((label, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180)
                const radius = 45
                const x = 50 + radius * Math.cos(angle)
                const y = 50 + radius * Math.sin(angle)
                const colors = ['#EF4444', '#F59E0B', '#8B5CF6', '#3B82F6', '#10B981', '#EC4899']
                
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="absolute w-16 h-16 glass rounded-xl flex items-center justify-center text-xs font-medium"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      borderColor: colors[i],
                      borderWidth: 1,
                      color: colors[i]
                    }}
                  >
                    {label}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Under the hood:{' '}
              <span className="gradient-text">PHOSM</span>
            </h2>
            <p className="text-xl text-ingauge-muted mb-8">
              The Personal Health Operating System for the Mind isn't just a catchy name—it's a framework 
              grounded in psychological research and real-world application.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Evidence-Based', desc: 'Built on established psychological frameworks and cognitive science' },
                { title: 'Systems Thinking', desc: 'Your mind isn\'t a single thing—it\'s an interconnected system' },
                { title: 'Continuous Iteration', desc: 'We refine based on real user data and outcomes' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-1 bg-gradient-to-b from-ingauge-accent to-gauge-alignment rounded-full" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                    <p className="text-ingauge-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const testimonials = [
    {
      quote: "Finally, an app that doesn't make me feel like I need to be fixed. InGauge helped me understand that I'm a system that needs calibration, not repair.",
      author: "Sarah M.",
      role: "Software Engineer",
    },
    {
      quote: "The 6 gauges changed everything. I can actually see patterns in my mental health now instead of just feeling lost.",
      author: "James K.",
      role: "Teacher",
    },
    {
      quote: "I've tried every mental health app. InGauge is the only one that stuck. The AI tools actually understand context.",
      author: "Maya L.",
      role: "Marketing Director",
    },
  ]
  
  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ingauge-surface/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            People are tracking{' '}
            <span className="gradient-text">their systems</span>
          </h2>
          <p className="text-xl text-ingauge-muted">Join thousands understanding themselves better</p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 }}
              className="glass rounded-3xl p-8 card-hover"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-lg mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-ingauge-muted">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 glass rounded-3xl p-8"
        >
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '2.5M+', label: 'Check-ins Logged' },
            { value: '127', label: 'Countries' },
            { value: '4.9', label: 'App Store Rating' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-ingauge-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Pricing Section
function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Get started with the basics',
      features: [
        'Daily check-ins',
        '6 gauge tracking',
        'Human Manual basics',
        'Limited AI interactions',
        'Community access',
      ],
      cta: 'Start Free',
      featured: false
    },
    {
      name: 'InGauge Pro',
      price: '$4.99',
      period: '/month',
      yearlyPrice: '$39.99/year (save 33%)',
      description: 'Full access to your cockpit',
      features: [
        'Everything in Free',
        'Full Human Manual (48+ lessons)',
        'Unlimited AI tools',
        'Circle relationship tracking',
        'Pattern insights',
        'Priority support',
        'Export your data',
      ],
      cta: 'Get Pro',
      featured: true
    },
    {
      name: 'Family',
      price: '$7.99',
      period: '/month',
      description: 'For up to 5 family members',
      features: [
        'Everything in Pro',
        '5 individual accounts',
        'Family insights dashboard',
        'Shared resources',
        'Family crisis support',
      ],
      cta: 'Get Family',
      featured: false
    },
  ]
  
  return (
    <section ref={ref} id="pricing" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">transparent pricing</span>
          </h2>
          <p className="text-xl text-ingauge-muted max-w-2xl mx-auto">
            The most affordable premium mental health app. Because understanding yourself shouldn't cost a fortune.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 card-hover ${
                plan.featured 
                  ? 'glass gradient-border bg-gradient-to-b from-ingauge-accent/10 to-transparent' 
                  : 'glass'
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-semibold text-ingauge-accent mb-4 uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-ingauge-muted">{plan.period}</span>
              </div>
              {plan.yearlyPrice && (
                <div className="text-sm text-ingauge-accent mb-4">{plan.yearlyPrice}</div>
              )}
              <p className="text-ingauge-muted mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-ingauge-accent shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={plan.featured ? 'btn-primary w-full' : 'btn-secondary w-full'}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ingauge-accent/20 rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to meet{' '}
            <span className="gradient-text">your system?</span>
          </h2>
          <p className="text-xl text-ingauge-muted mb-10">
            Join thousands who have discovered that understanding themselves 
            is the first step to feeling better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center gap-2 text-lg py-5 px-10">
              <Apple className="w-6 h-6" />
              Download for iOS
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2 text-lg py-5 px-10">
              Join TestFlight
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Page
export default function Home() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <GaugesSection />
      <FeaturesSection />
      <AgeAdaptiveSection />
      <EducationSection />
      <HeartInboxSection />
      <PHOSMSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  )
}
