import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Venish M - Full-Stack Developer | React, Next.js, Node.js",
  description:
    "Portfolio of Venish M, a full-stack developer with 2+ years of experience building and scaling e-commerce platforms with React.js, Next.js, and Node.js. Delivered 35% faster page loads, 25% faster APIs, and 20% higher customer satisfaction.",
  generator: "v0.app",
  keywords: [
    "Venish M",
    "Full-Stack Developer",
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Venish M" }],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Venish M - Full-Stack Developer",
    description:
      "Full-stack developer specializing in React.js, Next.js, and Node.js — building scalable, high-performance e-commerce experiences.",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
