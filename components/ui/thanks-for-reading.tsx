"use client"

import { useRef, useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Balloons, type BalloonsRef } from '@/components/ui/balloons'

interface ThanksForReadingProps {
  previousProject?: {
    title: string
    url: string
  }
  nextProject?: {
    title: string
    url: string
  }
}

export function ThanksForReading({ previousProject, nextProject }: ThanksForReadingProps) {
  const router = useRouter()
  const pathname = usePathname()
  const balloonsRef = useRef<BalloonsRef>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Reset transition state when pathname changes
  useEffect(() => {
    setIsTransitioning(false)
  }, [pathname])

  const handleNavigation = (url: string) => {
    if (isTransitioning) return // Prevent double-clicks

    // Start transition
    setIsTransitioning(true)

    // Create fade out effect
    document.body.style.opacity = '0'
    document.body.style.transition = 'opacity 0.2s ease-out'

    // Trigger balloons animation (non-blocking)
    if (balloonsRef.current?.launchAnimation) {
      balloonsRef.current.launchAnimation()
    }

    // Navigate after brief delay for fade effect
    setTimeout(() => {
      router.push(url)
      // Reset opacity after navigation
      setTimeout(() => {
        document.body.style.opacity = '1'
      }, 100)
    }, 200)
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-12 py-12 sm:py-16 md:py-24 bg-[#F5F1ED] relative">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8 sm:mb-10 md:mb-12"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
        >
          Thanks for reading
        </motion.h2>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 items-center">
          {previousProject && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-xs"
            >
              <button
                onClick={() => handleNavigation(previousProject.url)}
                disabled={isTransitioning}
                className="group w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                <ArrowLeft className="w-4 h-4 text-black transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="text-sm sm:text-base font-semibold text-black">Previous project</span>
              </button>
            </motion.div>
          )}

          {nextProject && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="w-full max-w-xs"
            >
              <button
                onClick={() => handleNavigation(nextProject.url)}
                disabled={isTransitioning}
                className="group w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                <span className="text-sm sm:text-base font-semibold text-black">Next project</span>
                <ArrowRight className="w-4 h-4 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}

          {/* Back to all projects option if no navigation provided */}
          {!previousProject && !nextProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="w-full max-w-xs"
            >
              <button
                onClick={() => handleNavigation('/#projects')}
                disabled={isTransitioning}
                className="w-full bg-white hover:bg-gray-50 border border-gray-200 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                <span className="text-sm sm:text-base font-semibold text-black">View all projects</span>
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Balloons component for animation effect */}
      <Balloons ref={balloonsRef} type="default" />
    </section>
  )
}
