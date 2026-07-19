import React from 'react';

/**
 * Friendly placeholder shown when a list has no data or the wallet is
 * disconnected. Optionally renders an action node (e.g. a button).
 */

interface EmptyStateProps {
  icon?: string;
  title: string;
  message?: string;
  action?: React.ReactNode;
}

export default function EmptyState({ icon = '🗂️', title, message, action }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <span className="empty-icon">{icon}</span>
      <h3 className="empty-title">{title}</h3>
      {message && <p className="empty-message">{message}</p>}
      {action && <div className="empty-action">{action}</div>}
    </div>
  );
}
