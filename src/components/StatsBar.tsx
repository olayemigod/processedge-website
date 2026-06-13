import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import './StatsBar.css'

interface StatItem {
  /** Numeric value to animate to */
  value: number
  /** Optional suffix appended after the number (e.g. '+', '%') */
  suffix?: string
  label: string
  color: 'blue' | 'green'
}

const STATS: StatItem[] = [
  { value: 50,  suffix: '+', label: 'Clients Served',    color: 'blue'  },
  { value: 8,   suffix: '+', label: 'Products & Apps',   color: 'green' },
  { value: 4,                label: 'Core Services',     color: 'blue'  },
  { value: 5,   suffix: '+', label: 'Industries Served', color: 'green' },
]

function StatNumber({ item, inView }: { item: StatItem; inView: boolean }) {
  const count = useCountUp({ end: item.value, inView, duration: 1400 })
  return (
    <div className="stats-bar__value" aria-label={`${item.value}${item.suffix ?? ''}`}>
      {count}{item.suffix ?? ''}
    </div>
  )
}

export default function StatsBar() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className="stats-bar" ref={ref} aria-label="Key metrics">
      <div className="container stats-bar__inner">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`stats-bar__item stats-bar__item--${s.color}${i < STATS.length - 1 ? ' stats-bar__item--border' : ''}`}
          >
            <StatNumber item={s} inView={inView} />
            <div className="stats-bar__label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
