"use client"

import React, { useState, useRef, useCallback } from 'react'
import { Copy, Linkedin, Check } from 'lucide-react'
import Link from 'next/link'

// Eye component adapted from mouse-following-eyes
interface EyeProps {
  mouseX: number
  mouseY: number
  selfRef: React.RefObject<HTMLDivElement | null>
  otherRef: React.RefObject<HTMLDivElement | null>
}

const Eye: React.FC<EyeProps> = ({ mouseX, mouseY, selfRef, otherRef }) => {
  const pupilRef = useRef<HTMLDivElement>(null)
  const [center, setCenter] = React.useState({ x: 0, y: 0 })
  const rafRef = useRef<number | undefined>(undefined)

  const updateCenter = useCallback(() => {
    if (!selfRef.current) return
    const rect = selfRef.current.getBoundingClientRect()
    setCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
  }, [selfRef])

  React.useEffect(() => {
    updateCenter()
    window.addEventListener("resize", updateCenter)
    return () => window.removeEventListener("resize", updateCenter)
  }, [updateCenter])

  React.useEffect(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
    }

    rafRef.current = requestAnimationFrame(() => {
      updateCenter()

      const isInside = (ref: React.RefObject<HTMLDivElement | null>) => {
        const rect = ref.current?.getBoundingClientRect()
        if (!rect) return false
        return (
          mouseX >= rect.left &&
          mouseX <= rect.right &&
          mouseY >= rect.top &&
          mouseY <= rect.bottom
        )
      }

      if (isInside(selfRef) || isInside(otherRef)) return

      const dx = mouseX - center.x
      const dy = mouseY - center.y
      const angle = Math.atan2(dy, dx)

      const maxMove = 20
      const pupilX = Math.cos(angle) * maxMove
      const pupilY = Math.sin(angle) * maxMove

      if (pupilRef.current) {
        pupilRef.current.style.transform = `translate3d(${pupilX}px, ${pupilY}px, 0)`
      }
    })

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [mouseX, mouseY, center.x, center.y, selfRef, otherRef, updateCenter])

  return (
    <div
      ref={selfRef}
      className="relative bg-white border-2 border-black rounded-full h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 flex items-center justify-center"
    >
      <div
        ref={pupilRef}
        className="absolute bg-black rounded-full h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 will-change-transform"
        style={{ transition: 'transform 0.1s ease-out' }}
      >
        <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full absolute bottom-0.5 right-0.5"></div>
      </div>
    </div>
  )
}

interface ModernHeroProps {
  name?: string
  greeting?: string
  headline?: string
  email?: string
  linkedinUrl?: string
  className?: string
}

export const ModernHero: React.FC<ModernHeroProps> = ({
  name = 'Anjali',
  greeting = 'Hej!',
  headline = 'I solve complex product problems at scale by aligning systems, people, and pixels. Ex-architect.',
  email = 'hello@example.com',
  linkedinUrl = 'https://www.linkedin.com/in/yourprofile',
  className = '',
}) => {
  const [copied, setCopied] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const eye1Ref = useRef<HTMLDivElement>(null)
  const eye2Ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY })
    })
  }

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  return (
    <section
      className={`flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 bg-white min-h-[60vh] sm:min-h-[70vh] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl w-full">
        {/* Eyes and Greeting - Side by Side */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 w-full">
          {/* Animated Eyes */}
          <div className="flex gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <Eye
              mouseX={mousePos.x}
              mouseY={mousePos.y}
              selfRef={eye1Ref}
              otherRef={eye2Ref}
            />
            <Eye
              mouseX={mousePos.x}
              mouseY={mousePos.y}
              selfRef={eye2Ref}
              otherRef={eye1Ref}
            />
          </div>

          {/* Greeting */}
          <div className="flex flex-col min-w-0 flex-1">
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-gray-900 break-words">
              {greeting} I&apos;m <span className="font-bold">{name}</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mt-0.5 sm:mt-1 break-words">Software Engineer</p>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 sm:mb-8 text-gray-900 max-w-full sm:max-w-5xl break-words">
          {headline}
        </h1>

        {/* More About Me */}
        <Link
          href="/about"
          className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mb-6 sm:mb-8 hover:text-gray-900 transition-colors duration-200 cursor-pointer inline-block"
        >
          More About Me
        </Link>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-full">
          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-black text-white font-semibold rounded-full transition-all duration-300 hover:bg-gray-900 hover:scale-105 active:scale-95 overflow-hidden text-sm sm:text-base w-full sm:w-auto max-w-full"
          >
            <span className="relative z-10 flex items-center gap-2 sm:gap-3">
              {copied ? (
                <>
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Copy email</span>
                </>
              )}
            </span>
            {/* Hover effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* LinkedIn Button */}
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-black font-semibold rounded-full border-2 border-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 active:scale-95 text-sm sm:text-base w-full sm:w-auto max-w-full"
          >
            <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Connect with me</span>
          </a>
        </div>
      </div>
    </section>
  )
}
