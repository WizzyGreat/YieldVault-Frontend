/**
 * Supported assets for the YieldVault app.
 * These mirror the Stellar/Soroban tokens the vault accepts.
 */
export const ASSETS = [
  {
    code: 'USDC',
    name: 'USD Coin',
    decimals: 7,
    icon: '💵',
    contract: 'CAQCFVLOBK5GIULPNZRGATJJMIZL5BSP7X5YJVMGCPTUEPFM4AVSRCJ',
  },
  {
    code: 'XLM',
    name: 'Stellar Lumens',
    decimals: 7,
    icon: '⭐',
    contract: 'native',
  },
  {
    code: 'EURC',
    name: 'Euro Coin',
    decimals: 7,
    icon: '💶',
    contract: 'CCBINL4TCQVEQN2Q2GO66RS4CWUARIECZEJA7JVYQO3GVF4YJUTODHO',
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    decimals: 8,
    icon: '₿',
    contract: 'CAAY3MAACVPNLZKNKHGTERYJBJZL3JZMXJ4OXBVDMU34UNKSZBSPCP7M',
  },
];

/** Default asset used when none is selected. */
export const DEFAULT_ASSET = ASSETS[0];

/** Lookup an asset definition by its code. */
export function getAssetByCode(code) {
  return ASSETS.find((asset) => asset.code === code) || DEFAULT_ASSET;
}
