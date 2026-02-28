'use client'

import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function TermsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-ingauge-muted mb-8">Last Updated: February 28, 2026</p>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              
              <div className="glass rounded-2xl p-6 border-l-4 border-yellow-500">
                <p className="text-lg font-medium">
                  ⚠️ IMPORTANT: Please read these Terms carefully before using InGauge. By using our 
                  app or services, you agree to be bound by these Terms. If you do not agree, please 
                  do not use InGauge.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-ingauge-muted">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you 
                  ("User," "you," or "your") and InGauge ("Company," "we," "us," or "our") governing 
                  your access to and use of the InGauge mobile application, website, and all related 
                  services (collectively, the "Service").
                </p>
                <p className="text-ingauge-muted mt-4">
                  By creating an account, accessing, or using the Service, you acknowledge that you 
                  have read, understood, and agree to be bound by these Terms and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-red-400">2. CRITICAL DISCLAIMERS — PLEASE READ</h2>
                
                <div className="glass rounded-2xl p-6 border-l-4 border-red-500 space-y-4">
                  <h3 className="text-xl font-semibold text-red-400">2.1 Not Medical Advice or Treatment</h3>
                  <p className="text-ingauge-muted">
                    <strong className="text-white">InGauge is NOT a medical device, healthcare provider, or substitute for professional 
                    mental health care.</strong> The Service provides educational content, self-reflection tools, 
                    and AI-assisted conversations for general wellness purposes only.
                  </p>
                  <p className="text-ingauge-muted">
                    Nothing in the Service should be construed as medical advice, diagnosis, or treatment. 
                    The content provided—including AI-generated responses, Human Manual lessons, and pattern 
                    insights—is for informational and educational purposes only.
                  </p>

                  <h3 className="text-xl font-semibold text-red-400 mt-6">2.2 Seek Professional Help</h3>
                  <p className="text-ingauge-muted">
                    If you are experiencing mental health symptoms, psychological distress, or any medical 
                    concerns, <strong className="text-white">you should consult with a qualified healthcare professional.</strong> Do not 
                    disregard professional medical advice or delay seeking treatment because of anything 
                    you have read or experienced through InGauge.
                  </p>

                  <h3 className="text-xl font-semibold text-red-400 mt-6">2.3 Emergency Services</h3>
                  <p className="text-ingauge-muted">
                    <strong className="text-white">InGauge is NOT an emergency service.</strong> If you are in crisis, experiencing thoughts 
                    of self-harm or suicide, or facing any emergency, please immediately contact:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ingauge-muted mt-2">
                    <li><strong className="text-white">Emergency Services:</strong> Call 911 (US) or your local emergency number</li>
                    <li><strong className="text-white">National Suicide Prevention Lifeline:</strong> 988 (US)</li>
                    <li><strong className="text-white">Crisis Text Line:</strong> Text HOME to 741741</li>
                    <li><strong className="text-white">International Association for Suicide Prevention:</strong> <a href="https://www.iasp.info/resources/Crisis_Centres/" className="text-ingauge-accent hover:underline">Find a crisis center</a></li>
                  </ul>
                  <p className="text-ingauge-muted mt-4">
                    While we provide crisis resource information within the app, this does not constitute 
                    crisis intervention services. Response times for any in-app features are not guaranteed.
                  </p>

                  <h3 className="text-xl font-semibold text-red-400 mt-6">2.4 AI-Generated Content</h3>
                  <p className="text-ingauge-muted">
                    Our AI features (Talk to Psych, Toolkit, Prompt Generator, etc.) use artificial 
                    intelligence to generate responses. <strong className="text-white">AI-generated content may be inaccurate, incomplete, 
                    or inappropriate.</strong> The AI is not a licensed therapist, counselor, or healthcare professional.
                  </p>
                  <p className="text-ingauge-muted mt-2">
                    You acknowledge that: (a) AI responses are generated by machine learning models and 
                    may contain errors; (b) AI cannot truly understand human emotion or provide genuine 
                    empathy; (c) you should not rely solely on AI-generated content for important decisions 
                    affecting your mental health or wellbeing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                <p className="text-ingauge-muted">
                  You must be at least 13 years old to use InGauge. If you are between 13 and 17 years old, 
                  you must have permission from a parent or legal guardian who agrees to these Terms on your behalf.
                </p>
                <p className="text-ingauge-muted mt-4">
                  Users under 18 may have restricted access to certain features. By using the Service, 
                  you represent and warrant that you meet these eligibility requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Account Registration</h2>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li>You must provide accurate, current, and complete information during registration</li>
                  <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                  <li>You are responsible for all activities that occur under your account</li>
                  <li>You must notify us immediately of any unauthorized access or security breach</li>
                  <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Acceptable Use</h2>
                <p className="text-ingauge-muted mb-4">You agree NOT to:</p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted">
                  <li>Use the Service for any unlawful purpose or in violation of any applicable laws</li>
                  <li>Harass, abuse, threaten, or harm other users or any person</li>
                  <li>Submit false, misleading, or fraudulent information</li>
                  <li>Attempt to access other users' accounts or data</li>
                  <li>Interfere with or disrupt the Service or servers</li>
                  <li>Reverse engineer, decompile, or attempt to extract source code</li>
                  <li>Use automated systems (bots, scrapers) to access the Service</li>
                  <li>Circumvent any security or access controls</li>
                  <li>Use the Service to develop competing products or services</li>
                  <li>Share, resell, or commercially exploit the Service without authorization</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Circle Feature (Sharing)</h2>
                <p className="text-ingauge-muted">
                  The Circle feature allows you to share your temperature readings with invited connections. 
                  By using Circle:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ingauge-muted mt-4">
                  <li>You consent to sharing your selected data with your approved connections</li>
                  <li>You are responsible for who you invite and what you share</li>
                  <li>You agree not to share data about connections without their consent</li>
                  <li>We are not responsible for how your connections use shared information</li>
                  <li>You can revoke access or leave Circle connections at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">7. Subscriptions & Payments</h2>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">7.1 Free and Paid Tiers</h3>
                <p className="text-ingauge-muted">
                  InGauge offers both free and paid subscription tiers. Paid subscriptions (InGauge Pro) 
                  provide access to additional features as described on our pricing page.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">7.2 Billing</h3>
                <p className="text-ingauge-muted">
                  Subscriptions are processed and managed through the Apple App Store. Your subscription 
                  will automatically renew at the end of each billing period unless cancelled at least 
                  24 hours before the renewal date.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">7.3 Cancellation</h3>
                <p className="text-ingauge-muted">
                  You may cancel your subscription at any time through your App Store account settings. 
                  Upon cancellation, you will retain access to paid features until the end of your current 
                  billing period. No refunds are provided for partial billing periods.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">7.4 Price Changes</h3>
                <p className="text-ingauge-muted">
                  We reserve the right to change subscription prices. Any price changes will be communicated 
                  in advance and will apply to the next billing cycle after notice.
                </p>

                <h3 className="text-xl font-semibold mt-6 mb-3">7.5 Refunds</h3>
                <p className="text-ingauge-muted">
                  Refund requests within 30 days of initial purchase may be submitted to{' '}
                  <a href="mailto:support@getingauge.com" className="text-ingauge-accent hover:underline">support@getingauge.com</a>.
                  Refunds are granted at our sole discretion. For App Store purchases, refund policies 
                  may also be subject to Apple's terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">8. Intellectual Property</h2>
                <p className="text-ingauge-muted">
                  All content, features, and functionality of the Service—including but not limited to 
                  text, graphics, logos, icons, images, audio, software, Human Manual content, and the 
                  "6 Gauges" framework—are the exclusive property of InGauge or its licensors and are 
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-ingauge-muted mt-4">
                  You are granted a limited, non-exclusive, non-transferable license to access and use 
                  the Service for personal, non-commercial purposes. This license does not include the 
                  right to modify, copy, distribute, sell, or create derivative works.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">9. User Content</h2>
                <p className="text-ingauge-muted">
                  You retain ownership of content you create within InGauge (check-ins, notes, journal entries). 
                  By submitting content, you grant us a limited license to store, process, and display your 
                  content as necessary to provide the Service.
                </p>
                <p className="text-ingauge-muted mt-4">
                  You are solely responsible for your content and represent that you have all necessary rights 
                  to submit it. We do not endorse user content and reserve the right to remove content that 
                  violates these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">10. Limitation of Liability</h2>
                <div className="glass rounded-2xl p-6 border-l-4 border-yellow-500">
                  <p className="text-ingauge-muted">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, INGAUGE AND ITS OFFICERS, DIRECTORS, 
                    EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
                    SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-ingauge-muted mt-4">
                    <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                    <li>Personal injury, emotional distress, or psychological harm</li>
                    <li>Any harm resulting from reliance on AI-generated content or advice</li>
                    <li>Any harm resulting from failure to seek professional mental health care</li>
                    <li>Unauthorized access to or alteration of your data</li>
                    <li>Any third-party conduct or content</li>
                  </ul>
                  <p className="text-ingauge-muted mt-4">
                    IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU EXCEED THE AMOUNT YOU PAID US IN THE 
                    TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED DOLLARS ($100), WHICHEVER IS GREATER.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">11. Disclaimer of Warranties</h2>
                <p className="text-ingauge-muted">
                  THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF 
                  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="text-ingauge-muted mt-4">
                  We do not warrant that the Service will be uninterrupted, secure, or error-free; that 
                  defects will be corrected; or that the Service or servers are free of viruses or harmful components.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">12. Indemnification</h2>
                <p className="text-ingauge-muted">
                  You agree to indemnify, defend, and hold harmless InGauge and its officers, directors, 
                  employees, agents, and affiliates from and against any claims, liabilities, damages, 
                  losses, costs, and expenses (including reasonable attorneys' fees) arising out of or 
                  related to: (a) your use of the Service; (b) your violation of these Terms; (c) your 
                  violation of any third-party rights; or (d) any harm resulting from your failure to 
                  seek appropriate professional care.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">13. Dispute Resolution & Arbitration</h2>
                
                <div className="glass rounded-2xl p-6 border-l-4 border-ingauge-accent">
                  <h3 className="text-xl font-semibold mb-3">13.1 Binding Arbitration</h3>
                  <p className="text-ingauge-muted">
                    You agree that any dispute, claim, or controversy arising out of or relating to these 
                    Terms or the Service shall be resolved by binding arbitration administered by the 
                    American Arbitration Association (AAA) in accordance with its Consumer Arbitration Rules, 
                    rather than in court, except that you may assert claims in small claims court if eligible.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">13.2 Class Action Waiver</h3>
                  <p className="text-ingauge-muted">
                    YOU AGREE THAT ANY ARBITRATION SHALL BE CONDUCTED ON AN INDIVIDUAL BASIS AND NOT AS A 
                    CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION. You waive any right to participate in 
                    class action lawsuits or class-wide arbitration against InGauge.
                  </p>

                  <h3 className="text-xl font-semibold mt-6 mb-3">13.3 Opt-Out</h3>
                  <p className="text-ingauge-muted">
                    You may opt out of this arbitration agreement by sending written notice to{' '}
                    <a href="mailto:legal@getingauge.com" className="text-ingauge-accent hover:underline">legal@getingauge.com</a>{' '}
                    within 30 days of first accepting these Terms. Your notice must include your name, 
                    address, and a clear statement that you wish to opt out of arbitration.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">14. Governing Law</h2>
                <p className="text-ingauge-muted">
                  These Terms shall be governed by and construed in accordance with the laws of the 
                  State of Texas, United States, without regard to its conflict of law provisions. 
                  Any legal action or proceeding not subject to arbitration shall be brought exclusively 
                  in the state or federal courts located in Harris County, Texas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">15. Termination</h2>
                <p className="text-ingauge-muted">
                  We may suspend or terminate your access to the Service at any time, with or without cause, 
                  with or without notice. Upon termination, your right to use the Service will immediately cease.
                </p>
                <p className="text-ingauge-muted mt-4">
                  You may terminate your account at any time by deleting your account through the app settings. 
                  Provisions that by their nature should survive termination (including disclaimers, limitations 
                  of liability, and arbitration) will survive.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">16. Modifications to Terms</h2>
                <p className="text-ingauge-muted">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated 
                  via in-app notification or email at least 30 days before taking effect. Your continued use 
                  of the Service after changes become effective constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">17. Severability</h2>
                <p className="text-ingauge-muted">
                  If any provision of these Terms is held invalid or unenforceable, that provision will be 
                  enforced to the maximum extent permissible, and the remaining provisions will remain in 
                  full force and effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">18. Entire Agreement</h2>
                <p className="text-ingauge-muted">
                  These Terms, together with the Privacy Policy and any other legal notices published by us, 
                  constitute the entire agreement between you and InGauge regarding the Service and supersede 
                  all prior agreements and understandings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">19. Contact Us</h2>
                <p className="text-ingauge-muted">
                  If you have any questions about these Terms, please contact us:
                </p>
                <div className="glass rounded-2xl p-6 mt-4">
                  <p className="text-ingauge-muted">
                    <strong className="text-white">Email:</strong>{' '}
                    <a href="mailto:legal@getingauge.com" className="text-ingauge-accent hover:underline">legal@getingauge.com</a>
                  </p>
                  <p className="text-ingauge-muted mt-2">
                    <strong className="text-white">Support:</strong>{' '}
                    <a href="mailto:support@getingauge.com" className="text-ingauge-accent hover:underline">support@getingauge.com</a>
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
