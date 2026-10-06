import type { Drawing } from '@/content/drawings'

export function DrawingFigure({
  drawing,
  priority = false,
}: {
  drawing: Drawing
  priority?: boolean
}) {
  const descriptionId = `drawing-${drawing.day}-description`

  return (
    <figure className="flex flex-col gap-4">
      <img
        src={drawing.image || '/placeholder.svg'}
        alt={drawing.alt}
        aria-describedby={drawing.description ? descriptionId : undefined}
        width={1024}
        height={1024}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        className="h-auto w-full border-2 border-foreground bg-card"
      />
      {drawing.description ? (
        <figcaption id={descriptionId} className="leading-relaxed text-pretty">
          {drawing.description}
        </figcaption>
      ) : null}
    </figure>
  )
}
