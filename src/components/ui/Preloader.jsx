import { useEffect, useRef, useState } from 'react'

const FLOWER_COUNT = 7
const MIN_DURATION = 2200 
const BURST_TOTAL = 1400 

function Flower({ className = '' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="24"
          cy="12"
          rx="8"
          ry="11"
          transform={`rotate(${angle} 24 24)`}
          className="fill-[#E8A5AF]"
        />
      ))}
      <circle cx="24" cy="24" r="5.5" className="fill-raspberry" />
    </svg>
  )
}

function makeScatter() {
  return Array.from({ length: FLOWER_COUNT }, (_, i) => {
    const angle = Math.random() * Math.PI * 2
    const distance = 300 + Math.random() * 500
    return {
      dx: `${Math.round(Math.cos(angle) * distance)}px`,
      dy: `${Math.round(Math.sin(angle) * distance)}px`,
      rot: `${Math.round((Math.random() - 0.5) * 720)}deg`,
      delay: i * 40,
    }
  })
}

export default function Preloader({ onFinish }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('loading') 
  const [scatter] = useState(makeScatter)
  const readyRef = useRef(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    const markReady = () => {
      readyRef.current = true
    }
    const pageLoaded =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise((resolve) =>
            window.addEventListener('load', resolve, { once: true })
          )
    Promise.all([pageLoaded, document.fonts?.ready]).then(markReady)
    const safety = setTimeout(markReady, 6000) // jaga-jaga supaya tidak macet
    return () => clearTimeout(safety)
  }, [])

  useEffect(() => {
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / MIN_DURATION, 1)
      const eased = 1 - (1 - t) * (1 - t)
      const value = Math.min(eased, readyRef.current ? 1 : 0.9)
      setProgress(value * 100)
      if (value >= 1) {
        setPhase('burst')
        return
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (phase !== 'burst') return
    const id = setTimeout(onFinish, BURST_TOTAL)
    return () => clearTimeout(id)
  }, [phase, onFinish])

  const isBursting = phase === 'burst'
  const fade = `transition-opacity duration-300 ${
    isBursting ? 'opacity-0' : 'opacity-100'
  }`

  return (
    <div
      className="fixed inset-0 z-[100] overflow-hidden"
      role="status"
      aria-label="Memuat halaman"
    >
      <div
        className={`absolute inset-0 bg-ivory transition-opacity duration-700 delay-300 ${
          isBursting ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <div className="relative flex h-full flex-col items-center justify-center px-6">
        {/* Nama */}
        <div className={`text-center ${fade}`}>
          <p className="font-display text-5xl font-bold italic text-raspberry sm:text-6xl">
            by.ficlo
          </p>
          <p className="mt-2 text-sm font-medium text-brand-green sm:text-base">
            Florist &amp; Dekorasi Depok
          </p>
        </div>

        <div className="relative mt-10 flex w-[min(80vw,420px)] items-center justify-between">
          <div className={fade}>
            <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-raspberry/15" />
            <div
              className="absolute left-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-brand-gradient"
              style={{ width: `${progress}%` }}
            />
          </div>

          {scatter.map((f, i) => {
            const bloomed = progress >= ((i + 0.5) / FLOWER_COUNT) * 100
            return (
              <span
                key={i}
                className="preloader-flower relative block h-8 w-8 sm:h-10 sm:w-10"
                style={
                  isBursting
                    ? {
                        '--dx': f.dx,
                        '--dy': f.dy,
                        '--rot': f.rot,
                        animation: `flower-burst 1000ms cubic-bezier(0.15, 0.7, 0.3, 1) ${f.delay}ms forwards`,
                      }
                    : undefined
                }
              >
                <Flower
                  className={`h-full w-full transition-all duration-500 ${
                    bloomed
                      ? 'scale-100 rotate-0 opacity-100'
                      : 'scale-50 -rotate-45 opacity-30'
                  }`}
                />
              </span>
            )
          })}
        </div>

        <p className={`mt-6 text-sm font-semibold text-spring-green ${fade}`}>
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}