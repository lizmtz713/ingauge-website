'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Brain, MessageCircle, RotateCcw, Users, PenTool, 
  Smile, Search, Heart, Sparkles, CheckCircle2,
  Bot, Shield, Zap, Lock, ChevronRight, Star
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'

// All 7 AI tools with detailed information
const aiTools = [
  {
    id: 'psych',
    name: 'Talk to Psych',
    icon: Brain,
    color: '#8B5CF6',
    tagline: 'Your AI companion who actually gets it',
    description: 'Have meaningful conversations about what\'s going on in your life. Psych isn\'t a chatbot—it\'s trained on psychological principles and knows YOUR patterns from your gauge data.',
    features: [
      'Contextual awareness of your current state',
      'Memory of past conversations',
      'Trained on therapeutic communication styles',
      'Knows when to suggest professional help'
    ],
    useCases: [
      'Processing difficult situations',
      'Working through emotions',
      'Getting unstuck on decisions',
      'Late-night when you need to talk'
    ],
    example: {
      user: "I don't know why I keep getting into arguments with my partner about small things.",
      response: "I notice your Connection gauge has been lower this week, and your last check-in mentioned feeling overwhelmed at work. Sometimes when we're depleted, small things become the outlet for bigger stress. What's been weighing on you outside the relationship?"
    }
  },
  {
    id: 'relate',
    name: 'Relate',
    icon: Users,
    color: '#3B82F6',
    tagline: 'Understand others better',
    description: 'Get insights into someone else\'s behavior, communication style, or what might be going on for them. Relate helps you step into their perspective.',
    features: [
      'Analyze communication patterns',
      'Understand attachment styles',
      'Decode motivations and needs',
      'Integrates with your Circle connections'
    ],
    useCases: [
      'Understanding a difficult colleague',
      'Navigating family dynamics',
      'Dating and early relationships',
      'Parent-child conflicts'
    ],
    example: {
      user: "My mom gets defensive whenever I bring up anything about my childhood.",
      response: "Defensiveness often signals protection—she might be guarding against shame or the pain of acknowledging mistakes. Rather than 'bringing up the past,' try: 'I'm working on understanding myself better. Can you help me understand what things were like for YOU during that time?' This invites her story without accusation."
    }
  },
  {
    id: 'replay',
    name: 'Replay',
    icon: RotateCcw,
    color: '#F59E0B',
    tagline: '5-phase event processing',
    description: 'When something happens and you can\'t stop thinking about it, Replay walks you through a structured 5-phase process to fully process the event.',
    features: [
      'What happened (objective facts)',
      'Body sensations during/after',
      'Thoughts and interpretations',
      'Emotions present',
      'Insights and integration'
    ],
    useCases: [
      'Conflict that\'s stuck in your head',
      'Embarrassing moments',
      'Traumatic experiences (minor)',
      'Arguments you keep replaying'
    ],
    example: {
      user: "I snapped at my coworker in a meeting and I can't stop thinking about it.",
      response: "Let's walk through this together. Phase 1: What actually happened? Just the facts—what was said, who was there, what time... [Guides through all 5 phases to reach integration]"
    }
  },
  {
    id: 'roleplay',
    name: 'Role Play',
    icon: MessageCircle,
    color: '#10B981',
    tagline: 'Practice difficult conversations',
    description: 'Rehearse challenging conversations before you have them. The AI plays the other person so you can practice different approaches.',
    features: [
      'AI plays the other person',
      'Multiple scenario outcomes',
      'Coaching on responses',
      'Practice until confident'
    ],
    useCases: [
      'Asking for a raise',
      'Setting boundaries',
      'Difficult breakup conversations',
      'Confronting someone'
    ],
    example: {
      user: "I need to tell my friend that their constant negativity is affecting me.",
      response: "I'll play your friend. Start when ready, and I'll respond how they might. Afterward, I'll give you feedback on what worked and other approaches... [Friend voice]: 'Hey! What's up? You sounded serious when you said we need to talk...'"
    }
  },
  {
    id: 'journal',
    name: 'Journal',
    icon: PenTool,
    color: '#EC4899',
    tagline: 'AI-guided reflection',
    description: 'Not just a blank page—Journal asks you questions based on your current state and gently guides you deeper into what\'s really going on.',
    features: [
      'Adaptive prompts based on your state',
      'Guided reflection exercises',
      'Pattern recognition over time',
      'Private and encrypted'
    ],
    useCases: [
      'Daily reflection',
      'Processing major life events',
      'Gratitude practice',
      'Goal clarification'
    ],
    example: {
      user: "[Opens Journal with State at 45]",
      response: "I notice you're feeling a bit depleted today. Let's start gentle. What's one thing that happened in the last 24 hours that you're grateful for, even if it's small?"
    }
  },
  {
    id: 'help',
    name: 'Help',
    icon: Heart,
    color: '#EF4444',
    tagline: 'Help someone else',
    description: 'When someone you care about is struggling, Help gives you guidance on what to say, what NOT to say, and how to actually support them.',
    features: [
      'Situation-specific advice',
      'What to say / what not to say',
      'When to suggest professional help',
      'Self-care while supporting others'
    ],
    useCases: [
      'Friend going through a breakup',
      'Family member with depression',
      'Colleague having a hard time',
      'Child struggling at school'
    ],
    example: {
      user: "My friend just told me she's been having suicidal thoughts. I don't know what to say.",
      response: "First, you're doing the right thing by taking this seriously. Here's how to respond: DO: Thank her for trusting you, ask directly if she has a plan, stay calm, offer to help find resources. DON'T: Dismiss it, promise to keep it secret, try to 'fix' it yourself. Would you like the crisis resources to share with her?"
    }
  },
  {
    id: 'decode',
    name: 'Decode',
    icon: Search,
    color: '#06B6D4',
    tagline: '4-phase message analysis',
    description: 'Got a confusing text? Screenshot support! Decode analyzes messages through 4 phases: literal meaning, tone/subtext, what they might need, and suggested responses.',
    features: [
      'Screenshot support (upload images)',
      'Literal meaning analysis',
      'Tone and subtext reading',
      'Multiple response options'
    ],
    useCases: [
      'Confusing texts from dates',
      'Passive-aggressive work emails',
      'Mixed signals from friends',
      'What did they REALLY mean?'
    ],
    example: {
      user: "[Uploads screenshot of text: 'I'm fine, don't worry about it']",
      response: "Phase 1 (Literal): They're saying not to worry. Phase 2 (Tone): The phrasing 'don't worry about it' often signals the opposite—something IS wrong. Phase 3 (Needs): They may want you to pursue, but feel they shouldn't have to ask. Phase 4 (Options): A) 'I can tell something's off. I'm here when you're ready.' B) 'Okay, but I'm thinking about you.'"
    }
  },
  {
    id: 'love',
    name: 'Love',
    icon: Heart,
    color: '#F472B6',
    tagline: 'The stuff nobody teaches',
    description: 'Love languages, intimacy, sex ed, connection. The whole experience of human romantic and physical connection—addressed honestly, without judgment, grounded in science.',
    features: [
      'Love languages assessment',
      'Science-based sex education',
      'Intimacy and connection',
      'Addresses shame and misinformation'
    ],
    useCases: [
      'Understanding your needs',
      'Communication in relationships',
      'Questions you\'re embarrassed to ask',
      'Building deeper intimacy'
    ],
    example: {
      user: "I've been with my partner for 3 years and our physical intimacy has dropped off. Is this normal?",
      response: "Very normal—research shows desire naturally shifts from 'spontaneous' to 'responsive' in long-term relationships. This doesn't mean attraction is gone; it means the context needs to change. Let's explore: Are you creating the conditions for desire, or waiting for it to appear on its own?"
    },
    badge: 'Coming Soon'
  },
]

