import { formatRupiah } from '../../utils/format'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductCard({ product }) {
  const { t } = useLanguage()
  const name = t(product.name)
  const ingredients = t(product.ingredients)

  return (
    <div className="group h-full">
      <article className="flex h-full flex-col rounded-xl bg-white p-3 shadow-sm transition duration-300 ease-out group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-raspberry/20 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <img
          src={product.image}
          alt={name}
          loading="lazy"
          draggable="false"
          className="aspect-square w-full rounded-lg object-cover"
        />
        <h3 className="mt-3 font-display text-base font-bold italic text-neutral-900">
          {name}
        </h3>
        {ingredients && (
          <p className="mt-2 text-xs font-medium text-neutral-900">
            {ingredients}
          </p>
        )}
        <p className="mt-auto pt-3 text-sm font-bold text-neutral-900">
          {formatRupiah(product.price)}
        </p>
      </article>
    </div>
  )
}