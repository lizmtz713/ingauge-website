'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  BookOpen, Brain, Heart, Users, Compass, Target,
  Zap, Shield, Sparkles, GraduationCap, CheckCircle2,
  Clock, Play, Lock, ChevronRight, Star
} from 'lucide-react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import CTA from '../../components/CTA'
import FAQ from '../../components/FAQ'

// Module categories with lessons
const modules = [
  {
    name: 'Foundation',
    icon: Brain,
    color: '#8B5CF6',
    description: 'Understanding how your mind actually works',
    lessons: [
      { title: 'You Are a System', duration: '5 min', free: true },
      { title: 'The PHOSM Framework', duration: '8 min', free: true },
      { title: 'Why "Just Relax" Doesn\'t Work', duration: '6 min', free: true },
      { title: 'The Nervous System Primer', duration: '10 min', free: false },
      { title: 'Interoception: Reading Body Signals', duration: '8 min', free: false },
      { title: 'The Window of Tolerance', duration: '7 min', free: false },
    ]
  },
  {
    name: 'Emotions',
    icon: Heart,
    color: '#EC4899',
    description: 'Mastering emotional intelligence',
    lessons: [
      { title: 'Emotional Granularity', duration: '6 min', free: true },
      { title: 'The 27 Emotions (Beyond Happy/Sad)', duration: '12 min', free: false },
      { title: 'Triggers and Responses', duration: '8 min', free: false },
      { title: 'Emotion Regulation Strategies', duration: '10 min', free: false },
      { title: 'When Emotions Lie', duration: '7 min', free: false },
      { title: 'Processing Difficult Feelings', duration: '9 min', free: false },
      { title: 'The Gift of Anger', duration: '6 min', free: false },
      { title: 'Working with Fear', duration: '8 min', free: false },
    ]
  },
  {
    name: 'Relationships',
    icon: Users,
    color: '#3B82F6',
    description: 'Building deeper connections',
    lessons: [
      { title: 'Attachment Styles 101', duration: '10 min', free: true },
      { title: 'Your Attachment Style', duration: '8 min', free: false },
      { title: 'Communication Patterns', duration: '7 min', free: false },
      { title: 'Boundaries: What They Really Are', duration: '9 min', free: false },
      { title: 'Conflict as Connection', duration: '8 min', free: false },
      { title: 'The Bid for Connection', duration: '6 min', free: false },
      { title: 'Repair After Rupture', duration: '8 min', free: false },
      { title: 'Co-regulation', duration: '7 min', free: false },
    ]
  },
  {
    name: 'Identity',
    icon: Target,
    color: '#10B981',
    description: 'Finding and being yourself',
    lessons: [
      { title: 'Values Clarification', duration: '10 min', free: true },
      { title: 'The Authentic Self', duration: '8 min', free: false },
      { title: 'Masks We Wear', duration: '7 min', free: false },
      { title: 'People Pleasing Decoded', duration: '9 min', free: false },
      { title: 'Setting Aligned Goals', duration: '8 min', free: false },
      { title: 'Decision Making Framework', duration: '7 min', free: false },
    ]
  },
  {
    name: 'Resilience',
    icon: Shield,
    color: '#F59E0B',
    description: 'Building mental toughness',
    lessons: [
      { title: 'What Resilience Actually Is', duration: '6 min', free: true },
      { title: 'The Growth Mindset', duration: '8 min', free: false },
      { title: 'Stress vs. Distress', duration: '7 min', free: false },
      { title: 'Recovery Strategies', duration: '10 min', free: false },
      { title: 'Building Mental Flexibility', duration: '8 min', free: false },
      { title: 'Post-Traumatic Growth', duration: '9 min', free: false },
    ]
  },
  {
    name: 'Mind-Body',
    icon: Zap,
    color: '#EF4444',
    description: 'The brain-body connection',
    lessons: [
      { title: 'Sleep and Mental Health', duration: '8 min', free: true },
      { title: 'Movement as Medicine', duration: '6 min', free: false },
      { title: 'Nutrition and Mood', duration: '9 min', free: false },
      { title: 'Breathwork Basics', duration: '7 min', free: false },
      { title: 'Vagal Toning', duration: '8 min', free: false },
      { title: 'Somatic Practices', duration: '10 min', free: false },
    ]
  },
]

