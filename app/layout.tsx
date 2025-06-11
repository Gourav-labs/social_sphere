import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/ui/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: '%s | Contentful App',
    default: 'Contentful App - Description'
  },
  description: 'In todays rapidly evolving digital landscape, businesses must adapt to stay competitive. Our comprehensive platform combines cutting-edge technology with intuitive design to deliver exceptional user experiences. Whether youre a startup looking to establish your online presence or an enterprise seeking to optimize existing workflows, we provide the tools necessary for success.',
  keywords: ['contentful', 'application', 'nextjs'],
  authors: [{ name: 'Gourav' }],
  creator: 'Gourav',
  publisher: 'Raftlab',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://abc.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: 'Contentful App',
    description: 'this is content full app',
    url: 'https://abc.com',
    siteName: 'Contentful App',
    images: [
      {
        url: 'https://abc.com/og.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contentful App',
    description: 'this is content full app',
    images: ['https://abc.com/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
            <Header />
          <PageTransition>
            <div className="min-h-150">
            {children}
            </div>
          </PageTransition>
            <Footer />
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
