import welcome from '../../assets/about.png'
import pattern2 from '../../assets/pattern2.png'
import FlowerDecor from '../ui/FlowerDecor'

const COPY = {
  titleTop: 'Welcome to',
  imageAlt: 'Pink bouquet from by.ficlo',
}

const PARAGRAPHS = [
  'Welcome to by.ficlo, where every bloom tells a story of love, joy, and meaningful celebration. Born out of a passion for floral artistry, we handcraft delicate arrangements that add a touch of warmth and elegance to your special moments. Whether you are celebrating a graduation, an anniversary, or simply surprising someone special, we bring your sweet visions to life.',
  'We carefully select fresh, premium flowers and blend them with aesthetic wrapping styles to create custom bouquets tailored to your personality. From vibrant mixed florals to soft coquette palettes, our mission is to deliver not just flowers, but memorable smiles and heartfelt emotions straight to your loved ones.',
]

const FLOWERS = [
  { left: '10.9%', top: '1%', width: 280, rotate: -8 },
  { left: '71.9%', top: '1%', width: 280, rotate: 10 },
  { left: '10.9%', top: '61%', width: 280, rotate: -6 },
  { left: '71.9%', top: '61%', width: 280, rotate: 12 },
  { left: '40.3%', top: '-21%', width: 280, rotate: 6 },
  { left: '40.3%', top: '31%', width: 280, rotate: -4 },
  { left: '40.3%', top: '87%', width: 280, rotate: 8 },
].map((flower) => ({ ...flower, src: pattern2, opacity: 0.3 }))

export default function AboutSection() {

  return (
    <section
      id="about"
      className="relative scroll-mt-24 overflow-hidden bg-ivory px-4 py-16 sm:px-6 lg:px-12 lg:py-24"
    >
      <FlowerDecor items={FLOWERS} />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-bold italic leading-tight text-raspberry sm:text-5xl">
            {COPY.titleTop}
            <br />
            by.ficlo florist
          </h2>
          <div className="mt-6 space-y-6 text-base font-medium text-neutral-900 sm:text-lg lg:text-xl">
            {PARAGRAPHS.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src={welcome}
            alt={COPY.imageAlt}
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}