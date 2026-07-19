import { useClipboard } from '../hooks/useClipboard.js';

/**
 * Button that copies the given text to the clipboard and shows transient
 * confirmation. Builds on the shared useClipboard hook.
 */

interface CopyButtonProps {
  /** Value to copy */
  text: string;
  /** Idle label */
  label?: string;
  /** Label shown after a successful copy */
  copiedLabel?: string;
}

export default function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied!',
}: CopyButtonProps) {
  const { copied, copy } = useClipboard();

  return (
    <button
      type="button"
      className="copy-button"
      onClick={() => copy(text)}
      aria-label={copied ? copiedLabel : label}
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
