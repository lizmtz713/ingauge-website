'use client'

import { motion } from 'framer-motion'
import { Shield, AlertTriangle, CheckCircle, Info } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function HIPAAPage() {
  return (
    <main className="min-h-screen bg-ingauge-bg text-white">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">HIPAA & Health Data</h1>
                <p className="text-ingauge-muted">Understanding how we protect your health information</p>
              </div>
            </div>
            <p className="text-ingauge-muted mb-8">Last Updated: February 28, 2026</p>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              
              {/* Important Notice */}
              <div className="glass rounded-2xl p-6 border-l-4 border-yellow-500">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-yellow-400">Important Clarification</h3>
                    <p className="text-ingauge-muted">
                      InGauge is a <strong className="text-white">consumer wellness application</strong>, not a healthcare 
                      provider, health plan, or healthcare clearinghouse. As such, InGauge is <strong className="text-white">not 
                      a "Covered Entity" under HIPAA</strong> (Health Insurance Portability and Accountability Act).
                    </p>
                    <p className="text-ingauge-muted mt-4">
                      However, we recognize that mental health and wellness data is deeply personal. We have 
                      voluntarily implemented security practices that meet or exceed HIPAA standards because 
                      <strong className="text-white"> your privacy deserves protection regardless of legal requirements.</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* What This Means */}
              <section>
                <h2 className="text-2xl font-bold mb-4">What This Means for You</h2>
                
                <div className="grid gap-4">
                  <div className="glass rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <Info className="w-5 h-5 text-blue-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">We're Not a Healthcare Provider</h4>
                        <p className="text-ingauge-muted text-sm">
                          InGauge does not provide medical advice, diagnoses, or treatment. Our AI tools and 
                          content are for general wellness and self-reflection, not clinical care. HIPAA governs 
                          relationships between patients and healthcare providers—which is not what we are.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">We Protect You Anyway</h4>
                        <p className="text-ingauge-muted text-sm">
                          Even though HIPAA doesn't legally apply to us, we've built InGauge with HIPAA-grade 
                          security practices. We believe health-related data deserves the highest protection, 
                          whether the law requires it or not.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="glass rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-2">Don't Rely on Us for Medical Care</h4>
                        <p className="text-ingauge-muted text-sm">
                          If you need mental health treatment, please work with licensed professionals who are 
                          covered by HIPAA and other healthcare regulations. InGauge is a complement to—not a 
                          replacement for—professional care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Our Health Data Protections */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Our Health Data Protections</h2>
                <p className="text-ingauge-muted mb-6">
                  We've voluntarily implemented the following safeguards, modeled after HIPAA's Security Rule:
                </p>
                
                <div className="space-y-4">
                  <div className="glass rounded-xl p-5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-ingauge-accent/20 flex items-center justify-center text-sm">1</span>
                      Administrative Safeguards
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-ingauge-muted text-sm">
                      <li>Designated security personnel responsible for data protection policies</li>
                      <li>Workforce training on privacy and security practices</li>
                      <li>Access controls limiting who can view user data</li>
                      <li>Incident response procedures for security breaches</li>
                      <li>Regular risk assessments and policy reviews</li>
                    </ul>
                  </div>
                  
                  <div className="glass rounded-xl p-5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-ingauge-accent/20 flex items-center justify-center text-sm">2</span>
                      Physical Safeguards
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-ingauge-muted text-sm">
                      <li>Cloud infrastructure with SOC 2 Type II certification</li>
                      <li>Data center physical security (biometrics, 24/7 monitoring, access logs)</li>
                      <li>Redundant systems and disaster recovery procedures</li>
                      <li>Secure disposal of storage media</li>
                    </ul>
                  </div>
                  
                  <div className="glass rounded-xl p-5">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-ingauge-accent/20 flex items-center justify-center text-sm">3</span>
                      Technical Safeguards
                    </h4>
                    <ul className="list-disc pl-6 space-y-1 text-ingauge-muted text-sm">
                      <li><strong className="text-white">Encryption in Transit:</strong> TLS 1.3 for all data transmission</li>
                      <li><strong className="text-white">Encryption at Rest:</strong> AES-256 encryption for stored data</li>
                      <li><strong className="text-white">Access Controls:</strong> Role-based access, multi-factor authentication</li>
                      <li><strong className="text-white">Audit Logging:</strong> Comprehensive logs of data access and changes</li>
                      <li><strong className="text-white">Automatic Logoff:</strong> Session timeouts for inactive accounts</li>
                      <li><strong className="text-white">Integrity Controls:</strong> Mechanisms to detect unauthorized data modification</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* When HIPAA Would Apply */}
              <section>
                <h2 className="text-2xl font-bold mb-4">When HIPAA Would Apply</h2>
                <p className="text-ingauge-muted mb-4">
                  HIPAA may apply in situations involving actual healthcare providers:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li>
                    <strong className="text-white">Therapist Integration (Future):</strong> If we ever offer direct integration 
                    with licensed healthcare providers, those specific features would be designed to comply with HIPAA 
                    requirements, and we would enter Business Associate Agreements (BAAs) as appropriate.
                  </li>
                  <li>
                    <strong className="text-white">Healthcare Provider Use:</strong> If a licensed therapist or healthcare 
                    organization wishes to use InGauge as part of their practice, please contact us at{' '}
                    <a href="mailto:hipaa@getingauge.com" className="text-ingauge-accent hover:underline">hipaa@getingauge.com</a>{' '}
                    to discuss compliance requirements and potential BAA arrangements.
                  </li>
                  <li>
                    <strong className="text-white">Employer/Insurance Integration:</strong> We do not currently integrate with 
                    employer health programs or insurance companies. If this changes, relevant HIPAA compliance measures 
                    would be implemented.
                  </li>
                </ul>
              </section>

              {/* Your Data Rights */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Your Data Rights</h2>
                <p className="text-ingauge-muted mb-4">
                  While HIPAA's specific rights framework doesn't apply to us, we provide equivalent controls:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Access</h4>
                    <p className="text-ingauge-muted text-sm">View all data we have about you anytime</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Export</h4>
                    <p className="text-ingauge-muted text-sm">Download your complete history</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Correction</h4>
                    <p className="text-ingauge-muted text-sm">Update or correct any information</p>
                  </div>
                  <div className="glass rounded-xl p-4">
                    <h4 className="font-semibold mb-2">Deletion</h4>
                    <p className="text-ingauge-muted text-sm">Permanently delete your account and data</p>
                  </div>
                </div>
              </section>

              {/* Third-Party Services */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
                <p className="text-ingauge-muted mb-4">
                  We carefully vet all third-party services that process user data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li>
                    <strong className="text-white">Cloud Infrastructure:</strong> Hosted on providers with SOC 2 certification 
                    and HIPAA-eligible infrastructure
                  </li>
                  <li>
                    <strong className="text-white">AI Providers:</strong> Our AI partners (for Talk to Psych and Toolkit features) 
                    are contractually bound to not retain, train on, or share your conversations
                  </li>
                  <li>
                    <strong className="text-white">Analytics:</strong> We use privacy-focused analytics that do not track 
                    individual health data
                  </li>
                </ul>
              </section>

              {/* Breach Notification */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Breach Notification</h2>
                <p className="text-ingauge-muted">
                  In the event of a data breach affecting your personal information, we commit to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted mt-4">
                  <li>Notifying affected users within 72 hours of discovering the breach</li>
                  <li>Providing details about what data was affected</li>
                  <li>Describing the steps we're taking to address the breach</li>
                  <li>Offering guidance on how to protect yourself</li>
                  <li>Reporting to relevant regulatory authorities as required by law</li>
                </ul>
              </section>

              {/* For Healthcare Professionals */}
              <section>
                <h2 className="text-2xl font-bold mb-4">For Healthcare Professionals</h2>
                <div className="glass rounded-2xl p-6 border-l-4 border-ingauge-accent">
                  <p className="text-ingauge-muted">
                    Are you a licensed therapist, counselor, or healthcare provider interested in using 
                    InGauge with your patients or clients? We'd love to hear from you.
                  </p>
                  <p className="text-ingauge-muted mt-4">
                    Please contact us at{' '}
                    <a href="mailto:hipaa@getingauge.com" className="text-ingauge-accent hover:underline">hipaa@getingauge.com</a>{' '}
                    to discuss:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-ingauge-muted mt-2">
                    <li>Business Associate Agreement (BAA) requirements</li>
                    <li>Integration options for clinical workflows</li>
                    <li>Data sharing and reporting capabilities</li>
                    <li>Compliance documentation</li>
                  </ul>
                </div>
              </section>

              {/* Questions */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Questions?</h2>
                <p className="text-ingauge-muted">
                  If you have questions about our health data practices or HIPAA-related inquiries:
                </p>
                <div className="glass rounded-2xl p-6 mt-4">
                  <p className="text-ingauge-muted">
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:hipaa@getingauge.com" className="text-ingauge-accent hover:underline">hipaa@getingauge.com</a>
                  </p>
                  <p className="text-ingauge-muted mt-2">
                    <strong className="text-white">Privacy Team:</strong>{' '}
                    <a href="mailto:privacy@getingauge.com" className="text-ingauge-accent hover:underline">privacy@getingauge.com</a>
                  </p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
