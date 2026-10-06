import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { MonthGrid } from '@/components/month-grid'
import { DrawingFigure } from '@/components/drawing-figure'
import { formatDay, getPublishedDrawings, INKTOBER_YEAR } from '@/lib/drawings'

export const revalidate = 3600

export default function HomePage() {
  const published = getPublishedDrawings()
  const latest = published.at(-1)

  return (
    <>
      <SiteHeader current="home" />
      <main id="main" tabIndex={-1} className="mx-auto flex max-w-3xl flex-col gap-16 px-5 py-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold leading-tight text-balance sm:text-5xl">
            {`A drawing a day for Inktober ${INKTOBER_YEAR}`}
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-pretty">
            Every day in October I make one ink drawing based on a single word prompt.
            The newest one is below, followed by the whole month.
          </p>
        </div>

        {latest ? (
          <section aria-labelledby="latest-heading" className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Latest drawing
              </p>
              <h2 id="latest-heading" className="text-3xl font-bold">
                {`Day ${latest.day}: ${latest.prompt}`}
              </h2>
              <p className="text-muted-foreground">
                <time dateTime={`${INKTOBER_YEAR}-10-${String(latest.day).padStart(2, '0')}`}>
                  {formatDay(latest.day)}
                </time>
              </p>
            </div>
            <DrawingFigure drawing={latest} priority />
            <p>
              <Link href={`/day/${latest.day}`}>
                {`Open the page for day ${latest.day}`}
              </Link>
            </p>
          </section>
        ) : (
          <p className="text-lg">The first drawing will be published on October 1st.</p>
        )}

        <MonthGrid drawings={published} />
      </main>
      <SiteFooter />
    </>
  )
}
