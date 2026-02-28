'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Activity, Menu, X, ChevronDown } from 'lucide-react'

const features = [
  { name: 'The 6 Gauges', href: '/features/gauges', desc: 'Your personal dashboard' },
  { name: 'Human Manual', href: '/features/human-manual', desc: '48+ life lessons' },
  { name: 'AI Tools', href: '/features/ai-tools', desc: '8 AI-powered tools' },
  { name: 'Circle', href: '/features/circle', desc: 'Relationship intelligence' },
  { name: 'Heart Inbox', href: '/features/heart-inbox', desc: 'Mail for the mind' },
  { name: 'World Temperature', href: '/features/world-temperature', desc: 'How humanity is feeling' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ingauge-accent to-gauge-alignment flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">InGauge</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8">
            {/* Features Dropdown */}
            <div className="relative group">
              <button 
                className="text-ingauge-muted hover:text-white transition-colors flex items-center gap-1"
                onMouseEnter={() => setFeaturesOpen(true)}
              >
                Features <ChevronDown className="w-4 h-4" />
              </button>
              
              <div 
                className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
                onMouseLeave={() => setFeaturesOpen(false)}
              >
                <div className="glass rounded-2xl p-4 min-w-[300px] grid grid-cols-1 gap-1">
                  {features.map((feature) => (
                    <Link
                      key={feature.href}
                      href={feature.href}
                      className="flex flex-col p-3 rounded-xl hover:bg-white/5 transition-colors"
                    >
                      <span className="font-medium text-white">{feature.name}</span>
                      <span className="text-sm text-ingauge-muted">{feature.desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="/pricing" className="text-ingauge-muted hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="text-ingauge-muted hover:text-white transition-colors">About</Link>
            <Link href="/support" className="text-ingauge-muted hover:text-white transition-colors">Support</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/pricing" className="btn-primary text-sm py-3 px-6 hidden sm:block">
              Get the App
            </Link>
            
            <button 
              className="lg:hidden text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="absolute right-0 top-0 h-full w-80 bg-ingauge-bg border-l border-ingauge-surface p-6"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setMobileOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-ingauge-muted mb-3">Features</div>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <Link
                        key={feature.href}
                        href={feature.href}
                        className="block py-2 text-white hover:text-ingauge-accent transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {feature.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Link href="/pricing" className="block py-2 text-white hover:text-ingauge-accent" onClick={() => setMobileOpen(false)}>Pricing</Link>
                  <Link href="/about" className="block py-2 text-white hover:text-ingauge-accent" onClick={() => setMobileOpen(false)}>About</Link>
                  <Link href="/support" className="block py-2 text-white hover:text-ingauge-accent" onClick={() => setMobileOpen(false)}>Support</Link>
                  <Link href="/crisis" className="block py-2 text-white hover:text-ingauge-accent" onClick={() => setMobileOpen(false)}>Crisis Support</Link>
                </div>
                
                <Link href="/pricing" className="btn-primary w-full text-center mt-8" onClick={() => setMobileOpen(false)}>
                  Get the App
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
