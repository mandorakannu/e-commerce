import "./globals.css";
import type { Metadata } from "next";
import ChakraProvider from "@components/chakraUI/Providers";
import { Inter } from "next/font/google";
import Navbar from "@components/navigation/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@components/navigation/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
        <Analytics />
      </body>
    </html>
  );
}
