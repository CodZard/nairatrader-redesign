import applePay from '../assets/apple-pay.png'
import diners from '../assets/diners.png'
import maestro from '../assets/maestro.png'
import mastercard from '../assets/mastercard.png'
import visa from '../assets/visa.png'

const paymentMethods = [
  { name: 'Apple Pay', image: applePay },
  { name: 'Diners', image: diners },
  { name: 'Maestro', image: maestro },
  { name: 'Mastercard', image: mastercard },
  { name: 'Visa', image: visa },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-card)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-display text-base font-bold">N</span>
            </div>
            <div>
              <p className="font-heading font-bold text-base" style={{ color: 'var(--text)' }}>
                NairaTrader
              </p>
              <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
                nairatrader.is
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {['Home', 'Buy Account', 'Dashboard', 'Affiliate', 'Rules', 'Contact'].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-sm hover:text-yellow-400 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            {paymentMethods.map((method) => (
              <div
                key={method.name}
                className="w-10 h-7 sm:w-12 sm:h-8 rounded-md flex items-center justify-center p-1"
                style={{
                  backgroundColor: 'var(--bg-elevated)',
                  border: '1px solid var(--border)',
                }}
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 text-center" style={{ borderTop: '1px solid var(--border)' }}>
          <p className="font-body text-xs" style={{ color: 'var(--text-muted)' }}>
            Copyright 2026 by NairaTrader.is
          </p>
        </div>
      </div>
    </footer>
  )
}