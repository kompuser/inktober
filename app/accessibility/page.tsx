import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Accessibility statement',
  description: 'How this Inktober blog follows WCAG 2.2 AA and the French RGAA 4.1.',
}

const measures = [
  'Every drawing has a text alternative, and detailed drawings have a longer written description.',
  'Text and interface colours meet a contrast ratio of at least 4.5:1 (WCAG 1.4.3, RGAA 3.2).',
  'All pages can be used with a keyboard only, with a clearly visible focus indicator.',
  'A “Skip to content” link is the first element on every page.',
  'Each page has a unique title, a single main heading, and a consistent heading structure.',
  'Pages use landmarks (header, navigation, main, footer) so assistive technologies can move between them.',
  'Links are underlined so they are not identified by colour alone.',
  'Text can be resized up to 200% and the layout reflows on narrow screens without horizontal scrolling.',
  'Animations are avoided and the site respects the “reduce motion” system setting.',
  'The language of the page is declared in the code.',
]

export default function AccessibilityPage() {
  return (
    <>
      <SiteHeader current="accessibility" />
      <main id="main" tabIndex={-1} className="mx-auto flex max-w-3xl flex-col gap-10 px-5 py-10">
        <h1 className="text-4xl font-bold leading-tight text-balance sm:text-5xl">
          Accessibility statement
        </h1>

        <section aria-labelledby="status-heading" className="flex flex-col gap-3">
          <h2 id="status-heading" className="text-2xl font-bold">
            Compliance status
          </h2>
          <p className="max-w-prose leading-relaxed">
            This site aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.2,
            level AA, and to the French Référentiel général d&apos;amélioration de
            l&apos;accessibilité (RGAA) 4.1. It has not yet been audited by an independent
            organisation, so it is declared <strong>partially compliant</strong>.
          </p>
        </section>

        <section aria-labelledby="measures-heading" className="flex flex-col gap-3">
          <h2 id="measures-heading" className="text-2xl font-bold">
            What has been done
          </h2>
          <ul className="flex max-w-prose list-disc flex-col gap-2 pl-6 leading-relaxed">
            {measures.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact-heading" className="flex flex-col gap-3">
          <h2 id="contact-heading" className="text-2xl font-bold">
            Feedback
          </h2>
          <p className="max-w-prose leading-relaxed">
            If you cannot access a drawing or a page, please get in touch and describe the
            problem. A text version of any drawing can be provided on request.
          </p>
          <p className="max-w-prose leading-relaxed">
            If you do not get a satisfactory answer, you can contact the Défenseur des droits
            at{' '}
            <a href="https://www.defenseurdesdroits.fr" lang="fr">
              defenseurdesdroits.fr
            </a>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
