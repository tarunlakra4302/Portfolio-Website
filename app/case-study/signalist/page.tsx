"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, ExternalLink, Database, Zap, Shield, Code, Layers, Globe } from 'lucide-react'
import { SlidingNumber } from '@/components/ui/sliding-number'
import ContainerScroll from '@/components/ui/container-scroll'
import { ThanksForReading } from '@/components/ui/thanks-for-reading'
import { Liquid, type Colors } from '@/components/button-1'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Loader from '@/components/loader-12'

export default function SignalistDocumentation() {
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
      <section className="w-full bg-white" key="signalist-hero">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-semibold text-black">
              AI-Powered Stock Market Tracking
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-blue-600">
                Signalist
              </span>
            </h2>
          }
        >
          <Image
            src="/Signalist cast study.jpg"
            alt="Signalist stock market tracking platform"
            width={1200}
            height={800}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </section>

      {/* PROJECT OVERVIEW */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-black"
          >
            AI-Powered Stock Market Tracking
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Project Overview</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  Signalist is a production-ready stock tracking platform that enables users to monitor stocks, create personalized watchlists, set intelligent price alerts, and receive AI-generated daily market summaries. Built with modern web technologies and an event-driven architecture, it demonstrates enterprise-level patterns while maintaining a clean, intuitive user experience.
                </p>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 mt-6">Key Highlights</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Real-time stock data integration via Finnhub API</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">AI-powered personalized email summaries using Google Gemini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Event-driven architecture with Inngest for background workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Secure authentication with Better Auth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Interactive TradingView charts and technical analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2.5 flex-shrink-0"></div>
                    <span className="text-base text-gray-700">Responsive, accessible UI with Shadcn components</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">📊 Interactive stock charts with historical data & filtering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">🔍 Powerful search with intelligent stock discovery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">🔔 Custom price alerts & email notifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">💼 Company insights with PE ratio, EPS, & sentiment analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">🤖 AI-generated daily digests & market summaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">⚡ Event-driven workflows with automated reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg text-gray-800">📈 Analytics dashboard for user behavior & trends</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Tech Stack</h3>
                <div className="space-y-2">
                  <p className="text-lg text-gray-800"><strong>Frontend:</strong> Next.js 15.5.2, React 19, TypeScript, TailwindCSS 4, Shadcn UI</p>
                  <p className="text-lg text-gray-800"><strong>Backend:</strong> Next.js Server Actions, MongoDB, Mongoose</p>
                  <p className="text-lg text-gray-800"><strong>APIs:</strong> Finnhub, Gemini AI, Nodemailer</p>
                  <p className="text-lg text-gray-800"><strong>Auth:</strong> Better Auth 1.3.7</p>
                  <p className="text-lg text-gray-800"><strong>Workflows:</strong> Inngest (event-driven automation)</p>
                  <p className="text-lg text-gray-800"><strong>Code Quality:</strong> CodeRabbit (AI-powered code review)</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Repository</h3>
                <div className="flex flex-col gap-3 items-start">
                  <Link
                    href="https://github.com/tarunlakra4302/Signalist-Stock-Market-Tracking-Platform"
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
                    href="https://signalist-gilt.vercel.app/"
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

      {/* ARCHITECTURE */}
      <section className="w-full px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-black"
          >
            Architecture Overview
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-black">Application Flow</h3>
              <div className="space-y-4 font-mono text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <span>User Request</span>
                </div>
                <div className="flex items-center gap-3 ml-6">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>Next.js App Router (app/)</span>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span>Server Actions (lib/actions/)</span>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span>Database (MongoDB via Mongoose)</span>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>External APIs (Finnhub, Gemini)</span>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                  <span>Inngest Events (Background Jobs)</span>
                </div>
                <div className="flex items-center gap-3 ml-12">
                  <div className="w-3 h-3 bg-purple-700 rounded-full"></div>
                  <span>Email Notifications (Nodemailer)</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <Layers className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2 text-lg">Server Components First</h4>
                <p className="text-sm text-gray-600">Leverages Next.js 15 Server Components for optimal performance</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2 text-lg">Event-Driven Workflows</h4>
                <p className="text-sm text-gray-600">Background jobs handled by Inngest for scalability</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-4">
                  <Database className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2 text-lg">Singleton Connections</h4>
                <p className="text-sm text-gray-600">MongoDB connection uses global caching pattern</p>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6" />
                </div>
                <h4 className="font-bold mb-2 text-lg">Type Safety</h4>
                <p className="text-sm text-gray-600">End-to-end TypeScript with strict typing</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DATABASE SCHEMA */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Database Schema
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Collections</h3>

              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
                  <h4 className="text-xl font-bold mb-3">1. Users (Managed by Better Auth)</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <p>• <strong>id</strong>: Unique user identifier</p>
                    <p>• <strong>email</strong>: User email (unique)</p>
                    <p>• <strong>name</strong>: User&apos;s full name</p>
                    <p>• <strong>emailVerified</strong>: Email verification status</p>
                    <p>• <strong>country</strong>: User&apos;s country</p>
                    <p>• <strong>investmentGoals</strong>: Investment objectives</p>
                    <p>• <strong>riskTolerance</strong>: Risk preference (low/medium/high)</p>
                    <p>• <strong>preferredIndustry</strong>: Preferred stock sectors</p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                  <h4 className="text-xl font-bold mb-3">2. Watchlist</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <p>• <strong>userId</strong>: Reference to user</p>
                    <p>• <strong>symbol</strong>: Stock ticker (uppercase)</p>
                    <p>• <strong>company</strong>: Company name</p>
                    <p>• <strong>addedAt</strong>: Timestamp when added</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-200">
                    <p className="text-sm"><strong>Indexes:</strong></p>
                    <p className="text-xs text-gray-600 mt-1">• Compound index on userId + symbol (prevents duplicates)</p>
                    <p className="text-xs text-gray-600">• Index on userId for query optimization</p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
                  <h4 className="text-xl font-bold mb-3">3. Alerts</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <p>• <strong>userId</strong>: Reference to user (indexed)</p>
                    <p>• <strong>symbol</strong>: Stock ticker (uppercase)</p>
                    <p>• <strong>company</strong>: Company name</p>
                    <p>• <strong>alertName</strong>: User-defined alert name</p>
                    <p>• <strong>alertType</strong>: &apos;upper&apos; | &apos;lower&apos;</p>
                    <p>• <strong>threshold</strong>: Price threshold number</p>
                    <p>• <strong>isActive</strong>: Boolean toggle state</p>
                    <p>• <strong>createdAt</strong>: Timestamp</p>
                    <p>• <strong>triggeredAt</strong>: Optional trigger timestamp</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <p className="text-sm"><strong>Indexes:</strong></p>
                    <p className="text-xs text-gray-600 mt-1">• Index on userId for query optimization</p>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border-l-4 border-orange-600">
                  <h4 className="text-xl font-bold mb-3">4. Sessions (Managed by Better Auth)</h4>
                  <p className="text-sm text-gray-700">Handles user authentication sessions automatically with HTTP-only cookies and secure session management.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DETAILED FEATURES */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Core Features
          </motion.h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border-l-4 border-indigo-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>🔐</span> Authentication & User Management
              </h3>
              <ul className="text-gray-800 leading-relaxed space-y-2">
                <li>• Email/password registration with session-based auth</li>
                <li>• User profiles with investment preferences (goals, risk tolerance, industry)</li>
                <li>• Protected routes and middleware-level security</li>
                <li>• Auto sign-in after registration</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-l-4 border-blue-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>🔍</span> Stock Search & Discovery
              </h3>
              <ul className="text-gray-800 leading-relaxed space-y-2">
                <li>• Real-time stock search with typeahead suggestions</li>
                <li>• Comprehensive company profiles with financial data</li>
                <li>• Multiple chart types (candlestick, technical indicators, financials)</li>
                <li>• Command palette (Cmd+K) for quick navigation</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 border-l-4 border-purple-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>📝</span> Watchlist Management
              </h3>
              <ul className="text-gray-800 leading-relaxed space-y-2">
                <li>• Add/remove stocks to personal watchlist</li>
                <li>• Persistent storage in MongoDB</li>
                <li>• Duplicate prevention with unique constraints</li>
                <li>• Real-time UI updates with optimistic rendering</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border-l-4 border-green-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>🔔</span> Price Alert System
              </h3>
              <ul className="text-gray-800 leading-relaxed space-y-2">
                <li>• Create custom price alerts (upper/lower thresholds)</li>
                <li>• Alert naming and organization</li>
                <li>• Toggle alerts on/off</li>
                <li>• Per-stock alert management</li>
                <li>• Foundation for automated monitoring</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-l-4 border-orange-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>💼</span> Company Insights
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Explore detailed financial data such as PE ratio, EPS, revenue, recent news, filings, analyst
                ratings, and sentiment scores for informed decision-making backed by comprehensive company analysis.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 border-l-4 border-pink-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>⚡</span> Real-Time Workflows
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Powered by Inngest, automate event-driven processes like price updates, alert scheduling,
                automated reporting, and AI-driven insights for a seamless and intelligent trading experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-8 border-l-4 border-indigo-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>🤖</span> AI-Powered Alerts & Summaries
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Generate personalized market summaries, daily digests, and earnings report notifications using
                Gemini AI, helping users track performance and make data-driven decisions with confidence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-8 border-l-4 border-teal-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>🎯</span> Customizable Notifications
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Fine-tune alerts and notifications based on user watchlists and preferences for a highly
                personalized experience tailored to your unique investment strategy and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl p-8 border-l-4 border-cyan-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black flex items-center gap-3">
                <span>📈</span> Analytics & Insights
              </h3>
              <p className="text-gray-800 leading-relaxed">
                Gain insights into user behavior, stock trends, and engagement metrics, enabling smarter
                business and trading decisions backed by comprehensive analytics and data visualization.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVER ACTIONS */}
      <section className="w-full px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            API & Server Actions
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                title: 'Authentication Actions',
                icon: Shield,
                color: 'blue',
                actions: [
                  'signUpUser() - Register new user',
                  'signInUser() - Authenticate existing user',
                  'signOutUser() - End user session',
                  'getSession() - Retrieve current session'
                ]
              },
              {
                title: 'Watchlist Actions',
                icon: Database,
                color: 'purple',
                actions: [
                  'addToWatchlist() - Add stock to watchlist',
                  'removeFromWatchlist() - Remove stock',
                  'getUserWatchlist() - Get user\'s watchlist',
                  'isInWatchlist() - Check stock presence'
                ]
              },
              {
                title: 'Finnhub Actions',
                icon: Globe,
                color: 'green',
                actions: [
                  'getQuote() - Get real-time stock quote',
                  'getCompanyProfile() - Fetch company details',
                  'getNews() - Retrieve market news',
                  'searchStocks() - Search stock symbols',
                  'getCandles() - Historical price data'
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3 }}
                className={`bg-${section.color}-50 rounded-xl p-8 border-2 border-${section.color}-200`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-${section.color}-100 text-${section.color}-600 flex items-center justify-center`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-black">{section.title}</h3>
                </div>
                <ul className="space-y-2 font-mono text-sm">
                  {section.actions.map((action, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className={`text-${section.color}-600`}>•</span>
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT-DRIVEN WORKFLOWS */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Event-Driven Workflows
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">1. Welcome Email on Sign Up</h3>
              <div className="space-y-3">
                <p><strong>Event:</strong> <code className="bg-purple-200 px-2 py-1 rounded">app/user.created</code></p>
                <p><strong>Trigger:</strong> User registration</p>
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                  <li>Receive user data (country, goals, risk tolerance, industry)</li>
                  <li>Generate personalized intro using Gemini AI</li>
                  <li>Send welcome email via Nodemailer</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">2. Daily News Summary</h3>
              <div className="space-y-3">
                <p><strong>Event:</strong> <code className="bg-blue-200 px-2 py-1 rounded">app/send.daily.news</code></p>
                <p><strong>Trigger:</strong> Cron schedule (12 PM daily) or manual</p>
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                  <li>Fetch all users from database</li>
                  <li>For each user: Get watchlist symbols</li>
                  <li>Fetch news for symbols (limit to 6 articles)</li>
                  <li>Generate AI summary using Gemini</li>
                  <li>Send personalized email to each user</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">3. Price Alert Notifications</h3>
              <div className="space-y-3">
                <p><strong>Event:</strong> <code className="bg-green-200 px-2 py-1 rounded">app/price.alert</code></p>
                <p><strong>Trigger:</strong> Stock price crosses user-defined threshold</p>
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                  <li>Monitor real-time price changes via Finnhub</li>
                  <li>Check against user alert thresholds</li>
                  <li>Trigger notification when threshold is met</li>
                  <li>Send instant email alert to user</li>
                  <li>Log alert history for user tracking</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">4. Earnings Report Alerts</h3>
              <div className="space-y-3">
                <p><strong>Event:</strong> <code className="bg-orange-200 px-2 py-1 rounded">app/earnings.notification</code></p>
                <p><strong>Trigger:</strong> Company earnings announcement</p>
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                  <li>Track earnings calendar for watchlist stocks</li>
                  <li>Fetch earnings data and analyst expectations</li>
                  <li>Generate AI-powered earnings summary</li>
                  <li>Send pre-earnings and post-earnings notifications</li>
                  <li>Include historical performance comparison</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">5. Sentiment Analysis Updates</h3>
              <div className="space-y-3">
                <p><strong>Event:</strong> <code className="bg-indigo-200 px-2 py-1 rounded">app/sentiment.analysis</code></p>
                <p><strong>Trigger:</strong> Scheduled daily or on-demand</p>
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                  <li>Aggregate news articles for each stock</li>
                  <li>Run sentiment analysis using Gemini AI</li>
                  <li>Calculate overall sentiment score</li>
                  <li>Update company insights with sentiment data</li>
                  <li>Notify users of significant sentiment shifts</li>
                </ol>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-black">6. Automated Reporting</h3>
              <div className="space-y-3">
                <p><strong>Event:</strong> <code className="bg-pink-200 px-2 py-1 rounded">app/generate.report</code></p>
                <p><strong>Trigger:</strong> Weekly or monthly schedule</p>
                <p><strong>Steps:</strong></p>
                <ol className="list-decimal list-inside space-y-2 ml-4 text-sm">
                  <li>Collect user portfolio performance data</li>
                  <li>Generate insights on watchlist trends</li>
                  <li>Create AI-powered performance summary</li>
                  <li>Include top gainers/losers from watchlist</li>
                  <li>Email comprehensive report to user</li>
                </ol>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-black"
          >
            Key Technical Highlights
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: 'Next.js 15 with Turbopack', desc: 'Lightning-fast dev experience with instant hot reload' },
              { icon: '🔐', title: 'Better Auth Integration', desc: 'Secure authentication with session management' },
              { icon: '🤖', title: 'AI-Powered Insights', desc: 'Gemini AI for personalized market summaries' },
              { icon: '📊', title: 'Real-Time Data', desc: 'Live stock prices via Finnhub API' },
              { icon: '🔔', title: 'Event-Driven Architecture', desc: 'Scalable workflows with Inngest' },
              { icon: '💾', title: 'MongoDB + Mongoose', desc: 'Efficient data modeling and queries' }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-gray-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-black">{feature.title}</h3>
                <p className="text-sm text-gray-700">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES & SOLUTIONS */}
      <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-20">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Challenges & Solutions
          </motion.h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border-l-4 border-red-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Challenge 1: Database Connection Exhaustion</h3>
              <div className="space-y-3">
                <p className="text-gray-800"><strong>Problem:</strong> Multiple concurrent requests creating new connections</p>
                <p className="text-gray-800"><strong>Solution:</strong> Singleton pattern for MongoDB connection</p>
                <p className="text-sm text-gray-700"><strong>File:</strong> <code className="bg-gray-200 px-2 py-1 rounded">database/mongoose.ts</code></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-l-4 border-blue-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Challenge 2: Duplicate Watchlist Entries</h3>
              <div className="space-y-3">
                <p className="text-gray-800"><strong>Problem:</strong> Users could add same stock multiple times</p>
                <p className="text-gray-800"><strong>Solution:</strong> Unique compound index on <code className="bg-gray-200 px-2 py-1 rounded">{`{ userId, symbol }`}</code></p>
                <p className="text-sm text-gray-700"><strong>File:</strong> <code className="bg-gray-200 px-2 py-1 rounded">database/models/watchlist.model.ts</code></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Challenge 3: Stale UI After Server Actions</h3>
              <div className="space-y-3">
                <p className="text-gray-800"><strong>Problem:</strong> UI not updating after database mutations</p>
                <p className="text-gray-800"><strong>Solution:</strong> <code className="bg-gray-200 px-2 py-1 rounded">router.refresh()</code> to revalidate server components</p>
                <p className="text-sm text-gray-700"><strong>Example:</strong> <code className="bg-gray-200 px-2 py-1 rounded">components/WatchlistButton.tsx</code></p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-l-4 border-purple-600"
            >
              <h3 className="text-2xl font-bold mb-4 text-black">Challenge 4: Personalized Email at Scale</h3>
              <div className="space-y-3">
                <p className="text-gray-800"><strong>Problem:</strong> Generating custom content for each user is slow</p>
                <p className="text-gray-800"><strong>Solution:</strong> Inngest parallel processing with AI batching</p>
                <p className="text-sm text-gray-700"><strong>File:</strong> <code className="bg-gray-200 px-2 py-1 rounded">lib/inngest/functions.ts</code></p>
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

      {/* FOOTER */}
      <motion.footer
        className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto bg-[#3A3A3A] rounded-[24px] md:rounded-[32px] px-6 sm:px-8 md:px-12 py-8 md:py-10 lg:py-12 w-full box-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
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

              <div className="text-white/70 text-sm md:text-base">
                New Delhi, India
              </div>

              <div className="text-white/70 text-sm md:text-base font-mono flex items-center gap-1">
                <SlidingNumber value={hours} padStart />
                <span>:</span>
                <SlidingNumber value={minutes} padStart />
                <span>:</span>
                <SlidingNumber value={seconds} padStart />
                <span className="ml-2">IST</span>
              </div>

              <div className="text-white/50 text-sm pt-2">
                <div>©2025 Tarun Lakra</div>
                <div className="text-xs mt-2">
                  Made with 🩶 and Strawberry Protein Lattes (120% sugar, less ice).
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center space-y-3 md:space-y-4 md:items-end"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/tarun-lakra/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-fit"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 }}
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
