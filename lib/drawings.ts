import {
  drawings,
  INKTOBER_YEAR,
  SITE_TIME_ZONE,
  type Drawing,
} from '@/content/drawings'

export const DAYS_IN_OCTOBER = 31

function todayInSiteTimeZone() {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: SITE_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())
}

export function isoDateForDay(day: number) {
  return `${INKTOBER_YEAR}-10-${String(day).padStart(2, '0')}`
}

export function formatDay(day: number) {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${isoDateForDay(day)}T00:00:00Z`))
}

export function isPublished(day: number) {
  return isoDateForDay(day) <= todayInSiteTimeZone()
}

export function getPublishedDrawings(): Drawing[] {
  return drawings
    .filter((d) => d.day >= 1 && d.day <= DAYS_IN_OCTOBER && isPublished(d.day))
    .sort((a, b) => a.day - b.day)
}

export function getDrawing(day: number) {
  return getPublishedDrawings().find((d) => d.day === day)
}

export function getNeighbours(day: number) {
  const published = getPublishedDrawings()
  const index = published.findIndex((d) => d.day === day)
  return {
    previous: index > 0 ? published[index - 1] : undefined,
    next: index >= 0 && index < published.length - 1 ? published[index + 1] : undefined,
  }
}

export { INKTOBER_YEAR }
