/**
 * Aggregation helpers for a user's vault positions. Pure functions used by
 * the Dashboard and Positions pages to derive portfolio totals.
 */

/**
 * Sum a numeric field across a list of positions.
 * @param {Array<object>} positions
 * @param {string} field - position property to sum (e.g. 'value')
 * @returns {number}
 */
export function sumField(positions, field) {
  return positions.reduce((total, position) => total + (position[field] || 0), 0);
}

/**
 * Aggregate totals for a list of positions.
 * @param {Array<object>} positions
 * @returns {{ totalValue: number, totalShares: number, totalEarned: number, count: number }}
 */
export function summarizePositions(positions = []) {
  return {
    totalValue: sumField(positions, 'value'),
    totalShares: sumField(positions, 'shares'),
    totalEarned: sumField(positions, 'earned'),
    count: positions.length,
  };
}
