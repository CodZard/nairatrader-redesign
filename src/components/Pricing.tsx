import { motion } from 'framer-motion'
import { useState } from 'react'

const twoStepPlans = [
  { size: 'N200K', fullSize: 'N200,000', fee: 'N8,900', tag: 'Trending' },
  { size: 'N400K', fullSize: 'N400,000', fee: 'N18,500', tag: null },
  { size: 'N600K', fullSize: 'N600,000', fee: 'N28,000', tag: null },
  { size: 'N800K', fullSize: 'N800,000', fee: 'N38,000', tag: 'Best Value' },
]

const accountDetails = [
  ['Phase 1/2', '10%'],
  ['Max Loss', '20%'],
  ['Payouts', '5mins'],
  ['Daily Loss', 'No limit'],
  ['Min Days', 'No limit'],
  ['Period', 'Unlimited'],
  ['Weekend', 'Yes'],
  ['Rewards', '80%'],
]

const freePlans = [
  {
    size: 'N1,500,000',
    tag: '10% Max DD',
    steps: [
      'Get to Funded Stage 4',
      'Do not exceed 10% DD from Funded 1 to Funded 3',
      'Once you get to Funded 4, do not trade the account. Send a request for a Scaled Account',
      'Claim a Live Funded N1.5 million account with an 80% profit split at Funded 4',
      'No matter your current account size, you can grab a N1.5m Live Funded account fast with 10% max DD',
      'This free scaling offer is valid for accounts purchased from 21st April',
    ],
  },
  {
    size: 'N3,000,000',
    tag: '7% Max DD',
    steps: [
      'Get to Funded Stage 4',
      'Do not exceed 7% DD from Funded 1 to Funded 3',
      'Once you get to Funded 4, do not trade the account. Send a request for a Scaled Account',
      'Claim a Live Funded N3 million account with an 80% profit split at Funded 4',
      'No matter your current account size, you can grab a N3m Live Funded account fast with 7% max DD',
      'This free scaling offer is valid for accounts purchased from 21st April',
    ],
  },
]

