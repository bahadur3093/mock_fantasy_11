import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import PageHeader from "./components/common/Header/Header";
import "./globals.css";
import { GlobalDataProvider } from "./components/common/GlobalContext/GlobalDataContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NBA",
  description: "NBA Roaster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalDataProvider>
          <PageHeader />
          <div className="container mx-auto px-4 py-6">{children}</div>
        </GlobalDataProvider>
      </body>
    </html>
  );
}
