import { useEffect } from 'react';

/**
 * Call a handler when a pointer or touch event lands outside the referenced
 * element. Useful for dismissing dropdowns, popovers and modals.
 * @param {import('react').RefObject<HTMLElement>} ref - element to watch
 * @param {(event: Event) => void} handler - called on an outside interaction
 */
export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      const el = ref?.current;
      if (!el || el.contains(event.target)) return;
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export default useOnClickOutside;
