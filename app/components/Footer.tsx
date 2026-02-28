'use client'

import Link from 'next/link'
import { Activity } from 'lucide-react'

const footerLinks = {
  features: [
    { name: 'The 6 Gauges', href: '/features/gauges' },
    { name: 'Human Manual', href: '/features/human-manual' },
    { name: 'AI Tools', href: '/features/ai-tools' },
    { name: 'Circle', href: '/features/circle' },
    { name: 'Heart Inbox', href: '/features/heart-inbox' },
    { name: 'World Temperature', href: '/features/world-temperature' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Press Kit', href: '/about#press' },
    { name: 'Careers', href: '/about#careers' },
  ],
  support: [
    { name: 'Help Center', href: '/support' },
    { name: 'Crisis Resources', href: '/crisis' },
    { name: 'Contact Us', href: '/support#contact' },
    { name: 'System Status', href: '/support#status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'HIPAA Compliance', href: '/hipaa' },
    { name: 'Data Security', href: '/security' },
  ],
}

export default function Footer() {
  return (
    <footer className="py-16 border-t border-ingauge-surface bg-ingauge-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-ingauge-accent to-gauge-alignment flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">InGauge</span>
            </Link>
            <p className="text-ingauge-muted max-w-xs mb-6">
              The Human Cockpit. You are not broken. You are a system. Now you have a dashboard.
            </p>
            <p className="text-sm text-ingauge-muted">Made with 💜 in Houston, Texas</p>
          </div>
          
          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4">Features</h4>
            <ul className="space-y-3">
              {footerLinks.features.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ingauge-muted hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ingauge-muted hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ingauge-muted hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-ingauge-muted hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-ingauge-surface flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-ingauge-muted">© 2026 InGauge. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="https://twitter.com/getingauge" target="_blank" rel="noopener" className="text-ingauge-muted hover:text-white transition-colors">Twitter</a>
            <a href="https://instagram.com/getingauge" target="_blank" rel="noopener" className="text-ingauge-muted hover:text-white transition-colors">Instagram</a>
            <a href="https://tiktok.com/@getingauge" target="_blank" rel="noopener" className="text-ingauge-muted hover:text-white transition-colors">TikTok</a>
            <a href="https://linkedin.com/company/ingauge" target="_blank" rel="noopener" className="text-ingauge-muted hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-8 pt-8 border-t border-ingauge-surface">
          <div className="flex flex-wrap justify-center gap-8 text-xs text-ingauge-muted">
            <span>🔒 256-bit Encryption</span>
            <span>🛡️ HIPAA Compliant</span>
            <span>✓ SOC 2 Certified</span>
            <span>🌍 GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
