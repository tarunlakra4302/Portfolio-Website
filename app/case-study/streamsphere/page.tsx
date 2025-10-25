"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Copy, Check, ExternalLink, Video, Upload, Lock, Search } from 'lucide-react'
import { SlidingNumber } from '@/components/ui/sliding-number'
import ContainerScroll from '@/components/ui/container-scroll'
import { ParallaxScroll, ParallaxSection } from '@/components/ui/parallax-scroll'
import { ThanksForReading } from '@/components/ui/thanks-for-reading'
import { Liquid, type Colors } from '@/components/button-1'
import { InteractiveHoverButton } from '@/components/ui/interactive-hover-button'
import Loader from '@/components/loader-12'

export default function StreamSphereCaseStudy() {
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
      <section className="w-full bg-white" key="streamsphere-hero">
        <ContainerScroll
          titleComponent={
            <h2 className="text-4xl font-semibold text-black">
              Effortless Screen Recording
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-red-600">
                StreamSphere Platform
              </span>
            </h2>
          }
        >
          <Image
            src="/SnapCast.jpg"
            alt="StreamSphere screen recording platform interface"
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
            viewport={{ once: true, margin: "-200px" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-black"
          >
            Screen recording platform
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Background</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  StreamSphere is a modern screen recording and video sharing platform built with cutting-edge web technologies. The project serves as a full-stack web application that enables users to record their screens, upload videos, and share content with others through a public library or private settings.
                </p>
                <div className="space-y-2 mt-4">
                  <h4 className="text-sm font-bold text-gray-600 mb-2">Tech Stack:</h4>
                  <ul className="space-y-2 text-base text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Frontend:</strong> Next.js 15.3.2, React 19, TailwindCSS 4</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Backend:</strong> Next.js Server Actions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Database:</strong> PostgreSQL (Neon Database + Xata.io), Drizzle ORM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Authentication:</strong> Better-auth with Google OAuth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Video Infrastructure:</strong> Bunny.net CDN (streaming, storage, transcription)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><strong>Security:</strong> Arcjet (rate limiting, bot detection, shield protection)</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Challenge</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-3">
                  The project addresses several key technical challenges:
                </p>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-black">1.</span>
                    <span><strong>Real-time Screen Recording:</strong> Implementing browser-based screen capture using the Screen Capture API with proper state management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-black">2.</span>
                    <span><strong>Large File Handling:</strong> Managing video uploads (large files) efficiently to a CDN with proper progress tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-black">3.</span>
                    <span><strong>Video Processing Pipeline:</strong> Coordinating between video upload, thumbnail generation, and metadata storage across multiple services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-black">4.</span>
                    <span><strong>Security & Rate Limiting:</strong> Protecting against abuse, bots, and ensuring fair usage through rate limiting (2 uploads per minute per user)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-black">5.</span>
                    <span><strong>Authentication & Authorization:</strong> Implementing secure OAuth-based authentication with session management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-black">6.</span>
                    <span><strong>Performance:</strong> Optimizing video delivery through CDN integration and implementing efficient database queries with pagination</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Team</h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  Solo project (Freelance)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Repository</h3>
                <div className="flex flex-col gap-3 items-start">
                  <Link
                    href="https://github.com/tarunlakra4302/Stream"
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
                    href="https://stream-m15b.vercel.app"
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

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">Understanding of the Problem</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-3">
                  The core problems being solved:
                </p>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>User Need:</strong> Content creators, educators, and professionals need an easy way to record, share, and manage screen recordings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Technical Complexity:</strong> Screen recording requires browser API integration, video processing, and efficient storage/delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Scalability:</strong> Videos are large files requiring CDN distribution, not direct server storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Access Control:</strong> Users need ability to control video visibility (public/private)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Discovery:</strong> Users need to search and filter videos in a public library</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span><strong>Security:</strong> Preventing spam, rate abuse, and bot attacks while maintaining good UX</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SOLUTION */}
      <section className="w-full px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Design Solution
          </motion.h2>

          <div className="space-y-12">
            <ParallaxScroll offset={30}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Architecture Components</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-lg">Frontend Structure</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    app/(root)/page.tsx, components/
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Next.js App Router with route groups</li>
                    <li>• Client-side screen recording with useScreenRecording hook</li>
                    <li>• Modular components (RecordScreen, VideoPlayer, VideoCard)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-lg">Video Upload Pipeline</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    app/(root)/upload/page.tsx, lib/actions/video.ts:60-120
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• User Records → sessionStorage</li>
                    <li>• Upload Page → Bunny.net (video)</li>
                    <li>• Bunny.net (thumbnail) → Database Save</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-lg">Database Schema</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    drizzle/schema.ts
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Users table with OAuth integration</li>
                    <li>• Videos table with metadata (title, description, visibility, views, duration)</li>
                    <li>• Session management for Better-auth</li>
                  </ul>
                </div>
              </div>
              </motion.div>
            </ParallaxScroll>

            <ParallaxScroll offset={40}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Security & Video Management</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-lg">Security Layer</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    middleware.ts, lib/arcjet.ts
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Arcjet middleware protecting all routes</li>
                    <li>• Shield protection against common attacks</li>
                    <li>• Bot detection allowing search engines</li>
                    <li>• Fixed-window rate limiting (2 uploads/minute)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold mb-3 text-lg">Video Management</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    lib/actions/video.ts
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Server actions for video CRUD operations</li>
                    <li>• Integration with Bunny.net API</li>
                    <li>• Automatic transcript generation</li>
                    <li>• View count tracking with SQL increment</li>
                  </ul>
                </div>
              </div>
              </motion.div>
            </ParallaxScroll>

            <ParallaxScroll offset={50}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6">Authentication Flow</h3>
              <div className="bg-white rounded-xl p-6">
                <p className="text-sm text-gray-700 mb-3">
                  lib/auth.ts, app/api/auth/[...all]/route.ts
                </p>
                <ul className="space-y-3 text-base text-gray-700">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Better-auth with Google OAuth provider</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Database-backed session management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Middleware protection requiring authentication for all app routes</span>
                  </li>
                </ul>
              </div>
              </motion.div>
            </ParallaxScroll>
          </div>
        </div>
      </section>

      {/* RESULT AND IMPACT */}
      <section className="w-full px-6 lg:px-12 py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Result and Impact
          </motion.h2>

          <div className="space-y-12">
            <ParallaxSection speed="medium">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-2xl font-bold mb-6">Current Features</h3>
                <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Video className="w-8 h-8 text-red-600" />
                    <h4 className="font-bold text-lg">Screen Recording</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">components/RecordScreen.tsx</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Browser-based screen capture with preview</li>
                    <li>• Duration tracking</li>
                    <li>• Record again functionality</li>
                    <li>• Seamless transfer to upload flow</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Search className="w-8 h-8 text-orange-600" />
                    <h4 className="font-bold text-lg">Video Library</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">app/(root)/page.tsx</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Paginated video grid (8 videos per page)</li>
                    <li>• Search by title</li>
                    <li>• Sort filtering (newest, most viewed)</li>
                    <li>• Visibility filtering (public + private)</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Upload className="w-8 h-8 text-yellow-600" />
                    <h4 className="font-bold text-lg">Video Playback</h4>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">app/(root)/video/[videoid]/page.tsx</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Embedded Bunny.net player</li>
                    <li>• Video metadata display</li>
                    <li>• Automatic transcription (English captions)</li>
                    <li>• View count tracking</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-8 h-8 text-red-600" />
                    <h4 className="font-bold text-lg">Security Features</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Rate limiting prevents spam (2 videos/min)</li>
                    <li>• Bot detection and shield protection</li>
                    <li>• Authentication required for all app features</li>
                    <li>• Privacy-aware user profiles</li>
                  </ul>
                </div>
              </div>
              </motion.div>
            </ParallaxSection>

            <ParallaxSection speed="fast">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
              >
                <h3 className="text-2xl font-bold mb-6">Technical Achievements</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '⚡', text: 'Modern React 19 with server components for optimal performance' },
                  { icon: '🔒', text: 'Type-safe database queries with Drizzle ORM' },
                  { icon: '🌐', text: 'Efficient CDN integration for global video delivery' },
                  { icon: '📝', text: 'Automatic video transcription for accessibility' },
                  { icon: '📱', text: 'Responsive design with TailwindCSS 4' },
                  { icon: '🛡️', text: 'Multi-layer security with Arcjet' }
                ].map((achievement, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 shadow-md">
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <p className="text-sm text-gray-700">{achievement.text}</p>
                  </div>
                ))}
              </div>
              </motion.div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}
      <section className="w-full px-6 lg:px-12 py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            className="text-4xl md:text-5xl font-bold mb-12 text-black"
          >
            Key Learnings
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                icon: '🎥',
                title: 'CDN Integration Strategy',
                desc: "Using Bunny.net's separate storage and streaming libraries requires careful coordination but provides better separation of concerns and scalability"
              },
              {
                icon: '⚡',
                title: 'Rate Limiting Placement',
                desc: 'Implementing rate limits at the server action level (lib/actions/video.ts:96) rather than just middleware provides more granular control'
              },
              {
                icon: '📤',
                title: 'File Upload Flow',
                desc: 'The two-stage upload (video first, then thumbnail using video ID) ensures thumbnails are properly associated even if the process fails midway'
              },
              {
                icon: '💾',
                title: 'Session Storage Bridge',
                desc: 'Using sessionStorage to transfer recorded video from the recording modal to the upload page (components/RecordScreen.tsx:42-56) maintains state across navigation'
              },
              {
                icon: '🛡️',
                title: 'Security Layering',
                desc: "Combining Arcjet's shield, bot detection, and rate limiting provides defense-in-depth against various attack vectors"
              },
              {
                icon: '🔐',
                title: 'Visibility Control',
                desc: 'The database query logic (lib/actions/video.ts:132-142) efficiently handles showing public videos to all users while also showing a user\'s own private videos'
              },
              {
                icon: '🎬',
                title: 'Video Processing Status',
                desc: 'The async nature of video encoding requires status checking (lib/actions/video.ts:253-266) to know when videos are ready for playback'
              },
              {
                icon: '⚙️',
                title: 'Middleware Challenges',
                desc: 'The comment at middleware.ts:36 indicates a "Body is unusable" error that needed resolution in the middleware implementation'
              },
              {
                icon: '🗄️',
                title: 'Database Choice',
                desc: 'Using both Neon and Xata for PostgreSQL provides redundancy and flexibility in deployment options'
              },
              {
                icon: '🔤',
                title: 'Type Safety',
                desc: "TypeScript throughout the stack with Drizzle's type inference ensures data consistency from database to UI"
              }
            ].map((learning, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-6 items-start bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6"
              >
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0">
                  {learning.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black">{learning.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{learning.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* THANKS FOR READING */}
      <ThanksForReading
        previousProject={{
          title: "RouteMate",
          url: "/case-study/routemate"
        }}
      />

      {/* FOOTER */}
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
