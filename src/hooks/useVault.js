import { useState, useEffect, useCallback } from 'react';
import * as vaultService from '../services/vault.js';

/**
 * Load a single vault by id with loading and error states.
 * @param {string} id
 * @returns {{ vault: object|null, loading: boolean, error: string|null, reload: () => void }}
 */
export function useVault(id) {
  const [vault, setVault] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await vaultService.getVault(id);
      if (!data) throw new Error('Vault not found');
      setVault(data);
    } catch (err) {
      setError(err.message || 'Failed to load vault');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    load();
  }, [load]);

  return { vault, loading, error, reload: load };
}

export default useVault;
