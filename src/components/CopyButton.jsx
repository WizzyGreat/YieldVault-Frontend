import { useClipboard } from '../hooks/useClipboard.js';

/**
 * Button that copies the given text to the clipboard and shows transient
 * confirmation. Builds on the shared useClipboard hook.
 * @param {object} props
 * @param {string} props.text - value to copy
 * @param {string} [props.label] - idle label
 * @param {string} [props.copiedLabel] - label shown after a successful copy
 */
export default function CopyButton({
  text,
  label = 'Copy',
  copiedLabel = 'Copied!',
}) {
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
