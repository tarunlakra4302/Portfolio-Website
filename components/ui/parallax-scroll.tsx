"use client"

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxScrollProps {
  children: React.ReactNode
  offset?: number
  className?: string
}

export function ParallaxScroll({ children, offset = 50, className = '' }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}

interface ParallaxImageProps {
  src: string
  alt: string
  className?: string
  speed?: number
}

export function ParallaxImage({ src, alt, className = '', speed = 50 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale }}
        className="w-full h-full object-cover"
        draggable={false}
      />
    </div>
  )
}

interface ParallaxSectionProps {
  children: React.ReactNode
  speed?: 'slow' | 'medium' | 'fast'
  className?: string
}

export function ParallaxSection({ children, speed = 'medium', className = '' }: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const speedValue = speed === 'slow' ? 30 : speed === 'fast' ? 100 : 60
  const y = useTransform(scrollYProgress, [0, 1], [speedValue, -speedValue])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, opacity }}>
        {children}
      </motion.div>
    </div>
  )
}
