'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Check, X, Star, Shield, Zap, Users, Heart,
  ChevronRight, Apple, HelpCircle, Sparkles
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

const faqItems = [
  {
    question: "Can I try before I buy?",
    answer: "Absolutely! The free tier is generous and lets you use core features indefinitely. You can also start a 7-day free trial of Pro anytime to test the full experience before committing."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, Apple Pay, and Google Pay through our secure payment processor. Subscriptions are managed through the App Store (iOS) for seamless billing."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes! No contracts, no cancellation fees. Cancel anytime through your App Store subscription settings. You'll keep Pro access until your current billing period ends."
  },
  {
    question: "Is there a student/hardship discount?",
    answer: "Yes. Email support@getingauge.com with proof of student status or a note about your situation. We believe mental health tools should be accessible, and we'll work with you."
  },
  {
    question: "What happens to my data if I cancel?",
    answer: "Your data remains yours. If you downgrade to Free, you keep all your historical data and can still view it—you just lose access to Pro features. You can export or delete your data anytime."
  },
  {
    question: "Do you offer refunds?",
    answer: "If you're not satisfied within the first 30 days, contact us for a full refund. No questions asked. We want you to feel confident in your investment."
  },
  {
    question: "Why is InGauge so affordable compared to other apps?",
    answer: "We believe mental health tools shouldn't be luxury goods. Many apps charge $15-20/month. We've optimized our costs to make Pro accessible at $4.99/month while still building a sustainable business. Quality mental health support shouldn't require a premium salary."
  },
  {
    question: "What's the difference between monthly and yearly?",
    answer: "Yearly saves you 33%—you pay $39.99/year instead of $59.88 (monthly). That's just $3.33/month, less than a coffee. Same features, better value if you're committed."
  },
]

const plans = [
  {
    name: 'Free',
    tagline: 'Get started with the essentials',
    price: '$0',
    period: 'forever',
    description: 'Everything you need to start tracking your mental system.',
    features: [
      { name: 'Daily check-ins', included: true },
      { name: '6 gauge tracking', included: true },
      { name: 'Basic patterns & insights', included: true },
      { name: 'Human Manual basics (8 lessons)', included: true },
      { name: '3 AI interactions/day', included: true },
      { name: 'World Temperature', included: true },
      { name: 'Crisis support 24/7', included: true },
      { name: 'Full Human Manual (48+ lessons)', included: false },
      { name: 'Unlimited AI tools', included: false },
      { name: 'Circle (relationship sharing)', included: false },
      { name: 'Prompt Generator', included: false },
      { name: 'Advanced pattern insights', included: false },
      { name: 'Data export', included: false },
      { name: 'Priority support', included: false },
    ],
    cta: 'Download Free',
    featured: false
  },
  {
    name: 'InGauge Pro',
    tagline: 'Full access to your cockpit',
    price: '$4.99',
    period: '/month',
    yearlyPrice: '$39.99/year',
    yearlySavings: 'Save 33%',
    description: 'Unlock every feature. The complete mental health operating system.',
    features: [
      { name: 'Daily check-ins', included: true },
      { name: '6 gauge tracking', included: true },
      { name: 'Basic patterns & insights', included: true },
      { name: 'Human Manual basics (8 lessons)', included: true },
      { name: 'Unlimited AI interactions', included: true, highlight: true },
      { name: 'World Temperature', included: true },
      { name: 'Crisis support 24/7', included: true },
      { name: 'Full Human Manual (48+ lessons)', included: true, highlight: true },
      { name: 'All 7 AI tools unlimited', included: true, highlight: true },
      { name: 'Circle (up to 15 people)', included: true, highlight: true },
      { name: 'Prompt Generator', included: true, highlight: true },
      { name: 'Advanced pattern insights', included: true },
      { name: 'Data export', included: true },
      { name: 'Priority support', included: true },
    ],
    cta: 'Start Free Trial',
    featured: true
  },
  {
    name: 'Family',
    tagline: 'For households who care',
    price: '$7.99',
    period: '/month',
    yearlyPrice: '$59.99/year',
    yearlySavings: '~$1/person/month',
    description: 'Pro features for up to 5 family members. Connect and support each other.',
    features: [
      { name: 'Everything in Pro', included: true },
      { name: '5 individual Pro accounts', included: true, highlight: true },
      { name: 'Family Circle (auto-connected)', included: true, highlight: true },
      { name: 'Family insights dashboard', included: true },
      { name: 'Shared crisis contacts', included: true },
      { name: 'Parental insights (teens 13+)', included: true },
      { name: 'Individual privacy maintained', included: true },
      { name: 'Family billing management', included: true },
    ],
    cta: 'Start Family Trial',
    featured: false
  },
]

const comparisons = [
  { app: 'Calm', price: '$14.99/mo', focus: 'Meditation only' },
  { app: 'Headspace', price: '$12.99/mo', focus: 'Meditation + some tools' },
  { app: 'BetterHelp', price: '$60-90/week', focus: 'Therapy (different category)' },
  { app: 'Daylio', price: '$4.99/mo', focus: 'Mood tracking only' },
  { app: 'InGauge Pro', price: '$4.99/mo', focus: 'Complete mental OS', highlight: true },
]

