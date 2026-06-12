import { Link } from 'react-router-dom';
import { formatPercent, formatUsd } from '../utils/format.js';
import { getAssetByCode } from '../constants/assets.js';

/**
 * Card summarising a vault: asset, APY, TVL and a link to its detail page.
 * @param {object} props
 * @param {object} props.vault
 */
export default function VaultCard({ vault }) {
  const asset = getAssetByCode(vault.asset);

  return (
    <Link to={`/vault/${vault.id}`} className="vault-card">
      <div className="vault-card-head">
        <span className="vault-card-icon">{asset.icon}</span>
        <div>
          <h3 className="vault-card-name">{vault.name}</h3>
          <span className="vault-card-asset">{vault.asset}</span>
        </div>
        <span className={`risk-badge risk-${vault.risk.toLowerCase()}`}>
          {vault.risk}
        </span>
      </div>
      <div className="vault-card-stats">
        <div>
          <span className="muted">APY</span>
          <strong className="apy">{formatPercent(vault.apy)}</strong>
        </div>
        <div>
          <span className="muted">TVL</span>
          <strong>{formatUsd(vault.tvl)}</strong>
        </div>
      </div>
    </Link>
  );
}
