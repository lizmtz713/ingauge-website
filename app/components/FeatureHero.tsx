'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { LucideIcon, Apple, Play } from 'lucide-react'
import Link from 'next/link'

interface FeatureHeroProps {
  badge?: string
  title: string | ReactNode
  subtitle: string
  icon?: LucideIcon
  iconColor?: string
  showCTA?: boolean
  children?: ReactNode // For custom content like visualizations
}

export default function FeatureHero({
  badge,
  title,
  subtitle,
  icon: Icon,
  iconColor = '#8B5CF6',
  showCTA = true,
  children
}: FeatureHeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[100px] animate-pulse-slow" 
             style={{ backgroundColor: `${iconColor}20` }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gauge-alignment/20 rounded-full blur-[100px] animate-pulse-slow" 
             style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            {badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6"
              >
                {Icon && <Icon className="w-4 h-4" style={{ color: iconColor }} />}
                <span className="text-sm text-ingauge-muted">{badge}</span>
              </motion.div>
            )}
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-xl text-ingauge-muted mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {subtitle}
            </motion.p>
            
            {showCTA && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link href="/pricing" className="btn-primary flex items-center justify-center gap-2">
                  <Apple className="w-5 h-5" />
                  Download for iOS
                </Link>
                <Link href="#learn-more" className="btn-secondary flex items-center justify-center gap-2">
                  <Play className="w-5 h-5" />
                  Learn More
                </Link>
              </motion.div>
            )}
          </div>
          
          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
