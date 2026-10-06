import Link from 'next/link'
import { INKTOBER_YEAR } from '@/lib/drawings'

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto flex max-w-3xl flex-col gap-2 px-5 py-8 text-base text-muted-foreground sm:flex-row sm:justify-between">
        <p>{`One ink drawing a day, every day of October ${INKTOBER_YEAR}.`}</p>
        <p>
          <Link href="/accessibility">Accessibility statement</Link>
        </p>
      </div>
    </footer>
  )
}
