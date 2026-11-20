/**
 * Tilted sticker-tape band with the stack scrolling across it.
 * Pure CSS animation, paused for reduced-motion users by the global rule.
 */
export default function Marquee({ items, color = "lime", rotate = -2, reverse = false }) {
  const row = [...items, ...items];
  return (
    <div
      className="relative py-3 border-y-2 border-ink overflow-hidden select-none"
      style={{ background: `var(--${color})`, transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {row.map((item, i) => (
          <span
            key={i}
            className="font-display font-extrabold text-2xl md:text-3xl text-ink px-5 whitespace-nowrap"
          >
            {item} <span className="opacity-60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
