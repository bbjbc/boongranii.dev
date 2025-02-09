import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import '../styles/globals.css';
import NavBar from '@/components/nav-bar';
import Footer from '@/components/footer';

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  variable: '--font-pretendard',
  weight: '45 920',
  display: 'swap',
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
      <body
        className={`${pretendard.variable} flex min-h-screen flex-col px-4 font-pretendard antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster
            position="bottom-right"
            toastOptions={{
              classNames: {
                toast:
                  'font-pretendard dark:text-gray-300 dark:bg-gray-800 dark:border-gray-300',
              },
            }}
          />
          <NavBar />
          <main className="container flex-1 break-keep leading-relaxed text-gray-600 dark:text-gray-300">
            <article className="py-7">{children}</article>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
