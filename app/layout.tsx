import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import { Providers } from "./providers";

/* ---------------- Fonts ---------------- */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ---------------- Metadata ---------------- */
export const metadata: Metadata = {
  title: "MTS LLC | Medical Billing & Revenue Cycle Management Services",
  description:
    "Complete revenue cycle management, medical billing, credentialing, and coding solutions for healthcare practices nationwide. Improve collections and reduce denials.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://medtrackservices.com"
  ),
  verification: {
    google: "s4KTwRynmpEZ9fApApHYbYy4t_kHWUi2L2qAWKYyMd8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "MTS LLC",
    title: "MTS LLC | Medical Billing & Revenue Cycle Management",
    description:
      "Complete RCM solutions including billing, coding, credentialing, and denial management for healthcare practices.",
    images: [
      {
        url: "https://medtrackservices.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MTS LLC - Medical Billing Solutions",
        type: "image/png",
      },
    ],
  },
 twitter: {
  card: "summary_large_image",
  title: "MTS LLC | Medical Billing Solutions",
  description: "Revenue cycle management and billing services for healthcare practices.",
  images: ["https://medtrackservices.com/og-image.png"],  // ← same image
  creator: "@mtsllc",
},
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

/* ---------------- Root Layout ---------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <Providers>
          {/* NAVBAR */}
          <Navbar />

          {/* MAIN CONTENT */}
          <main className="flex-grow">{children}</main>

          {/* FOOTER */}
          <footer className="bg-[#153B6D] text-slate-300 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-12 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {/* Column 1 */}
                <div className="flex flex-col items-center">
                  <h4 className="text-white font-bold mb-6 text-xl">
                    MTS LLC
                  </h4>
                  <p className="text-slate-400 max-w-xs">
                    MTS LLC provides complete revenue cycle management
                    solutions including billing, coding, EHR, and analytics.
                  </p>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center">
                  <h4 className="text-white font-semibold mb-6 text-lg">
                    Services
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/services/medical-billing"
                        className="hover:text-[#99C050]"
                      >
                        Medical Billing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/medical-coding"
                        className="hover:text-[#99C050]"
                      >
                        Medical Coding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/medical-credentialing"
                        className="hover:text-[#99C050]"
                      >
                        Medical Credentialing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/denial-management"
                        className="hover:text-[#99C050]"
                      >
                        Denial Management
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col items-center">
                  <h4 className="text-white font-semibold mb-6 text-lg">
                    Quick Links
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/our-company"
                        className="hover:text-[#99C050]"
                      >
                        Our Company
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-[#99C050]">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="hover:text-[#99C050]"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms-and-conditions"
                        className="hover:text-[#99C050]"
                      >
                        Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-12 pt-6 border-t border-white/10 flex flex-col items-center gap-4 text-sm text-slate-400">
                <p suppressHydrationWarning>
                  © {new Date().getFullYear()} MTS LLC. All rights reserved.
                </p>

                <div className="flex gap-6">
                  <Link
                    href="/privacy-policy"
                    className="hover:text-[#99C050]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-and-conditions"
                    className="hover:text-[#99C050]"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}