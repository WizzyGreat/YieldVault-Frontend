import { useEffect } from 'react';
import { useToggle } from '../hooks/useToggle.js';

/**
 * Toggle between the default dark theme and a light theme by setting a
 * `data-theme` attribute on the document root. The choice is persisted to
 * localStorage so it survives reloads.
 */
const STORAGE_KEY = 'yieldvault:theme';

export default function ThemeToggle() {
  const [light, { toggle }] = useToggle(
    typeof localStorage !== 'undefined' &&
      localStorage.getItem(STORAGE_KEY) === 'light',
  );

  useEffect(() => {
    const theme = light ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage unavailable — ignore */
    }
  }, [light]);

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-pressed={light}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      title="Toggle theme"
    >
      {light ? '🌙' : '☀️'}
    </button>
  );
}
