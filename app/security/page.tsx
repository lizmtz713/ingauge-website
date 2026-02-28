'use client'

import { motion } from 'framer-motion'
import { 
  Shield, Lock, Server, Eye, Key, RefreshCw, 
  AlertTriangle, CheckCircle, Database, Cloud,
  Fingerprint, FileCheck, Globe, Users
} from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption in Transit',
    description: 'All data transmitted between your device and our servers is encrypted using TLS 1.3, the latest and most secure transport layer security protocol.',
    details: ['TLS 1.3 encryption', 'Perfect forward secrecy', 'Certificate pinning in mobile app']
  },
  {
    icon: Database,
    title: 'Encryption at Rest',
    description: 'Your data is encrypted when stored on our servers using AES-256, the same encryption standard used by governments and financial institutions.',
    details: ['AES-256 encryption', 'Encrypted database backups', 'Secure key management']
  },
  {
    icon: Key,
    title: 'Access Controls',
    description: 'Strict access controls ensure only authorized personnel can access infrastructure, and even then, user data is encrypted and access is logged.',
    details: ['Role-based access control', 'Multi-factor authentication required', 'Principle of least privilege']
  },
  {
    icon: Eye,
    title: 'Audit Logging',
    description: 'Comprehensive logging tracks all access to systems and data, enabling us to detect and investigate any suspicious activity.',
    details: ['Immutable audit logs', 'Real-time monitoring', 'Anomaly detection']
  },
  {
    icon: Cloud,
    title: 'Secure Infrastructure',
    description: 'Our infrastructure is hosted on SOC 2 Type II certified cloud providers with physical security, redundancy, and 24/7 monitoring.',
    details: ['SOC 2 certified providers', 'Geographic redundancy', 'DDoS protection']
  },
  {
    icon: RefreshCw,
    title: 'Regular Audits',
    description: 'We conduct regular security assessments, penetration testing, and vulnerability scanning to identify and fix potential issues.',
    details: ['Annual penetration testing', 'Continuous vulnerability scanning', 'Third-party security audits']
  },
]

