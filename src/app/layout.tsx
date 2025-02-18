import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

import '../styles/globals.css';
import NavBar from '@/components/layout/nav-bar';
import Footer from '@/components/layout/footer';
import GoogleAnalytics from '@/components/common/google-analytics';
import { BLOG_URL } from '@/constants/path';
import opengraphImg from '@/assets/opengraph-image.png';

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
  metadataBase: new URL(BLOG_URL),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    images: {
      url: opengraphImg.src,
    },
    siteName: 'Boongranii',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
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
        <Analytics />
        <SpeedInsights />
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        )}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Toaster
            position="top-center"
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
