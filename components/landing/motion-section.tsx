"use client"

import { motion, useInView, useScroll, useTransform, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { useRef } from "react"

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

const defaultTransition = { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }

export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.2,
}: {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
  amount?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, amount, margin: "-60px 0px -60px 0px" })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={reduced ? "visible" : inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ ...defaultTransition, delay: reduced ? 0 : delay }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.06,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
}) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: reduced ? 0 : staggerDelay,
            delayChildren: reduced ? 0 : 0.15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function MotionChild({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      transition={reduced ? { duration: 0 } : defaultTransition}
    >
      {children}
    </motion.div>
  )
}

/** Parallax: move speed 0 = fixed, 0.5 = half scroll speed, 1 = same as scroll */
export function ParallaxLayer({
  children,
  className,
  speed = 0.15,
}: {
  children: ReactNode
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -30 * speed, 0])
  const appliedY = reduced ? 0 : y

  return (
    <motion.div ref={ref} className={className} style={{ y: appliedY }}>
      {children}
    </motion.div>
  )
}