const certifications = [
  { name: 'SOC 2 Type II', description: 'Our infrastructure providers maintain SOC 2 certification' },
  { name: 'TLS 1.3', description: 'Latest encryption standard for data in transit' },
  { name: 'AES-256', description: 'Military-grade encryption for stored data' },
  { name: 'GDPR Compliant', description: 'Meeting European data protection standards' },
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-ingauge-bg text-white">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Security</h1>
            <p className="text-xl text-ingauge-muted max-w-2xl mx-auto">
              Your mental health data is deeply personal. We've built InGauge with security 
              practices that protect it like the sensitive information it is.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-8 px-6 border-y border-ingauge-surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-4 text-center"
              >
                <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <h4 className="font-semibold text-sm">{cert.name}</h4>
                <p className="text-xs text-ingauge-muted mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How We Protect Your Data</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-ingauge-accent/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-ingauge-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-ingauge-muted text-sm mb-4">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.details.map((detail) => (
                    <li key={detail} className="text-sm text-ingauge-muted flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Practices */}
      <section className="py-16 px-6 bg-ingauge-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Security Practices in Detail</h2>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            
            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Fingerprint className="w-5 h-5 text-ingauge-accent" />
                Authentication & Access
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                <li><strong className="text-white">Secure Password Storage:</strong> Passwords are hashed using bcrypt with high cost factors—we never store plaintext passwords</li>
                <li><strong className="text-white">Session Management:</strong> Secure, encrypted session tokens with automatic expiration</li>
                <li><strong className="text-white">Device Authentication:</strong> Option to require re-authentication on new devices</li>
                <li><strong className="text-white">Biometric Options:</strong> Face ID / Touch ID support—your biometrics stay on your device, never on our servers</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Server className="w-5 h-5 text-ingauge-accent" />
                Infrastructure Security
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                <li><strong className="text-white">Cloud Provider:</strong> Hosted on major cloud platforms with SOC 2, ISO 27001, and HIPAA-eligible infrastructure</li>
                <li><strong className="text-white">Network Security:</strong> Private networks, firewalls, and intrusion detection systems</li>
                <li><strong className="text-white">DDoS Protection:</strong> Automatic mitigation of distributed denial-of-service attacks</li>
                <li><strong className="text-white">Geographic Redundancy:</strong> Data replicated across multiple availability zones</li>
                <li><strong className="text-white">Disaster Recovery:</strong> Regular backups with tested recovery procedures</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-ingauge-accent" />
                Application Security
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                <li><strong className="text-white">Secure Development:</strong> Security-focused code reviews and secure coding practices</li>
                <li><strong className="text-white">Dependency Scanning:</strong> Automated scanning for vulnerabilities in third-party libraries</li>
                <li><strong className="text-white">Input Validation:</strong> Strict validation and sanitization of all user inputs</li>
                <li><strong className="text-white">API Security:</strong> Rate limiting, authentication, and request validation on all endpoints</li>
                <li><strong className="text-white">Regular Updates:</strong> Prompt patching of security vulnerabilities</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-ingauge-accent" />
                Personnel Security
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                <li><strong className="text-white">Background Checks:</strong> Security screening for all team members with data access</li>
                <li><strong className="text-white">Security Training:</strong> Regular training on security best practices and threat awareness</li>
                <li><strong className="text-white">Access Reviews:</strong> Periodic review and revocation of access privileges</li>
                <li><strong className="text-white">Confidentiality:</strong> All employees sign strict confidentiality agreements</li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-ingauge-accent" />
                AI & Third-Party Security
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                <li><strong className="text-white">AI Provider Agreements:</strong> Our AI partners are contractually prohibited from retaining or training on your conversations</li>
                <li><strong className="text-white">Data Minimization:</strong> Only necessary data is shared with AI services to generate responses</li>
                <li><strong className="text-white">Vendor Assessment:</strong> Security evaluation of all third-party services before integration</li>
                <li><strong className="text-white">Data Processing Agreements:</strong> Binding agreements ensuring third parties protect your data</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Incident Response */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Incident Response</h2>
          
          <div className="glass rounded-2xl p-6 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-4">If Something Goes Wrong</h3>
                <p className="text-ingauge-muted mb-4">
                  We have a comprehensive incident response plan. In the event of a security incident:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Immediate Response:</strong> Contain and assess the incident within hours</li>
                  <li><strong className="text-white">Investigation:</strong> Determine scope, cause, and affected data</li>
                  <li><strong className="text-white">Notification:</strong> Alert affected users within 72 hours</li>
                  <li><strong className="text-white">Remediation:</strong> Fix vulnerabilities and restore secure operations</li>
                  <li><strong className="text-white">Post-Mortem:</strong> Document lessons learned and improve defenses</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report a Vulnerability */}
      <section className="py-16 px-6 bg-ingauge-surface/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Report a Vulnerability</h2>
          
          <div className="glass rounded-2xl p-6">
            <p className="text-ingauge-muted mb-4">
              We appreciate the security research community. If you discover a vulnerability in InGauge, 
              please report it responsibly:
            </p>
            <div className="bg-ingauge-bg rounded-xl p-4 mb-4">
              <p className="text-ingauge-muted">
                <strong className="text-white">Email:</strong>{' '}
                <a href="mailto:security@getingauge.com" className="text-ingauge-accent hover:underline">security@getingauge.com</a>
              </p>
            </div>
            <p className="text-ingauge-muted text-sm">
              Please include detailed steps to reproduce the vulnerability. We commit to acknowledging 
              reports within 48 hours and will work with you to address valid findings. We do not 
              pursue legal action against good-faith security researchers.
            </p>
          </div>
        </div>
      </section>

      {/* Your Part */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Your Role in Security</h2>
          
          <p className="text-ingauge-muted mb-6">
            Security is a partnership. Here's how you can help protect your account:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">Use a Strong Password</h4>
              <p className="text-sm text-ingauge-muted">Unique to InGauge, at least 12 characters</p>
            </div>
            <div className="glass rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">Keep Your Device Secure</h4>
              <p className="text-sm text-ingauge-muted">Use device passcode, keep OS updated</p>
            </div>
            <div className="glass rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">Don't Share Credentials</h4>
              <p className="text-sm text-ingauge-muted">Your account should only be accessed by you</p>
            </div>
            <div className="glass rounded-xl p-4">
              <CheckCircle className="w-5 h-5 text-green-400 mb-2" />
              <h4 className="font-semibold mb-1">Report Suspicious Activity</h4>
              <p className="text-sm text-ingauge-muted">Contact us if something seems wrong</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-6 bg-ingauge-surface/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Security?</h2>
          <p className="text-ingauge-muted mb-6">
            We're happy to discuss our security practices in more detail.
          </p>
          <div className="glass rounded-2xl p-6 inline-block">
            <p className="text-ingauge-muted">
              <strong className="text-white">Security Team:</strong>{' '}
              <a href="mailto:security@getingauge.com" className="text-ingauge-accent hover:underline">security@getingauge.com</a>
            </p>
            <p className="text-ingauge-muted mt-2">
              <strong className="text-white">Privacy Team:</strong>{' '}
              <a href="mailto:privacy@getingauge.com" className="text-ingauge-accent hover:underline">privacy@getingauge.com</a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
