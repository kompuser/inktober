import Link from 'next/link'
import type { Drawing } from '@/content/drawings'
import { DAYS_IN_OCTOBER, formatDay } from '@/lib/drawings'

export function MonthGrid({ drawings }: { drawings: Drawing[] }) {
  const byDay = new Map(drawings.map((d) => [d.day, d]))
  const days = Array.from({ length: DAYS_IN_OCTOBER }, (_, i) => i + 1)

  return (
    <section aria-labelledby="month-heading" className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 id="month-heading" className="text-2xl font-bold">
          All 31 days
        </h2>
        <p className="text-muted-foreground">
          {`${drawings.length} of ${DAYS_IN_OCTOBER} drawings published.`}
        </p>
      </div>

      <ol className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {days.map((day) => {
          const drawing = byDay.get(day)

          if (!drawing) {
            return (
              <li
                key={day}
                className="flex aspect-square flex-col justify-between border border-dashed border-border p-3 text-muted-foreground"
              >
                <span className="font-bold">{`Day ${day}`}</span>
                <span className="text-sm">No drawing yet</span>
              </li>
            )
          }

          return (
            <li key={day}>
              <Link
                href={`/day/${day}`}
                className="group flex flex-col gap-2 no-underline"
              >
                <img
                  src={drawing.image || '/placeholder.svg'}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={400}
                  height={400}
                  className="aspect-square w-full border border-foreground bg-card object-cover"
                />
                <span className="flex flex-col">
                  <span className="font-bold underline decoration-2 underline-offset-4 group-hover:decoration-primary">
                    {`Day ${day}: ${drawing.prompt}`}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {formatDay(day)}
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
