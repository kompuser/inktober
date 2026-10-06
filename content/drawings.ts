/**
 * HOW TO PUBLISH A NEW DRAWING
 *
 * 1. Export your scan/photo and save it in `public/drawings/`
 *    (e.g. `public/drawings/day-05.jpg`).
 * 2. Add an entry below with the day number, prompt, file name and
 *    a text alternative (`alt`). The alt text is required for accessibility
 *    (WCAG 1.1.1 / RGAA criterion 1.2): describe what the drawing shows.
 * 3. Optionally add a longer `description` for detailed drawings
 *    (RGAA criterion 1.6 — detailed description for complex images).
 * 4. Commit and push. The drawing appears on its day (Europe/Paris time),
 *    so you can also push several drawings in advance.
 */

export const INKTOBER_YEAR = 2026
export const SITE_TIME_ZONE = 'Europe/Paris'

export type Drawing = {
  day: number
  prompt: string
  image: string
  alt: string
  description?: string
}

export const drawings: Drawing[] = [
  {
    day: 1,
    prompt: 'Lighthouse',
    image: '/drawings/day-01.png',
    alt: 'A small lighthouse standing on a rocky cliff above crosshatched waves, with three seagulls flying nearby.',
    description:
      'Drawn with a 0.3 fineliner. The waves are built from layered crosshatching that gets denser toward the bottom of the page.',
  },
  {
    day: 2,
    prompt: 'Shell',
    image: '/drawings/day-02.png',
    alt: 'A spiral seashell, shaded with stippling and fine crosshatching, centered on a white page.',
  },
  {
    day: 3,
    prompt: 'Nap',
    image: '/drawings/day-03.png',
    alt: 'A cat curled up asleep on top of a stack of old books, with bold brush shadows.',
    description:
      'Brush pen for the shadows, fineliner for the fur and the book spines.',
  },
  {
    day: 4,
    prompt: 'Ancient',
    image: '/drawings/day-04.png',
    alt: 'A gnarled old oak tree with twisting roots and a tiny wooden door carved into its trunk.',
  },
]
