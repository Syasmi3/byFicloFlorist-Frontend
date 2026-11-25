import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import Preloader from './components/ui/Preloader'
import LandingPage from './pages/LandingPage'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <LanguageProvider>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <LandingPage />
    </LanguageProvider>
  )
}