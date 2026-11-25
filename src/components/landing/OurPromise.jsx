import op1 from '../../assets/icon/op1.png'
import op2 from '../../assets/icon/op2.png'
import op3 from '../../assets/icon/op3.png'
import FlowerDecor from '../ui/FlowerDecor'
import InfoCard from '../ui/InfoCard'

const FLOWERS = [
  { top: '-6%', left: '2%', width: 300, rotate: -8, opacity: 0.3 },
  { top: '58%', left: '-3%', width: 320, rotate: 10, opacity: 0.3 },
  { top: '-6%', right: '2%', width: 300, rotate: 12, opacity: 0.3 },
  { top: '60%', right: '-3%', width: 320, rotate: -10, opacity: 0.3 },
  { top: '26%', left: 'calc(50% - 170px)', width: 340, opacity: 0.3 },
]

const COPY = {
  title: 'Our Promise',
  subtitle: 'We are committed to delivering fresh blooms, thoughtful craftsmanship, and heartwarming service for your every special moment.',
}

const PROMISES = [
  {
    icon: op1,
    title: 'High-Quality Fresh Flowers',
    description: 'Each arrangement is crafted using select flowers to ensure their beauty and freshness.',
  },
  {
    icon: op2,
    title: 'Affordable Flowers',
    description: 'By.Ficlo can also provide flower arrangements that suit your budget without compromising their special touch and quality.',
  },
  {
    icon: op3,
    title: 'Same Day Order',
    description: 'Same-day delivery service to ensure your special moments stay right on schedule.',
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
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl">
            {COPY.title}
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            {COPY.subtitle}
          </p>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
          {PROMISES.map((item) => (
            <InfoCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}