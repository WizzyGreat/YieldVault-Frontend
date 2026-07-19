import { clamp } from '../utils/format.js';

/**
 * Simple previous/next pager with a "page X of N" indicator. Buttons disable
 * at the bounds and the reported page is clamped to a valid range.
 */

interface PaginationProps {
  /** Current 1-based page */
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  const go = (next: number) => onChange(clamp(next, 1, totalPages));

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => go(page - 1)}
        disabled={page <= 1}
      >
        ← Prev
      </button>
      <span className="pagination-status" aria-live="polite">
        Page {page} of {totalPages}
      </span>
      <button
        type="button"
        className="btn btn-ghost"
        onClick={() => go(page + 1)}
        disabled={page >= totalPages}
      >
        Next →
      </button>
    </nav>
  );
}
