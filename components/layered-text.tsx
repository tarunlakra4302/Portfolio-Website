"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import type React from "react"

interface LayeredTextProps {
  lines?: Array<{ top: string; bottom: string }>
  fontSize?: string
  fontSizeMd?: string
  lineHeight?: number
  lineHeightMd?: number
  className?: string
}

export function LayeredText({
  lines = [
    { top: "\u00A0", bottom: "MY" },
    { top: "MY", bottom: "CRAFTS" },
    { top: "CRAFTS", bottom: "\u00A0" },
  ],
  fontSize = "72px",
  fontSizeMd = "36px",
  lineHeight = 60,
  lineHeightMd = 28,
  className = "",
}: LayeredTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<HTMLDivElement[]>([])

  const calculateTranslateX = (index: number) => {
    const baseOffset = 35
    const baseOffsetMd = 20
    const centerIndex = Math.floor(lines.length / 2)
    return {
      desktop: (index - centerIndex) * baseOffset,
      mobile: (index - centerIndex) * baseOffsetMd,
    }
  }

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const items = itemsRef.current.filter(Boolean)

    if (items.length === 0) return

    const handleMouseEnter = () => {
      items.forEach((item, index) => {
        gsap.to(item, {
          y: window.innerWidth >= 768 ? -70 : -40,
          duration: 0.6,
          delay: index * 0.08,
          ease: "power2.out",
        })
      })
    }

    const handleMouseLeave = () => {
      items.forEach((item, index) => {
        gsap.to(item, {
          y: 0,
          duration: 0.7,
          delay: index * 0.08,
          ease: "power2.inOut",
        })
      })
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [lines])

  return (
    <div
      ref={containerRef}
      className={`layered-text-container mx-auto py-12 sm:py-16 md:py-24 font-sans font-black tracking-[-1px] sm:tracking-[-2px] uppercase text-black antialiased ${className}`}
      style={{ fontSize, "--md-font-size": fontSizeMd } as React.CSSProperties}
    >
      <ul className="list-none p-0 m-0 flex flex-col items-center">
        {lines.map((line, index) => {
          const translateX = calculateTranslateX(index)
          return (
            <li
              key={index}
              className="relative overflow-hidden"
              style={
                {
                  height: `${lineHeight}px`,
                  transform: `translateX(${translateX.desktop}px) skew(${index % 2 === 0 ? "60deg, -30deg" : "0deg, -30deg"}) scaleY(${index % 2 === 0 ? "0.66667" : "1.33333"})`,
                  "--md-height": `${lineHeightMd}px`,
                  "--md-translateX": `${translateX.mobile}px`,
                  "--skew-x": index % 2 === 0 ? "60deg" : "0deg",
                  "--scale-y": index % 2 === 0 ? "0.66667" : "1.33333",
                } as React.CSSProperties
              }
            >
              <div
                ref={(el) => {
                  if (el) itemsRef.current[index] = el
                }}
                style={{
                  willChange: 'transform',
                  transform: 'translateZ(0)',
                  backfaceVisibility: 'hidden'
                }}
              >
                <p
                  className="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0"
                  style={
                    {
                      height: `${lineHeight}px`,
                      lineHeight: `${lineHeight - 5}px`,
                    } as React.CSSProperties
                  }
                >
                  {line.top}
                </p>
                <p
                  className="leading-[55px] md:leading-[30px] px-[15px] align-top whitespace-nowrap m-0"
                  style={
                    {
                      height: `${lineHeight}px`,
                      lineHeight: `${lineHeight - 5}px`,
                    } as React.CSSProperties
                  }
                >
                  {line.bottom}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
