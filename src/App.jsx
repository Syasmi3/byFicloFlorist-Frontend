import { useState } from 'react'
import Preloader from './components/ui/Preloader'
import LandingPage from './pages/LandingPage'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      <LandingPage />
    </>
  )
}