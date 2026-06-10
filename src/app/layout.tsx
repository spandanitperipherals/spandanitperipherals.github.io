import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spandan IT Peripherals | IoT, Networking & Safety Operations Center',
  description: 'Enterprise infrastructure management, industrial CCTV, and critical fire detection networks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body class="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