function HeroSection() {
  const [annual, setAnnual] = useState(true)
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Simple, <span className="gradient-text">honest pricing</span>
          </h1>
          <p className="text-xl text-ingauge-muted max-w-2xl mx-auto mb-8">
            The most affordable premium mental health app. Because understanding yourself 
            shouldn't require a premium salary.
          </p>
          
          {/* Annual/Monthly toggle */}
          <div className="inline-flex items-center gap-4 glass rounded-full p-2">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full transition-all ${!annual ? 'bg-ingauge-accent text-white' : 'text-ingauge-muted'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full transition-all flex items-center gap-2 ${annual ? 'bg-ingauge-accent text-white' : 'text-ingauge-muted'}`}
            >
              Annual
              <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">Save 33%</span>
            </button>
          </div>
        </motion.div>
        
        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-3xl p-8 relative ${
                plan.featured 
                  ? 'glass gradient-border bg-gradient-to-b from-ingauge-accent/10 to-transparent scale-105' 
                  : 'glass'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-ingauge-accent text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-ingauge-muted">{plan.tagline}</p>
              </div>
              
              <div className="mb-2">
                <span className="text-4xl font-bold">
                  {plan.name === 'Free' ? '$0' : annual && plan.yearlyPrice ? plan.yearlyPrice.split('/')[0] : plan.price}
                </span>
                <span className="text-ingauge-muted">
                  {plan.name === 'Free' ? ' forever' : annual && plan.yearlyPrice ? '/year' : plan.period}
                </span>
              </div>
              
              {annual && plan.yearlySavings && (
                <div className="text-sm text-green-400 mb-4">{plan.yearlySavings}</div>
              )}
              {!annual && plan.yearlyPrice && (
                <div className="text-sm text-ingauge-muted mb-4">or {plan.yearlyPrice} (save 33%)</div>
              )}
              
              <p className="text-sm text-ingauge-muted mb-6">{plan.description}</p>
              
              <button className={`w-full py-3 rounded-xl font-semibold transition-all mb-6 ${
                plan.featured 
                  ? 'bg-ingauge-accent hover:bg-ingauge-accent/90 text-white' 
                  : 'glass hover:bg-white/10'
              }`}>
                {plan.cta}
              </button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-3 text-sm ${!feature.included ? 'text-ingauge-muted/50' : ''}`}>
                    {feature.included ? (
                      <Check className={`w-5 h-5 shrink-0 ${feature.highlight ? 'text-ingauge-accent' : 'text-green-400'}`} />
                    ) : (
                      <X className="w-5 h-5 text-ingauge-muted/30 shrink-0" />
                    )}
                    <span className={feature.highlight ? 'font-medium' : ''}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How we <span className="gradient-text">compare</span>
          </h2>
          <p className="text-lg text-ingauge-muted">
            More features, lower price. That's intentional.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-4 p-4 border-b border-white/10 text-sm font-semibold text-ingauge-muted">
            <div>App</div>
            <div>Price</div>
            <div>Focus</div>
          </div>
          {comparisons.map((comp, i) => (
            <div 
              key={comp.app}
              className={`grid grid-cols-3 gap-4 p-4 ${comp.highlight ? 'bg-ingauge-accent/10' : ''} ${i !== comparisons.length - 1 ? 'border-b border-white/5' : ''}`}
            >
              <div className={comp.highlight ? 'font-bold text-ingauge-accent' : ''}>{comp.app}</div>
              <div className={comp.highlight ? 'font-bold text-green-400' : 'text-ingauge-muted'}>{comp.price}</div>
              <div className={comp.highlight ? 'font-medium' : 'text-ingauge-muted'}>{comp.focus}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ValueSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const values = [
    {
      icon: Heart,
      title: 'Crisis Support Stays Free',
      description: 'We will never paywall crisis resources. If you\'re struggling, you deserve help—regardless of subscription status.'
    },
    {
      icon: Shield,
      title: 'No Ads, Ever',
      description: 'Your attention is sacred. We\'ll never show ads or sell your data. Your subscription is how we stay sustainable.'
    },
    {
      icon: Zap,
      title: 'Student & Hardship Pricing',
      description: 'Can\'t afford Pro? Email us. We\'ll work something out. Mental health tools should be accessible.'
    },
    {
      icon: Users,
      title: 'Family Plan Value',
      description: 'At $7.99/mo for 5 people, that\'s ~$1.60/person/month. Less than sharing a Netflix password.'
    },
  ]
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">pricing philosophy</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-ingauge-accent/20 flex items-center justify-center shrink-0">
                <value.icon className="w-6 h-6 text-ingauge-accent" />
              </div>
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

function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const testimonials = [
    {
      quote: "I was paying $15/mo for Calm and barely used it. InGauge Pro at $4.99 gives me 10x more value.",
      author: "Jessica T.",
      role: "Pro subscriber",
      rating: 5
    },
    {
      quote: "The Family plan for my household of 4 costs less than one therapy session. And everyone uses it daily.",
      author: "Robert & Maria H.",
      role: "Family plan",
      rating: 5
    },
    {
      quote: "I emailed about student pricing and they gave me 50% off. No other app has done that for me.",
      author: "Devon S.",
      role: "Student",
      rating: 5
    },
  ]
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Worth every <span className="gradient-text">penny</span>
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

function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ingauge-accent/20 to-transparent" />
          
          <div className="relative z-10">
            <Sparkles className="w-12 h-12 text-ingauge-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start free. Upgrade when ready.
            </h2>
            <p className="text-lg text-ingauge-muted mb-8 max-w-xl mx-auto">
              No credit card required. No pressure. Just start understanding yourself better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary flex items-center justify-center gap-2 text-lg py-4 px-8">
                <Apple className="w-6 h-6" />
                Download for iOS
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 text-lg py-4 px-8">
                Join TestFlight
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-sm text-ingauge-muted mt-6">
              Available on iOS • Android coming Q3 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function PricingPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <ComparisonSection />
      <ValueSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="Pricing FAQ" />
      <CTASection />
      <Footer />
    </main>
  )
}
