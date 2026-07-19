/**
 * Inline alert banner for info, success, warning and error messages.
 * Renders a polite live region so screen readers announce updates.
 * @param {object} props
 * @param {'info'|'success'|'warning'|'error'} [props.variant]
 * @param {string} [props.title]
 * @param {React.ReactNode} props.children
 */
const ICONS = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '⛔',
};

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  children?: React.ReactNode;
}

export default function Alert({ variant = 'info', title, children }: AlertProps) {
  return (
    <div className={`alert alert-${variant}`} role="status" aria-live="polite">
      <span className="alert-icon" aria-hidden="true">
        {ICONS[variant] || ICONS.info}
      </span>
      <div className="alert-body">
        {title && <strong className="alert-title">{title}</strong>}
        {children && <div className="alert-text">{children}</div>}
      </div>
    </div>
  );
}
