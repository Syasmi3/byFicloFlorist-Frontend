import pattern from '../../assets/pattern.png'

export default function FlowerDecor({ items }) {
  return (
    <div
      className="pointer-events-none absolute inset-y-0 left-1/2 w-full max-w-[1440px] -translate-x-1/2"
      aria-hidden="true"
    >
      {items.map((item, i) => (
        <img
          key={i}
          src={item.src ?? pattern}
          alt=""
          className="absolute max-w-none select-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            width: `min(${item.width / 14.4}vw, ${item.width}px)`,
            transform: `rotate(${item.rotate ?? 0}deg)`,
            opacity: item.opacity ?? 1,
          }}
        />
      ))}
    </div>
  )
}