import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  /** Small all-caps label rendered above the heading */
  eyebrow: string;
  /** Main section heading — supports JSX for bold/span highlights */
  heading: React.ReactNode;
  /** Optional descriptive paragraph below the heading */
  description?: React.ReactNode;
  /** ID applied to the <h2> — used for aria-labelledby on the section */
  headingId?: string;
  /** Additional class names on the wrapper div */
  className?: string;
  /** Override max-width of the text block. Defaults to "max-w-3xl" */
  maxWidth?: string;
}

/**
 * Reusable section header: eyebrow chip → h2 heading → description.
 * Drop into any section to keep the visual language consistent.
 *
 * @example
 * <SectionHeader
 *   eyebrow="Our Services"
 *   heading="How We Accelerate Your GTM"
 *   description="Focused advisory across three proven levers."
 *   headingId="services-title"
 * />
 */
export default function SectionHeader({
  eyebrow,
  heading,
  description,
  headingId,
  className,
  maxWidth = "max-w-3xl",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mx-auto mb-14 text-center",
        maxWidth,
        className,
      )}
    >
      <span className="section-eyebrow mx-auto mb-4">{eyebrow}</span>
      <h2
        id={headingId}
        className="font-serif text-3xl font-bold leading-tight text-slate-950 sm:text-4xl"
      >
        {heading}
      </h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}
