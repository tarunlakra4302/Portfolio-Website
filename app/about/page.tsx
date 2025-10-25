"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowLeft, Plus, X } from 'lucide-react'
import { Footer } from '@/components/footer'
import TetrisLoader from '@/components/tetris-loader'
import { PersonalDashboard } from '@/components/personal-dashboard'

export default function AboutPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [isBackgroundOpen, setIsBackgroundOpen] = useState(false)
  const [isDesignPhilosophyOpen, setIsDesignPhilosophyOpen] = useState(false)
  const [isThingsILoveOpen, setIsThingsILoveOpen] = useState(false)

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
            className="min-h-screen flex items-center justify-center bg-[#FAFAFA]"
          >
            <TetrisLoader size="lg" speed="fast" showLoadingText={false} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {!isLoading && (
          <div className="relative bg-[#FAFAFA]">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Back Button */}
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

      {/* Main Content Container */}
      <main className="relative z-10 max-w-[800px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-14 md:py-16">
        {/* HERO SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-20 pt-4 sm:pt-6 md:pt-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-[#1A1A1A]">
              Tarun Lakra
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Delhi Technological University alum with a B.Tech in Software Engineering. I&apos;m passionate about
              crafting seamless, joyful experiences.
            </p>
          </div>
        </section>

        {/* BACKGROUND SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-baseline justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A] flex-shrink-0">
              Background
            </h3>
            <button
              onClick={() => setIsBackgroundOpen(!isBackgroundOpen)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 group flex-shrink-0"
            >
              {isBackgroundOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isBackgroundOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-2">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-[1.7] sm:leading-[1.8]">
                    Ever since I can remember, I&apos;ve been fascinated by how people perceive and interact with
                    the world around them. That curiosity naturally evolved into an interest in how users engage
                    with digital systems, leading me to explore psychology, cognitive science, and ultimately,
                    the art of building seamless human-computer interactions
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* DESIGN PHILOSOPHY SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              Design Philosophy
            </h3>
            <button
              onClick={() => setIsDesignPhilosophyOpen(!isDesignPhilosophyOpen)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 group flex-shrink-0"
            >
              {isDesignPhilosophyOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isDesignPhilosophyOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ overflow: 'hidden' }}
              >
                <div className="space-y-6 sm:space-y-8 pt-2">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-[1.7] sm:leading-[1.8]">
                    My background has shaped my design philosophy to prioritize minimizing cognitive load for users.
                    In a world where people juggle countless products daily, the last thing I want is to create yet
                    another hurdle. Instead, I strive to craft experiences that invite users in, encouraging them to
                    explore deeper without feeling lost at the front door.
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-[1.7] sm:leading-[1.8]">
                    One thing I really love about design is how small details can subtly shape people&apos;s experiences.
                    It&apos;s not merely about aesthetics; it&apos;s about hitting that sweet spot where everything feels just right.
                    This is why I find joy in crafting playful micro-animations, fine-tuning the perfect spring animation,
                    and humanizing interactions to reflect genuine human intentions. Think about it—it&apos;s often the little
                    things that make your day!
                  </p>
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-[1.7] sm:leading-[1.8]">
                    At the heart of my work is empathy. Keeping in mind that there&apos;s a complex, unique individual on the
                    other side of the screen inspires me to adopt a multi-layered approach to design. My goal is to craft
                    products that make people feel fulfilled and seamlessly weave into their daily lives.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* THINGS I LOVE SECTION */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#1A1A1A]">
              Things I Love
            </h3>
            <button
              onClick={() => setIsThingsILoveOpen(!isThingsILoveOpen)}
              className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 group flex-shrink-0"
            >
              {isThingsILoveOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
              ) : (
                <Plus className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90" />
              )}
            </button>
          </div>

          <AnimatePresence mode="wait">
            {isThingsILoveOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ overflow: 'hidden' }}
              >
                <div className="pt-2">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-[1.7] sm:leading-[1.8]">
                    I find inspiration in the world around me. I love to travel, talk to different people and experience new cultures, which
                    often informs my design choices. When I&apos;m not coding, you can find me out playing video games, rock climbing or shredding
                    of muscles in gym. Also a big fan of Thin crust pizza but never mind :)
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </main>

      {/* Personal Dashboard Section */}
      <PersonalDashboard />

      {/* Footer */}
      <Footer
        email="lakra.tarun4302@gmail.com"
        location="New Delhi, India"
        linkedinUrl="https://www.linkedin.com/in/tarun-lakra/"
        githubUrl="https://github.com/tarunlakra4302"
        resumeUrl="https://drive.google.com/file/d/1uCC1Iam4_oSYYWcFfTqVhdws5F_l-222/view"
        className="relative z-10 bg-[#FAFAFA]"
      />
    </div>
        )}
      </motion.div>
    </>
  )
}
