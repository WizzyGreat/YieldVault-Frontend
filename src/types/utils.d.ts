/**
 * Type declarations for JS utility modules that accept loose input types.
 */

declare module '../utils/validate.js' {
  export function validateDeposit(
    amount: string | number,
    balance: number,
  ): { valid: boolean; error: string | null };

  export function validateWithdraw(
    amount: string | number,
    deposited: number,
  ): { valid: boolean; error: string | null };

  export function isPositiveNumber(value: string): boolean;
  export function isStellarAddress(address: string): boolean;
  export function isValidPercent(value: string | number): boolean;
}

declare module '../utils/shares.js' {
  export function sharePrice(totalAssets: number, totalShares: number): number;
  export function previewDeposit(
    amount: string | number,
    totalAssets: number,
    totalShares: number,
  ): number;
  export function previewRedeem(
    shares: string | number,
    totalAssets: number,
    totalShares: number,
  ): number;
  export function previewWithdraw(
    amount: string | number,
    totalAssets: number,
    totalShares: number,
  ): number;
}
