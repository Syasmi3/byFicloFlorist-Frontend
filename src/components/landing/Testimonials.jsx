import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import FlowerDecor from '../ui/FlowerDecor'
import pattern3 from '../../assets/pattern3.png'
import { testimonials } from '../../data/testimonials'

const MIN_SLIDES_FOR_LOOP = 8
const slides =
  testimonials.length >= MIN_SLIDES_FOR_LOOP
    ? testimonials
    : Array.from(
        { length: Math.ceil(MIN_SLIDES_FOR_LOOP / testimonials.length) },
        () => testimonials
      ).flat()

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

const AUTOPLAY = prefersReducedMotion
  ? false
  : {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }

const FLOWERS = [
  { left: '30.7%', top: '-25%', width: 190, rotate: 10 },
  { left: '71.2%', top: '-25%', width: 190, rotate: 10 },
  { left: '10.9%', top: '0%', width: 210, rotate: 6 },
  { left: '54.7%', top: '0%', width: 210, rotate: -10 },
  { left: '29.1%', top: '51%', width: 160, rotate: 12 },
  { left: '74.9%', top: '51%', width: 160, rotate: -6 },
  { left: '9.3%', top: '76%', width: 200, rotate: -8 },
  { left: '54.4%', top: '76%', width: 200, rotate: 8 },
].map((flower) => ({ ...flower, src: pattern3, opacity: 0.3 }))

function Avatar({ name, src }) {
  if (src) {
    return (
      <img
        src={src}
        alt=""
        loading="lazy"
        draggable="false"
        className="h-12 w-12 shrink-0 rounded-full object-cover sm:h-14 sm:w-14"
      />
    )
  }
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
  return (
    <span
      aria-hidden="true"
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-raspberry/15 text-sm font-bold text-raspberry sm:h-14 sm:w-14"
    >
      {initials}
    </span>
  )
}

function TestimonialCard({ item }) {
  return (
    <div className="group h-full">
      <figure className="flex h-full flex-col rounded-[28px] border-2 border-raspberry bg-[#FCEFF3] p-6 transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-raspberry/20 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0 sm:p-8">
        <blockquote className="flex-1 text-base font-medium text-neutral-900 sm:text-lg lg:text-xl">
          “{item.text}”
        </blockquote>

        <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-300 pt-5">
          <Avatar name={item.name} src={item.avatar} />
          <div>
            <p className="font-display text-lg font-bold italic leading-tight text-raspberry sm:text-xl lg:text-2xl">
              {item.name}
            </p>
            <p className="mt-1 text-sm font-medium text-spring-green sm:text-base">
              {item.location} ({item.time})
            </p>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 overflow-hidden bg-ivory px-4 py-16 sm:px-6 lg:px-12 lg:py-20"
    >
      <FlowerDecor items={FLOWERS} />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl lg:text-6xl">
            Our Customers Speak
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            Heartfelt words and sweet moments shared by those who trust us with
            their special days.
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-[1280px] select-none lg:mt-10">
          <Swiper
            className="-mx-3! px-3! pt-4! pb-6!"
            modules={[Autoplay]}
            autoplay={AUTOPLAY}
            loop
            grabCursor
            speed={800}
            threshold={5}
            slidesPerView={1.1}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 1.8, spaceBetween: 20 },
              1024: { slidesPerView: 2.6, spaceBetween: 24 },
            }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={`${item.id}-${index}`} className="h-auto!">
                <TestimonialCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}