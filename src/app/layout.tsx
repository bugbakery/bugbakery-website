import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    absolute: 'The Vegan Bug Bakery',
    template: '%s',
  },
  openGraph: {
    title: {
      absolute: 'The Vegan Bug Bakery',
      template: '%s',
    },
    description: 'A collective building open-source software',
    siteName: 'bugbakery',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
