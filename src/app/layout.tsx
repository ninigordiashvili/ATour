import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Atour",
  description:
    "Fast, reliable international shipping and package delivery service. Track packages, schedule deliveries, and ship worldwide with competitive rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
