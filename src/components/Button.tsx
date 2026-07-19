/**
 * Reusable button with primary/secondary/ghost variants.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {'primary'|'secondary'|'ghost'} [props.variant]
 * @param {boolean} [props.disabled]
 * @param {boolean} [props.loading]
 * @param {() => void} [props.onClick]
 * @param {'button'|'submit'} [props.type]
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  loading?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  loading = false,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn-${variant}`}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading ? 'Processing…' : children}
    </button>
  );
}
