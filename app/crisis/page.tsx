'use client'

import { motion } from 'framer-motion'
import { 
  Phone, MessageCircle, Globe, Heart, Shield,
  AlertTriangle, ExternalLink, ChevronRight
} from 'lucide-react'
import Link from 'next/link'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const crisisResources = [
  {
    name: '988 Suicide & Crisis Lifeline',
    description: 'Free, confidential support for people in distress, 24/7',
    phone: '988',
    text: 'Text 988',
    website: 'https://988lifeline.org',
    country: 'USA',
    featured: true
  },
  {
    name: 'Crisis Text Line',
    description: 'Text HOME to connect with a trained crisis counselor',
    text: 'Text HOME to 741741',
    website: 'https://crisistextline.org',
    country: 'USA'
  },
  {
    name: 'Trans Lifeline',
    description: 'Peer support for trans people, by trans people',
    phone: '877-565-8860',
    website: 'https://translifeline.org',
    country: 'USA'
  },
  {
    name: 'Trevor Project',
    description: 'Crisis support for LGBTQ+ young people',
    phone: '866-488-7386',
    text: 'Text START to 678-678',
    website: 'https://thetrevorproject.org',
    country: 'USA'
  },
  {
    name: 'Veterans Crisis Line',
    description: 'Support for veterans and their families',
    phone: '988, then press 1',
    text: 'Text 838255',
    website: 'https://veteranscrisisline.net',
    country: 'USA'
  },
  {
    name: 'SAMHSA National Helpline',
    description: 'Treatment referrals and information, 24/7',
    phone: '1-800-662-4357',
    website: 'https://samhsa.gov/find-help/national-helpline',
    country: 'USA'
  },
]

const internationalResources = [
  { country: 'UK', name: 'Samaritans', phone: '116 123', website: 'https://samaritans.org' },
  { country: 'Canada', name: 'Crisis Services Canada', phone: '1-833-456-4566', website: 'https://crisisservicescanada.ca' },
  { country: 'Australia', name: 'Lifeline Australia', phone: '13 11 14', website: 'https://lifeline.org.au' },
  { country: 'India', name: 'iCall', phone: '9152987821', website: 'https://icallhelpline.org' },
  { country: 'Germany', name: 'Telefonseelsorge', phone: '0800 111 0 111', website: 'https://telefonseelsorge.de' },
  { country: 'France', name: 'SOS Amitié', phone: '09 72 39 40 50', website: 'https://www.sos-amitie.com' },
]

const selfCareSteps = [
  {
    title: 'Pause and Breathe',
    description: 'Take 3 slow breaths. In for 4 counts, hold for 4, out for 6. Your nervous system will respond.'
  },
  {
    title: 'Ground Yourself',
    description: 'Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.'
  },
  {
    title: 'Reach Out',
    description: 'Text or call someone you trust. You don\'t have to explain everything—just say "I\'m having a hard time."'
  },
  {
    title: 'Change Your Environment',
    description: 'Move to a different room, step outside, or change your physical position. Movement can shift mental state.'
  },
  {
    title: 'Use These Resources',
    description: 'The crisis lines above are staffed by trained professionals. They\'ve heard it all. You won\'t be judged.'
  },
]

export default function CrisisPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      
      {/* Hero - No fancy animations, just clear info */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 px-4 py-2 rounded-full mb-6">
            <Heart className="w-5 h-5" />
            <span className="font-medium">You Matter</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Crisis <span className="text-red-400">Support</span>
          </h1>
          
          <p className="text-xl text-ingauge-muted max-w-2xl mx-auto mb-8">
            If you're in crisis or having thoughts of suicide, please reach out. 
            These resources are free, confidential, and available 24/7.
          </p>
          
          {/* Primary CTA */}
          <a
            href="tel:988"
            className="inline-flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-8 py-4 rounded-2xl transition-colors"
          >
            <Phone className="w-6 h-6" />
            Call 988 Now (USA)
          </a>
          
          <p className="text-sm text-ingauge-muted mt-4">
            Available 24/7 • Free • Confidential
          </p>
        </div>
      </section>
      
      {/* US Crisis Resources */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Crisis Resources <span className="text-ingauge-muted">(USA)</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {crisisResources.map((resource) => (
              <div
                key={resource.name}
                className={`glass rounded-2xl p-6 ${resource.featured ? 'border border-red-500/30 bg-red-500/5' : ''}`}
              >
                <h3 className="font-bold text-lg mb-2">{resource.name}</h3>
                <p className="text-sm text-ingauge-muted mb-4">{resource.description}</p>
                
                <div className="space-y-2">
                  {resource.phone && (
                    <a
                      href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Phone className="w-5 h-5 text-green-400" />
                      <span className="font-medium">{resource.phone}</span>
                    </a>
                  )}
                  
                  {resource.text && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                      <MessageCircle className="w-5 h-5 text-blue-400" />
                      <span>{resource.text}</span>
                    </div>
                  )}
                  
                  {resource.website && (
                    <a
                      href={resource.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <Globe className="w-5 h-5 text-ingauge-accent" />
                      <span className="text-sm">Visit Website</span>
                      <ExternalLink className="w-4 h-4 ml-auto" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* International Resources */}
      <section className="py-12 px-6 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            International <span className="text-ingauge-muted">Resources</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {internationalResources.map((resource) => (
              <a
                key={resource.country}
                href={resource.website}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-4 hover:bg-white/5 transition-colors"
              >
                <div className="font-medium mb-1">{resource.country}</div>
                <div className="text-sm text-ingauge-muted mb-2">{resource.name}</div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-green-400" />
                  {resource.phone}
                </div>
              </a>
            ))}
          </div>
          
          <p className="text-center text-sm text-ingauge-muted mt-8">
            For more international resources, visit{' '}
            <a 
              href="https://findahelpline.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-ingauge-accent hover:underline"
            >
              findahelpline.com
            </a>
          </p>
        </div>
      </section>
      
      {/* Self-Care Steps */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            If You're Struggling <span className="text-ingauge-muted">Right Now</span>
          </h2>
          
          <div className="space-y-4">
            {selfCareSteps.map((step, i) => (
              <div key={step.title} className="glass rounded-xl p-6 flex gap-4">
                <div className="w-10 h-10 rounded-full bg-ingauge-accent/20 flex items-center justify-center shrink-0">
                  <span className="font-bold text-ingauge-accent">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-ingauge-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Important Note */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8 border border-yellow-500/30 bg-yellow-500/5">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-yellow-500 shrink-0" />
              <div>
                <h3 className="font-bold text-lg mb-2">Important Note</h3>
                <p className="text-ingauge-muted mb-4">
                  InGauge is not a crisis intervention service. Our AI tools are not trained to handle 
                  crisis situations and should not be used as a substitute for professional crisis support.
                </p>
                <p className="text-ingauge-muted">
                  If you are having thoughts of suicide or self-harm, please contact one of the crisis 
                  resources above immediately. They are trained professionals who can help.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Back to app */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-ingauge-muted mb-4">
            When you're ready, InGauge is here to support your ongoing journey.
          </p>
          <Link href="/" className="btn-secondary inline-flex items-center gap-2">
            Return to InGauge
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
