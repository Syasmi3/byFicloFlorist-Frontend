import { useState } from 'react'
import logo from '../../assets/logo.png'

const COPY = {
  navLabel: 'Main navigation',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  orderNow: 'Order Now!',
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Catalog', href: '#catalog' },
  { label: 'How To Order', href: '#how-to-order' },
  { label: 'Create Your Bouquet', href: '#create-bouquet' },
  { label: 'Contact Us', href: '#contact' },
]

function GlobeIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function getCurrentLang() {
  return document.cookie.includes('googtrans=/en/id') ? 'id' : 'en'
}

function changeLanguage(next) {
  const select = document.querySelector('.goog-te-combo')
  if (!select) return false
  select.value = next
  select.dispatchEvent(new Event('change'))
  return true
}

function LanguageToggle({ className = '', showName = false }) {
  const [lang, setLang] = useState(getCurrentLang)
  const isEnglish = lang === 'en'
  const hint = isEnglish
    ? 'Language: English. Click to switch to Indonesian'
    : 'Bahasa: Indonesia. Klik untuk ganti ke Inggris'

  return (
    <button
      type="button"
      translate="no"
      onClick={() => {
        const next = isEnglish ? 'id' : 'en'
        if (changeLanguage(next)) setLang(next)
      }}
      aria-label={hint}
      title={hint}
      className={`relative items-center gap-3 ${className}`}
    >
      <span
        className={`flex h-10 w-10 items-center justify-center rounded-xl transition ${
          isEnglish
            ? 'bg-brand-gradient text-white hover:brightness-95'
            : 'bg-neutral-300 text-neutral-600 hover:bg-neutral-400/60'
        }`}
      >
        <GlobeIcon />
      </span>

      {showName ? (
        <span className="text-base font-bold text-spring-green">
          {isEnglish ? 'English' : 'Bahasa Indonesia'}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className={`absolute left-1/2 top-full mt-0.5 -translate-x-1/2 text-[10px] font-bold leading-none ${
            isEnglish ? 'text-brand-green' : 'text-neutral-600'
          }`}
        >
          {isEnglish ? 'ENG' : 'IND'}
        </span>
      )}
    </button>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-ivory shadow-sm">
      <nav
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={COPY.navLabel}
      >
        <a href="#home" onClick={closeMenu} className="shrink-0">
          <img
            src={logo}
            alt="by.ficlo Bouquet & Dekorasi"
            className="h-14 w-auto sm:h-[72px] lg:h-[80px]"
          />
        </a>

        <ul className="hidden items-center gap-8 xl:flex">
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

        <div className="flex items-center gap-3">
          <LanguageToggle className="hidden xl:flex" />

          <a
            href="#catalog"
            onClick={closeMenu}
            className="inline-flex h-10 items-center rounded-xl bg-brand-gradient px-5 text-sm font-bold text-white transition hover:brightness-95 sm:text-base"
          >
            {COPY.orderNow}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-spring-green xl:hidden"
            aria-label={isOpen ? COPY.closeMenu : COPY.openMenu}
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

      {isOpen && (
        <ul
          id="mobile-menu"
          className="border-t border-spring-green/20 bg-ivory px-4 py-2 xl:hidden"
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
          <li className="py-3">
            <LanguageToggle showName className="flex" />
          </li>
        </ul>
      )}
    </header>
  )
}