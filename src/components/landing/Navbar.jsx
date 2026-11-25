import { useState } from 'react'
import logo from '../../assets/logo.png'
import { useLanguage } from '../../context/LanguageContext'

const COPY = {
  navLabel: { en: 'Main navigation', id: 'Navigasi utama' },
  openMenu: { en: 'Open menu', id: 'Buka menu' },
  closeMenu: { en: 'Close menu', id: 'Tutup menu' },
  orderNow: { en: 'Order Now!', id: 'Pesan Sekarang!' },
}

const NAV_LINKS = [
  { label: { en: 'Home', id: 'Beranda' }, href: '#home' },
  { label: { en: 'Our Catalog', id: 'Katalog' }, href: '#catalog' },
  { label: { en: 'How To Order', id: 'Cara Pesan' }, href: '#how-to-order' },
  {
    label: { en: 'Create Your Bouquet', id: 'Rangkai Buket Sendiri' },
    href: '#create-bouquet',
  },
  { label: { en: 'Contact Us', id: 'Hubungi Kami' }, href: '#contact' },
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

function LanguageToggle({ className = '', showName = false }) {
  const { lang, setLang } = useLanguage()
  const isEnglish = lang === 'en'
  const hint = isEnglish
    ? 'Language: English. Click to switch to Indonesian'
    : 'Bahasa: Indonesia. Klik untuk ganti ke Inggris'

  return (
    <button
      type="button"
      onClick={() => setLang(isEnglish ? 'id' : 'en')}
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
  const { t } = useLanguage()

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-ivory shadow-sm">
      <nav
        className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={t(COPY.navLabel)}
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
                {t(link.label)}
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
            {t(COPY.orderNow)}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="rounded-lg p-2 text-spring-green xl:hidden"
            aria-label={isOpen ? t(COPY.closeMenu) : t(COPY.openMenu)}
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
                {t(link.label)}
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