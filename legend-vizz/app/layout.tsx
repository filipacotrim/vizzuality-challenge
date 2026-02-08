import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {Nav} from "../public/components/nav";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
