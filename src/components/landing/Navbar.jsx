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

function LanguageToggle({ className = '' }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={`h-10 items-center rounded-xl bg-white p-1 shadow-sm ${className}`}
    >
      {['en', 'id'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setLang(code)}
            className={`h-8 rounded-lg px-3 text-sm font-bold uppercase transition ${
              active
                ? 'bg-brand-gradient text-white'
                : 'text-spring-green hover:text-brand-green'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
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
        {/* Logo */}
        <a href="#home" onClick={closeMenu} className="shrink-0">
          <img
            src={logo}
            alt="by.ficlo Bouquet & Dekorasi"
            className="h-14 w-auto sm:h-[72px] lg:h-[80px]"
          />
        </a>

        {/* Menu desktop */}
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

        {/* Tombol bahasa + Order Now + hamburger */}
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

      {/* Menu mobile */}
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
            <LanguageToggle className="flex w-fit" />
          </li>
        </ul>
      )}
    </header>
  )
}