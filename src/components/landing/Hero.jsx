import heroImage from '../../assets/heroo.jpg'

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-mt-24 bg-ivory px-4 pt-4 sm:px-6 lg:px-12"
    >
      <div className="relative mx-auto flex min-h-[560px] max-w-[1440px] items-center justify-center overflow-hidden lg:min-h-[680px]">
        {/* Foto latar */}
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {/* Konten */}
        <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center text-white">
          <p className="font-display text-xl italic sm:text-2xl lg:text-3xl">
            Welcome To
          </p>

          <div className="mt-6 flex items-center gap-6 sm:gap-12 lg:gap-24">
            <span className="font-display text-xl italic sm:text-2xl lg:text-3xl">
              Estd.
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white font-display text-base italic sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px] lg:text-xl">
              BF
            </span>
            <span className="font-display text-xl italic sm:text-2xl lg:text-3xl">
              2021
            </span>
          </div>

          <h1 className="mt-4 font-display text-6xl font-bold italic sm:text-7xl lg:text-[80px] lg:leading-none">
            by.ficlo
          </h1>

          <p className="mt-4 font-display text-2xl italic sm:text-3xl lg:text-4xl">
            FLORIST & DEKORASI DEPOK
          </p>

          <p className="mt-6 max-w-4xl text-sm font-medium sm:text-base lg:text-xl">
            Specializing in artificial & fresh floral arrangements, personalized
            graduation bouquets, and custom gifting crafted with heart in Depok
          </p>

          <a
            href="#catalog"
            className="mt-8 inline-flex h-12 items-center rounded-xl bg-brand-gradient px-10 text-base font-bold text-white transition hover:brightness-95 lg:text-lg"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  )
}