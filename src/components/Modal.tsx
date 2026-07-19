import React, { useRef } from 'react';
import { useKeyPress } from '../hooks/useKeyPress.js';
import { useOnClickOutside } from '../hooks/useOnClickOutside.js';

/**
 * Accessible dialog. Closes on Escape and on an outside click. Renders
 * nothing while `open` is false so it can stay mounted in the tree.
 */

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const panelRef = useRef<HTMLDivElement>(null!);


  useKeyPress('Escape', () => {
    if (open) onClose();
  });
  useOnClickOutside(panelRef, () => {
    if (open) onClose();
  });

  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div
        ref={panelRef}
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="modal-head">
          {title && <h3 className="modal-title">{title}</h3>}
          <button
            type="button"
            className="modal-close"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
