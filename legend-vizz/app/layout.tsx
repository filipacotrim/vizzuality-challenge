import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import {Nav} from "../public/components/nav";
import "./globals.css";

const geistSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const geistMono = Open_Sans({
  variable: "--font-open-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Legend Vizz",
  description: "Coded by Filipa Cotrim for Vizzuality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Frame 3.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ paddingTop: '72px' }}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
