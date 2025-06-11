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
  title: "Contentful Assignment",
  description: "A Next.js application with Contentful integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <ThemeProvider>
          <PageTransition>
            <Header />
            <div className="min-h-150">
            {children}
            </div>
            <Footer />
          </PageTransition>
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
