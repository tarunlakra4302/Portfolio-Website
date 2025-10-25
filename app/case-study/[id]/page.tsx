"use client"

import React from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

const caseStudies = {
  "1": {
    id: 1,
    year: "2024",
    industry: "B2B SaaS",
    category: "Digital Marketing",
    title: "From bottlenecks to scale: revamping Publish for scalable adoption",
    description: "When a broken content management platform frustrated social media managers and risked retail partner relationships, we transformed the experience from ground up—creating an intuitive system that scaled effortlessly across teams.",
    challenge: "The existing Publish platform suffered from critical usability issues that prevented social media managers from efficiently managing content. The broken workflow resulted in frustrated users, delayed campaigns, and strained relationships with retail partners.",
    solution: "We conducted extensive user research, redesigned the entire user flow, and implemented a scalable architecture that could handle multiple teams and thousands of users simultaneously.",
    results: [
      "85% reduction in task completion time",
      "95% user satisfaction rate",
      "3x increase in daily active users",
      "50% reduction in support tickets"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    detailedRoute: "/case-study/publish"
  },
  "3": {
    id: 3,
    year: "2024",
    industry: "FinTech",
    category: "Mobile App",
    title: "Empowering financial literacy: a banking app for the next generation",
    description: "Bridging the gap between complex financial concepts and everyday users, we created an educational first banking experience that turns intimidating data into actionable insights and builds lasting money management habits.",
    challenge: "Traditional banking apps overwhelmed users with jargon and complex interfaces, leaving younger generations confused about managing their finances and building healthy money habits.",
    solution: "We created an intuitive mobile experience that gamifies financial education, provides personalized insights, and makes complex concepts digestible through interactive visualizations.",
    results: [
      "200,000+ active users in first 6 months",
      "78% daily engagement rate",
      "4.8 star rating on app stores",
      "65% of users report improved financial literacy"
    ],
    technologies: ["React Native", "Firebase", "Plaid API", "Chart.js", "TypeScript"],
    detailedRoute: "/case-study/fintech"
  },
  "4": {
    id: 4,
    year: "2025",
    industry: "FinTech",
    category: "Stock Tracking",
    title: "Signalist: AI-Powered Stock Market Tracking",
    description: "A modern stock market tracking application built with Next.js 15, featuring real-time data integration with Finnhub API, AI-generated market summaries using Gemini AI, and event-driven workflows with Inngest for automated alerts and daily digests.",
    challenge: "Stock traders and investors needed a unified platform to track real-time market data, receive personalized insights, and get automated alerts without switching between multiple tools.",
    solution: "We built Signalist with Next.js 15 Server Components, integrating Finnhub for live data, Gemini AI for intelligent summaries, and Inngest for event-driven workflows, creating a seamless stock tracking experience.",
    results: [
      "Real-time stock price updates via Finnhub API",
      "AI-generated personalized market summaries",
      "Automated daily news digests and price alerts",
      "Event-driven architecture with Inngest"
    ],
    technologies: ["Next.js 15", "React 19", "MongoDB", "Gemini AI", "Finnhub API", "Inngest", "Better Auth"],
    detailedRoute: "/case-study/signalist"
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const caseStudy = caseStudies[params.id as keyof typeof caseStudies]

  if (!caseStudy) {
    return (
      <div className="bg-white flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <button
            onClick={() => router.push('/')}
            className="text-lg text-gray-600 hover:text-black transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors group"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          <span className="text-lg font-semibold">Back</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Metadata */}
            <div className="text-sm text-gray-400 font-bold tracking-[0.2em] uppercase mb-8">
              {caseStudy.year} • {caseStudy.industry} • {caseStudy.category}
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 text-gray-900 tracking-tight">
              {caseStudy.title}
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12">
              {caseStudy.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Image */}
      <section className="w-full px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src={`https://picsum.photos/1200/600?random=${caseStudy.id}`}
            alt={caseStudy.title}
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Content Sections */}
      <section className="w-full px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">The Challenge</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {caseStudy.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Solution</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {caseStudy.solution}
            </p>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0)]"
                >
                  <p className="text-lg font-semibold text-gray-900">{result}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-black text-white font-semibold rounded-lg text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 lg:px-8 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Ready to start your project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let&apos;s work together to create something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {caseStudy.detailedRoute && (
              <button
                onClick={() => router.push(caseStudy.detailedRoute)}
                className="inline-flex items-center gap-3 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-4 rounded-lg"
              >
                View Detailed Case Study →
              </button>
            )}
            <button
              onClick={() => router.push('/')}
              className="inline-flex items-center gap-3 text-lg font-bold text-white bg-black hover:bg-gray-800 transition-colors px-8 py-4 rounded-lg"
            >
              View More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
