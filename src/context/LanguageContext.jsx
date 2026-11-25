import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

const STORAGE_KEY = 'byficlo-lang'
const LANGS = ['en', 'id']

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(saved)) return saved
  } catch {
  }
  return 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  const setLang = useCallback((next) => {
    if (!LANGS.includes(next)) return
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = useCallback(
    (value) => {
      if (value == null || typeof value === 'string') return value
      return value[lang] ?? value.en
    },
    [lang]
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t])

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage harus dipakai di dalam LanguageProvider')
  }
  return context
}