const faqItems = [
  {
    question: "Is this like therapy?",
    answer: "No, the Human Manual is educational content—think of it as a masterclass on yourself. It teaches you concepts and frameworks that help you understand your patterns. While it's informed by psychological research and therapeutic approaches, it's not a replacement for working with a licensed therapist. Think of it as the textbook; therapy is the personalized tutoring."
  },
  {
    question: "How long does it take to complete?",
    answer: "The full Human Manual takes about 6-8 hours to complete if you go straight through. But we recommend taking your time—one or two lessons per day allows the concepts to sink in. Most people complete it over 2-4 weeks. There's also reflection exercises after each lesson that deepen the learning."
  },
  {
    question: "Is the content based on real science?",
    answer: "Absolutely. Every lesson is grounded in established psychological research. We cite our sources from peer-reviewed journals and respected textbooks (including works by Kalat, Carlson, Barrett, Porges, and others). The creator has B.S. degrees in Psychology and Political Science and consulted over 22 academic textbooks in building this curriculum."
  },
  {
    question: "What's included in the free version?",
    answer: "The free version includes the first lesson of each module (8 lessons total) plus the complete Foundation module basics. This gives you a solid understanding of the PHOSM framework and enough to decide if the full Manual is worth it. The full 48+ lessons require InGauge Pro."
  },
  {
    question: "Can I revisit lessons?",
    answer: "Yes! All lessons are available to revisit anytime. Many users find that lessons hit different after you've been using the app for a while. We also add new lessons regularly based on user requests and emerging research."
  },
  {
    question: "Is there audio/video content?",
    answer: "Currently lessons are text-based with illustrations, but we're adding audio narration in an upcoming update. Video content is planned for 2026. The text format means you can read at your own pace and easily reference specific sections."
  },
]

