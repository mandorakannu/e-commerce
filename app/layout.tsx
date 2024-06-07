import "./globals.css";
import type { Metadata } from "next";
import ChakraProvider from "@components/chakraUI/Providers";
import { Inter } from "next/font/google";
import Navbar from "@components/navigation/Navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@components/navigation/Footer";
import ReduxProvider from "@components/redux/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MK Store | Kannu Mandora",
  description:
    "This Website Provides Useful products in very cheap price. This Website is made by Kannu Mandora.",
    keywords: [
    "Kannu",
    "Kannu Mandora",
    "Mandora",
    "Web Developer",
    "Full Stack",
    "MERN Stack",
    "Stack",
    "Full Stack Developer",
    "Mandora Kannu",
    "tech blogger",
    "developer",
    "web development",
    "software engineering",
    "programming languages",
    "ecommerce",
    "ecommerce website",
    "ecommerce store",
    "ecommerce website development",
    "ecommerce website development company",
    "ecommerce website development services",
    "ecommerce website development cost",
    "ecommerce website development in india",
    "ecommerce website development company in india",
    "ecommerce website development company in usa",
    "ecommerce website development company in uk",
    "ecommerce website development company in canada",
    "ecommerce website development company in australia",
    "ecommerce website development company in dubai",
    ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "MK Store | Kannu Mandora",
    description:
      "This Website Provides Useful products in very cheap price. This Website is made by Kannu Mandora.",
    siteId: "@mandorakannu",
    creator: "@KannuMandora",
    creatorId: "1467726470533754880",
    images: ["https://www.mandorakannu.xyz/images/logo.svg"],
  },
  authors: [{ name: "Kannu Mandora", url: "https://mandorakannu.xyz" }, { name: "Kannu Mandora", url: "https://mandorakannu.xyz" }, { name: "Kannu Mandora", url: "https://mandorakannu.xyz" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mandorakannu.xyz/",
    title: "MK Store | Kannu Mandora",
    description:
      "This Website Provides Useful products in very cheap price. This Website is made by Kannu Mandora.",
    siteName: "MK Store | Kannu Mandora",
    countryName: "India",
    emails: "mandorakannu@gmail.com",
    images: [
      {
        url: "https://www.mandorakannu.xyz/images/logo.svg",
        width: 512,
        height: 512,
        alt: "MK Store | Kannu Mandora",
      },
    ],
  },
  verification: {
    google: "UtDzihBgRyeg8VPV0dIzj1LEjhXWIKMoEFGmBi9XRn8",
    other: {
      me: ["mandorakannu@gmail.com"],
    },
  },
  category: "E-Commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </ReduxProvider>
        <Analytics />
      </body>
    </html>
  );
}
