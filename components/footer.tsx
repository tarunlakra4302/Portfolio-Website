"use client"

import React, { useState, useEffect } from 'react'
import { Copy, Check, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { SlidingNumber } from './ui/sliding-number'

interface FooterProps {
  email?: string
  location?: string
  linkedinUrl?: string
  githubUrl?: string
  resumeUrl?: string
  className?: string
}

export const Footer: React.FC<FooterProps> = ({
  email = 'lakra.tarun4302@gmail.com',
  location = 'Stockholm, Sweden',
  linkedinUrl = 'https://www.linkedin.com/in/yourprofile',
  githubUrl = 'https://github.com/yourprofile',
  resumeUrl = '/resume.pdf',
  className = '',
}) => {
  const [copied, setCopied] = useState(false)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Update time every second
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
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy email:', err)
    }
  }

  const links = [
    { name: 'LinkedIn', url: linkedinUrl },
    { name: 'GitHub', url: githubUrl },
    { name: 'Resume', url: resumeUrl },
  ]

  return (
    <motion.footer
      className={`w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto bg-[#3A3A3A] rounded-[24px] md:rounded-[32px] px-6 sm:px-8 md:px-12 py-8 md:py-10 lg:py-12 w-full box-border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                  {email}
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
              {location}
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
              <div className="text-xs mt-2">Made with 🩶 and Strawberry Protein Lattes (120% sugar, less ice).</div>
            </div>
          </motion.div>

          {/* Right Side - Navigation Links */}
          <motion.div
            className="flex flex-col justify-center space-y-3 md:space-y-4 md:items-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-white/90 hover:text-white text-sm sm:text-base md:text-lg font-medium transition-all duration-300 w-fit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                <span className="relative whitespace-nowrap">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 flex-shrink-0" />
              </motion.a>
            ))}
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
  )
}
