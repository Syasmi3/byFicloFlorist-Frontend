import { useState } from 'react'
import { FAQ_GROUPS } from '../../data/faqs'
import { useLanguage } from '../../context/LanguageContext'

const COPY = {
  title: { en: 'Frequently Asked Questions', id: 'Pertanyaan yang Sering Diajukan' },
  subtitle: {
    en: 'Have questions about your flowers or ordering process? Find everything you need to know below.',
    id: 'Punya pertanyaan seputar bunga atau proses pemesanan? Temukan semua yang perlu Anda ketahui di bawah ini.',
  },
}

const canHover = () =>
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-raspberry transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  )
}

function FaqItem({ item, open, onToggle, onHover }) {
  const { t } = useLanguage()
  const buttonId = `faq-button-${item.id}`
  const panelId = `faq-panel-${item.id}`

  return (
    <div className="group" onMouseEnter={onHover}>
      <div
        className={`rounded-2xl border bg-white transition duration-300 ease-out group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 ${
          open
            ? 'border-transparent shadow-lg shadow-raspberry/15'
            : 'border-transparent shadow-sm group-hover:border-raspberry/40 group-hover:shadow-lg group-hover:shadow-raspberry/15'
        }`}
      >
        <h4>
          <button
            type="button"
            id={buttonId}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onToggle}
            className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left sm:px-6"
          >
            <span className="font-display text-base font-bold italic text-raspberry sm:text-lg lg:text-xl">
              {t(item.question)}
            </span>
            <Chevron open={open} />
          </button>
        </h4>

        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div
            className={`overflow-hidden transition-[visibility] duration-300 ${
              open ? 'visible' : 'invisible'
            }`}
          >
            <p className="px-5 pb-5 text-sm font-medium text-spring-green sm:px-6 sm:text-base lg:text-lg">
              {t(item.answer)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState(null)

  const handleToggle = (id, event) => {
    if (canHover() && event.detail > 0) {
      setOpenId(id)
      return
    }
    setOpenId((current) => (current === id ? null : id))
  }

  const handleHover = (id) => {
    if (canHover()) setOpenId(id)
  }

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-ivory px-4 py-6 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px] bg-blush px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl">
            {t(COPY.title)}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            {t(COPY.subtitle)}
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-4xl space-y-10 lg:mt-12">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title.en}>
              <h3 className="text-xl font-bold text-brand-green sm:text-2xl">
                {t(group.title)}
              </h3>

              <div className="mt-4 space-y-3 sm:space-y-4">
                {group.items.map((item) => (
                  <FaqItem
                    key={item.id}
                    item={item}
                    open={openId === item.id}
                    onToggle={(event) => handleToggle(item.id, event)}
                    onHover={() => handleHover(item.id)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}