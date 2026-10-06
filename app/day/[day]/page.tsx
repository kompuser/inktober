import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DrawingFigure } from '@/components/drawing-figure'
import {
  DAYS_IN_OCTOBER,
  formatDay,
  getDrawing,
  getNeighbours,
  INKTOBER_YEAR,
  isoDateForDay,
} from '@/lib/drawings'

export const revalidate = 3600

type Props = { params: Promise<{ day: string }> }

export function generateStaticParams() {
  return Array.from({ length: DAYS_IN_OCTOBER }, (_, i) => ({ day: String(i + 1) }))
}

function parseDay(value: string) {
  const day = Number(value)
  return Number.isInteger(day) && day >= 1 && day <= DAYS_IN_OCTOBER ? day : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const day = parseDay((await params).day)
  const drawing = day ? getDrawing(day) : undefined
  if (!drawing) return { title: 'Drawing not found' }
  return {
    title: `Day ${drawing.day}: ${drawing.prompt}`,
    description: drawing.alt,
    openGraph: { images: [drawing.image] },
  }
}

export default async function DayPage({ params }: Props) {
  const day = parseDay((await params).day)
  const drawing = day ? getDrawing(day) : undefined
  if (!drawing) notFound()

  const { previous, next } = getNeighbours(drawing.day)

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="mx-auto flex max-w-3xl flex-col gap-8 px-5 py-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap gap-2 text-base">
            <li className="after:ml-2 after:content-['/'] after:text-muted-foreground">
              <Link href="/">{`Inktober ${INKTOBER_YEAR}`}</Link>
            </li>
            <li>
              <span aria-current="page">{`Day ${drawing.day}`}</span>
            </li>
          </ol>
        </nav>

        <article className="flex flex-col gap-6">
          <header className="flex flex-col gap-1">
            <h1 className="text-4xl font-bold leading-tight text-balance sm:text-5xl">
              {`Day ${drawing.day}: ${drawing.prompt}`}
            </h1>
            <p className="text-lg text-muted-foreground">
              <time dateTime={isoDateForDay(drawing.day)}>{formatDay(drawing.day)}</time>
            </p>
          </header>
          <DrawingFigure drawing={drawing} priority />
        </article>

        <nav aria-label="Previous and next drawings" className="border-t border-border pt-6">
          <ul className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <li>
              {previous ? (
                <Link href={`/day/${previous.day}`} rel="prev">
                  <span aria-hidden="true">{'← '}</span>
                  {`Previous: day ${previous.day}, ${previous.prompt}`}
                </Link>
              ) : null}
            </li>
            <li>
              {next ? (
                <Link href={`/day/${next.day}`} rel="next">
                  {`Next: day ${next.day}, ${next.prompt}`}
                  <span aria-hidden="true">{' →'}</span>
                </Link>
              ) : null}
            </li>
          </ul>
        </nav>
      </main>
      <SiteFooter />
    </>
  )
}