const faqItems = [
  {
    question: "Is my conversation data private?",
    answer: "Absolutely. All conversations are end-to-end encrypted and never used to train AI models. We don't sell data. You can export or delete your conversations anytime. Your privacy is fundamental to the therapeutic value of these tools."
  },
  {
    question: "Is this a replacement for therapy?",
    answer: "No. InGauge AI tools are educational and supportive, not therapeutic treatment. They're great for day-to-day processing, but for clinical conditions, trauma, or crisis situations, you need a licensed professional. Our tools will tell you when it's time to seek professional help."
  },
  {
    question: "Which AI model powers these tools?",
    answer: "We use a combination of GPT-4o and custom-trained models depending on the task. The AI is specifically fine-tuned on psychological frameworks and communication principles. Pro users can bring their own API key if preferred."
  },
  {
    question: "How many AI interactions do I get?",
    answer: "Free users get 3 AI interactions per day across all tools. InGauge Pro includes unlimited access to all AI tools, which is where most users find the real value."
  },
  {
    question: "Can the AI remember past conversations?",
    answer: "Yes! Talk to Psych and other tools maintain conversation memory within sessions and across sessions. This means you can pick up where you left off, and the AI understands your ongoing situation rather than starting fresh each time."
  },
  {
    question: "What makes this different from ChatGPT?",
    answer: "Three things: 1) InGauge AI is trained specifically on psychological frameworks and therapeutic communication—not just general knowledge. 2) It has context from your gauges and patterns. 3) It's structured for specific use cases (processing, practice, decoding) rather than general chat."
  },
]

