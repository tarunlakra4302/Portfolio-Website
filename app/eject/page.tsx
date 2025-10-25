"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { LinkPreview } from '@/components/ui/link-preview'
import { Button } from '@/components/ui/button'
import TetrisLoader from '@/components/tetris-loader'
import { motion, AnimatePresence } from 'motion/react'

export default function EjectPage() {
  const router = useRouter()
  const [isRewindHovered, setIsRewindHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

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
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 min-h-screen flex items-center justify-center bg-[#FAFAFA]"
          >
            <TetrisLoader size="lg" speed="fast" showLoadingText={false} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
    <div className="relative bg-white min-h-screen flex items-center justify-center scroll-smooth overflow-y-auto">
      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-20 text-center">
        {/* Demo Section */}
        <div className="space-y-8">
          <div className="text-lg md:text-2xl text-gray-700 leading-relaxed">
            <span className="word inline-block">&quot;Lessons</span>{" "}
            <span className="word inline-block">without</span>{" "}
            <LinkPreview
              url="https://in.pinterest.com/pin/1022809765381239085/"
              className="word inline-block font-bold"
              imageBrightness={1.5}
            >
              <span style={{ color: '#581c87', fontWeight: 'bold' }}>hardship</span>
            </LinkPreview>{" "}
            <span className="word inline-block">mean</span>{" "}
            <span className="word inline-block">nothing;</span>{" "}
            <span className="word inline-block">to</span>{" "}
            <span className="word inline-block">gain</span>{" "}
            <span className="word inline-block">something,</span>{" "}
            <span className="word inline-block">you</span>{" "}
            <span className="word inline-block">must</span>{" "}
            <span className="word inline-block">give</span>{" "}
            <span className="word inline-block">up</span>{" "}
            <span className="word inline-block">something</span>{" "}
            <span className="word inline-block">in</span>{" "}
            <span className="word inline-block">return.&quot;</span>
          </div>

          {/* REWIND Button */}
          <div className="mt-12 flex justify-center">
            <Button
              variant="default"
              size="sm"
              onClick={() => router.push('/')}
              onMouseEnter={() => setIsRewindHovered(true)}
              onMouseLeave={() => setIsRewindHovered(false)}
              className="font-bold relative overflow-hidden text-xs sm:text-sm md:text-base px-6 py-1.5 sm:px-8 sm:py-2 md:px-10 md:py-2.5"
            >
              {/* GIF Background */}
              <img
                src="https://i.pinimg.com/originals/71/fb/91/71fb9176f16357776802391df14b4e40.gif"
                alt="Rewind animation"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 pointer-events-none"
                style={{
                  opacity: isRewindHovered ? 1 : 0,
                  filter: 'brightness(1.5)'
                }}
              />

              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-black/50 transition-opacity duration-300 pointer-events-none"
                style={{ opacity: isRewindHovered ? 1 : 0 }}
              />

              {/* Button Text */}
              <span
                className="relative z-10 transition-colors duration-300"
                style={{ color: isRewindHovered ? 'white' : undefined }}
              >
                REWIND ⏮
              </span>
            </Button>
          </div>
        </div>
      </main>
      </div>
      </motion.div>
    </>
  )
}
