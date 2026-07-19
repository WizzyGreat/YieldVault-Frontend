import React from 'react';

/**
 * Small rounded label for statuses, asset codes or categories.
 */

interface TagProps {
  children: React.ReactNode;
  tone?: 'default' | 'success' | 'warning' | 'danger' | 'accent';
}

export default function Tag({ children, tone = 'default' }: TagProps) {
  return <span className={`tag tag-${tone}`}>{children}</span>;
}
