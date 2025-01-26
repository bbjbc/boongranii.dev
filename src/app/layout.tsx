import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';
import NavBar from '@/components/nav-bar';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    default: 'Boongranii',
    template: '%s | Boongranii',
  },
  description: "Boongranii's Devlog",
  creator: 'Boongranii',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          <main className="container break-keep px-4 leading-relaxed text-gray-800 dark:text-gray-200">
            <article className="py-7">{children}</article>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
