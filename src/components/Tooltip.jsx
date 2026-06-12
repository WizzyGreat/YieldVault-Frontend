/**
 * Lightweight hover/focus tooltip. Wraps its children and reveals a small
 * bubble with the given text. The trigger is focusable so the tip is also
 * reachable by keyboard.
 * @param {object} props
 * @param {string} props.text - tooltip content
 * @param {React.ReactNode} props.children - the element being described
 */
export default function Tooltip({ text, children }) {
  return (
    <span className="tooltip" tabIndex={0}>
      {children}
      <span className="tooltip-bubble" role="tooltip">
        {text}
      </span>
    </span>
  );
}
