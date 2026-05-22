import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

import payout1 from '../assets/payout1.webp'
import payout2 from '../assets/payout2.webp'
import payout3 from '../assets/payout3.webp'
import payout4 from '../assets/payout4.webp'
import payout5 from '../assets/payout5.webp'
import payout6 from '../assets/payout6.webp'

const payouts = [
  { id: 1, img: payout1 },
  { id: 2, img: payout2 },
  { id: 3, img: payout3 },
  { id: 4, img: payout4 },
  { id: 5, img: payout5 },
  { id: 6, img: payout6 },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const touchStartX = useRef<number | null>(null)

  const prev = () => {
    setCurrent((c) => (c - 1 + payouts.length) % payouts.length)
  }

  const next = () => {
    setCurrent((c) => (c + 1) % payouts.length)
  }

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return

    const diff = touchStartX.current - e.changedTouches[0].clientX

    if (diff > 40) next()
    else if (diff < -40) prev()

    touchStartX.current = null
  }

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="mx-auto mb-6 flex justify-center">
            <div
              className="w-14 h-[3px] rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </div>

          <span className="text-yellow-400 text-xs sm:text-sm font-heading font-semibold tracking-[0.25em] uppercase">
            Proof
          </span>

          <h2
            className="font-display text-[34px] sm:text-[48px] lg:text-[64px] mt-4 leading-tight"
            style={{ color: 'var(--text)' }}
          >
            Trusted by 68,500+ Traders
          </h2>

          <p
            className="max-w-2xl mx-auto mt-4 text-sm sm:text-base"
            style={{ color: 'var(--text-muted)' }}
          >
            Fast payouts, flexible rules, and thousands of successful funded traders.
          </p>
        </motion.div>

        {/* Mobile Slider */}
        <div className="block sm:hidden mb-14 px-2">
          <div
            className="relative overflow-hidden rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >

            {/* Slider Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {payouts.map((p) => (
                <div
                  key={p.id}
                  className="min-w-full rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <img
                    src={p.img}
                    alt={`Payout Certificate ${p.id}`}
                    className="w-full h-[230px] object-contain bg-black"
                  />
                </div>
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center"
              style={{
                backgroundColor: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#fff',
              }}
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {payouts.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="w-2 h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor:
                    i === current
                      ? '#facc15'
                      : 'rgba(255,255,255,0.22)',
                  transform:
                    i === current
                      ? 'scale(1.3)'
                      : 'scale(1)',
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 sm:mb-16">
          {payouts.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-3xl overflow-hidden gold-glow"
              style={{
                backgroundColor: 'var(--bg-elevated)',
                border: '1px solid var(--border)',
              }}
            >
              <img
                src={p.img}
                alt={`Payout Certificate ${p.id}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                style={{
                  aspectRatio: '16/10',
                  display: 'block',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Review Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-3xl p-6 sm:p-8 lg:p-10 text-center gold-glow"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <div className="flex flex-col items-center justify-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-green-500 text-green-500"
                />
              ))}
            </div>

            <span
              className="font-heading font-bold text-xl"
              style={{ color: 'var(--text)' }}
            >
              Trustpilot Verified
            </span>
          </div>

          <blockquote
            className="font-body text-sm sm:text-base leading-relaxed mb-8"
            style={{ color: 'var(--text)' }}
          >
            "If you are a trader and you are not trading with NairaTrader,
            you are missing a lot. NO DAILY DRAWDOWN and you have 20% max
            drawdown. I am blown away with how fast their payout was done.
            I will recommend NairaTrader everyday."
          </blockquote>

          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={15}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>

          <p
            className="font-heading font-bold text-lg"
            style={{ color: 'var(--text)' }}
          >
            Mustapha
          </p>

          <p
            className="font-body text-sm mb-8"
            style={{ color: 'var(--text-muted)' }}
          >
            Fx Trader
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center bg-yellow-400 text-black font-heading font-bold text-sm px-8 sm:px-10 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
          >
            Get Funded →
          </a>
        </motion.div>

      </div>
    </section>
  )
}