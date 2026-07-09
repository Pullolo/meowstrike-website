/** The lucide-react icon pack (1.x) dropped brand/logo glyphs, so the GitHub
 *  mark is a small local inline SVG instead of a dependency. */
export function GithubMark({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.66-4.04-1.66-.55-1.42-1.34-1.81-1.34-1.81-1.09-.77.08-.75.08-.75 1.21.09 1.84 1.28 1.84 1.28 1.07 1.87 2.81 1.33 3.5 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.13 0-1.35.47-2.46 1.24-3.32-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.24 11.24 0 0 1 6.01 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.86 1.24 1.97 1.24 3.32 0 4.76-2.81 5.81-5.48 6.12.43.38.81 1.13.81 2.28 0 1.64-.02 2.97-.02 3.37 0 .33.22.72.83.6C20.57 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
  );
}
