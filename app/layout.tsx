import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
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
        url: "/images/profile_light.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/profile_dark.jpg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/profile_light.jpg",
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