const testimonials = [
  {
    quote: "Talk to Psych at 2am when I'm spiraling has been a game changer. It's not therapy, but it gets me through the night.",
    author: "Jamie S.",
    role: "Night Shift Worker",
    rating: 5,
    feature: "Talk to Psych"
  },
  {
    quote: "Decode helped me realize my ex's texts weren't confusing—I just didn't want to accept what they meant.",
    author: "Chris M.",
    role: "Designer",
    rating: 5,
    feature: "Decode"
  },
  {
    quote: "I practiced asking for a raise with Role Play 5 times. Got it on the first try in real life.",
    author: "Priya K.",
    role: "Account Manager",
    rating: 5,
    feature: "Role Play"
  },
]

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ingauge-accent/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-ingauge-accent" />
            <span className="text-sm text-ingauge-muted">7 AI-Powered Tools</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            AI that <span className="gradient-text">actually understands</span> you
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ingauge-muted mb-8"
          >
            Not generic chatbots. AI tools trained on psychological principles that know your patterns 
            and help you process, practice, and understand.
          </motion.p>
          
          {/* Tool icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 flex-wrap mb-8"
          >
            {aiTools.map((tool, i) => (
              <motion.a
                key={tool.id}
                href={`#${tool.id}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + i * 0.05 }}
                className="glass w-14 h-14 rounded-xl flex items-center justify-center hover:scale-110 transition-transform relative"
                style={{ borderColor: `${tool.color}40` }}
              >
                <tool.icon className="w-6 h-6" style={{ color: tool.color }} />
                {tool.badge && (
                  <span className="absolute -top-1 -right-1 text-[8px] bg-ingauge-accent text-white px-1.5 rounded-full">
                    Soon
                  </span>
                )}
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#psych" className="btn-primary">
              Explore All Tools
              <ChevronRight className="w-4 h-4 ml-2 inline" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DifferenceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const differences = [
    {
      icon: Brain,
      title: 'Psychologically Trained',
      description: 'Our AI is fine-tuned on therapeutic communication, not just general knowledge'
    },
    {
      icon: Zap,
      title: 'Context Aware',
      description: 'It knows your gauge scores, patterns, and history—not starting from scratch'
    },
    {
      icon: Shield,
      title: 'Purpose Built',
      description: 'Each tool is designed for specific use cases, not generic chat'
    },
    {
      icon: Lock,
      title: 'Actually Private',
      description: 'End-to-end encrypted, never used for training, deletable anytime'
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
            Not just another <span className="gradient-text">chatbot</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differences.map((diff, i) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-ingauge-accent/20 flex items-center justify-center mx-auto mb-4">
                <diff.icon className="w-6 h-6 text-ingauge-accent" />
              </div>
              <h3 className="font-bold mb-2">{diff.title}</h3>
              <p className="text-sm text-ingauge-muted">{diff.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ToolDetailSection({ tool, index }: { tool: typeof aiTools[0], index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isEven = index % 2 === 0
  
  return (
    <section ref={ref} id={tool.id} className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
        >
          {/* Content */}
          <div className={!isEven ? 'lg:order-2' : ''}>
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ backgroundColor: `${tool.color}20` }}
            >
              <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
              <span className="font-medium" style={{ color: tool.color }}>{tool.name}</span>
              {tool.badge && (
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full ml-2">
                  {tool.badge}
                </span>
              )}
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{tool.tagline}</h2>
            <p className="text-lg text-ingauge-muted mb-6">{tool.description}</p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-ingauge-muted">Features</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-ingauge-muted">Use Cases</h4>
                <ul className="space-y-2">
                  {tool.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ingauge-muted">
                      <div className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: tool.color }} />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Example conversation */}
          <div className={!isEven ? 'lg:order-1' : ''}>
            <div className="glass rounded-3xl p-6 relative overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: `linear-gradient(90deg, ${tool.color}, transparent)` }}
              />
              
              <div className="flex items-center gap-3 mb-6">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${tool.color}20` }}
                >
                  <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                </div>
                <div>
                  <div className="font-semibold">{tool.name}</div>
                  <div className="text-xs text-ingauge-muted">Example conversation</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-ingauge-accent/20 rounded-2xl rounded-br-sm px-4 py-3 max-w-[80%]">
                    <p className="text-sm">{tool.example.user}</p>
                  </div>
                </div>
                
                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-ingauge-muted">{tool.example.response}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/10 text-center">
                <span className="text-xs text-ingauge-muted">
                  ✨ Conversations are private and encrypted
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function AllToolsSection() {
  return (
    <div className="py-10">
      {aiTools.map((tool, index) => (
        <ToolDetailSection key={tool.id} tool={tool} index={index} />
      ))}
    </div>
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
            AI that makes a <span className="gradient-text">real difference</span>
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
              <div className="flex gap-1 mb-2">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <div className="text-xs text-ingauge-accent mb-4">Uses: {t.feature}</div>
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

export default function AIToolsPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <DifferenceSection />
      <AllToolsSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="AI Tools FAQ" />
      <CTA 
        title="Start talking to AI that gets it"
        subtitle="7 AI tools designed for processing, practice, and understanding—not generic chat."
      />
      <Footer />
    </main>
  )
}
