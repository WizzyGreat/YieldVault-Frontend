import React from 'react';

/**
 * Lightweight hover/focus tooltip. Wraps its children and reveals a small
 * bubble with the given text. The trigger is focusable so the tip is also
 * reachable by keyboard.
 */

interface TooltipProps {
  /** Tooltip content */
  text: string;
  /** The element being described */
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <span className="tooltip" tabIndex={0}>
      {children}
      <span className="tooltip-bubble" role="tooltip">
        {text}
      </span>
    </span>
  );
}
