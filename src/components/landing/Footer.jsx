import { useEffect, useRef, useState } from 'react'
import logo from '../../assets/logo.png'
import { LEGAL_DOCS } from '../../data/legal'

const FOOTER_LINKS = [
  [
    { label: 'Home', href: '#home' },
    { label: 'Our Catalog', href: '#catalog' },
    { label: 'Custom Bouquet', href: '#create-bouquet' },
  ],
  [
    { label: 'About Us', href: '#about' },
    { label: 'FAQs', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ],
]

const LEGAL_LINKS = [
  { label: 'Privacy Policy', key: 'privacy' },
  { label: 'Terms of Service', key: 'terms' },
]

function LegalDialog({ doc, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (doc && !dialog.open) dialog.showModal()
    if (!doc && dialog.open) dialog.close()
  }, [doc])

  useEffect(() => {
    if (!doc) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [doc])

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      aria-labelledby="legal-title"
      className="m-auto w-[calc(100%-2rem)] max-w-2xl rounded-2xl bg-ivory p-0 text-neutral-900 shadow-2xl backdrop:bg-black/50"
    >
      {doc && (
        <div className="max-h-[85vh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <h2
              id="legal-title"
              className="font-display text-2xl font-bold italic text-raspberry sm:text-3xl"
            >
              {doc.title}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="rounded-full p-2 text-raspberry transition hover:bg-blush"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>

          <p className="mt-1 text-sm font-medium text-spring-green">
            Last updated: {doc.updated}
          </p>

          <div className="mt-6 space-y-5">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h3 className="text-base font-bold text-brand-green sm:text-lg">
                  {section.heading}
                </h3>
                {section.paragraphs.map((text) => (
                  <p
                    key={text.slice(0, 30)}
                    className="mt-2 text-sm font-medium sm:text-base"
                  >
                    {text}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      )}
    </dialog>
  )
}

export default function Footer() {
  const [openKey, setOpenKey] = useState(null)
  const doc = openKey ? LEGAL_DOCS[openKey] : null

  return (
    <footer className="bg-ivory px-4 pb-6 pt-8 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        {/* Baris atas: logo + deskripsi, dan tautan */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <a href="#home" aria-label="Kembali ke atas">
              <img
                src={logo}
                alt="by.ficlo Bouquet & Dekorasi"
                className="h-14 w-auto sm:h-16"
              />
            </a>
            <p className="mt-3 text-sm font-medium text-raspberry sm:text-base">
              A boutique florist based in Depok, dedicated to crafting
              beautiful fresh flower bouquets, graduation arrangements, and
              custom floral gifts to celebrate all your special moments.
            </p>
          </div>

          <nav aria-label="Navigasi footer" className="flex gap-12 sm:gap-16">
            {FOOTER_LINKS.map((column, index) => (
              <ul key={index} className="space-y-1">
                {column
                  .filter((link) => link.href)
                  .map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-raspberry underline-offset-4 hover:underline sm:text-base"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
              </ul>
            ))}
          </nav>
        </div>

        {/* Baris bawah: hak cipta, Privacy Policy | Terms of Service */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-spring-green">
            © {new Date().getFullYear()} by.Ficlo Bouquet &amp; Florist Depok.
            All rights reserved.
          </p>

          <ul className="flex items-center gap-3 text-sm font-bold text-spring-green">
            {LEGAL_LINKS.map((link, index) => (
              <li key={link.key} className="flex items-center gap-3">
                {index > 0 && (
                  <span aria-hidden="true" className="h-4 w-px bg-spring-green" />
                )}
                <button
                  type="button"
                  onClick={() => setOpenKey(link.key)}
                  className="underline-offset-4 hover:underline"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <LegalDialog doc={doc} onClose={() => setOpenKey(null)} />
    </footer>
  )
}