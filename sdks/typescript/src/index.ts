export type Tier = 'Flex' | 'L3' | 'L6' | 'L12';
export type Network = 'mainnet' | 'testnet';

export interface YieldLadderOptions {
  network: Network;
  signer: unknown;
}

export interface Position {
  tier: Tier;
  principal: string;
  shares: string;
  accruedYield: string;
  lockUntil: number | null;
}

export class YieldLadder {
  constructor(_options: YieldLadderOptions) {
    // Full implementation in subsequent commits.
  }

  async deposit(_params: { tier: Tier; amount: string }): Promise<void> {
    throw new Error('Not implemented');
  }

  async withdraw(_params: { tier: Tier }): Promise<void> {
    throw new Error('Not implemented');
  }

  async earlyExit(_params: { tier: Tier }): Promise<void> {
    throw new Error('Not implemented');
  }

  async position(_address: string): Promise<Position> {
    throw new Error('Not implemented');
  }
}
