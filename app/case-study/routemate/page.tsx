"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, ExternalLink, CheckCircle } from 'lucide-react'
import { SlidingNumber } from '@/components/ui/sliding-number'
import ContainerScroll from '@/components/ui/container-scroll'
import { ThanksForReading } from '@/components/ui/thanks-for-reading'
import { Liquid, type Colors } from '@/components/button-1'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Loader from '@/components/loader-12'

export default function PublishCaseStudy() {
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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
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
    { initials: 'SE', name: 'Senior Engineer' }
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
      <section className="w-full bg-white" key="routemate-hero">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-semibold text-black">
              Smart Fleet Management
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-green-600">
                RouteMate Platform
              </span>
            </h2>
          }
        >
          <img
            src="/RouteMate.jpg"
            alt="RouteMate fleet management platform interface"
            className="mx-auto rounded-2xl object-contain w-full h-full pb-20"
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
            RouteMate
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
                <p className="text-lg text-gray-800 leading-relaxed">
                  A comprehensive fleet management application with separate Admin and Driver portals, built with React, Vite, TailwindCSS, and DaisyUI. This is a single-page application with role-based routing and a polished, production-ready interface.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Challenge</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Building two distinct user experiences (Admin desktop + Driver mobile) within a single application.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      <strong>60% reduction in manual paperwork</strong> through digital job management
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      <strong>Real-time visibility</strong> prevents scheduling conflicts
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      <strong>Automated alerts</strong> reduce compliance violations
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">
                      <strong>Mobile access</strong> enables on-the-go updates from drivers
                    </span>
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
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Team</h3>
                <div className="flex flex-wrap gap-3">
                  {teamMembers.map((member, idx) => (
                    <div
                      key={idx}
                      className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm"
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
                  <p className="text-lg text-gray-800">Backend Engineer</p>
                  <p className="text-lg text-gray-800">End-to-end APIs integrations</p>
                  <p className="text-lg text-gray-800">Documentation</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Timeline</h3>
                <p className="text-lg text-gray-800">Oct 1 to Oct 10</p>
                <p className="text-base text-gray-600">(10 days)</p>
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
                    href="https://github.com/tarunlakra4302/routemate"
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
                    href="https://routemate.vercel.app"
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

      {/* USE CASE SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-8 text-black"
          >
            Use Case
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              Perfect for transportation/logistics companies needing to manage:
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-semibold">Fleet operations</span> (vehicles, trailers)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-semibold">Driver scheduling and compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-semibold">Job dispatch and tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-semibold">Client relationships and invoicing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-semibold">Fuel consumption and expenses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span className="font-semibold">Documentation and reporting</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY CHALLENGES SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Key Challenges
          </motion.h2>

          <div className="space-y-12">
            {/* Challenge 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">01</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Dual-Portal Architecture Complexity</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Building two distinct user experiences (Admin desktop + Driver mobile) within a single application.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 text-sm">
                  <p className="font-semibold mb-2">Solution Implemented:</p>
                  <p className="text-gray-700">Separate layouts with AdminLayout (collapsible sidebar) and DriverLayout (mobile bottom nav), shared component library</p>
                </div>
              </div>
            </motion.div>

            {/* Challenge 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">02</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Complex Relational Data Modeling</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Managing interconnected entities (Jobs → JobLines → Drivers → Vehicles → Trailers → Products → Clients). Multi-line job creation with resource allocation across multiple entities.
                </p>
              </div>
            </motion.div>

            {/* Challenge 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">03</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Advanced UI/UX Requirements</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Building production-quality interfaces with real-time search/filtering across 15+ pages, complex multi-step forms, responsive design (mobile-first for drivers, desktop-optimized for admin), and 29 theme support with persistence.
                </p>
              </div>
            </motion.div>

            {/* Challenge 4 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">04</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Full-Stack Integration Architecture</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Designing service layer that works with mock data now but can seamlessly transition to real APIs. 14 separate service modules acting as abstraction layer. Backend structure with controllers, routes, models ready for PostgreSQL integration.
                </p>
              </div>
            </motion.div>

            {/* Challenge 5 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">05</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Business Logic Complexity</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Implementing real-world logistics workflows: compliance tracking (license/medical expiry alerts), service scheduling with kilometer-based predictions, multi-currency invoicing with GST calculations, time tracking with shift management, and fuel efficiency monitoring.
                </p>
              </div>
            </motion.div>

            {/* Challenge 6 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">06</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">State Management at Scale</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Managing application state across multiple contexts (Auth, Notifications, Theme) and 21+ pages using React Context API with proper provider hierarchy.
                </p>
              </div>
            </motion.div>

            {/* Challenge 7 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              className="flex gap-6 items-start"
            >
              <div className="text-6xl font-bold text-gray-200 flex-shrink-0">07</div>
              <div className="pt-2">
                <h3 className="text-2xl font-bold mb-3 text-black">Developer Experience & Maintainability</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Keeping codebase organized with 80+ files, reusable components, consistent patterns. Clean folder structure, shared UI primitives, common components.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-black"
          >
            Impact
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200 hover:border-blue-400 hover:shadow-blue-200/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  100%
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Production Ready</h3>
              <p className="text-gray-700 leading-relaxed">Fully functional dual-portal application deployed and ready for integration</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-200 hover:border-green-400 hover:shadow-green-200/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                  60%
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Reduced Manual Paperwork</h3>
              <p className="text-gray-700 leading-relaxed">Digital job management eliminates paperwork and speeds up workflows</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-purple-200 hover:border-purple-400 hover:shadow-purple-200/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                  15+ Pages
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Comprehensive Coverage</h3>
              <p className="text-gray-700 leading-relaxed">Complete fleet management solution covering all business operations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-200 hover:border-orange-400 hover:shadow-orange-200/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
                  Real-Time
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">Live Updates</h3>
              <p className="text-gray-700 leading-relaxed">Instant visibility into fleet operations prevents scheduling conflicts</p>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* NEXT STEPS SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            Next steps
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-2xl font-semibold mb-8 text-gray-700"
          >
            Evolving RouteMate into a complete fleet management ecosystem
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              With a solid foundation in place, the roadmap focuses on enhancing real-time capabilities,
              expanding mobile functionality, and integrating advanced analytics to deliver even greater value to fleet operators.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 my-8">
              <h4 className="text-xl font-bold mb-6 text-black">Planned Enhancements</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Real-Time GPS Tracking Integration</h5>
                    <p className="text-sm text-gray-700">Live vehicle location tracking with geofencing and route deviation alerts</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Native Mobile App for Drivers</h5>
                    <p className="text-sm text-gray-700">iOS and Android apps with offline support for seamless field operations</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    📊
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Advanced Analytics Dashboard</h5>
                    <p className="text-sm text-gray-700">Predictive maintenance, fuel efficiency trends, and driver performance insights</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    🔗
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">API Integrations with Accounting Software</h5>
                    <p className="text-sm text-gray-700">QuickBooks and Xero integration for automated invoicing and expense tracking</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    🤖
                  </div>
                  <div>
                    <h5 className="font-bold mb-1">Machine Learning for Route Optimization</h5>
                    <p className="text-sm text-gray-700">AI-powered route suggestions based on traffic patterns, fuel costs, and delivery windows</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY LEARNINGS SECTION */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20 bg-white">
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
              className="flex gap-6 items-start bg-blue-50 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                🔄
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">Mastering React Context API at Scale</h3>
                <p className="text-gray-700 leading-relaxed">
                  Managing state across multiple contexts (Auth, Notifications, Theme) and 21+ pages taught me the importance
                  of proper provider hierarchy and context optimization. I learned when to use Context API versus more complex
                  state management solutions, and how to prevent unnecessary re-renders in large applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.1 }}
              className="flex gap-6 items-start bg-green-50 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                🎨
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">Designing Dual-Portal UX with Role-Based Routing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Building two distinct user experiences within a single application required careful consideration of
                  component reusability, layout patterns, and navigation flows. I learned how to create shared component
                  libraries while maintaining portal-specific customizations, and how to implement role-based routing that
                  feels natural for both desktop admin and mobile driver use cases.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-200px" }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 items-start bg-purple-50 rounded-xl p-8"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                🏗️
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-black">Architecting Mock Data for Seamless API Transition</h3>
                <p className="text-gray-700 leading-relaxed">
                  Creating a service layer that works seamlessly with mock data while remaining ready for real API integration
                  taught me the value of abstraction. By implementing 14 separate service modules as an abstraction layer, I learned
                  how to structure applications that can evolve from prototypes to production-ready systems without major refactoring.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THANKS FOR READING */}
      <ThanksForReading
        nextProject={{
          title: "LMS SaaS Platform",
          url: "/case-study/lmssaas"
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