export default function Pricing() {
  const [tab, setTab] = useState<'2step' | 'free'>('2step')
  const [selectedPlan, setSelectedPlan] = useState(twoStepPlans[1])

  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="mx-auto mb-6 flex justify-center">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20">
                <span className="text-black font-display text-lg font-bold">
                  N
                </span>
              </div>

              <div className="flex flex-col items-start leading-none">
                <span
                  className="font-heading font-bold text-2xl sm:text-3xl tracking-wide"
                  style={{ color: 'var(--text)' }}
                >
                  NairaTrader
                </span>

                <span
                  className="text-[10px] sm:text-xs uppercase tracking-[0.25em]"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Prop Firm
                </span>
              </div>
            </div>
          </div>

          <h2
            className="font-display text-[38px] sm:text-[56px] lg:text-[72px] leading-none"
            style={{ color: 'var(--text)' }}
          >
            Choose your challenge
          </h2>

          <p
            className="font-body text-base sm:text-lg mt-5"
            style={{ color: 'var(--text-muted)' }}
          >
            Choose your account size to begin your trading journey with us.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-2 rounded-3xl p-2 mb-10 max-w-3xl mx-auto"
          style={{
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border)',
          }}
        >
          <button
            onClick={() => setTab('2step')}
            className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl px-4 py-4 font-heading font-bold transition-all"
            style={
              tab === '2step'
                ? { backgroundColor: '#ffffff', color: '#0A0A0A' }
                : { color: 'var(--text-muted)' }
            }
          >
            <span className="w-9 h-9 rounded-xl bg-yellow-400/20 flex items-center justify-center">
              ⚡
            </span>
            <span className="text-left">
              <span className="block text-base sm:text-xl">2-Step</span>
              <span className="hidden sm:block text-xs opacity-70">Standard 2-Phase</span>
            </span>
          </button>

          <button
            onClick={() => setTab('free')}
            className="flex items-center justify-center sm:justify-start gap-3 rounded-2xl px-4 py-4 font-heading font-bold transition-all"
            style={
              tab === 'free'
                ? { backgroundColor: '#ffffff', color: '#0A0A0A' }
                : { color: 'var(--text-muted)' }
            }
          >
            <span className="w-9 h-9 rounded-xl bg-yellow-400/20 flex items-center justify-center">
              🚀
            </span>
            <span className="text-left">
              <span className="block text-base sm:text-xl">Free Account</span>
              <span className="hidden sm:block text-xs opacity-70">Scaling Simplified</span>
            </span>
          </button>
        </div>

        {tab === '2step' && (
          <>
            <div className="mb-10">
              <p
                className="font-body text-base mb-4"
                style={{ color: 'var(--text-muted)' }}
              >
                Choose your account size
              </p>

              <div
                className="grid grid-cols-2 sm:grid-cols-4 rounded-2xl overflow-hidden max-w-3xl mx-auto p-1 gap-1"
                style={{ backgroundColor: 'var(--bg-elevated)' }}
              >
                {twoStepPlans.map((plan) => (
                  <button
                    key={plan.size}
                    onClick={() => setSelectedPlan(plan)}
                    className="py-3 rounded-xl font-heading text-lg transition-all"
                    style={
                      selectedPlan.size === plan.size
                        ? { backgroundColor: '#F5C518', color: '#0A0A0A' }
                        : { color: 'var(--text-muted)' }
                    }
                  >
                    {plan.size}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={selectedPlan.size}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="max-w-xl mx-auto rounded-3xl p-6 sm:p-8 relative"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: selectedPlan.tag
                  ? '1px solid rgba(245,197,24,0.45)'
                  : '1px solid var(--border)',
              }}
            >
              {selectedPlan.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-heading font-bold text-xs px-5 py-2 rounded-full">
                  {selectedPlan.tag}
                </span>
              )}

              <p className="font-body text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                Account
              </p>

              <h3 className="font-display text-5xl sm:text-6xl text-yellow-400 mb-8">
                {selectedPlan.fullSize}
              </h3>

              <div
                className="rounded-2xl p-5 mb-8"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="space-y-4">
                  {accountDetails.map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4">
                      <span
                        className="font-body text-sm text-left"
                        style={{ color: 'var(--text-muted)' }}
                      >
                        {label}
                      </span>

                      <span
                        className="font-heading font-bold text-sm text-right"
                        style={{ color: 'var(--text)' }}
                      >
                        {value}

                        {label === 'Weekend' && (
                          <span className="ml-2 bg-green-500/20 text-green-400 text-xs px-2 py-0.5 rounded-full">
                            100%
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <p className="font-body text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                  One-time fee
                </p>
                <p className="font-display text-4xl" style={{ color: 'var(--text)' }}>
                  {selectedPlan.fee}
                </p>
              </div>

              <a
                href="#"
                className="block w-full bg-yellow-400 text-black font-heading font-bold py-4 rounded-full hover:bg-yellow-300 transition-colors"
              >
                Start now →
              </a>
            </motion.div>
          </>
        )}

        {tab === 'free' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
          >
            {freePlans.map((plan) => (
              <div
                key={plan.size}
                className="rounded-3xl p-6 sm:p-8 relative text-left"
                style={{
                  backgroundColor: 'rgba(245,197,24,0.06)',
                  border: '1px solid rgba(245,197,24,0.35)',
                }}
              >
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-black font-heading font-bold text-xs px-5 py-2 rounded-full">
                  {plan.tag}
                </span>

                <p
                  className="font-body text-sm text-center mb-2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  Account
                </p>

                <h3 className="font-display text-4xl sm:text-5xl text-yellow-400 text-center mb-8">
                  {plan.size}
                </h3>

                <div
                  className="rounded-2xl p-5 mb-8"
                  style={{
                    backgroundColor: 'var(--bg-elevated)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div className="space-y-5">
                    {plan.steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <span className="font-heading font-bold text-yellow-400">
                          {index + 1}.
                        </span>

                        <p
                          className="font-heading text-sm sm:text-base leading-relaxed"
                          style={{ color: 'var(--text)' }}
                        >
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="font-body text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
                    One-time fee
                  </p>
                  <p className="font-display text-4xl" style={{ color: 'var(--text)' }}>
                    FREE
                  </p>
                </div>

                <a
                  href="#"
                  className="block w-full bg-yellow-400 text-black font-heading font-bold py-4 rounded-full text-center hover:bg-yellow-300 transition-colors"
                >
                  Start now →
                </a>
              </div>
            ))}
          </motion.div>
        )}

        <p className="text-center font-body text-sm mt-10" style={{ color: 'var(--text-muted)' }}>
          As the pioneer of 2-rule prop trading and the global 20% maximum drawdown model, expect nothing less than the best.
        </p>
      </div>
    </section>
  )
}