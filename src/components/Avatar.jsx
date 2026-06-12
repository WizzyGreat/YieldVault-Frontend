/**
 * Circular identity badge. Renders a provided emoji/icon or falls back to the
 * first initials derived from a name. Useful for assets and wallet accounts.
 * @param {object} props
 * @param {string} [props.name] - source for initials when no icon is given
 * @param {string} [props.icon] - emoji or single character to display
 * @param {'sm'|'md'|'lg'} [props.size]
 */
function initials(name) {
  if (!name || typeof name !== 'string') return '?';
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();
}

export default function Avatar({ name, icon, size = 'md' }) {
  return (
    <span className={`avatar avatar-${size}`} aria-hidden="true">
      {icon || initials(name)}
    </span>
  );
}
