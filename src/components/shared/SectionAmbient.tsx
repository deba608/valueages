/**
 * Decorative ambient background shared by sections that use the
 * radial-faded teal grid + soft glow orbs pattern (Services, WhyChooseUs).
 *
 * Rendered with pointer-events-none and aria-hidden so it is invisible
 * to assistive technology and never intercepts mouse events.
 */
export default function SectionAmbient() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Radial-masked teal grid — very low opacity, decorative only */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #109B82 1px, transparent 1px), linear-gradient(to bottom, #109B82 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      {/* Soft ambient glow orbs */}
      <div className="absolute top-1/4 left-[-10%] h-[400px] w-[400px] rounded-full bg-brand-teal/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-[-10%] h-[350px] w-[350px] rounded-full bg-brand-rust/5 blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-green/[0.03] blur-[140px]" />
    </div>
  );
}
