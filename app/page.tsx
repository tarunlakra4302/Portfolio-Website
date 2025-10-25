"use client"

import React, { useState, useCallback, useMemo } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background'
import { NavBar } from '@/components/ui/tubelight-navbar'
import { ModernHero } from '@/components/modern-hero'
import { LayeredText } from '@/components/layered-text'
import GlassCard from '@/components/glass-card'
import { ShineBorder } from '@/components/ui/shine-border'
import { FollowerPointerCard } from '@/components/ui/following-pointer'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Home, User, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Preloader from '@/components/preloader'

export default function Page() {
  const router = useRouter()
  const [isEjectHovered, setIsEjectHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Contact form functionality - commented out until form is implemented
  // const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // const handleSubmit = useCallback(async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   setIsSubmitting(true)
  //   try {
  //     const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
  //     const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
  //     const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
  //     if (!serviceId || !templateId || !publicKey) {
  //       throw new Error('EmailJS configuration missing')
  //     }
  //     await emailjs.send(serviceId, templateId, {
  //       from_name: formData.name,
  //       from_email: formData.email,
  //       message: formData.message,
  //       to_name: 'Tarun Lakra',
  //     }, publicKey)
  //     setSubmitStatus('success')
  //     setFormData({ name: '', email: '', message: '' })
  //     setTimeout(() => setSubmitStatus('idle'), 5000)
  //   } catch (error) {
  //     console.error('EmailJS error:', error)
  //     setSubmitStatus('error')
  //     setTimeout(() => setSubmitStatus('idle'), 5000)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }, [formData])

  // const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target
  //   setFormData(prev => ({ ...prev, [name]: value }))
  // }, [])

  const navItems = useMemo(() => [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Contact", url: "/contact", icon: Mail },
  ], [])

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false)

    if (typeof window !== 'undefined') {
      // Clear the showPreloader flag if it exists
      sessionStorage.removeItem('showPreloader')

      // Check if we should scroll to projects section
      const shouldScrollToProjects = sessionStorage.getItem('scrollToProjects')
      if (shouldScrollToProjects === 'true') {
        sessionStorage.removeItem('scrollToProjects')
        // Wait for content to render, then scroll to projects
        setTimeout(() => {
          const projectsSection = document.getElementById('projects')
          if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 500)
      }
    }
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader onComplete={handlePreloaderComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.1,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="relative w-full"
        >
      <NavBar items={navItems} className="z-50" />

      <main className="w-full pt-16 sm:pt-20">
        {/* Top Right Button - Only on home page */}
        <div className="absolute top-6 right-6 md:top-8 md:right-8 lg:top-16 lg:right-12 z-[100]">
          <div className="py-1 px-1">
            <Button
              variant="default"
              size="sm"
              onClick={() => router.push('/eject')}
              onMouseEnter={() => setIsEjectHovered(true)}
              onMouseLeave={() => setIsEjectHovered(false)}
              className="font-bold relative overflow-hidden text-xs sm:text-sm md:text-base px-4 py-[9px] sm:px-8 sm:py-2 md:px-10 md:py-2.5"
            >
            {/* GIF Background */}
            <img
              src="https://i.pinimg.com/originals/71/fb/91/71fb9176f16357776802391df14b4e40.gif"
              alt="Eject animation"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
              style={{
                opacity: isEjectHovered ? 1 : 0,
                filter: 'brightness(1.5)'
              }}
            />

            {/* Dark Overlay */}
            <div
              className="absolute inset-0 bg-black/50 transition-opacity duration-300 pointer-events-none"
              style={{ opacity: isEjectHovered ? 1 : 0 }}
            />

            {/* Button Text */}
            <span
              className="relative z-10 transition-colors duration-300"
              style={{ color: isEjectHovered ? 'white' : undefined }}
            >
              Eject
            </span>
          </Button>
          </div>
        </div>
        {/* Modern Hero Section */}
        <section aria-label="Hero section">
          <ModernHero
            name="Tarun Lakra"
            greeting="Hey!"
            headline="I turn my frustrations and passions into products that improve how people work and interact with their lives. I simplify. I humanize."
            email="lakra.tarun4302@gmail.com"
            linkedinUrl="https://www.linkedin.com/in/tarun-lakra/"
          />
        </section>

        {/* Layered Text Section */}
        <section
          aria-label="Featured work"
          className="relative w-full bg-white flex items-center justify-center py-8 sm:py-12 overflow-hidden"
        >
          <div className="w-full max-w-6xl px-2 sm:px-6 md:px-8 lg:px-12">
            <LayeredText />
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          aria-label="Portfolio projects"
          className="relative w-full bg-white py-8 sm:py-12 md:py-16 overflow-hidden mt-16 sm:mt-24 md:mt-32"
        >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="flex flex-col gap-16 sm:gap-24 md:gap-32 max-w-[1600px] mx-auto">
            {[
              {
                id: 1,
                year: "2025",
                industry: "FinTech",
                category: "Stock Tracking",
                title: "Signalist: AI-Powered Stock Market Tracking",
                description: "A modern stock market tracking application built with Next.js 15, featuring real-time data integration with Finnhub API, AI-generated market summaries using Gemini AI, and event-driven workflows with Inngest for automated alerts and daily digests.",
                detailedRoute: "/case-study/signalist"
              },
              {
                id: 2,
                year: "2025",
                industry: "EdTech",
                category: "Learning Platform",
                title: "LMS SAAS PLATFORM",
                description: "This project demonstrates a production-ready SaaS application with modern architecture, monetization strategy, and a clear value proposition in the EdTech space. The integration of voice AI creates a differentiated learning experience beyond traditional text-based platforms.",
                detailedRoute: "/case-study/lmssaas"
              },
              {
                id: 3,
                year: "2025",
                industry: "B2B SaaS",
                category: "Digital Marketing",
                title: "RouteMate",
                description: "A comprehensive fleet management application with separate Admin and Driver portals, built with React, Vite, TailwindCSS, and DaisyUI. This is a single-page application with role-based routing and a polished, production-ready interface.",
                detailedRoute: "/case-study/routemate"
              },
              {
                id: 4,
                year: "2025",
                industry: "Video Platform",
                category: "Streaming",
                title: "Snapcast",
                description: "Snapcast is a modern screen recording and video sharing platform built with cutting-edge web technologies. The project serves as a full-stack web application that enables users to record their screens, upload videos, and share content with others through a public library or private settings.",
                detailedRoute: "/case-study/streamsphere"
              }
            ].map((project) => (
              <div
                key={project.id}
                className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-stretch"
              >
                <div className="flex-1 w-full">
                  <ShineBorder
                    borderRadius={20}
                    borderWidth={1}
                    duration={14}
                    color={["#000000", "#333333", "#666666"]}
                    className="w-full h-full p-0 bg-white"
                  >
                    <div className="h-full bg-white p-4 sm:p-6 md:p-8 xl:p-10 rounded-[20px] flex flex-col justify-between">
                        <div>
                          {/* Metadata */}
                          <div className="text-[9px] sm:text-[10px] text-gray-400 font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6 leading-none">
                            {project.year} • {project.industry} • {project.category}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-[1.12] mb-4 sm:mb-6 text-gray-900 tracking-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-sm sm:text-base xl:text-lg text-gray-500 leading-[1.6] sm:leading-[1.8] mb-4 sm:mb-6">
                            {project.description}
                          </p>
                        </div>

                        {/* CTA */}
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            sessionStorage.setItem('showPreloader', 'true')
                            router.push(project.detailedRoute)
                          }}
                          className="relative z-10 inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-bold text-black hover:text-gray-600 transition-all duration-300 group border-b-[2px] sm:border-b-[3px] border-black hover:border-gray-600 pb-1.5 sm:pb-2 w-fit cursor-pointer"
                        >
                          View Case Study
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </ShineBorder>
                </div>
                <div className="w-full lg:w-[450px] xl:w-[550px] flex items-center justify-center">
                  {project.id === 1 && (
                    <FollowerPointerCard key={`pointer-${project.id}`} title={project.title.split(':')[0]} className="w-full max-w-full aspect-video">
                      <GlassCard className="w-full h-full" logoSrc="/SignalistLogo.svg">
                        <div className="absolute inset-0 [transform:translate3d(0,0,26px)] overflow-hidden rounded-[50px] flex items-center justify-center">
                          <img
                            src="/Signalist.jpg"
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </GlassCard>
                    </FollowerPointerCard>
                  )}
                  {project.id === 2 && (
                    <FollowerPointerCard key={`pointer-${project.id}`} title={project.title} className="w-full max-w-full aspect-video">
                      <GlassCard className="w-full h-full" logoSrc="/LMSLogo.svg">
                        <div className="absolute inset-0 [transform:translate3d(0,0,26px)] overflow-hidden rounded-[50px] flex items-center justify-center">
                          <img
                            src="/LMS.jpg"
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </GlassCard>
                    </FollowerPointerCard>
                  )}
                  {project.id === 3 && (
                    <FollowerPointerCard key={`pointer-${project.id}`} title={project.title} className="w-full max-w-full aspect-video">
                      <GlassCard className="w-full h-full" hideLogo={true}>
                        <div className="absolute inset-0 [transform:translate3d(0,0,26px)] overflow-hidden rounded-[50px] flex items-center justify-center">
                          <img
                            src="/RouteMate.jpg"
                            alt={project.title}
                            className="w-full h-full object-cover scale-125"
                          />
                        </div>
                      </GlassCard>
                    </FollowerPointerCard>
                  )}
                  {project.id === 4 && (
                    <FollowerPointerCard key={`pointer-${project.id}`} title={project.title} className="w-full max-w-full aspect-[16/10]">
                      <GlassCard className="w-full h-full" logoSrc="/SnapCastLogo.svg">
                        <div className="absolute inset-0 [transform:translate3d(0,0,26px)] overflow-hidden rounded-[50px] flex items-center justify-center">
                          <img
                            src="/SnapCast.jpg"
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </GlassCard>
                    </FollowerPointerCard>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Tech Stack Section */}
        <section aria-label="Tech stack" className="relative w-full bg-white py-12 sm:py-16 md:py-24 overflow-hidden mt-16 sm:mt-24 md:mt-32">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-gray-900">
              My Tech Stack
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center text-gray-600 mb-8 sm:mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
              My expertise spans a diverse range of technologies, enabling me to deliver comprehensive and cutting-edge solutions across various platforms.
            </p>

            <div className="relative w-full overflow-hidden">
              <motion.div
                className="flex gap-6 sm:gap-8 md:gap-12 items-center"
                style={{
                  width: 'max-content',
                  willChange: 'transform',
                }}
                animate={{
                  x: ['0%', '-50%'],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-6 sm:gap-8 md:gap-12 items-center shrink-0">{/* First set for seamless loop */}
                    {/* Python */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <linearGradient id="python-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient><linearGradient id="python-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient><path fill="url(#python-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/><path fill="url(#python-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/><radialGradient id="python-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/><stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/></radialGradient><path opacity=".444" fill="url(#python-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
                      </svg>
                    </div>

                    {/* C++ */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#D26383" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#9C033A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/><path d="M82.1 61.8h5.2v-5.3h4.4v5.3H97v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zm18.5 0h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z" fill="#fff"/>
                      </svg>
                    </div>

                    {/* JavaScript */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
                      </svg>
                    </div>

                    {/* TypeScript */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51.4 59h21.99z"/>
                      </svg>
                    </div>

                    {/* Java */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
                      </svg>
                    </div>

                    {/* SQL */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#00618A" d="M125.477 122.783l-2.616-2.537c-2.479-3.292-5.668-6.184-8.607-9.041-3.658-3.564-7.278-7.212-10.954-10.782-.464-.464-1.077-.946-1.676-1.092-3.392-.56-6.553-1.853-9.728-2.968-1.14-.464-2.346-.67-3.562-.756-1.568 0-3.072.227-4.6.506-.122.019-.227.019-.335.074l.019-.335c.019-.196.056-.392.074-.588.033-.375.073-.742.11-1.11.036-.363.148-.628.353-.853.235-.215.582-.314.926-.387.821-.18 1.655-.196 2.471-.294.608-.074 1.172-.122 1.737-.226 4.178-.78 8.283-1.853 12.365-3.13 6.436-1.997 12.787-4.278 18.878-7.037 6.855-3.131 13.344-6.781 19.499-11.077 4.74-3.294 9.227-6.964 13.316-11.132 4.424-4.5 7.889-9.729 9.647-15.822 1.056-3.658 1.446-7.371.893-11.113-.547-3.694-1.853-7.121-3.968-10.207-2.373-3.45-5.357-6.4-8.643-9.047C114.91 2.393 108.418.195 101.378.195c-4.035 0-7.865.78-11.538 2.242-3.504 1.391-6.707 3.39-9.683 5.699-4.575 3.556-8.514 7.702-12.065 12.196-3.294 4.166-6.118 8.643-8.484 13.373-1.946 3.9-3.562 7.93-4.686 12.143-.675 2.52-1.153 5.076-1.522 7.647-.028.191-.056.383-.074.574l-.019.01c-.673-1.972-1.301-3.938-2.042-5.877-1.258-3.28-2.653-6.496-4.275-9.617-2.393-4.593-5.298-8.867-8.795-12.762-4.647-5.173-10.082-9.329-16.411-12.266-4.197-1.954-8.583-3.242-13.163-3.657-3.365-.305-6.708-.19-10.038.516-3.723.78-7.232 2.065-10.547 3.968C3.522 10.238.168 14.588.168 21.238c0 3.369 1.153 6.52 2.768 9.466 1.431 2.608 3.363 4.844 5.443 6.966 2.374 2.42 4.944 4.594 7.598 6.67 3.693 2.887 7.579 5.445 11.536 7.898 3.693 2.298 7.503 4.33 11.39 6.231 5.208 2.542 10.501 4.844 15.98 6.812 1.293.464 2.603.896 3.913 1.316l-.194 1.072c-.486 2.711-.746 5.455-.872 8.213-.064 1.35-.106 2.701-.112 4.051 0 .311-.019.612-.019.914-.019 1.076.056 2.152.075 3.229 0 .106-.019.213-.019.319-.038 1.72.074 3.452.222 5.173.186 2.146.533 4.283.762 6.427.081.785.093 1.585.278 2.354.074.302.167.607.278.903.242.639.639 1.106 1.253 1.393a3.383 3.383 0 001.704.409 4.736 4.736 0 001.704-.334c.547-.196 1.076-.464 1.56-.765 2.205-1.35 3.946-3.131 5.464-5.14 1.901-2.531 3.504-5.241 4.964-8.025 1.617-3.073 3.011-6.258 4.221-9.52.973-2.62 1.78-5.297 2.476-8.011.11-.445.223-.889.334-1.334 0-.038.019-.074.019-.11.075.128.149.267.224.395 1.13 1.947 2.298 3.875 3.504 5.784 2.177 3.45 4.575 6.706 7.353 9.712 3.13 3.378 6.612 6.335 10.655 8.643 3.467 1.98 7.15 3.299 11.057 3.982 3.024.528 6.047.616 9.071.021 2.71-.528 5.335-1.297 7.886-2.354a32.426 32.426 0 008.457-4.817c3.073-2.279 5.743-4.982 7.96-8.178.491-.711.934-1.459 1.38-2.207z"/><path fill="#00618A" d="M114.284 80.104c-3.562 3.265-7.647 5.949-11.99 8.252-3.01 1.604-6.14 2.98-9.396 4.088-.656.223-1.33.408-2.004.594-.019 0-.019.019-.038.019-.225.074-.464.112-.704.186a58.524 58.524 0 01-4.799.987c-1.858.297-3.729.464-5.605.538-1.039.038-2.095.056-3.134.019-1.078-.037-2.156-.112-3.216-.241-2.169-.26-4.313-.668-6.421-1.24-3.935-1.06-7.702-2.616-11.301-4.704-3.18-1.846-6.118-4.051-8.682-6.707-.973-1.003-1.853-2.095-2.653-3.242a1.714 1.714 0 00-.353-.409c-.167-.13-.408-.186-.612-.26-.408-.149-.817-.297-1.225-.446-.408-.149-.817-.26-1.244-.372a90.825 90.825 0 00-9.95-2.411c-3.599-.668-7.216-1.13-10.87-1.41-3.024-.241-6.066-.26-9.109-.13-1.858.056-3.729.167-5.587.372-1.076.112-2.133.26-3.171.445a1.714 1.714 0 00-.353.409l-.019-.056c-.019.056-.056.13-.074.186a.289.289 0 01-.056.13c-.056.13-.093.242-.13.372-.074.26-.093.52-.093.78-.019.167-.019.353-.019.52-.019.688-.037 1.376-.037 2.063 0 .928.019 1.858.056 2.785.019.52.019 1.039.056 1.558 0 .056.019.111.019.167.056 1.039.13 2.077.223 3.116.074.78.167 1.541.278 2.32.111.78.241 1.541.39 2.32.13.668.279 1.335.446 2.002.167.668.353 1.316.52 1.984.186.667.39 1.335.594 2.002l.019.019c.073.259.167.52.241.78v.037c.13.371.278.744.408 1.115.223.594.445 1.17.688 1.746.13.315.279.631.427.946.13.297.278.594.427.872.056.111.111.223.167.334.297.594.613 1.17.946 1.728.297.52.613 1.039.928 1.558.464.78.965 1.541 1.485 2.281a36.935 36.935 0 001.672 2.337c.594.78 1.225 1.522 1.858 2.264.353.408.725.817 1.097 1.225.464.52.965 1.021 1.466 1.522.353.353.706.725 1.076 1.058.594.576 1.188 1.115 1.8 1.653.427.39.872.761 1.316 1.132a40.578 40.578 0 002.133 1.746c.446.353.928.688 1.391 1.021.408.297.817.594 1.225.872.056.037.111.093.167.13.353.241.725.464 1.097.688.594.372 1.188.725 1.8 1.058.427.241.872.464 1.316.688.372.186.725.408 1.097.594a41.835 41.835 0 002.431 1.115c.427.186.872.353 1.316.52.631.241 1.28.483 1.93.688.52.167 1.039.334 1.558.501.483.149.965.279 1.448.408a48.23 48.23 0 002.113.52c.52.111 1.021.223 1.541.315a41.9 41.9 0 002.226.334c.52.074 1.058.13 1.577.186.706.074 1.41.13 2.114.167.52.037 1.058.056 1.577.074a53.734 53.734 0 008.66-.464c.78-.093 1.56-.186 2.338-.316a45.03 45.03 0 002.411-.427c.78-.149 1.558-.315 2.337-.501a48.78 48.78 0 002.486-.594c.78-.204 1.541-.446 2.301-.688.78-.241 1.541-.52 2.301-.799.76-.279 1.522-.576 2.281-.891.76-.297 1.503-.631 2.246-.965.76-.334 1.503-.688 2.226-1.058.743-.372 1.466-.761 2.188-1.17.743-.408 1.448-.835 2.151-1.279.706-.446 1.391-.909 2.077-1.391.687-.483 1.354-.984 2.002-1.504.667-.52 1.316-1.058 1.947-1.615.649-.556 1.28-1.132 1.893-1.709a42.29 42.29 0 001.82-1.8 40.824 40.824 0 001.728-1.893c.556-.649 1.095-1.297 1.615-1.965.539-.668 1.04-1.354 1.541-2.058.502-.706.984-1.41 1.448-2.133.464-.725.909-1.448 1.335-2.188.427-.743.835-1.485 1.206-2.246.409-.78.78-1.56 1.132-2.356.353-.799.688-1.597 1.003-2.412.316-.817.594-1.634.854-2.449.112-.335.223-.668.316-1.003.056-.187.093-.372.13-.557.056-.19.093-.372.13-.576.037-.186.056-.372.093-.558.056-.223.074-.445.111-.668a.305.305 0 000-.074c.037-.223.056-.445.074-.668a.289.289 0 010-.056c.056-.464.074-.946.093-1.41.056-.576.056-1.17.056-1.746 0-.668-.019-1.335-.056-2.002-.019-.315-.019-.631-.056-.946 0-.13-.019-.241-.019-.371-.056-.78-.111-1.56-.204-2.338-.056-.39-.111-.78-.167-1.17-.111-.928-.26-1.838-.445-2.748-.037-.186-.093-.372-.13-.557l-.019-.093c-.093-.52-.204-1.058-.316-1.577-.056-.297-.13-.594-.204-.909-.13-.576-.279-1.17-.446-1.746-.112-.39-.223-.799-.353-1.188-.204-.706-.408-1.41-.668-2.114-.111-.297-.223-.594-.334-.891-.26-.706-.539-1.41-.817-2.114-.13-.297-.26-.612-.39-.909-.334-.799-.687-1.597-1.058-2.393-.093-.186-.186-.372-.279-.576a35.778 35.778 0 00-1.206-2.469l-.019-.019a37.496 37.496 0 00-1.299-2.374c-.056-.074-.093-.13-.13-.204a37.63 37.63 0 00-1.41-2.281c-.13-.186-.241-.353-.353-.52a39.896 39.896 0 00-1.541-2.151c-.13-.167-.241-.315-.372-.483-.52-.649-1.058-1.297-1.615-1.93-.13-.149-.26-.297-.39-.445-.576-.631-1.169-1.262-1.783-1.875-.13-.13-.26-.26-.408-.372a45.405 45.405 0 00-1.93-1.765c-.13-.111-.26-.223-.39-.315-.668-.556-1.354-1.095-2.058-1.616-.056-.056-.13-.093-.186-.149-.706-.52-1.448-1.021-2.188-1.522-.074-.038-.13-.093-.204-.13-.78-.52-1.56-.984-2.356-1.466-.093-.056-.204-.111-.297-.167a59.09 59.09 0 00-2.45-1.335c-.074-.037-.148-.074-.223-.111-.872-.427-1.746-.835-2.637-1.225h-.056c-.89-.39-1.801-.76-2.711-1.095h-.056c-.928-.353-1.875-.668-2.822-.965l-.056-.019c-.965-.297-1.947-.557-2.929-.799h-.037c-1.003-.241-2.002-.445-3.02-.613h-.056c-1.058-.167-2.133-.297-3.207-.39-.056 0-.13-.019-.186-.019-1.15-.093-2.319-.13-3.487-.13-1.115 0-2.211.037-3.324.111-.056 0-.111 0-.148.019-1.095.075-2.17.204-3.265.353h-.037c-1.021.149-2.04.334-3.041.558-.037 0-.056.019-.093.019-.965.223-1.93.483-2.896.78-.056.019-.093.019-.148.037-.946.297-1.875.613-2.804.984-1.003.39-1.984.817-2.966 1.262-.019.019-.056.019-.056.037-.965.446-1.91.928-2.855 1.448-.019 0-.037.019-.056.019a58.363 58.363 0 00-2.729 1.597c-.037.019-.056.019-.074.037-.89.539-1.783 1.095-2.655 1.691-.037.019-.056.038-.074.056a50.118 50.118 0 00-2.562 1.819c-.037.019-.056.037-.074.056-.817.612-1.634 1.243-2.43 1.894-.056.038-.093.074-.13.111a52.303 52.303 0 00-2.281 2.021l-.148.148a53.082 53.082 0 00-2.095 2.114c-.056.056-.093.111-.149.167a52.364 52.364 0 00-1.947 2.281c-.056.056-.093.111-.13.148a46.733 46.733 0 00-1.783 2.375c-.056.093-.111.167-.148.241-.576.799-1.132 1.615-1.671 2.45-.074.111-.13.223-.204.334-.483.762-.965 1.541-1.428 2.319-.074.13-.13.26-.186.39-.464.799-.909 1.616-1.335 2.449-.056.111-.111.223-.149.334-.427.835-.835 1.69-1.206 2.562-.056.13-.093.241-.13.371-.408.928-.761 1.858-1.095 2.804-.056.148-.093.297-.13.445-.297.928-.576 1.875-.817 2.841-.037.13-.056.278-.093.408-.223.965-.408 1.947-.576 2.929-.019.13-.037.241-.056.372-.148 1.003-.26 2.021-.353 3.042 0 .111-.019.223-.019.334-.075 1.021-.13 2.058-.149 3.098v.056c-.019 1.058-.019 2.114.019 3.171v.074c.037 1.058.111 2.095.204 3.153.019.167.019.334.037.501.093.965.223 1.947.372 2.91.037.223.056.446.093.668.149.965.315 1.947.52 2.911.056.26.093.52.148.78.204.965.446 1.93.706 2.878.074.26.148.52.223.78.26.946.558 1.891.872 2.822.093.26.186.52.297.78.315.928.649 1.838 1.021 2.748.111.26.204.52.316.761.372.891.78 1.783 1.206 2.655.13.26.241.52.372.761.427.854.872 1.69 1.335 2.524l.427.743c.483.817.984 1.615 1.503 2.412.149.223.297.445.446.668.52.76 1.058 1.522 1.616 2.263.167.223.315.445.483.668.594.78 1.207 1.541 1.838 2.3.186.223.372.445.558.649.631.743 1.28 1.485 1.947 2.207.204.223.408.445.612.668.687.743 1.391 1.466 2.114 2.188.223.223.446.445.668.649.725.687 1.466 1.354 2.226 2.002.223.204.464.408.688.612.761.649 1.522 1.28 2.3 1.893.241.186.483.372.706.558.817.631 1.634 1.243 2.469 1.838.241.167.483.334.725.501.854.594 1.727 1.169 2.599 1.728.26.167.52.315.78.483.891.558 1.801 1.095 2.73 1.615.278.148.557.315.835.464.946.539 1.91 1.058 2.892 1.541.279.148.576.279.854.408.984.483 1.984.946 3.005 1.391.297.13.612.26.909.372 1.003.427 2.021.835 3.061 1.206.315.111.649.223.965.316 1.058.353 2.114.687 3.189.984.297.074.612.167.909.241a84.577 84.577 0 003.394.835c.315.056.631.13.946.167 1.132.204 2.281.39 3.432.539.315.037.649.074.965.111 1.169.148 2.338.26 3.525.334.315.019.631.056.946.056a88.886 88.886 0 007.109 0c.315 0 .631-.037.946-.056 1.188-.074 2.356-.186 3.525-.334.315-.037.649-.074.965-.111a85.6 85.6 0 003.432-.539c.315-.056.631-.111.946-.167a92.47 92.47 0 003.394-.835c.297-.074.612-.148.909-.241 1.076-.297 2.133-.631 3.189-.984.315-.111.649-.204.965-.316 1.039-.371 2.058-.78 3.061-1.206.297-.111.612-.241.909-.372a83.827 83.827 0 003.005-1.391c.279-.13.576-.26.854-.408.982-.483 1.947-1.003 2.892-1.541.279-.148.557-.316.835-.464.928-.52 1.838-1.058 2.73-1.615.26-.167.52-.316.78-.483.872-.558 1.746-1.132 2.599-1.728.241-.167.483-.334.725-.501.835-.594 1.653-1.206 2.469-1.838.223-.186.464-.372.706-.558.78-.613 1.541-1.244 2.3-1.893.223-.204.464-.408.688-.612.76-.649 1.503-1.316 2.226-2.002.223-.204.446-.427.668-.649.725-.725 1.428-1.447 2.114-2.188.204-.223.408-.445.612-.668.668-.725 1.316-1.466 1.947-2.207.186-.204.372-.427.558-.649.631-.761 1.243-1.522 1.838-2.3.167-.223.316-.445.483-.668.558-.743 1.095-1.503 1.616-2.263.149-.223.297-.446.446-.668.52-.799 1.021-1.597 1.503-2.412l.427-.743c.464-.817.909-1.672 1.335-2.524.13-.241.241-.501.372-.761.427-.872.835-1.765 1.206-2.655.111-.241.204-.501.316-.761.372-.909.706-1.82 1.021-2.748.093-.26.186-.52.297-.78.316-.928.613-1.875.872-2.822.074-.26.148-.52.223-.78.26-.946.502-1.913.706-2.878.056-.26.111-.52.148-.78.204-.965.372-1.947.52-2.911.037-.223.056-.445.093-.668.148-.965.279-1.947.372-2.91.019-.167.019-.334.037-.501.093-1.058.167-2.095.204-3.153v-.074c.037-1.058.037-2.114.019-3.171v-.056c-.019-1.039-.074-2.077-.149-3.098 0-.111-.019-.223-.019-.334-.093-1.021-.204-2.039-.353-3.042-.019-.13-.037-.241-.056-.372-.167-.984-.353-1.965-.576-2.929-.037-.13-.056-.278-.093-.408a56.482 56.482 0 00-.817-2.841c-.037-.148-.074-.297-.13-.445a50.876 50.876 0 00-1.095-2.804c-.037-.13-.093-.241-.13-.371a51.588 51.588 0 00-1.335-2.449c-.056-.111-.111-.223-.149-.334a48.743 48.743 0 00-1.634-2.785c-.065-.076-.121-.162-.186-.241z"/>
                      </svg>
                    </div>

                    {/* HTML */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
                      </svg>
                    </div>

                    {/* CSS */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#1572B6" d="M19.67 26l8.069 90.493 36.206 10.05 36.307-10.063L108.33 26zm73.129 36.099l-.371 4.171-.152 1.712-19.128 5.229-18.884-5.092-.995-11.105h9.248l.506 5.655 10.258 2.766.038-.01 10.395-2.797.778-8.667H36.412l-.524-5.873-.118-1.313-.244-2.74h55.007l.817-9.183H27.696l-.524-5.873-.118-1.312-.244-2.741h69.787l-.813 9.109z"/>
                      </svg>
                    </div>

                    {/* React */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 2.1 56.6 2.1 64s6.1 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 13.2-4.9 19.3-11.4 19.3-18.8s-6-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21.1c-1.2-2.1-2.4-4.2-3.6-6.1-1.2-2-2.5-3.9-3.6-6 3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.1zM35.7 14.7c1-.6 2.2-.9 3.5-.9 6.1 0 13.6 5 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6-1.7-10.5-.3-17.9 3.8-20.3zM19.5 69.5c-8.4-3.1-13.7-7.7-13.7-12.5s5.3-9.4 13.7-12.5c2-.7 4.2-1.4 6.4-2 1.3 4.5 2.9 9.1 4.9 13.9-2 4.8-3.6 9.4-4.9 13.9-2.2-.6-4.4-1.3-6.4-2zM35.7 113.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM92.3 113.3c-1 .6-2.2.9-3.5.9-6.1 0-13.6-5-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6 1.7 10.5.3 17.9-3.8 20.3zM108.5 69.5c-2 .7-4.2 1.4-6.4 2-1.3-4.5-2.9-9.1-4.9-13.9 2-4.8 3.6-9.4 4.9-13.9 2.2.6 4.4 1.3 6.4 2 8.4 3.1 13.7 7.7 13.7 12.5s-5.3 9.4-13.7 12.5z"/></g>
                      </svg>
                    </div>

                    {/* Redux */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="none" d="M0 0h128v128H0z"/><path d="M88.69 88.11c-9 18.4-24.76 30.78-45.61 34.85a39.73 39.73 0 01-9.77 1.14c-12 0-23-5-28.34-13.19C-2.2 100-4.64 76.87 19 59.76c.48 2.61 1.46 6.19 2.11 8.31A38.24 38.24 0 0010 81.1c-4.4 8.64-3.91 17.27 1.3 25.25 3.6 5.38 9.3 8.65 16.63 9.65a44 44 0 0026.55-5c12.71-6.68 21.18-14.66 26.72-25.57a9.32 9.32 0 01-2.61-6A9.12 9.12 0 0187.37 70h.34a9.15 9.15 0 011 18.25zm28.67-20.2c12.21 13.84 12.54 30.13 7.82 39.58-4.4 8.63-16 17.27-31.6 17.27a50.48 50.48 0 01-21-5.05c2.29-1.63 5.54-4.24 7.33-5.87a41.54 41.54 0 0016 3.42c10.1 0 17.75-4.72 22.31-13.35 2.93-5.7 3.1-12.38.33-19.22a43.61 43.61 0 00-17.27-20.85 62 62 0 00-34.74-10.59h-2.93a9.21 9.21 0 01-8 5.54h-.31a9.13 9.13 0 010-18.25h.33a9 9 0 018 4.89h2.61c20.8 0 39.06 7.98 51.42 22.48zm-82.75 23a7.31 7.31 0 011.14-4.73c-9.12-15.8-14-35.83-6.51-56.68C34.61 13.83 48.13 3.24 62.79 3.24c15.64 0 31.93 13.69 33.88 40.07-2.44-.81-6-2-8.14-2.44-.53-8.63-7.82-30.13-25.09-29.81-6.19.17-15.31 3.1-20 9.12a43.69 43.69 0 00-9.64 25.25 59.61 59.61 0 008.47 36.16 2.75 2.75 0 011.14-.16h.32a9.12 9.12 0 01.33 18.24h-.33a9.16 9.16 0 01-9.12-8.79z" fill="#764abc"/>
                      </svg>
                    </div>

                    {/* Node.js */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/>
                      </svg>
                    </div>

                    {/* Express.js */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/>
                      </svg>
                    </div>

                    {/* Next.js */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/>
                      </svg>
                    </div>

                    {/* Docker */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#019bc6" d="M124.8 52.1c-4.3-2.5-10-2.8-14.8-1.4-.6-5.2-4-9.7-8-12.9l-1.6-1.3-1.4 1.6c-2.7 3.1-3.5 8.3-3.1 12.3.3 2.9 1.2 5.9 3 8.3-1.4.8-2.9 1.9-4.3 2.4-2.8 1-5.9 2-8.9 2H79V49H66V24H51v12H26v13H13v14H1.8l.2 1.5c.5 6.4 3.1 12 7.7 16.5 5.2 4.9 12.6 7.8 20.5 7.8 16.4 0 29.1-7.5 36.3-21.5 6.5.3 11.8-1.4 15.8-5 1.1-1 2.2-2.2 3.2-3.5 2.6 1.4 6.2 2.4 10 2.4h.8v-.2c-.2-3.1-1.9-6.1-4.5-8.2zm-94.5-1.7h10.3V62H30.3zm12.3 0h10.3V62H42.6zm12.3 0h10.3V62H54.9zm12.3 0h10.3V62H67.2zm-24.6-12h10.3v11.3H42.6zm12.3 0h10.3v11.3H54.9zm12.3 0h10.3v11.3H67.2zm-12.3-12.3h10.3V38H54.9z"/>
                      </svg>
                    </div>

                    {/* Kubernetes */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path d="M61.684 49.933c-1.602.36-2.879 1.544-3.328 3.09L53.53 68.93c-.405 1.395.096 2.857 1.264 3.734l16.613 11.948c1.168.84 2.749.84 3.913 0l16.614-11.948c1.167-.877 1.669-2.339 1.264-3.734L88.373 53.02c-.449-1.546-1.726-2.73-3.328-3.09L69.058 46.87c-1.602-.36-3.273-.36-4.875 0zm0 0" fill="#326ce5"/><path d="M61.664 20.254L55 35.785l16.098 4.527 6.664-15.531zm0 0M66.473 20.254l6.664 15.531 16.098-4.527-6.664-15.531zm0 0M46.973 43.3L31.44 36.633 35.97 52.73l15.53-6.664zm0 0M81.164 43.3L65.633 36.633l-4.527 16.098 15.531 6.664zm0 0M22.313 54.504L6.78 47.84l4.527 16.098 15.531-6.664zm0 0M105.824 54.504L90.293 47.84l-4.527 16.098 15.531 6.664zm0 0M31.441 91.434l4.527-16.098L20.437 68.67l6.664 15.531zm0 0M96.695 91.434l-4.527-16.098 15.531-6.664-6.664 15.531zm0 0M55 92.285l6.664 15.531 6.664-15.531-6.664 6.664zm0 0M35.969 75.336l6.664 15.531 4.528-16.098-6.664 6.664zm0 0M91.168 75.336l-6.664 15.531-4.527-16.098 6.664 6.664zm0 0" fill="#fff"/>
                      </svg>
                    </div>

                    {/* Git */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#F34F29" d="M124.737 58.378L69.621 3.264c-3.172-3.174-8.32-3.174-11.497 0L46.68 14.71l14.518 14.518c3.375-1.139 7.243-.375 9.932 2.314 2.703 2.706 3.461 6.607 2.294 9.993l13.992 13.993c3.385-1.167 7.292-.413 9.994 2.295 3.78 3.777 3.78 9.9 0 13.679a9.673 9.673 0 01-13.683 0 9.677 9.677 0 01-2.105-10.521L68.574 47.933l-.002 34.341a9.708 9.708 0 012.559 1.828c3.778 3.777 3.778 9.898 0 13.683-3.779 3.777-9.904 3.777-13.679 0-3.778-3.784-3.778-9.905 0-13.683a9.65 9.65 0 013.167-2.11V47.333a9.581 9.581 0 01-3.167-2.111c-2.862-2.86-3.551-7.06-2.083-10.576L41.056 20.333 3.264 58.123a8.133 8.133 0 000 11.5l55.117 55.114c3.174 3.174 8.32 3.174 11.499 0l54.858-54.858a8.135 8.135 0 00-.001-11.501z"/>
                      </svg>
                    </div>

                    {/* AWS */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#252f3e" d="M38.089 77.466l-11.4 4.896 10.559 4.514 12.241-4.514zm-15.501-5.988l11.4-4.896 10.559 4.514-11.4 4.896zm3.099 7.05l-11.4 4.897 8.5 4.514 11.4-4.514zm.001-4.514l11.4-4.896 8.5 4.514-11.4 4.514zm.001 13.463l11.4 4.896 8.5-4.514-11.4-4.514zm15.501 5.988l11.4 4.896 8.5-4.514-11.4-4.896z"/>
                        <path fill="#f90" d="M55.67 81.167l-15.3-6.703-15.301 6.703 15.3 6.703z"/>
                      </svg>
                    </div>

                    {/* Django */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#092e20" d="M59.448 0h20.93v96.88c-10.737 2.04-18.62 2.855-27.181 2.855-25.551 0-38.87-11.551-38.87-33.705 0-21.338 14.135-35.2 36.015-35.2 3.398 0 5.98.272 9.106 1.087zm0 48.765c-2.446-.815-4.485-1.086-7.067-1.086-10.6 0-16.717 6.523-16.717 17.939 0 11.145 5.845 17.26 16.582 17.26 2.309 0 4.212-.136 7.202-.542z"/>
                        <path fill="#092e20" d="M113.672 32.321V80.84c0 16.717-1.224 24.735-4.893 31.666-3.398 6.659-7.883 11.008-17.124 15.498l-19.435-9.242c9.242-4.35 13.726-8.427 16.58-14.677 2.991-6.387 4.078-13.726 4.078-31.257V32.321zM92.742 0h20.93v21.474h-20.93z"/>
                      </svg>
                    </div>

                    {/* Flask */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#000" d="M38.433 76.106h-.025a1.986 1.986 0 01-1.769-1.098l-7.47-14.642a1.986 1.986 0 011.769-2.875h15.935a1.986 1.986 0 011.77 1.098l7.47 14.642a1.986 1.986 0 01-1.77 2.875H38.433zm51.134 0h-.025a1.986 1.986 0 01-1.769-1.098l-7.47-14.642a1.986 1.986 0 011.769-2.875h15.935a1.986 1.986 0 011.77 1.098l7.47 14.642a1.986 1.986 0 01-1.77 2.875H89.567z"/>
                        <path fill="#000" d="M119.642 88.486L89.226 29.47a1.986 1.986 0 00-1.77-1.098H40.544a1.986 1.986 0 00-1.769 1.098L8.358 88.486a1.986 1.986 0 001.769 2.875h107.746a1.986 1.986 0 001.769-2.875z"/>
                      </svg>
                    </div>

                    {/* FastAPI */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#009688" d="M64 0C28.654 0 0 28.654 0 64s28.654 64 64 64 64-28.654 64-64S99.346 0 64 0zm-5.843 105.78L38.472 78.094l5.843-5.843 13.843 13.843 32-32 5.843 5.843-37.844 37.844z"/>
                        <path fill="#FFF" d="M58.157 105.78L38.472 78.094l5.843-5.843 13.843 13.843 32-32 5.843 5.843z"/>
                      </svg>
                    </div>

                    {/* GraphQL */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#e10098" d="M12.355 79.305l6.178-10.701 43.612 25.169-6.178 10.701z"/><path fill="#e10098" d="M115.645 48.695l-43.612 25.169-6.178-10.701 43.612-25.169zM12.355 48.695l6.178 10.701L62.145 33.22l-6.178-10.701z"/><path fill="#e10098" d="M115.645 79.305l-43.612-25.169 6.178-10.701 43.612 25.169zM64 0l6.178 10.701v46.598L64 67.999l-6.178-10.701V10.701z"/><path fill="#e10098" d="M64 60.001l6.178 10.701v46.598L64 128l-6.178-10.701V70.701z"/><path fill="#e10098" d="M6.178 42.299l10.701-6.178L60.491 79.733l-10.701 6.178z"/><path fill="#e10098" d="M121.822 85.701l-10.701 6.178L67.509 48.267l10.701-6.178z"/><circle fill="#e10098" cx="64" cy="64" r="8.745"/>
                      </svg>
                    </div>

                    {/* Spring Boot */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#6db33f" d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205 0C28.984 0 .591 28.394.591 63.614a63.614 63.614 0 009.329 33.177l.097.151c8.641 13.783 23.811 22.861 41.188 22.861 27.185 0 49.202-22.018 49.202-49.202 0-10.54-3.31-20.314-8.945-28.318a59.104 59.104 0 0125.99-35.64zM29.122 109.488c-3.91-6.365-6.191-13.888-6.191-21.956 0-17.849 10.99-33.124 26.534-39.415 5.367 8.999 8.433 19.479 8.433 30.665 0 24.033-14.322 44.742-34.776 52.304v.013a50.906 50.906 0 006-21.611zm34.828 8.969c-17.266 0-31.844-11.344-36.721-26.933 17.018-8.543 28.742-26.199 28.742-46.605 0-9.088-2.321-17.625-6.397-25.048 13.522-6.365 28.877-9.93 45.142-9.93a63.447 63.447 0 0131.91 8.521C123.324 22.794 120.4 28.48 116.452 33.992a63.694 63.694 0 00-45.03-18.467c-9.425 0-18.41 2.048-26.478 5.719a50.976 50.976 0 00-14.322 28.318c8.765 5.551 15.13 14.322 17.266 24.588a50.84 50.84 0 013.328 17.947c0 19.223-10.626 35.946-26.323 44.645a50.906 50.906 0 0019.017 3.715z"/>
                      </svg>
                    </div>

                    {/* Jenkins */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#d24939" d="M76.827 100.225c-.497.264-1.417.635-2.601.635-3.598 0-5.252-2.548-5.252-5.096 0-1.788.846-3.363 2.126-4.469 1.068-.846 2.495-1.375 4.125-1.375 1.205 0 2.126.264 2.812.529l-.688 2.495c-.37-.159-.951-.423-1.947-.423-1.629 0-3.258 1.046-3.258 3.599 0 2.073 1.152 3.546 3.204 3.546.952 0 1.734-.264 2.179-.476z"/><path fill="#d24939" d="M83.25 90.85c-3.863 0-6.093 2.707-6.093 5.785 0 3.257 2.283 5.52 5.89 5.52 3.705 0 6.042-2.442 6.042-5.731 0-3.021-2.073-5.574-5.839-5.574zm-.159 9.185c-1.893 0-2.758-1.893-2.758-3.493 0-1.681.9-3.599 2.812-3.599 1.893 0 2.811 1.84 2.811 3.546 0 1.788-.952 3.546-2.865 3.546z"/><path fill="#d24939" d="M97.73 90.85c-1.31 0-2.495.37-3.334 1.046-.794.635-1.416 1.575-1.629 2.812h-.053l-.159-3.334h-2.601c.053.899.106 1.947.106 3.363v13.568h3.046v-6.57c0-.37.053-.688.106-.951.317-1.575 1.575-2.389 2.865-2.389.423 0 .794.053 1.098.106l.634-2.918c-.317-.106-.687-.159-1.099-.159z"/><path fill="#f0d6b7" d="M60.208 49.394c-3.334-1.046-5.785-1.152-8.595-.423-2.601.688-4.57 2.389-5.625 4.781-1.099 2.442-.582 5.362 1.363 7.064 1.416 1.257 3.546 1.946 5.201 2.073.106.053.159.106.212.159.317 1.098-.74 2.919-1.735 3.652-1.099.794-2.601 1.099-4.016 1.099-2.177 0-3.917-.635-5.201-1.893-.476-.423-.899-.952-1.258-1.522-.264-.423-.476-.529-.952-.529-1.946-.053-3.863 0-5.731.159-.529.053-.635.317-.423.74 1.099 2.495 2.548 4.676 4.676 6.357 2.548 2.02 5.52 3.151 8.753 3.31 4.57.264 8.648-1.152 11.72-4.728 2.177-2.548 3.175-5.52 2.759-8.859-.423-3.334-2.126-5.837-5.254-7.223-.846-.37-1.735-.688-2.601-.952-.529-.159-1.098-.317-1.628-.529-.952-.423-1.469-1.099-1.522-2.126-.106-2.283 1.787-3.652 3.917-3.546.846.053 1.787.37 2.548.74.846.423 1.575 1.152 2.177 1.893.317.37.529.529.952.529 1.946-.053 3.863 0 5.731-.106.529 0 .687-.159.529-.635-.423-1.681-1.205-3.175-2.23-4.57-.74-.952-1.575-1.787-2.495-2.495-1.84-1.416-4.016-2.177-6.304-2.548-.212-.053-.423-.053-.635-.159-.265.053-.634.106-.846.212z"/><path fill="#335061" d="M97.836 64.855c-.423 1.575-.74 3.175-.9 4.781-.159 1.205-.159 2.442-.106 3.652.053 1.416.476 2.865 1.152 4.175.899 1.734 2.283 3.151 4.016 4.175 2.548 1.469 5.307 2.126 8.224 2.126 3.334 0 6.622-.582 9.797-1.416 2.336-.635 4.57-1.416 6.729-2.389 2.918-1.31 5.731-2.865 8.383-4.676 2.177-1.469 4.228-3.175 6.092-5.042.423-.423.529-.74.317-1.258-1.416-3.493-2.812-7.011-4.228-10.504-.211-.476-.476-.582-.952-.37-1.893 1.046-3.863 1.999-5.943 2.601-.582.212-1.152.37-1.787.529-.529.159-.74.053-.952-.423-1.839-4.781-3.705-9.56-5.52-14.342-.211-.635-.211-.635.423-.9 1.469-.635 2.972-1.151 4.57-1.521 2.442-.582 4.94-.9 7.329-.476.211.053.423.106.635.159.317.106.529.053.635-.265.529-2.442 1.046-4.835 1.575-7.329.106-.529.053-.687-.423-.846-3.387-1.416-6.939-1.84-10.557-1.363-3.546.476-6.729 1.893-9.585 3.999-1.417 1.046-2.601 2.336-3.546 3.81-1.205 1.84-2.126 3.81-2.442 6.039-.211 1.681-.106 3.387.159 5.042.37 2.073.899 4.069 1.575 6.039.423 1.311.899 2.601 1.469 3.863.159.37.264.476.053.794-3.069 4.728-6.621 8.648-11.355 11.349-.211.106-.423.265-.687.423z"/><path fill="#6d6b6d" d="M35.086 37.018c-.211 0-.423-.053-.635-.159-.529-.106-1.046-.264-1.522-.476-2.283-.952-4.199-2.389-5.731-4.305-1.31-1.681-2.23-3.546-2.707-5.679-.423-2.073-.37-4.093.211-6.145.74-2.442 2.177-4.358 4.305-5.785 2.126-1.416 4.517-2.126 7.117-2.126 2.601 0 5.042.635 7.382 1.734 2.865 1.363 5.096 3.334 6.833 5.943 1.416 2.177 2.336 4.623 2.707 7.223.317 2.336.053 4.57-.635 6.729-.846 2.442-2.389 4.464-4.305 6.039-2.177 1.787-4.676 2.865-7.488 3.069-.476.106-.9.106-1.363.106-1.469 0-2.865-.106-4.305-.265-.106.106-.529.053-.846.159z"/><path fill="#e4e2df" d="M36.026 11.222c2.391 0 4.662.582 6.836 1.628 2.689 1.269 4.828 3.128 6.488 5.574 1.34 2.074 2.232 4.393 2.585 6.948.285 2.18.053 4.286-.585 6.43-.797 2.286-2.232 4.181-4.075 5.68-2.074 1.686-4.445 2.691-7.117 2.898-.424.053-.85.106-1.269.106-1.416 0-2.797-.106-4.234-.265h-.531c-.159 0-.371-.053-.584-.159-.478-.106-.956-.212-1.416-.424-2.127-.9-3.971-2.233-5.416-4.022-1.238-1.581-2.127-3.34-2.585-5.363-.39-1.953-.337-3.865.159-5.787.689-2.286 2.021-4.075 4.022-5.416 1.953-1.31 4.127-1.94 6.464-2.021.85-.053 1.311-.053 2.074.159zm.212 4.552c-1.74.053-3.374.478-4.849 1.416-1.631.956-2.797 2.339-3.483 4.075-.585 1.74-.585 3.481-.106 5.257.478 1.846 1.363 3.481 2.638 4.934 1.098 1.269 2.444 2.233 4.022 2.851.85.371 1.74.584 2.638.69.425.053.85.053 1.269.053 1.527 0 3.022-.424 4.447-1.098 1.793-.849 3.128-2.127 4.075-3.812.956-1.793 1.31-3.693 1.098-5.68-.371-3.693-2.021-6.806-4.955-9.137-1.793-1.416-3.799-2.074-6.042-2.127-.212-.053-.53-.053-.742-.053z"/>
                      </svg>
                    </div>

                    {/* GitHub Actions */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#2088FF" d="M64 1.512l-62.25 62.25c-2.5 2.5-2.5 6.5 0 9l62.25 62.25c2.5 2.5 6.5 2.5 9 0l62.25-62.25c2.5-2.5 2.5-6.5 0-9L73 1.512c-2.5-2.5-6.5-2.5-9 0zm0 0"/><path fill="#FFF" d="M64 25.5c-21.3 0-38.5 17.2-38.5 38.5S42.7 102.5 64 102.5 102.5 85.3 102.5 64 85.3 25.5 64 25.5zm0 0"/><path fill="#2088FF" d="M64 38.5c14.1 0 25.5 11.4 25.5 25.5S78.1 89.5 64 89.5 38.5 78.1 38.5 64 49.9 38.5 64 38.5zm0 0"/>
                      </svg>
                    </div>

                    {/* Webpack */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#8ed6fb" d="M117.29 98.1L66.24 127v-22.51L98 87.75l19.29 10.35zm2.83-2.58V34.32l-18.68 10.48v40.24l18.68 10.48zM10.71 98.1l51.05 28.9v-22.51L30 87.75L10.71 98.1zm-2.83-2.58V34.32l18.68 10.48v40.24L7.88 95.52zM9.23 31.54L61.76 2.19v21.76L28.21 41.21l-.27.15-18.71-9.82zm109.54 0L66.24 2.19v21.76l33.55 17.26.27.15 18.71-9.82z"/><path fill="#1c78c0" d="M61.76 99.37L30.37 82.1V47.92L61.76 66.1v33.27zm4.48 0l31.39-17.27V47.92L66.24 66.1v33.27zM32.5 44L64 26.66 95.5 44 64 62.16 32.5 44z"/>
                      </svg>
                    </div>

                    {/* NPM */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#cb3837" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29v21.86h-6.89V53.08zM77.33 45.79v36.43h13.78V53.07h6.89v29.15h6.89V53.07h6.89v29.15h6.89V45.79z"/>
                      </svg>
                    </div>

                    {/* Yarn */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#2c8ebb" d="M120.46 122.2c-5.46 0-7.93-2.48-9.4-5.75-1.47-3.27-3.06-8.09-6.94-8.09-3.88 0-5.46 4.82-6.94 8.09-1.47 3.27-3.94 5.75-9.4 5.75s-7.93-2.48-9.4-5.75c-1.47-3.27-3.06-8.09-6.94-8.09s-5.46 4.82-6.94 8.09c-1.47 3.27-3.94 5.75-9.4 5.75s-7.93-2.48-9.4-5.75c-1.47-3.27-3.06-8.09-6.94-8.09-3.88 0-5.46 4.82-6.94 8.09-1.47 3.27-3.94 5.75-9.4 5.75v-5.46c3.88 0 5.46-4.82 6.94-8.09 1.47-3.27 3.94-5.75 9.4-5.75s7.93 2.48 9.4 5.75c1.47 3.27 3.06 8.09 6.94 8.09 3.88 0 5.46-4.82 6.94-8.09 1.47-3.27 3.94-5.75 9.4-5.75s7.93 2.48 9.4 5.75c1.47 3.27 3.06 8.09 6.94 8.09s5.46-4.82 6.94-8.09c1.47-3.27 3.94-5.75 9.4-5.75s7.93 2.48 9.4 5.75c1.47 3.27 3.06 8.09 6.94 8.09v5.46zM64 5.8C32.8 5.8 7.54 31.06 7.54 62.26S32.8 118.72 64 118.72s56.46-25.26 56.46-56.46S95.2 5.8 64 5.8zm0 107.46c-28.14 0-51-22.86-51-51s22.86-51 51-51 51 22.86 51 51-22.86 51-51 51z"/>
                      </svg>
                    </div>

                    {/* Postman */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <path fill="#FF6C37" d="M127.51 64.87l-28.12-28.11a4.37 4.37 0 00-6.18 0L64.87 65.1a4.37 4.37 0 000 6.18l28.11 28.12a4.37 4.37 0 006.18 0l28.35-28.35a4.37 4.37 0 000-6.18zm-33.48 8.73l-8.73 8.73a4.37 4.37 0 01-6.18 0l-8.73-8.73a4.37 4.37 0 010-6.18l8.73-8.73a4.37 4.37 0 016.18 0l8.73 8.73a4.37 4.37 0 010 6.18zM36.76.49a4.37 4.37 0 00-6.18 0L.49 30.58a4.37 4.37 0 000 6.18l28.11 28.11a4.37 4.37 0 006.18 0l28.35-28.35a4.37 4.37 0 000-6.18zm-5.51 33.48l-8.73 8.73a4.37 4.37 0 01-6.18 0L7.61 34a4.37 4.37 0 010-6.18l8.73-8.73a4.37 4.37 0 016.18 0l8.73 8.73a4.37 4.37 0 010 6.18z"/>
                      </svg>
                    </div>

                    {/* JIRA */}
                    <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                      <svg viewBox="0 0 128 128" className="w-full h-full">
                        <defs><linearGradient id="jira-a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#0052CC"/><stop offset="100%" stopColor="#2684FF"/></linearGradient></defs>
                        <path fill="url(#jira-a)" d="M64.033 4.446L36.17 32.31l27.862 27.863L36.17 87.69l27.863 27.864L91.896 87.69 64.033 59.827 91.896 32.31z"/>
                        <path fill="#2684FF" d="M64.033 59.827L36.17 87.69l27.863 27.864L91.896 87.69z"/>
                      </svg>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Animated Background Section */}
        <section aria-label="Interactive animation" className="relative w-full min-h-[auto] md:min-h-screen bg-white overflow-hidden">
          <AnimatedGradientBackground
            Breathing={true}
            startingGap={110}
            breathingRange={8}
            animationSpeed={0.03}
          />
          <div className="relative flex flex-col items-center justify-between h-full px-4 py-8 sm:py-12" style={{ zIndex: 10 }}>
            {/* Cat Animation */}
            <div className="flex items-center justify-center w-full max-w-lg sm:max-w-xl md:max-w-2xl md:flex-1">
              <DotLottieReact
                src="https://lottie.host/8cf4ba71-e5fb-44f3-8134-178c4d389417/0CCsdcgNIP.json"
                loop
                autoplay
              />
            </div>

            {/* Text Section Below Cat */}
            <div className="w-full bg-black/90 backdrop-blur-sm py-8 sm:py-12 md:py-16 px-4 sm:px-6 rounded-t-2xl sm:rounded-t-3xl">
              <div className="container mx-auto max-w-6xl px-4 sm:px-0">
                {/* Optional: Top right smaller text */}
                <div className="text-right mb-4 sm:mb-6 md:mb-8">
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base font-normal">
                    My proficiency in design, coding, and interaction sets me apart within the domain of software engineering.
                  </p>
                </div>

                {/* Main statement */}
                <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-left leading-tight">
                  As a Software Engineer, I excel in building scalable applications, enhancing user experiences, and streamlining development processes.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer
        email="lakra.tarun4302@gmail.com"
        location="New Delhi, India"
        linkedinUrl="https://www.linkedin.com/in/tarun-lakra/"
        githubUrl="https://github.com/tarunlakra4302"
        resumeUrl="/resume.pdf"
        className="bg-white"
      />
      </motion.div>
      )}
    </>
  )
}