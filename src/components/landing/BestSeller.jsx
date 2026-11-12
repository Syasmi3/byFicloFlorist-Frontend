import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import ProductCard from '../ui/ProductCard'
import { bestSellers } from '../../data/products'

const MIN_SLIDES_FOR_LOOP = 8
const slides =
  bestSellers.length >= MIN_SLIDES_FOR_LOOP
    ? bestSellers
    : Array.from(
        { length: Math.ceil(MIN_SLIDES_FOR_LOOP / bestSellers.length) },
        () => bestSellers
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

export default function BestSeller() {
  return (
    <section
      id="best-seller"
      className="scroll-mt-24 bg-ivory px-4 py-6 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px] bg-blush px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl">
            Our Best Seller !
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            Explore our most beloved floral arrangements, crafted to bring joy
            and beauty to every celebration.
          </p>
        </div>

        <div className="mt-8 select-none lg:mt-12">
          <Swiper
            modules={[Autoplay]}
            autoplay={AUTOPLAY}
            loop
            grabCursor
            speed={700}
            threshold={5}
            slidesPerView={1.25}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
            }}
          >
            {slides.map((product, index) => (
              <SwiperSlide key={`${product.id}-${index}`} className="h-auto!">
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}