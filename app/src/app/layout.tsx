import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YieldLadder',
  description: 'Time-locked USDC vaults on Soroban with auto-routed AMM yield.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
