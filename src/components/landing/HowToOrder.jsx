import hto1 from '../../assets/icon/hto1.png'
import hto2 from '../../assets/icon/hto2.png'
import hto3 from '../../assets/icon/hto3.png'
import hto4 from '../../assets/icon/hto4.png'
import pattern2 from '../../assets/pattern2.png'
import FlowerDecor from '../ui/FlowerDecor'
import InfoCard from '../ui/InfoCard'

const STEPS = [
  {
    icon: hto1,
    title: 'Choose a Floral Design',
    description:
      'Pick your favorite arrangement from our catalog, or customize your own bouquet design.',
  },
  {
    icon: hto2,
    title: 'Fill in the Order Form',
    description:
      'Enter the recipients details, delivery schedule (before 2:00 PM WIB for same-day), and greeting card note.',
  },
  {
    icon: hto3,
    title: 'Pay via BCA Transfer',
    description:
      'Transfer the exact amount with the unique code to our BCA account and upload your payment proof.',
  },
  {
    icon: hto4,
    title: 'Flower Delivery',
    description:
      'Once verified, you will get a digital receipt while we craft and deliver your bouquet on time.',
  },
]

const FLOWERS = [
  { left: '8%', top: '4%', width: 270, rotate: -8 },
  { left: '56%', top: '4%', width: 270, rotate: 10 },
  { left: '29%', top: '-19%', width: 240, rotate: 6 },
  { left: '77%', top: '-19%', width: 240, rotate: -10 },
  { left: '37%', top: '45%', width: 230, rotate: 12 },
  { left: '80%', top: '45%', width: 260, rotate: -6 },
  { left: '9%', top: '67%', width: 250, rotate: 8 },
  { left: '55%', top: '62%', width: 260, rotate: -12 },
].map((flower) => ({ ...flower, src: pattern2, opacity: 0.3 }))

export default function HowToOrder() {
  return (
    <section
      id="how-to-order"
      className="relative scroll-mt-24 overflow-hidden bg-ivory px-4 py-16 sm:px-6 lg:px-12 lg:py-20"
    >
      <FlowerDecor items={FLOWERS} />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl">
            How To Order
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            Ordering your dream bouquet is quick and easy! Just follow these
            simple steps to place your order.
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {STEPS.map((step) => (
            <InfoCard
              key={step.title}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
