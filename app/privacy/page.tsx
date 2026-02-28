'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function PrivacyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-ingauge-muted mb-8">Last Updated: February 28, 2026</p>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              
              <div className="glass rounded-2xl p-6 border-l-4 border-ingauge-accent">
                <p className="text-lg font-medium">
                  Your privacy isn't just a policy—it's a promise. InGauge is built on the principle that 
                  your mental health data belongs to you, period. We collect only what's necessary to 
                  serve you, we never sell your data, and we give you full control over your information.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide</h3>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Account Information:</strong> Email address, name, and password when you create an account</li>
                  <li><strong className="text-white">Check-in Data:</strong> Your gauge readings (Body, State, Emotion, Connection, Direction, Alignment), notes, and timestamps</li>
                  <li><strong className="text-white">AI Conversations:</strong> Messages exchanged with our AI tools (Talk to Psych, Relate, Replay, Role Play, Journal, Help, Decode, Love)</li>
                  <li><strong className="text-white">Circle Data:</strong> Relationship connections and shared temperature readings (only with explicit consent)</li>
                  <li><strong className="text-white">Personology Data:</strong> Birthday information for personality insights (optional)</li>
                  <li><strong className="text-white">Payment Information:</strong> Processed securely through Apple App Store; we do not store credit card numbers</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Usage Data:</strong> App interactions, feature usage, session duration</li>
                  <li><strong className="text-white">Device Information:</strong> Device type, operating system, app version</li>
                  <li><strong className="text-white">Crash Data:</strong> Technical logs to identify and fix bugs</li>
                </ul>

                <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Information We Never Collect</h3>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li>Location data (unless you explicitly enable it for future features)</li>
                  <li>Contact lists or address books</li>
                  <li>Photos, videos, or microphone access (unless you initiate)</li>
                  <li>Data from other apps on your device</li>
                  <li>Biometric data (fingerprint, face ID are handled by your device, not us)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">To Provide the Service:</strong> Power your check-ins, AI conversations, pattern insights, and all app features</li>
                  <li><strong className="text-white">To Improve InGauge:</strong> Analyze aggregate, anonymized usage patterns to build better features</li>
                  <li><strong className="text-white">To Personalize Your Experience:</strong> Tailor insights, prompts, and recommendations based on your data</li>
                  <li><strong className="text-white">To Communicate:</strong> Send account-related emails, feature updates (you can opt out), and critical safety information</li>
                  <li><strong className="text-white">To Ensure Safety:</strong> Detect crisis situations and provide appropriate resources</li>
                  <li><strong className="text-white">To Process Payments:</strong> Manage your subscription through Apple's payment systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. How We Share Your Information</h2>
                
                <div className="glass rounded-2xl p-6 mb-6 border-l-4 border-green-500">
                  <p className="text-lg font-medium">
                    🔒 We never sell your personal data. Ever. We never share your mental health data 
                    for advertising purposes. Your check-ins and AI conversations are yours.
                  </p>
                </div>

                <h3 className="text-xl font-semibold mt-6 mb-3">Limited Sharing</h3>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Service Providers:</strong> Trusted partners who help us operate (cloud hosting, analytics) under strict confidentiality agreements</li>
                  <li><strong className="text-white">AI Processing:</strong> Your conversations are processed by our AI providers (OpenAI, Anthropic) to generate responses. These providers are contractually bound to not retain or train on your data</li>
                  <li><strong className="text-white">Circle Connections:</strong> Only what you explicitly choose to share with people you invite</li>
                  <li><strong className="text-white">World Temperature:</strong> Your check-in contributes to anonymous, aggregate statistics only—no individual identification possible</li>
                  <li><strong className="text-white">Legal Requirements:</strong> If required by law, subpoena, or to protect safety</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Encryption:</strong> All data encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                  <li><strong className="text-white">Access Controls:</strong> Strict internal access policies; only authorized personnel can access infrastructure</li>
                  <li><strong className="text-white">Infrastructure:</strong> Hosted on secure, SOC 2 certified cloud providers</li>
                  <li><strong className="text-white">Regular Audits:</strong> Ongoing security assessments and penetration testing</li>
                </ul>
                <p className="text-ingauge-muted mt-4">
                  See our <a href="/security" className="text-ingauge-accent hover:underline">Data Security</a> page for detailed information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Your Rights & Controls</h2>
                <p className="text-ingauge-muted mb-4">You have full control over your data:</p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Access:</strong> View all data we have about you (Settings → Privacy → Download My Data)</li>
                  <li><strong className="text-white">Export:</strong> Download your complete history in standard formats</li>
                  <li><strong className="text-white">Correction:</strong> Update or correct any information</li>
                  <li><strong className="text-white">Deletion:</strong> Permanently delete your account and all associated data</li>
                  <li><strong className="text-white">Portability:</strong> Take your data with you if you leave</li>
                  <li><strong className="text-white">Opt-Out:</strong> Disable analytics, World Temperature participation, or marketing communications</li>
                </ul>
                <p className="text-ingauge-muted mt-4">
                  To exercise any of these rights, visit Settings → Privacy or contact <a href="mailto:privacy@getingauge.com" className="text-ingauge-accent hover:underline">privacy@getingauge.com</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li><strong className="text-white">Active Accounts:</strong> Data retained while your account is active</li>
                  <li><strong className="text-white">Deleted Accounts:</strong> Data permanently deleted within 30 days of account deletion request</li>
                  <li><strong className="text-white">Backups:</strong> May persist in encrypted backups for up to 90 days, then permanently removed</li>
                  <li><strong className="text-white">Legal Holds:</strong> Data may be retained longer if required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Children's Privacy</h2>
                <p className="text-ingauge-muted">
                  InGauge is not intended for children under 13. We do not knowingly collect personal 
                  information from children under 13. If you are a parent or guardian and believe your 
                  child has provided us with personal information, please contact us at{' '}
                  <a href="mailto:privacy@getingauge.com" className="text-ingauge-accent hover:underline">privacy@getingauge.com</a>{' '}
                  and we will delete such information.
                </p>
                <p className="text-ingauge-muted mt-4">
                  Users between 13-17 may use InGauge with parental or guardian consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. International Users</h2>
                <p className="text-ingauge-muted">
                  InGauge is operated from the United States. If you are accessing our services from 
                  the European Union, United Kingdom, or other regions with data protection laws, 
                  please note that your data will be transferred to and processed in the United States.
                </p>
                <p className="text-ingauge-muted mt-4">
                  <strong className="text-white">For EU/UK Users (GDPR):</strong> We process your data based on your consent (for 
                  optional features), contractual necessity (to provide the service), and legitimate 
                  interests (to improve our services). You have additional rights under GDPR including 
                  the right to lodge a complaint with your local supervisory authority.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. California Privacy Rights (CCPA)</h2>
                <p className="text-ingauge-muted">
                  California residents have additional rights under the California Consumer Privacy Act:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted mt-4">
                  <li>Right to know what personal information is collected, used, shared, or sold</li>
                  <li>Right to delete personal information held by businesses</li>
                  <li>Right to opt-out of sale of personal information (we don't sell your data)</li>
                  <li>Right to non-discrimination for exercising CCPA rights</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">10. Changes to This Policy</h2>
                <p className="text-ingauge-muted">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  material changes by posting the new Privacy Policy on this page and updating the 
                  "Last Updated" date. For significant changes, we will provide additional notice 
                  (such as an in-app notification or email).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-ingauge-muted">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="glass rounded-2xl p-6 mt-4">
                  <p className="text-ingauge-muted">
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:privacy@getingauge.com" className="text-ingauge-accent hover:underline">privacy@getingauge.com</a>
                  </p>
                  <p className="text-ingauge-muted mt-2">
                    <strong className="text-white">Mail:</strong> InGauge Privacy Team, Houston, Texas, USA
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
