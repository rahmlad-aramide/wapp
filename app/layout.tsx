import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | WApp Dashboard',
    default: 'WApp Dashboard',
  },
  description: 'A Next.js weather application that integrates the OpenWeatherMap API and open layer to display real-time weather data on cards, charts and maps. Developed by Abdrahman Oladimeji',
  metadataBase: new URL('https://r-wapp.vercel.app'),
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