const testimonials = [
  {
    quote: "I'm 35 years old and finally understand why I react the way I do. The attachment styles lesson alone was worth the subscription.",
    author: "David R.",
    role: "Financial Analyst",
    rating: 5
  },
  {
    quote: "As a therapist, I recommend InGauge to clients as 'homework.' The Human Manual covers concepts I spend sessions explaining.",
    author: "Dr. Amanda P.",
    role: "Licensed Psychologist",
    rating: 5
  },
  {
    quote: "The lesson on 'Why Just Relax Doesn't Work' made me cry. Finally someone explained my nervous system to me.",
    author: "Kira T.",
    role: "Grad Student",
    rating: 5
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
            >
              <BookOpen className="w-4 h-4 text-ingauge-accent" />
              <span className="text-sm text-ingauge-muted">48+ Lessons</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              The <span className="gradient-text">Human Manual</span>
              <br />You Were Never Given
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Learn how your mind actually works. 48+ lessons covering emotions, relationships, identity, resilience, and the mind-body connection—all backed by science.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a href="#curriculum" className="btn-primary">
                View Full Curriculum
                <ChevronRight className="w-4 h-4 ml-2 inline" />
              </a>
              <a href="#free-lessons" className="btn-secondary">
                <Play className="w-4 h-4 mr-2 inline" />
                Start Free Lessons
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-6 mt-8 justify-center lg:justify-start text-sm text-ingauge-muted"
            >
              <span className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Science-backed
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                ~6 hours total
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                4.9 rating
              </span>
            </motion.div>
          </div>
          
          {/* Right: Book visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 relative overflow-hidden">
              {/* Book cover design */}
              <div className="bg-gradient-to-br from-ingauge-accent/20 to-gauge-alignment/20 rounded-2xl p-8 text-center relative">
                <div className="absolute inset-0 opacity-10">
                  {/* Grid pattern */}
                  <svg className="w-full h-full">
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="relative z-10">
                  <Brain className="w-16 h-16 mx-auto mb-4 text-ingauge-accent" />
                  <h3 className="text-2xl font-bold mb-2">Human Manual</h3>
                  <p className="text-sm text-ingauge-muted mb-4">The guide to understanding yourself</p>
                  
                  {/* Module icons */}
                  <div className="flex justify-center gap-3 mt-6">
                    {modules.slice(0, 6).map((mod) => (
                      <div
                        key={mod.name}
                        className="w-8 h-8 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${mod.color}30` }}
                      >
                        <mod.icon className="w-4 h-4" style={{ color: mod.color }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">48+</div>
                  <div className="text-xs text-ingauge-muted">Lessons</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">6</div>
                  <div className="text-xs text-ingauge-muted">Modules</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">22+</div>
                  <div className="text-xs text-ingauge-muted">Textbooks</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const reasons = [
    {
      title: "You weren't taught this",
      description: "School taught math and history, not how your nervous system works or why you react the way you do."
    },
    {
      title: "Generic advice fails",
      description: "'Just breathe' doesn't work when you don't understand WHY you're dysregulated in the first place."
    },
    {
      title: "Knowledge is power",
      description: "When you understand the mechanisms, you can actually intervene. Names create control."
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
            Why you need a <span className="gradient-text">Human Manual</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-ingauge-accent/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-ingauge-accent">{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
              <p className="text-ingauge-muted text-sm">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CurriculumSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeModule, setActiveModule] = useState(0)
  
  return (
    <section ref={ref} id="curriculum" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Full <span className="gradient-text">Curriculum</span>
          </h2>
          <p className="text-lg text-ingauge-muted max-w-2xl mx-auto">
            6 modules, 48+ lessons, covering everything you need to understand yourself
          </p>
        </motion.div>
        
        {/* Module tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {modules.map((mod, i) => (
            <motion.button
              key={mod.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              onClick={() => setActiveModule(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeModule === i 
                  ? 'bg-white/10' 
                  : 'hover:bg-white/5'
              }`}
              style={{ 
                borderWidth: 1,
                borderColor: activeModule === i ? mod.color : 'transparent'
              }}
            >
              <mod.icon className="w-4 h-4" style={{ color: mod.color }} />
              <span className={activeModule === i ? 'text-white' : 'text-ingauge-muted'}>
                {mod.name}
              </span>
            </motion.button>
          ))}
        </div>
        
        {/* Active module content */}
        <motion.div
          key={activeModule}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${modules[activeModule].color}20` }}
            >
              {(() => {
                const IconComponent = modules[activeModule].icon
                return <IconComponent className="w-7 h-7" style={{ color: modules[activeModule].color }} />
              })()}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{modules[activeModule].name}</h3>
              <p className="text-ingauge-muted">{modules[activeModule].description}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {modules[activeModule].lessons.map((lesson, i) => (
              <div
                key={lesson.title}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </div>
                  <div>
                    <div className="font-medium">{lesson.title}</div>
                    <div className="text-sm text-ingauge-muted flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {lesson.duration}
                    </div>
                  </div>
                </div>
                {lesson.free ? (
                  <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                    Free
                  </span>
                ) : (
                  <Lock className="w-4 h-4 text-ingauge-muted" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ScienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const sources = [
    { author: 'James W. Kalat', work: 'Biological Psychology' },
    { author: 'Neil R. Carlson', work: 'Foundations of Physiological Psychology' },
    { author: 'Lisa Feldman Barrett', work: 'How Emotions Are Made' },
    { author: 'Stephen Porges', work: 'The Polyvagal Theory' },
    { author: 'John Bowlby', work: 'Attachment and Loss' },
    { author: 'Bessel van der Kolk', work: 'The Body Keeps the Score' },
  ]
  
  return (
    <section ref={ref} className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <GraduationCap className="w-12 h-12 text-ingauge-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Grounded in <span className="gradient-text">Real Science</span>
            </h2>
            <p className="text-ingauge-muted max-w-2xl mx-auto">
              Every lesson is backed by peer-reviewed research and respected academic textbooks. 
              We consulted 22+ sources to build this curriculum.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sources.map((source, i) => (
              <motion.div
                key={source.author}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5"
              >
                <BookOpen className="w-5 h-5 text-ingauge-accent shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">{source.author}</div>
                  <div className="text-sm text-ingauge-muted italic">{source.work}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
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
            <span className="gradient-text">Life-changing</span> lessons
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

export default function HumanManualPage() {
  return (
    <main className="bg-ingauge-bg min-h-screen">
      <Navigation />
      <HeroSection />
      <WhySection />
      <CurriculumSection />
      <ScienceSection />
      <TestimonialsSection />
      <FAQ items={faqItems} title="Human Manual FAQ" />
      <CTA 
        title="Start learning about yourself"
        subtitle="Get access to 48+ lessons that will change how you understand your mind."
      />
      <Footer />
    </main>
  )
}
