import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | WApp Dashboard',
    default: 'WApp Dashboard',
  },
  description: 'Weather App Dashboard project developed by Abdrahman Oladimeji.',
  metadataBase: new URL('https://linkedin.com/in/rahmlad'),
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
