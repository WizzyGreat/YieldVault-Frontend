/**
 * Circular identity badge. Renders a provided emoji/icon or falls back to the
 * first initials derived from a name. Useful for assets and wallet accounts.
 */

interface AvatarProps {
  /** Source for initials when no icon is given */
  name?: string;
  /** Emoji or single character to display */
  icon?: string;
  size?: 'sm' | 'md' | 'lg';
}

function initials(name?: string): string {
  if (!name || typeof name !== 'string') return '?';
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Avatar({ name, icon, size = 'md' }: AvatarProps) {
  return (
    <span className={`avatar avatar-${size}`} aria-hidden="true">
      {icon || initials(name)}
    </span>
  );
}
