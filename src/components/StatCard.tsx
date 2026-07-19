/**
 * Displays a single labelled statistic (e.g. TVL, APY, total shares).
 */

interface StatCardProps {
  label: string;
  value: string | number;
  /** Small caption shown under the value */
  hint?: string;
  icon?: string;
}

export default function StatCard({ label, value, hint, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="stat-card-head">
        {icon && <span className="stat-card-icon">{icon}</span>}
        <span className="stat-card-label">{label}</span>
      </div>
      <div className="stat-card-value">{value}</div>
      {hint && <div className="stat-card-hint">{hint}</div>}
    </div>
  );
}
