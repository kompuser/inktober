import Link from 'next/link'
import { INKTOBER_YEAR } from '@/lib/drawings'

export function SiteHeader({ current }: { current?: 'home' | 'accessibility' }) {
  return (
    <header className="border-b-2 border-foreground">
      <div className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-6 sm:flex-row sm:items-baseline sm:justify-between">
        <Link
          href="/"
          className="font-sans text-2xl font-bold tracking-tight no-underline"
          aria-current={current === 'home' ? 'page' : undefined}
        >
          {`Inktober ${INKTOBER_YEAR}`}
          <span className="sr-only">{' — home'}</span>
        </Link>
        <nav aria-label="Main">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-base">
            <li>
              <Link href="/" aria-current={current === 'home' ? 'page' : undefined}>
                All drawings
              </Link>
            </li>
            <li>
              <Link
                href="/accessibility"
                aria-current={current === 'accessibility' ? 'page' : undefined}
              >
                Accessibility
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
