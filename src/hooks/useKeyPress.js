import { useEffect, useRef } from 'react';

/**
 * Run a handler whenever a specific key is pressed. Commonly used to close
 * modals on Escape or submit on Enter. The latest handler is always called.
 * @param {string} targetKey - KeyboardEvent.key value, e.g. 'Escape'
 * @param {(event: KeyboardEvent) => void} handler
 */
export function useKeyPress(targetKey, handler) {
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === targetKey) savedHandler.current(event);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [targetKey]);
}

export default useKeyPress;
