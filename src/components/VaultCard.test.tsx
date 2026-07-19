import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import VaultCard from './VaultCard';

describe('VaultCard', () => {
  const mockVault = {
    id: 'vault-1',
    name: 'USDC Yield',
    asset: 'USDC',
    risk: 'Low',
    apy: 0.055, // ratio — formatPercent multiplies by 100 → "5.50%"
    tvl: 1000000,
  };

  it('renders vault name and risk badge', () => {
    render(
      <MemoryRouter>
        <VaultCard vault={mockVault} />
      </MemoryRouter>
    );

    expect(screen.getByText('USDC Yield')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
  });

  it('formats APY as a percentage', () => {
    render(
      <MemoryRouter>
        <VaultCard vault={mockVault} />
      </MemoryRouter>
    );

    expect(screen.getByText('5.50%')).toBeInTheDocument();
  });

  it('links to the vault detail page', () => {
    render(
      <MemoryRouter>
        <VaultCard vault={mockVault} />
      </MemoryRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/vault/vault-1');
  });
});
