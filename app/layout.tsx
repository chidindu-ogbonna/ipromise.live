import type { Metadata } from "next";
import { Inter, Space_Grotesk } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'ProCo - Intelligence Re-engineered',
    description: 'Empowering the next generation of digital decisions with fela.ai. Where predictive modeling meets real-time processing.',
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
