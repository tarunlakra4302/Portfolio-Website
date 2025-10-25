"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { LucideIcon, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 pt-6",
          isMobile ? "pl-6 w-fit max-w-[50vw]" : "flex justify-center",
          className,
        )}
      >
        <div className="flex items-center gap-3 bg-white/90 border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg w-fit">
          {/* Mobile: Hamburger Menu */}
          {isMobile ? (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative cursor-pointer text-sm font-semibold px-3 py-[9px] rounded-full transition-colors text-black hover:text-blue-600"
            >
              {menuOpen ? (
                <X size={20} strokeWidth={2.5} />
              ) : (
                <Menu size={20} strokeWidth={2.5} />
              )}
            </button>
          ) : (
            /* Desktop: Full navbar */
            items.map((item) => {
              const isActive = activeTab === item.name

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                    "text-black hover:text-blue-600",
                    isActive && "bg-blue-50 text-blue-600",
                  )}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className="absolute inset-0 w-full bg-blue-100/50 rounded-full -z-10"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-t-full">
                        <div className="absolute w-12 h-6 bg-blue-400/30 rounded-full blur-md -top-2 -left-2" />
                        <div className="absolute w-8 h-6 bg-blue-400/30 rounded-full blur-md -top-1" />
                        <div className="absolute w-4 h-4 bg-blue-400/30 rounded-full blur-sm top-0 left-2" />
                      </div>
                    </motion.div>
                  )}
                </Link>
              )
            })
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobile && menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-6 z-40 w-[calc(50vw-3rem)]"
          >
            <div className="bg-white/95 border border-gray-200 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col">
                {items.map((item) => {
                  const isActive = activeTab === item.name

                  return (
                    <Link
                      key={item.name}
                      href={item.url}
                      onClick={() => {
                        setActiveTab(item.name)
                        setMenuOpen(false)
                      }}
                      className={cn(
                        "flex items-center gap-4 px-6 py-4 transition-colors border-b border-gray-100 last:border-b-0",
                        "text-black hover:bg-blue-50",
                        isActive && "bg-blue-50 text-blue-600",
                      )}
                    >
                      <item.icon size={20} strokeWidth={2.5} />
                      <span className="text-sm font-semibold">{item.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="mobile-active"
                          className="ml-auto w-2 h-2 bg-blue-600 rounded-full"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
