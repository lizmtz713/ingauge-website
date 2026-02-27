'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Apple, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface CTAProps {
  title?: string
  subtitle?: string
  variant?: 'default' | 'minimal'
}

export default function CTA({ 
  title = "Ready to meet your system?",
  subtitle = "Join thousands who have discovered that understanding themselves is the first step to feeling better.",
  variant = 'default'
}: CTAProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  if (variant === 'minimal') {
    return (
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="glass rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-ingauge-muted mb-6 max-w-xl mx-auto">{subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-primary flex items-center justify-center gap-2">
                <Apple className="w-5 h-5" />
                Download for iOS
              </Link>
              <Link href="/pricing" className="btn-secondary flex items-center justify-center gap-2">
                View Pricing
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    )
  }
  
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
            {title.includes('system') ? (
              <>
                Ready to meet{' '}
                <span className="gradient-text">your system?</span>
              </>
            ) : (
              <span className="gradient-text">{title}</span>
            )}
          </h2>
          <p className="text-xl text-ingauge-muted mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="btn-primary flex items-center justify-center gap-2 text-lg py-5 px-10">
              <Apple className="w-6 h-6" />
              Download for iOS
            </Link>
            <Link href="https://testflight.apple.com/join/ingauge" className="btn-secondary flex items-center justify-center gap-2 text-lg py-5 px-10">
              Join TestFlight
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          <p className="text-sm text-ingauge-muted mt-8">
            ✨ Free forever plan available · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  )
}
