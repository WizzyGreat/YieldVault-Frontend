/**
 * Animated placeholder block shown while content is loading. Useful for
 * card/list layouts where a spinner would cause layout shift.
 */

interface SkeletonProps {
  width?: string;
  height?: string;
  /** Number of stacked blocks to render */
  count?: number;
}

export default function Skeleton({ width = '100%', height = '1rem', count = 1 }: SkeletonProps) {
  return (
    <div className="skeleton-group" aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="skeleton" style={{ width, height }} />
      ))}
    </div>
  );
}
