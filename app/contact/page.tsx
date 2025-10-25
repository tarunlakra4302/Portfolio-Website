"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import AnimatedCharactersLoginPage from '@/components/animated-characters-login-page'
import TetrisLoader from '@/components/tetris-loader'

export default function ContactPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 4000) // 4 seconds loading to show tetris animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex items-center justify-center bg-white"
          >
            <TetrisLoader size="lg" speed="fast" showLoadingText={false} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      {!isLoading && (
        <nav className="fixed top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 z-50">
          <button
            onClick={() => router.push('/')}
            className="flex items-center gap-1.5 sm:gap-2 text-black hover:text-gray-600 transition-colors group"
            aria-label="Go back to home"
          >
            <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="text-base sm:text-lg font-semibold">Back</span>
          </button>
        </nav>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {!isLoading && <AnimatedCharactersLoginPage />}
      </motion.div>
    </>
  )
}
