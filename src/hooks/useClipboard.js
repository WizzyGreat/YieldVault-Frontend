import { useState, useCallback } from 'react';

/**
 * Copy text to the clipboard and briefly track a "copied" flag for UI
 * feedback. The flag resets automatically after the given timeout.
 * @param {number} [resetMs=1500]
 * @returns {{ copied: boolean, copy: (text: string) => Promise<boolean> }}
 */
export function useClipboard(resetMs = 1500) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text) => {
      if (!navigator?.clipboard || !text) return false;
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), resetMs);
        return true;
      } catch {
        return false;
      }
    },
    [resetMs],
  );

  return { copied, copy };
}

export default useClipboard;
