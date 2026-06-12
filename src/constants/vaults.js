/**
 * Static presentation metadata for the vault strategies offered by the app.
 * These describe the user-facing copy and risk tier; live figures (TVL, APY,
 * balances) come from the vault services at runtime.
 */
export const RISK_TIERS = {
  low: { label: 'Conservative', badge: 'risk-low' },
  medium: { label: 'Balanced', badge: 'risk-medium' },
  high: { label: 'Aggressive', badge: 'risk-high' },
};

export const VAULT_META = [
  {
    id: 'stable-yield',
    name: 'Stable Yield',
    asset: 'USDC',
    risk: 'low',
    strategy: 'Lending',
    description: 'Earns interest by supplying USDC to vetted lending markets.',
  },
  {
    id: 'lumens-staking',
    name: 'Lumens Staking',
    asset: 'XLM',
    risk: 'medium',
    strategy: 'Liquidity',
    description: 'Provides XLM liquidity and compounds trading fees.',
  },
  {
    id: 'euro-reserve',
    name: 'Euro Reserve',
    asset: 'EURC',
    risk: 'low',
    strategy: 'Lending',
    description: 'Conservative EURC strategy focused on capital preservation.',
  },
  {
    id: 'btc-growth',
    name: 'BTC Growth',
    asset: 'BTC',
    risk: 'high',
    strategy: 'Liquidity',
    description: 'Pursues higher returns on BTC with active rebalancing.',
  },
];

/** Lookup vault metadata by its stable id. */
export function getVaultMeta(id) {
  return VAULT_META.find((vault) => vault.id === id) || null;
}
