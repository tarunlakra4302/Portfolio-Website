"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, ExternalLink } from 'lucide-react'
import { SlidingNumber } from '@/components/ui/sliding-number'
import ContainerScroll from '@/components/ui/container-scroll'
import { ThanksForReading } from '@/components/ui/thanks-for-reading'
import { Liquid, type Colors } from '@/components/button-1'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Loader from '@/components/loader-12'

export default function LMSSaaSCaseStudy() {
  const router = useRouter()
  const [showPreloader, setShowPreloader] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [copied, setCopied] = useState(false)
  const [isGithubButtonHovered, setIsGithubButtonHovered] = useState(false)

  const buttonColors: Colors = {
    color1: '#000000',
    color2: '#1a1a1a',
    color3: '#333333',
    color4: '#4d4d4d',
    color5: '#666666',
    color6: '#808080',
    color7: '#999999',
    color8: '#b3b3b3',
    color9: '#cccccc',
    color10: '#e6e6e6',
    color11: '#f0f0f0',
    color12: '#1a1a1a',
    color13: '#4d4d4d',
    color14: '#808080',
    color15: '#b3b3b3',
    color16: '#e6e6e6',
    color17: '#ffffff',
  }

  // Preloader logic
  useEffect(() => {
    const shouldShowPreloader = sessionStorage.getItem('showPreloader')
    if (shouldShowPreloader === 'true') {
      setShowPreloader(true)
      const timer = setTimeout(() => {
        setShowPreloader(false)
        sessionStorage.removeItem('showPreloader')
      }, 2000)
      return () => clearTimeout(timer)
    } else {
      setShowPreloader(false)
    }
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeIndia = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      setHours(timeIndia.getHours())
      setMinutes(timeIndia.getMinutes())
      setSeconds(timeIndia.getSeconds())
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('lakra.tarun4302@gmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const teamMembers = [
    { initials: 'TL', name: 'Tarun Lakra' },
  ]

  if (showPreloader) {
    return (
      <motion.div
        className="fixed inset-0 bg-white z-[9999] flex items-center justify-center min-h-screen w-full"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Loader />
      </motion.div>
    )
  }

  return (
    <>
      {/* Back Button */}
      <nav style={{ position: 'fixed', top: '1rem', left: '1rem', zIndex: 9999 }} className="sm:top-6 sm:left-6 md:top-8 md:left-8">
        <button
          onClick={() => {
            sessionStorage.setItem('showPreloader', 'true')
            sessionStorage.setItem('scrollToProjects', 'true')
            router.push('/')
          }}
          className="flex items-center gap-1.5 sm:gap-2 text-black hover:text-gray-600 transition-all group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:shadow-lg"
          aria-label="Go back to projects"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-base sm:text-lg font-semibold">Back</span>
        </button>
      </nav>

      <motion.div
        className="bg-[#F5F5F0]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      >

      {/* SCROLL ANIMATION SECTION */}
      <section className="w-full bg-white" key="lmssaas-hero">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-semibold text-black">
              AI-Powered Learning Experience
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-purple-600">
                LMS SAAS Platform
              </span>
            </h2>
          }
        >
          <img
            src="/LMS.jpg"
            alt="LMS SAAS Platform interface"
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* PROJECT OVERVIEW SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-10 text-black"
          >
            LMS SAAS Platform
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Background</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  An AI-powered educational SaaS platform built with Next.js 15, designed to provide personalized learning experiences through interactive voice-based AI companions.
                </p>
                <ul className="space-y-2 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Frontend:</strong> Next.js 15 + React 19 with TypeScript</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Authentication:</strong> Clerk (with subscription tiers)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Database:</strong> Supabase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>AI/Voice:</strong> VAPI AI with 11Labs voice synthesis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Monitoring:</strong> Sentry for error tracking</span>
                  </li>
                </ul>
                <p className="text-lg text-gray-800 leading-relaxed mt-4">
                  The platform targets students and learners who want interactive, conversational learning experiences across multiple subjects (math, language, science, coding, economics, finance, etc.).
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Challenge</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  The project addresses several educational technology challenges:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800"><strong>Personalization at Scale:</strong> Traditional learning platforms struggle to provide one-on-one tutoring experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800"><strong>Engagement:</strong> Static content fails to keep learners engaged; interactive voice conversations are more immersive</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800"><strong>Accessibility:</strong> Making quality educational companions available across multiple subjects and topics</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Individual Project</h3>
                <div className="flex flex-wrap gap-3">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm"
                      title={member.name}
                    >
                      {member.initials}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">My Role</h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-800">Full-Stack Engineer</p>
                  <p className="text-lg text-gray-800">Voice AI Integration</p>
                  <p className="text-lg text-gray-800">Architecture Design</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Timeline</h3>
                <p className="text-lg text-gray-800">Ongoing</p>
                <p className="text-base text-gray-600">(Active Development)</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Repository</h3>
                <div className="flex flex-col gap-3 items-start">
                  <Link
                    href="https://github.com/tarunlakra4302/lms-saas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg overflow-hidden group"
                    onMouseEnter={() => setIsGithubButtonHovered(true)}
                    onMouseLeave={() => setIsGithubButtonHovered(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-gray-800 group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300" />
                    <div className="absolute inset-0 opacity-80">
                      <Liquid isHovered={isGithubButtonHovered} colors={buttonColors} />
                    </div>
                    <span className="relative z-10">View on GitHub</span>
                    <ExternalLink className="w-4 h-4 relative z-10" />
                  </Link>
                  <a
                    href="https://lms-saas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InteractiveHoverButton
                      text="Visit"
                      className="w-32 border-black text-black [&>div:last-child]:bg-black hover:text-white"
                    />
                  </a>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL CHALLENGES SECTION */}
      <section className="w-full px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Technical Challenges
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-purple-200 flex-shrink-0">01</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Real-Time Voice AI Integration</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Integrating real-time voice AI (VAPI) with Next.js server/client architecture while managing complex state for call status, transcripts, and microphone controls.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-purple-200 flex-shrink-0">02</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Role-Based Access Control</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Implementing sophisticated role-based access control with Clerk for companion creation limits across subscription tiers (3 → 10 → unlimited).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-purple-200 flex-shrink-0">03</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Scalable Database Architecture</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Building a scalable database schema in Supabase for companions, sessions, and bookmarks with optimized queries and proper indexing.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DESIGN SOLUTION SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Design Solution
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-black">Architecture Overview</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold mb-3 text-purple-600">Frontend</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Companion Library</li>
                    <li>• Voice Session UI</li>
                    <li>• User Journey Tracking</li>
                    <li>• VAPI SDK Integration</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold mb-3 text-blue-600">Backend</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Server Actions (CRUD)</li>
                    <li>• API Routes (Webhooks)</li>
                    <li>• Supabase Integration</li>
                    <li>• Auth Guards</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-bold mb-3 text-green-600">External Services</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Clerk Auth</li>
                    <li>• VAPI AI</li>
                    <li>• 11Labs Voice</li>
                    <li>• Sentry Monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black">Key Design Decisions</h3>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                <h4 className="font-bold mb-2 text-lg">Component Structure</h4>
                <p className="text-gray-700">
                  Manages 4 call states (INACTIVE → CONNECTING → ACTIVE → FINISHED) with visual transitions, real-time transcript streaming, and event-driven architecture with VAPI SDK listeners.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <h4 className="font-bold mb-2 text-lg">Permission System</h4>
                <p className="text-gray-700">
                  Checks Clerk roles/features for companion creation limits, enforcing 3/10/unlimited companion tiers with programmatic server-side validation.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                <h4 className="font-bold mb-2 text-lg">Session Management</h4>
                <p className="text-gray-700">
                  Tracks all completed sessions in session_history table with bookmarking system for favorite companions and recent sessions display.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="w-full px-6 lg:px-12 py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-black"
          >
            Impact & Results
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 border-black"
            >
              <div className="text-5xl font-bold text-purple-600 mb-4">24/7</div>
              <h3 className="text-xl font-bold mb-2 text-black">AI Tutor Access</h3>
              <p className="text-gray-700">Continuous access to AI tutors across 9+ subject areas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 border-black"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">100%</div>
              <h3 className="text-xl font-bold mb-2 text-black">Voice-Based Learning</h3>
              <p className="text-gray-700">Hands-free, conversational learning through voice interaction</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 border-black"
            >
              <div className="text-3xl font-bold text-green-600 mb-4">3 Tiers</div>
              <h3 className="text-xl font-bold mb-2 text-black">Freemium Model</h3>
              <p className="text-gray-700">Scalable SaaS with 3/10/unlimited companion subscriptions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-xl border-4 border-black"
            >
              <div className="text-3xl font-bold text-orange-600 mb-4">Real-Time</div>
              <h3 className="text-xl font-bold mb-2 text-black">Session Tracking</h3>
              <p className="text-gray-700">Complete learning journey tracking with session history</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS SECTION */}
      <section className="w-full px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Key Learnings
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start bg-purple-50 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                🎙️
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">Voice AI Integration Mastery</h3>
                <p className="text-gray-700 leading-relaxed">
                  Managing WebSocket connections through VAPI SDK requires careful event listener cleanup. Call state management is critical for UX, and transcript streaming needs robust client-side state management for real-time display.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.1 }}
              className="flex gap-6 items-start bg-blue-50 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                💼
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">SaaS Architecture Best Practices</h3>
                <p className="text-gray-700 leading-relaxed">
                  Clerk&apos;s role-based permissions integrate seamlessly with feature flags. Subscription tiers require programmatic enforcement in server actions, and revalidation paths are essential after mutations for optimal UX.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start bg-green-50 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                🗄️
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">Database Design & Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Supabase relations enable complex queries while maintaining performance. Proper indexing, pagination, and filtered queries are crucial for scalability. Type safety with TypeScript prevents runtime errors throughout the stack.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THANKS FOR READING */}
      <ThanksForReading
        previousProject={{
          title: "RouteMate",
          url: "/case-study/routemate"
        }}
        nextProject={{
          title: "StreamSphere",
          url: "/case-study/streamsphere"
        }}
      />

      {/* FOOTER SECTION */}
      <motion.footer
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto bg-[#3A3A3A] rounded-[24px] md:rounded-[32px] px-6 sm:px-8 md:px-12 py-8 md:py-10 lg:py-12 w-full box-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Email with Copy */}
              <div className="flex items-center gap-3 group flex-wrap">
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 group-hover:scale-[1.02]"
                  aria-label="Copy email address"
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium break-all">
                    lakra.tarun4302@gmail.com
                  </span>
                  {copied ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-green-400 flex-shrink-0" />
                  ) : (
                    <Copy className="w-4 h-4 md:w-5 md:h-5 opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </button>
                {copied && (
                  <span className="text-sm text-green-400 font-medium animate-fade-in">
                    Copied!
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="text-white/70 text-sm md:text-base">
                New Delhi, India
              </div>

              {/* Live Time */}
              <div className="text-white/70 text-sm md:text-base font-mono flex items-center gap-1">
                <SlidingNumber value={hours} padStart />
                <span>:</span>
                <SlidingNumber value={minutes} padStart />
                <span>:</span>
                <SlidingNumber value={seconds} padStart />
                <span className="ml-2">IST</span>
              </div>

              {/* Copyright */}
              <div className="text-white/50 text-sm pt-2">
                <div>©2025 Tarun Lakra</div>
                <div className="text-xs mt-2">
                  Made with 🩶 and Strawberry Protein Lattes (120% sugar, less ice).
                </div>
              </div>
            </motion.div>

            {/* Right Side - Navigation Links */}
            <motion.div
              className="flex flex-col justify-center space-y-3 md:space-y-4 md:items-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/tarun-lakra/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-fit"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <span className="relative whitespace-nowrap">
                  LinkedIn
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              </motion.a>
              <a
                href="https://github.com/tarunlakra4302"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-fit"
              >
                <span className="relative whitespace-nowrap">
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-fit"
              >
                <span className="relative whitespace-nowrap">
                  Resume
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              </a>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateX(-8px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
        `}</style>
      </motion.footer>
      </motion.div>
    </>
  )
}
