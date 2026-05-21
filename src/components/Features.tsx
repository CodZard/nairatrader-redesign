import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const featureList = [
  'No Consistency Rules',
  'No Max Daily Loss',
  'No Hidden Rules',
  'No Min Trading Days',
]

export default function Features() {
  return (
    <section id="features" className="py-24" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 text-sm font-heading font-semibold tracking-widest uppercase">Why NairaTrader</span>
          <h2 className="font-display text-[48px] sm:text-[64px] mt-2 leading-none" style={{ color: 'var(--text)' }}>
            WHY WE ARE DIFFERENT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{
              backgroundColor: 'rgba(245,197,24,0.06)',
              border: '1px solid rgba(245,197,24,0.2)',
            }}
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs font-heading font-bold tracking-widest px-4 py-1.5 rounded-full w-fit">
              THE PATHFINDER
            </span>
            <h3 className="font-display text-[38px] leading-none" style={{ color: 'var(--text)' }}>
              WE LEAD,{'\n'}OTHERS COPY.
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              The pioneer of naira-based prop trading and the firm that simplified trading to just 2 rules with 20% max drawdown.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              {featureList.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
                >
                  <span className="font-body text-sm" style={{ color: 'var(--text)' }}>{item}</span>
                  <CheckCircle size={18} className="text-yellow-400 flex-shrink-0" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs font-heading font-bold tracking-widest px-4 py-1.5 rounded-full w-fit">
              NAIJA BIGGEST
            </span>
            <h3 className="font-display text-[38px] leading-none" style={{ color: 'var(--text)' }}>
              68,500+{'\n'}FOREX TRADERS.
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              We made it possible to buy and trade prop firm accounts in naira, giving more traders the chance to start earning.
            </p>
            <div
              className="rounded-xl p-5 mt-auto"
              style={{ backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
            >
              <p className="text-yellow-400 text-xs font-heading tracking-widest uppercase mb-1">NairaTrader Reward</p>
              <p className="text-xs font-body mb-2" style={{ color: 'var(--text-muted)' }}>Proudly paid to: Sabi Traders</p>
              <p className="font-display text-3xl text-yellow-400">N1.4 Billion</p>
              <div className="flex gap-4 mt-3">
                <span className="text-xs font-heading tracking-widest" style={{ color: 'var(--text-muted)' }}>REAL PAYOUTS</span>
                <span className="text-xs font-heading tracking-widest text-yellow-400">VERIFIED</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}
          >
            <span className="inline-block bg-yellow-400/20 text-yellow-400 text-xs font-heading font-bold tracking-widest px-4 py-1.5 rounded-full w-fit">
              IF YOU SABI TRADE
            </span>
            <h3 className="font-display text-[38px] leading-none" style={{ color: 'var(--text)' }}>
              WE SABI{'\n'}PAY SHARP.
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              We have a special place for sabi traders. Since we copy trades, we have never had payout issues, making us reliable.
            </p>
            <div className="flex items-stretch gap-3 mt-auto">
              {['AWARDED', 'PAYING', 'TRUSTED'].map((badge, idx) => (
                <div
                  key={badge}
                  className="flex-1 rounded-xl py-5 flex items-center justify-center font-heading font-bold text-xs tracking-widest"
                  style={
                    idx === 1
                      ? { backgroundColor: '#F5C518', color: '#0A0A0A' }
                      : { backgroundColor: 'var(--bg-elevated)', border: '1px solid var(--border)', color: 'var(--text-muted)' }
                  }
                >
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}