import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Buy Account', href: '#pricing' },
  { label: 'Dashboard', href: '#' },
  { label: 'Affiliate', href: '#' },
  { label: 'Rules', href: '#rules' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        backgroundColor: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
              <span className="text-dark font-display text-sm font-bold">N</span>
            </div>
            <span className="font-heading font-bold theme-text text-xl tracking-wide">NairaTrader</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-body theme-muted hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2 rounded-full theme-text transition-all duration-200 hover:text-gold"
              style={{ border: '1px solid var(--border)' }}
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#pricing"
              className="hidden md:block bg-gold text-dark font-heading font-bold text-sm px-5 py-2.5 rounded-full hover:bg-yellow-300 transition-colors duration-200"
            >
              Get Funded
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden theme-text p-2"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ backgroundColor: 'var(--bg)', borderTop: '1px solid var(--border)' }}
      >
        <div className="px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="theme-muted hover:text-gold font-body text-base py-2 transition-colors"
              style={{ borderBottom: '1px solid var(--border)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#pricing"
            onClick={() => setOpen(false)}
            className="bg-gold text-dark font-heading font-bold text-sm px-5 py-3 rounded-full text-center mt-2 hover:bg-yellow-300 transition-colors"
          >
            Get Funded
          </a>
        </div>
      </div>
    </nav>
  )
}