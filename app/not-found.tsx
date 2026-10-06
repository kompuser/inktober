import Link from 'next/link'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="mx-auto flex max-w-3xl flex-col gap-4 px-5 py-10">
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="max-w-prose text-lg leading-relaxed">
          This drawing does not exist or has not been published yet.
        </p>
        <p>
          <Link href="/">Back to all drawings</Link>
        </p>
      </main>
      <SiteFooter />
    </>
  )
}
