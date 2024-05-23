import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const inter = Onest({ subsets: ["latin"], weight: "100" });

export const metadata: Metadata = {
  title: "UV Chile",
  description: "Landing UV Chile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
