export function HorizonBackdrop({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Glow at the horizon line */}
      <div
        className="absolute left-1/2 top-[58%] h-[60vh] w-[140vw] -translate-x-1/2 rounded-[50%] blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklch, var(--primary) 28%, transparent), transparent 70%)",
          animation: "ethersol-drift 9s ease-in-out infinite",
        }}
      />

      {/* Perspective grid */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[70%] w-full opacity-[0.35]"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMax slice"
        fill="none"
      >
        <defs>
          <linearGradient id="gridFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="lineFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--foreground)" stopOpacity="0" />
            <stop offset="100%" stopColor="var(--foreground)" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Horizon line */}
        <line x1="0" y1="180" x2="1200" y2="180" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />

        {/* Horizontal depth lines */}
        {[210, 250, 300, 365, 450, 560].map((y, i) => (
          <line key={y} x1="0" y1={y} x2="1200" y2={y} stroke="url(#gridFade)" strokeWidth="1" opacity={0.3 + i * 0.1} />
        ))}

        {/* Vanishing-point verticals */}
        {Array.from({ length: 21 }).map((_, i) => {
          const x = (i / 20) * 1200
          return <line key={i} x1={600} y1={180} x2={x} y2={600} stroke="url(#lineFade)" strokeWidth="1" />
        })}
      </svg>
    </div>
  )
}
