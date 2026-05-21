import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">

      <div className="absolute inset-0" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-400/3 rounded-full blur-[100px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,197,24,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,197,24,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8"
          style={{ backgroundColor: 'rgba(245,197,24,0.1)', border: '1px solid rgba(245,197,24,0.25)' }}
        >
          <span className="text-yellow-400 text-sm font-heading font-semibold tracking-widest uppercase">
            First Naira-Based Prop Firm
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-[72px] sm:text-[110px] lg:text-[150px] leading-none tracking-tight mb-4"
          style={{ color: 'var(--text)' }}
        >
          OVER{' '}
          <span className="text-gradient">N1.65B</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-display text-[36px] sm:text-[56px] lg:text-[72px] leading-none mb-6"
          style={{ color: 'var(--text-muted)' }}
        >
          PAID OUT TO TRADERS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg max-w-xl mx-auto mb-10 font-body"
          style={{ color: 'var(--text-muted)' }}
        >
          From Phase 1 to Payout within 24 Hours. No daily drawdown. No consistency rules. Just trade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="bg-yellow-400 text-black font-heading font-bold text-base px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-200 hover:scale-105 w-full sm:w-auto text-center gold-glow"
          >
            Get Funded Now
          </a>
          <a
            href="#dashboard"
            className="font-heading font-bold text-base px-8 py-4 rounded-full transition-all duration-200 w-full sm:w-auto text-center"
            style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            View Dashboard
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: '68,500+', label: 'Forex Traders' },
            { value: '20%', label: 'Max Drawdown' },
            { value: '24hrs', label: 'Payout Speed' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-3xl sm:text-4xl text-gradient">{stat.value}</span>
              <span className="text-xs sm:text-sm font-body mt-1" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
            </div>
          ))}
        </motion.div>

      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />
    </section>
  )
}