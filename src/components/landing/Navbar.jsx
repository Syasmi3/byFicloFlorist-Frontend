import { useState } from 'react'
import logo from '../../assets/logo.png'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Catalog', href: '#catalog' },
  { label: 'How To Order', href: '#how-to-order' },
  { label: 'Create Your Bouquet', href: '#create-bouquet' },
  { label: 'Contact Us', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-ivory shadow-sm">
      <nav
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="shrink-0">
          <img
            src={logo}
            alt="by.ficlo Bouquet & Dekorasi"
            className="h-14 w-auto sm:h-[72px] lg:h-[80px]"
            />
        </a>

        {/* Menu desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base font-bold text-spring-green transition-colors hover:text-brand-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Order Now + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#catalog"
            onClick={closeMenu}
            className="inline-flex h-10 items-center rounded-xl bg-brand-gradient px-5 text-sm font-bold text-white transition hover:brightness-95 sm:text-base"
          >
            Order Now!
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-spring-green lg:hidden"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {isOpen && (
        <ul
          id="mobile-menu"
          className="border-t border-spring-green/20 bg-ivory px-4 py-2 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-base font-bold text-spring-green"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}