"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  const router = useRouter()

  return (
    <div className="bg-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-[200px] md:text-[250px] font-bold text-gray-200 leading-none">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Oops! The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-black text-black font-semibold rounded-xl hover:bg-black hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          <button
            onClick={() => router.push('/')}
            className="group flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Home Page
          </button>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
