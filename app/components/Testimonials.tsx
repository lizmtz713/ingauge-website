'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar?: string
  rating?: number
  feature?: string // Optional: which feature they're talking about
}

interface TestimonialsProps {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
  variant?: 'grid' | 'carousel'
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Finally, an app that doesn't make me feel like I need to be fixed. InGauge helped me understand that I'm a system that needs calibration, not repair.",
    author: "Sarah M.",
    role: "Software Engineer",
    rating: 5
  },
  {
    quote: "The 6 gauges changed everything. I can actually see patterns in my mental health now instead of just feeling lost.",
    author: "James K.",
    role: "Teacher",
    rating: 5
  },
  {
    quote: "I've tried every mental health app. InGauge is the only one that stuck. The AI tools actually understand context.",
    author: "Maya L.",
    role: "Marketing Director",
    rating: 5
  },
]

export default function Testimonials({ 
  title = "What people are saying",
  subtitle = "Join thousands who are understanding themselves better",
  testimonials = defaultTestimonials,
  variant = 'grid'
}: TestimonialsProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ingauge-surface/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">{title}</span>
          </h2>
          <p className="text-lg text-ingauge-muted">{subtitle}</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 }}
              className="glass rounded-3xl p-8 card-hover relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-ingauge-accent/20" />
              
              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
              )}
              
              <p className="text-lg mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                {testimonial.avatar ? (
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-ingauge-accent to-gauge-alignment flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-ingauge-muted">{testimonial.role}</div>
                  {testimonial.feature && (
                    <div className="text-xs text-ingauge-accent mt-1">Uses: {testimonial.feature}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
