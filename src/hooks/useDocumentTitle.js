import { useEffect } from 'react';
import { CONFIG } from '../constants/config.js';

/**
 * Set the browser tab title, suffixed with the app name. Restores the
 * previous title on unmount.
 * @param {string} title
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    const previous = document.title;
    document.title = title ? `${title} · ${CONFIG.appName}` : CONFIG.appName;
    return () => {
      document.title = previous;
    };
  }, [title]);
}

export default useDocumentTitle;
