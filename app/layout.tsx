"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Navbar, Footer } from "./componets/index";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <div className="dark:bg-nft-dark  min-h-screen   ">
          <body>
          <Navbar />
            <div className="pt-65">

            {children}
            </div>
          </body>
        </div>
        <Script
          src="https://kit.fontawesome.com/7842ee7b5d.js"
          crossOrigin="anonymous"
        />
        <Footer/>
      </ThemeProvider>
    </html>
  );
}
