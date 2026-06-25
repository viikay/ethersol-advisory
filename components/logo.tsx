export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 2 4 9v14l12 7 12-7V9L16 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.4"
      />
      <path d="M16 6 9 16l7 4 7-4-7-10Z" fill="currentColor" />
      <path d="M9 18l7 4 7-4-7 8-7-8Z" fill="currentColor" opacity="0.65" />
    </svg>
  )
}
