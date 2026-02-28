'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Mail, Heart, Lock, Send, MessageCircle, Users,
  Check, Shield, Sparkles, ChevronRight
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

const mailTypes = [
  {
    icon: Send,
    title: 'Open Heart Mail',
    description: 'They see who sent it. Perfect for gratitude, check-ins, and sharing resources.',
    examples: [
      '"I\'ve been thinking about you and wanted to check in."',
      '"Found this article and thought of you."',
      '"Thank you for always being there."'
    ],
    color: '#8B5CF6'
  },
  {
    icon: Lock,
    title: 'Anonymous Heart Mail',
    description: 'They only know someone in their Circle sent it. Perfect for hard truths, concerns, and sensitive topics.',
    examples: [
      '"We\'ve noticed you haven\'t been yourself. We\'re here."',
      '"Something about that relationship worries us."',
      '"You\'re being too hard on yourself. We see you."'
    ],
    color: '#EC4899'
  },
  {
    icon: Heart,
    title: 'Soft Share',
    description: 'They get a notification and accept when ready. Perfect for big emotional shares.',
    examples: [
      '"I have something I\'ve wanted to tell you..."',
      '"There\'s something I need you to know."',
      '"I wrote you a letter. Read it when you\'re ready."'
    ],
    color: '#10B981'
  },
]

const noteTypes = [
  { emoji: '💜', label: 'General', desc: 'Just sharing thoughts' },
  { emoji: '✨', label: 'Gratitude', desc: 'Thank you for...' },
  { emoji: '💭', label: 'Concern', desc: 'I\'m worried about...' },
  { emoji: '🙏', label: 'Apology', desc: 'I\'m sorry for...' },
  { emoji: '🕊️', label: 'Forgiveness', desc: 'I forgive you for...' },
  { emoji: '🚧', label: 'Boundary', desc: 'What I need is...' },
  { emoji: '💔', label: 'Grief', desc: 'To someone who passed' },
  { emoji: '🌟', label: 'Encouragement', desc: 'I believe in you' },
]

export default function HeartInboxPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  
  return (
    <main className="min-h-screen bg-ingauge-bg text-white">
      <Navigation />
      
      {/* Hero */}
      <section ref={heroRef} className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <Mail className="w-4 h-4 text-pink-400" />
              A New Communication Channel
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Heart <span className="gradient-text">Inbox</span>
            </h1>
            
            <p className="text-2xl text-ingauge-muted mb-4">
              Mail for the mind.
            </p>
            
            <p className="text-xl text-ingauge-muted max-w-2xl mx-auto mb-8">
              Physical mail for physical things. Email for digital things. 
              <strong className="text-white"> Heart Inbox for what actually matters.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-6 bg-ingauge-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">The Problem</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { channel: 'Email', problem: 'Gets buried with spam. Feels formal.' },
              { channel: 'Text', problem: 'Demands immediate response. High pressure.' },
              { channel: 'Calling', problem: 'Requires both available. Very high pressure.' },
              { channel: 'Social Media', problem: 'Too public. Performative.' },
            ].map((item, i) => (
              <motion.div
                key={item.channel}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-5"
              >
                <div className="font-semibold text-red-400 mb-2">{item.channel}</div>
                <div className="text-ingauge-muted text-sm">{item.problem}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-xl text-ingauge-muted">
              None of these work for: <span className="text-white">"I've been worried about you"</span> or{' '}
              <span className="text-white">"There's something I've never told you"</span> or{' '}
              <span className="text-white">"I noticed something that concerns me."</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Types of Heart Mail */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Three Ways to Share</h2>
          <p className="text-ingauge-muted text-center mb-12 max-w-2xl mx-auto">
            Choose how much to reveal. All options are valid.
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {mailTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-3xl p-8"
              >
                <div 
                  className="w-16 h-16 rounded-2xl mb-6 flex items-center justify-center"
                  style={{ backgroundColor: `${type.color}20` }}
                >
                  <type.icon className="w-8 h-8" style={{ color: type.color }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{type.title}</h3>
                <p className="text-ingauge-muted mb-6">{type.description}</p>
                
                <div className="space-y-3">
                  {type.examples.map((ex, j) => (
                    <div key={j} className="text-sm text-ingauge-muted/80 italic pl-4 border-l-2 border-ingauge-surface">
                      {ex}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anonymous Deep Dive */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-500/5 to-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 text-sm font-medium mb-4">
              The Game Changer
            </div>
            <h2 className="text-3xl font-bold mb-4">Why Anonymous Matters</h2>
            <p className="text-ingauge-muted max-w-2xl mx-auto">
              Sometimes the truth needs to be separated from the messenger.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-green-400">What Anonymous Enables</h3>
              <ul className="space-y-3 text-ingauge-muted">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Tell hard truths without fear of judgment</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Share concerns about relationships they're in</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>Express care without awkwardness</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                  <span>No retaliation — they can't be angry at who they don't know</span>
                </li>
              </ul>
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h3 className="font-semibold mb-4 text-blue-400">Built-In Safety</h3>
              <ul className="space-y-3 text-ingauge-muted">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Only Circle members can send anonymous mail</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>AI screens all messages for harmful content</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Recipients can disable anonymous mail anytime</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Abuse = lose anonymous privileges</span>
                </li>
              </ul>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 bg-gradient-to-br from-pink-500/10 to-purple-500/10"
          >
            <div className="text-sm text-pink-400 mb-4">What they receive:</div>
            <div className="bg-ingauge-bg/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="font-semibold">Anonymous Heart Mail</div>
                  <div className="text-sm text-ingauge-muted">From someone in your Circle</div>
                </div>
              </div>
              <p className="text-lg italic mb-4">
                "We've been watching you push yourself to breaking lately. You don't have to prove anything to us. 
                We love you already. Please take care of yourself."
              </p>
              <div className="text-xs text-ingauge-muted">— Sent with love by someone who cares ❤️</div>
            </div>
            <div className="mt-6 text-center text-ingauge-muted">
              They know their Circle is watching out for them. The message speaks for everyone who loves them.
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heart Notes */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Heart Notes — Write Before You Send</h2>
            <p className="text-ingauge-muted max-w-2xl mx-auto">
              Not ready to send? Write it anyway. Sometimes getting it out is enough.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {noteTypes.map((type, i) => (
              <motion.div
                key={type.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-4 text-center"
              >
                <div className="text-2xl mb-2">{type.emoji}</div>
                <div className="font-medium text-sm">{type.label}</div>
                <div className="text-xs text-ingauge-muted">{type.desc}</div>
              </motion.div>
            ))}
          </div>
          
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4">What You Can Do With a Heart Note</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Lock, text: 'Keep private forever (just processing)' },
                { icon: Send, text: 'Send when ready (you control timing)' },
                { icon: Heart, text: 'Soft share (they accept when ready)' },
                { icon: MessageCircle, text: 'Convert to talking points' },
                { icon: Users, text: 'Practice first via Role Play' },
                { icon: Sparkles, text: 'AI helps clarify your message' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-ingauge-muted">
                  <item.icon className="w-5 h-5 text-ingauge-accent shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-ingauge-surface/30">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Say What Matters</h2>
          <p className="text-ingauge-muted mb-8">
            The things you can't text, you can Heart Mail.
          </p>
          <a 
            href="https://apps.apple.com" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-ingauge-accent hover:bg-ingauge-accent/90 rounded-xl font-semibold transition-all"
          >
            Download InGauge <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
