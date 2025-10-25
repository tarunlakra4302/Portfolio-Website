"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, CreditCard, Plane, Ticket, Star, ChevronRight } from 'lucide-react'

interface Card {
  id: string
  type: 'credit' | 'boarding' | 'ticket' | 'loyalty'
  title: string
  subtitle: string
  gradient: string
  details?: {
    number?: string
    expiry?: string
    holder?: string
    gate?: string
    seat?: string
    time?: string
    points?: string
  }
}

const cards: Card[] = [
  {
    id: '1',
    type: 'credit',
    title: 'Tech Platinum',
    subtitle: 'Visa Credit Card',
    gradient: 'from-slate-800 via-slate-700 to-slate-600',
    details: {
      number: '****  ****  ****  4302',
      expiry: '12/28',
      holder: 'TARUN LAKRA'
    }
  },
  {
    id: '2',
    type: 'boarding',
    title: 'Flight to San Francisco',
    subtitle: 'Air India • AI 173',
    gradient: 'from-blue-600 via-blue-500 to-cyan-500',
    details: {
      gate: '23B',
      seat: '12A',
      time: '10:45 AM'
    }
  },
  {
    id: '3',
    type: 'ticket',
    title: 'React Conf 2025',
    subtitle: 'Tech Conference Pass',
    gradient: 'from-purple-600 via-pink-500 to-rose-500',
    details: {
      time: 'June 15-17, 2025'
    }
  },
  {
    id: '4',
    type: 'loyalty',
    title: 'Starbucks Rewards',
    subtitle: 'Gold Member',
    gradient: 'from-green-700 via-green-600 to-emerald-500',
    details: {
      points: '2,450 Stars'
    }
  }
]

export function AppleWallet() {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [showAddModal, setShowAddModal] = useState(false)

  const handleCardClick = (id: string) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <div className="w-full max-w-md mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl">
      {/* iOS Status Bar */}
      <div className="bg-black px-6 pt-3 pb-2">
        <div className="flex items-center justify-between text-white text-xs">
          <span className="font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 bg-white/30 rounded-sm"></div>
            <div className="w-4 h-3 bg-white/50 rounded-sm"></div>
            <div className="w-4 h-3 bg-white/70 rounded-sm"></div>
            <div className="w-4 h-3 bg-white rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-b from-black to-gray-900 px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-white text-2xl font-bold">Wallet</h2>
          <button
            onClick={() => setShowAddModal(true)}
            className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Cards Stack */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-[500px] px-4 py-6 relative">
        <AnimatePresence>
          {cards.map((card, index) => {
            const isExpanded = expandedCard === card.id
            const offset = isExpanded ? 0 : index * 20
            const scale = isExpanded ? 1 : 1 - index * 0.02

            return (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: offset,
                  scale: scale,
                  zIndex: isExpanded ? 50 : cards.length - index
                }}
                exit={{ opacity: 0, y: -50 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                onClick={() => handleCardClick(card.id)}
                className={`absolute left-4 right-4 cursor-pointer ${
                  isExpanded ? 'top-4' : ''
                }`}
                style={{
                  transformOrigin: 'top center',
                }}
              >
                <div
                  className={`bg-gradient-to-br ${card.gradient} rounded-2xl p-6 shadow-2xl border border-white/10 backdrop-blur-sm`}
                >
                  {/* Card Icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                      {card.type === 'credit' && <CreditCard className="w-6 h-6 text-white" />}
                      {card.type === 'boarding' && <Plane className="w-6 h-6 text-white" />}
                      {card.type === 'ticket' && <Ticket className="w-6 h-6 text-white" />}
                      {card.type === 'loyalty' && <Star className="w-6 h-6 text-white" />}
                    </div>
                    {card.type === 'credit' && (
                      <div className="flex gap-2">
                        <div className="w-10 h-8 bg-yellow-400/80 rounded"></div>
                        <svg className="w-8 h-8 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                          <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity="0.6"/>
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Card Title */}
                  <div className="mb-6">
                    <h3 className="text-white text-xl font-bold mb-1">{card.title}</h3>
                    <p className="text-white/70 text-sm">{card.subtitle}</p>
                  </div>

                  {/* Card Details */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/20 pt-4 mt-4 space-y-3">
                      {card.details?.number && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Card Number</span>
                          <span className="text-white font-mono text-sm">{card.details.number}</span>
                        </div>
                      )}
                      {card.details?.expiry && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Expires</span>
                          <span className="text-white text-sm">{card.details.expiry}</span>
                        </div>
                      )}
                      {card.details?.holder && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Cardholder</span>
                          <span className="text-white text-sm">{card.details.holder}</span>
                        </div>
                      )}
                      {card.details?.gate && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Gate</span>
                          <span className="text-white text-lg font-bold">{card.details.gate}</span>
                        </div>
                      )}
                      {card.details?.seat && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Seat</span>
                          <span className="text-white text-lg font-bold">{card.details.seat}</span>
                        </div>
                      )}
                      {card.details?.time && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Time</span>
                          <span className="text-white text-sm">{card.details.time}</span>
                        </div>
                      )}
                      {card.details?.points && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/60 text-sm">Balance</span>
                          <span className="text-white text-lg font-bold">{card.details.points}</span>
                        </div>
                      )}

                      {/* Barcode for boarding passes and tickets */}
                      {(card.type === 'boarding' || card.type === 'ticket') && (
                        <div className="mt-4 bg-white rounded-lg p-3 flex items-center justify-center">
                          <div className="flex gap-[2px]">
                            {Array.from({ length: 30 }).map((_, i) => (
                              <div
                                key={i}
                                className="w-1 bg-black"
                                style={{
                                  height: `${Math.random() * 40 + 20}px`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Expand indicator */}
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="flex justify-center mt-2"
                    >
                      <ChevronRight className="w-5 h-5 text-white/50 rotate-90" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>

      {/* Add Card Modal */}
      <AnimatePresence>
        {showAddModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setShowAddModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-3xl p-6 w-full max-w-sm border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl font-bold">Add to Wallet</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5" />
                    <span>Credit or Debit Card</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5" />
                    <span>Boarding Pass</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <Ticket className="w-5 h-5" />
                    <span>Event Ticket</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>

                <button className="w-full bg-gradient-to-r from-green-700 to-emerald-500 text-white py-4 rounded-xl hover:opacity-90 transition-opacity flex items-center justify-between px-4">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5" />
                    <span>Loyalty Card</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
