import { useState } from 'react'
import ProductCard from '../ui/ProductCard'
import { CATALOG_CATEGORIES, catalogProducts } from '../../data/catalog'

const INITIAL_COUNT = 6

const COPY = {
  title: 'Our Catalog',
  subtitle: 'Browse through our full collection of floral bouquets, bloom boxes, and custom floral arrangements.',
  filterLabel: 'Filter products by category',
  empty: 'No products in this category yet.',
  showAll: 'All Catalog',
  showLess: 'Show Less',
}

export default function OurCatalog() {
  const [category, setCategory] = useState('all')
  const [showAll, setShowAll] = useState(false)

  const filtered =
    category === 'all'
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === category)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)
  const hasMore = filtered.length > INITIAL_COUNT

  const handleCategory = (key) => {
    setCategory(key)
    setShowAll(false)
  }

  return (
    <section
      id="catalog"
      className="scroll-mt-24 bg-ivory px-4 py-6 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-[1440px] bg-moss px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        <div className="text-center">
          <h2 className="font-display text-4xl font-bold italic text-raspberry sm:text-5xl">
            {COPY.title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base font-medium text-brand-green sm:text-xl lg:text-2xl">
            {COPY.subtitle}
          </p>
        </div>

        {/* Filter kategori */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3"
          role="group"
          aria-label={COPY.filterLabel}
        >
          {CATALOG_CATEGORIES.map((item) => {
            const active = item.key === category
            return (
              <button
                key={item.key}
                type="button"
                aria-pressed={active}
                onClick={() => handleCategory(item.key)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition sm:text-base ${
                  active
                    ? 'bg-[#626B45] text-white'
                    : 'bg-white text-spring-green hover:bg-ivory'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        {visible.length > 0 ? (
          <ul className="mt-8 grid grid-cols-2 gap-4 lg:mt-10 lg:grid-cols-3 lg:gap-6">
            {visible.map((product) => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-10 text-center text-base font-medium text-brand-green">
            {COPY.empty}
          </p>
        )}

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex h-12 items-center rounded-xl bg-brand-gradient px-10 text-base font-bold text-white transition hover:brightness-95"
            >
              {showAll ? COPY.showLess : COPY.showAll}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}