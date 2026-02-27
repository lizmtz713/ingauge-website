'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Heart, Brain, BookOpen, Users, Target, Shield,
  GraduationCap, Sparkles, ChevronRight, MapPin,
  Mail, Twitter, Linkedin, Star
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import CTA from '../components/CTA'

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
        >
          Built by someone who <span className="gradient-text">needed it</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-ingauge-muted max-w-2xl mx-auto"
        >
          InGauge wasn't built by a big tech company. It was built by someone who spent years 
          searching for a tool that actually worked—and couldn't find one.
        </motion.p>
      </div>
    </section>
  )
}

function StorySection() {
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
          <div className="flex items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-ingauge-accent to-gauge-alignment flex items-center justify-center text-2xl font-bold text-white">
              LM
            </div>
            <div>
              <h2 className="text-2xl font-bold">Elizabeth Martinez</h2>
              <p className="text-ingauge-muted">Founder & Creator</p>
              <div className="flex items-center gap-2 text-sm text-ingauge-muted mt-1">
                <MapPin className="w-4 h-4" />
                Houston, Texas
              </div>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none space-y-4 text-ingauge-muted">
            <p className="text-lg text-white">
              I built InGauge because I was tired of mental health apps that either told me to 
              "just breathe" or wanted $300/month for actual help.
            </p>
            
            <p>
              With a B.S. in Psychology and a B.S. in Political Science, I'd spent years studying 
              how humans actually work—the neuroscience, the attachment theory, the emotional 
              regulation research. But there was no app that put it all together in a way that 
              felt like a real system for understanding yourself.
            </p>
            
            <p>
              So I built one.
            </p>
            
            <p>
              The 6 Gauges aren't arbitrary—they're based on established psychological frameworks. 
              The Human Manual draws from 22+ academic textbooks. The AI tools are trained on 
              therapeutic communication principles, not just general chat.
            </p>
            
            <p>
              This isn't a meditation app with a subscription paywall. This isn't a chatbot 
              pretending to be your therapist. This is a serious attempt to give people the 
              tools to understand their own minds—tools that should have been taught in school 
              but never were.
            </p>
            
            <p className="text-lg text-white font-medium">
              You are not broken. You are a system. And now you have a dashboard.
            </p>
          </div>
          
          <div className="flex gap-4 mt-8">
            <a href="https://twitter.com/getingauge" className="glass p-3 rounded-xl hover:bg-white/10 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/ingauge" className="glass p-3 rounded-xl hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:liz@getingauge.com" className="glass p-3 rounded-xl hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Mission</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Brain,
              title: 'Democratize Self-Understanding',
              description: 'Psychological tools shouldn\'t be locked behind expensive therapy. Everyone deserves to understand their own mind.'
            },
            {
              icon: Heart,
              title: 'Destigmatize Mental Health',
              description: 'Mental health isn\'t about being broken—it\'s about being human. We\'re building a new language for talking about our inner lives.'
            },
            {
              icon: Users,
              title: 'Connect, Don\'t Isolate',
              description: 'Mental health apps often feel lonely. Features like Circle and World Temperature remind us we\'re part of something larger.'
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-ingauge-accent/20 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-ingauge-accent" />
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

function ScienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const textbooks = [
    'Biological Psychology - James W. Kalat',
    'Foundations of Physiological Psychology - Neil R. Carlson',
    'How Emotions Are Made - Lisa Feldman Barrett',
    'The Polyvagal Theory - Stephen Porges',
    'Attachment and Loss - John Bowlby',
    'The Body Keeps the Score - Bessel van der Kolk',
    'Cognition - Margaret Matlin',
    'Abnormal Psychology - David Barlow',
    'Social Psychology - Elliot Aronson',
    'Families in Society - Goldschneider & Goldschneider',
  ]
  
  const frameworks = [
    { name: 'Polyvagal Theory', gauge: 'Body' },
    { name: 'Cognitive Load Theory', gauge: 'State' },
    { name: 'Emotional Granularity', gauge: 'Emotion' },
    { name: 'Attachment Theory', gauge: 'Connection' },
    { name: 'Self-Determination Theory', gauge: 'Direction' },
    { name: 'Values-Based Therapy', gauge: 'Alignment' },
  ]
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <GraduationCap className="w-12 h-12 text-ingauge-accent mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Grounded in <span className="gradient-text">Science</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            InGauge isn't pop psychology. It's built on established research from leading 
            psychologists and neuroscientists.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Textbooks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-ingauge-accent" />
              22+ Textbooks Consulted
            </h3>
            <ul className="space-y-2">
              {textbooks.map((book, i) => (
                <li key={i} className="text-sm text-ingauge-muted flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-ingauge-accent mt-2 shrink-0" />
                  {book}
                </li>
              ))}
            </ul>
            <p className="text-xs text-ingauge-muted/60 mt-4">+ 12 more...</p>
          </motion.div>
          
          {/* Frameworks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Brain className="w-5 h-5 text-ingauge-accent" />
              Psychological Frameworks
            </h3>
            <ul className="space-y-3">
              {frameworks.map((fw, i) => (
                <li key={i} className="flex items-center justify-between">
                  <span className="text-sm">{fw.name}</span>
                  <span className="text-xs bg-white/10 px-2 py-1 rounded-full text-ingauge-muted">
                    → {fw.gauge} Gauge
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const values = [
    {
      title: 'Privacy is Non-Negotiable',
      description: 'Your mental health data is yours. We don\'t sell it, we don\'t use it for ads, we don\'t train AI on it without consent.'
    },
    {
      title: 'Accessibility Matters',
      description: 'That\'s why we have a generous free tier, student pricing, and the most affordable Pro plan in the category.'
    },
    {
      title: 'Science Over Hype',
      description: 'Every feature is grounded in research. We don\'t make claims we can\'t back up with evidence.'
    },
    {
      title: 'You\'re Not Broken',
      description: 'Our entire philosophy rejects the idea that mental health struggles mean something is wrong with you.'
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Values</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <Shield className="w-6 h-6 text-green-400 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">{value.title}</h3>
                <p className="text-sm text-ingauge-muted">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PressSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} id="press" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-8 md:p-12 text-center"
        >
          <Sparkles className="w-12 h-12 text-ingauge-accent mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Press & Media</h2>
          <p className="text-ingauge-muted mb-8">
            Want to feature InGauge? We'd love to chat about the future of mental health technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:press@getingauge.com" className="btn-primary">
              Contact for Press
            </a>
            <a href="/press-kit.zip" className="btn-secondary">
              Download Press Kit
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-ingauge-muted">
              Press kit includes: logos, screenshots, founder bio, fact sheet, and brand guidelines.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Mail, label: 'General', email: 'hello@getingauge.com' },
            { icon: Shield, label: 'Support', email: 'support@getingauge.com' },
            { icon: Sparkles, label: 'Press', email: 'press@getingauge.com' },
          ].map((contact, i) => (
            <motion.a
              key={contact.label}
              href={`mailto:${contact.email}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors"
            >
              <contact.icon className="w-8 h-8 text-ingauge-accent mx-auto mb-3" />
              <div className="font-bold mb-1">{contact.label}</div>
              <div className="text-sm text-ingauge-muted">{contact.email}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <StorySection />
      <MissionSection />
      <ScienceSection />
      <ValuesSection />
      <PressSection />
      <ContactSection />
      <CTA 
        title="Ready to understand yourself?"
        subtitle="Join thousands who are learning their own systems with InGauge."
      />
      <Footer />
    </main>
  )
}
