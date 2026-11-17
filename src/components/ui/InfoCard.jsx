export default function InfoCard({ icon, title, description }) {
  return (
    <li className="flex flex-col items-center rounded-3xl border border-leaf bg-sage px-6 py-8 text-center">
      <img src={icon} alt="" className="h-12 w-12 object-contain" />
      <h3 className="mt-4 font-display text-xl font-bold italic text-neutral-900">
        {title}
      </h3>
      <p className="mt-3 max-w-xs text-sm font-medium text-neutral-900">
        {description}
      </p>
    </li>
  )
}