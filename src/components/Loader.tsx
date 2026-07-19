/**
 * Simple spinner with an optional label, used for async loading states.
 */

interface LoaderProps {
  label?: string;
}

export default function Loader({ label = 'Loading…' }: LoaderProps) {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader-spinner" />
      <span className="loader-label">{label}</span>
    </div>
  );
}
