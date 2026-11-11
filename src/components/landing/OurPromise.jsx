import iconPromise from '../../assets/iconpromise.png'
import FlowerDecor from '../ui/FlowerDecor'

const FLOWERS = [
  { top: '-6%', left: '2%', width: 300, rotate: -8, opacity: 0.3 },
  { top: '58%', left: '-3%', width: 320, rotate: 10, opacity: 0.3 },
  { top: '-6%', right: '2%', width: 300, rotate: 12, opacity: 0.3 },
  { top: '60%', right: '-3%', width: 320, rotate: -10, opacity: 0.3 },
  { top: '26%', left: 'calc(50% - 170px)', width: 340, opacity: 0.3 },
]

const PROMISES = [
  {
    title: 'High-Quality Fresh Flowers',
    description:
      'Each arrangement is crafted using select flowers to ensure their beauty and freshness.',
  },
  {
    title: 'Affordable Flowers',
    description:
      'By.Ficlo can also provide flower arrangements that suit your budget without compromising their special touch and quality.',
  },
  {
    title: 'Same Day Order',
    description:
      'Same-day delivery service to ensure your special moments stay right on schedule.',
  },
]

export default function OurPromise() {
  return (
    <section
      id="our-promise"
      className="relative scroll-mt-24 overflow-hidden bg-ivory px-4 py-16 sm:px-6 lg:px-12 lg:py-20"
    >
      <FlowerDecor items={FLOWERS} />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        {/* Judul */}
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl">
            Our Promise
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            We are committed to delivering fresh blooms, thoughtful
            craftsmanship, and heartwarming service for your every special
            moment.
          </p>
        </div>

        {/* Kartu */}
        <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
          {PROMISES.map((item) => (
            <li
              key={item.title}
              className="flex flex-col items-center rounded-3xl border border-leaf bg-sage px-6 py-8 text-center"
            >
              <img
                src={iconPromise}
                alt=""
                className="h-12 w-12 object-contain"
              />
              <h3 className="mt-4 font-display text-xl font-bold italic text-neutral-900">
                {item.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm font-medium text-neutral-900">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}