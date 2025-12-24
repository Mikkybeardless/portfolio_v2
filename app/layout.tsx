import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = GeistSans;

const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Igashi Michael | Full Stack Developer",
  description:
    "Full Stack Developer crafting scalable, secure web applications. Next.js, React, Node.js, and more.",
  icons: {
    icon: [
      {
        url: "/icon.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "//icon.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
