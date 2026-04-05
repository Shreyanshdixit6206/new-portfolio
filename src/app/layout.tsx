import type { Metadata } from "next";
import { Geist, Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shreyansh Dixit | Product Designer & Builder",
  description: "Portfolio of Shreyansh Dixit, Product Designer who codes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased selection:bg-accent-orange selection:text-white !scroll-smooth`}
    >
      <body className="font-sans min-h-screen flex flex-col grid-bg bg-obsidian text-offwhite overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
