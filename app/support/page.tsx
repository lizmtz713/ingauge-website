'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  HelpCircle, Mail, MessageCircle, Book, Search,
  ChevronRight, ChevronDown, ExternalLink, Shield,
  Heart, Clock, CheckCircle2
} from 'lucide-react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const helpTopics = [
  {
    category: 'Getting Started',
    icon: Book,
    articles: [
      { title: 'Creating your account', id: 'create-account' },
      { title: 'Understanding the 6 Gauges', id: 'understanding-gauges' },
      { title: 'Your first check-in', id: 'first-checkin' },
      { title: 'Navigating the app', id: 'navigation' },
      { title: 'Setting up notifications', id: 'notifications' },
    ]
  },
  {
    category: 'Features',
    icon: HelpCircle,
    articles: [
      { title: 'How to use Talk to Psych', id: 'talk-to-psych' },
      { title: 'Setting up Circle', id: 'setup-circle' },
      { title: 'Using the Prompt Generator', id: 'prompt-generator' },
      { title: 'Accessing the Human Manual', id: 'human-manual' },
      { title: 'Understanding World Temperature', id: 'world-temperature' },
    ]
  },
  {
    category: 'Account & Billing',
    icon: Shield,
    articles: [
      { title: 'Upgrading to Pro', id: 'upgrade-pro' },
      { title: 'Managing your subscription', id: 'manage-subscription' },
      { title: 'Canceling your subscription', id: 'cancel-subscription' },
      { title: 'Requesting a refund', id: 'refund' },
      { title: 'Family plan setup', id: 'family-plan' },
    ]
  },
  {
    category: 'Privacy & Data',
    icon: Shield,
    articles: [
      { title: 'How we protect your data', id: 'data-protection' },
      { title: 'Exporting your data', id: 'export-data' },
      { title: 'Deleting your account', id: 'delete-account' },
      { title: 'Circle privacy controls', id: 'circle-privacy' },
      { title: 'AI conversation privacy', id: 'ai-privacy' },
    ]
  },
]

const faqs = [
  {
    question: 'Is InGauge a replacement for therapy?',
    answer: 'No. InGauge is an educational and self-tracking tool, not clinical treatment. While our AI tools can help you process and reflect, they\'re not a substitute for working with a licensed mental health professional. If you\'re experiencing a mental health crisis, please use our Crisis Resources page or contact a professional.'
  },
  {
    question: 'How do I reset my password?',
    answer: 'Go to the login screen and tap "Forgot Password." Enter your email address and we\'ll send you a reset link. The link expires after 24 hours. If you don\'t receive the email, check your spam folder or contact support.'
  },
  {
    question: 'Can I use InGauge offline?',
    answer: 'You can view your historical data and do check-ins offline. The data will sync when you reconnect. However, AI features (Talk to Psych, etc.) require an internet connection.'
  },
  {
    question: 'Why can\'t I see someone in my Circle?',
    answer: 'Both people need to have InGauge installed and must accept the Circle invitation. If they\'ve installed but you still can\'t see them, they may have their sharing settings turned off or set to limited visibility.'
  },
  {
    question: 'How do I get a refund?',
    answer: 'For subscriptions purchased through the App Store, you\'ll need to request a refund through Apple. We honor all refund requests within 30 days—contact support@getingauge.com and we\'ll guide you through the process.'
  },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          How can we <span className="gradient-text">help</span>?
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative max-w-xl mx-auto"
        >
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ingauge-muted" />
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-ingauge-muted focus:outline-none focus:border-ingauge-accent transition-colors"
          />
        </motion.div>
      </div>
    </section>
  )
}

function QuickLinksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const quickLinks = [
    { icon: Heart, label: 'Crisis Support', href: '/crisis', color: '#EF4444', urgent: true },
    { icon: Mail, label: 'Email Support', href: 'mailto:support@getingauge.com', color: '#3B82F6' },
    { icon: MessageCircle, label: 'Live Chat', href: '#chat', color: '#10B981', badge: 'Pro' },
    { icon: Book, label: 'User Guide', href: '#guides', color: '#8B5CF6' },
  ]
  
  return (
    <section ref={ref} className="py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className={`glass rounded-2xl p-6 text-center hover:bg-white/5 transition-colors relative ${link.urgent ? 'border border-red-500/30' : ''}`}
            >
              {link.badge && (
                <span className="absolute top-2 right-2 text-xs bg-ingauge-accent/20 text-ingauge-accent px-2 py-0.5 rounded-full">
                  {link.badge}
                </span>
              )}
              <div 
                className="w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center"
                style={{ backgroundColor: `${link.color}20` }}
              >
                <link.icon className="w-6 h-6" style={{ color: link.color }} />
              </div>
              <div className="font-medium">{link.label}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function HelpTopicsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [expandedCategory, setExpandedCategory] = useState<string | null>('Getting Started')
  
  return (
    <section ref={ref} id="guides" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Browse <span className="gradient-text">Help Topics</span>
        </motion.h2>
        
        <div className="space-y-4">
          {helpTopics.map((topic, i) => (
            <motion.div
              key={topic.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === topic.category ? null : topic.category)}
                className="w-full p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-ingauge-accent/20 flex items-center justify-center">
                    <topic.icon className="w-5 h-5 text-ingauge-accent" />
                  </div>
                  <span className="font-semibold">{topic.category}</span>
                  <span className="text-sm text-ingauge-muted">{topic.articles.length} articles</span>
                </div>
                <ChevronDown className={`w-5 h-5 transition-transform ${expandedCategory === topic.category ? 'rotate-180' : ''}`} />
              </button>
              
              {expandedCategory === topic.category && (
                <div className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-2">
                    {topic.articles.map((article) => (
                      <a
                        key={article.id}
                        href={`/support/articles/${article.id}`}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className="w-2 h-2 rounded-full bg-ingauge-accent" />
                        <span className="text-sm">{article.title}</span>
                        <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  
  return (
    <section ref={ref} className="py-16 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              
              {openFaq === i && (
                <div className="px-6 pb-6">
                  <p className="text-ingauge-muted">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} id="contact" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Still need help?</h2>
            <p className="text-ingauge-muted">Our support team typically responds within 24 hours.</p>
          </div>
          
          <form className="space-y-6 max-w-xl mx-auto">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-ingauge-accent transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-ingauge-accent transition-colors">
                <option value="">Select a topic...</option>
                <option value="billing">Billing & Subscription</option>
                <option value="technical">Technical Issue</option>
                <option value="feature">Feature Request</option>
                <option value="privacy">Privacy & Data</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={5}
                placeholder="Describe your issue or question..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-ingauge-accent transition-colors resize-none"
              />
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>
          </form>
          
          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-ingauge-muted">
              Or email us directly at{' '}
              <a href="mailto:support@getingauge.com" className="text-ingauge-accent hover:underline">
                support@getingauge.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function StatusSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} id="status" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-2xl p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">System Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400">All Systems Operational</span>
            </div>
          </div>
          
          <div className="space-y-2">
            {['App', 'AI Services', 'Sync', 'World Temperature'].map((service) => (
              <div key={service} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <span className="text-sm text-ingauge-muted">{service}</span>
                <CheckCircle2 className="w-4 h-4 text-green-400" />
              </div>
            ))}
          </div>
          
          <a
            href="https://status.getingauge.com"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 mt-4 text-sm text-ingauge-accent hover:underline"
          >
            View full status page
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default function SupportPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickLinksSection />
      <HelpTopicsSection />
      <FAQSection />
      <ContactSection />
      <StatusSection />
      <Footer />
    </main>
  )
}
