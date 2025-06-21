import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Garima Kumari — Microbiologist",
  description:
    "Garima Kumari is a microbiologist with expertise in microbial research, laboratory techniques, and scientific exploration. Explore her publications, experience, and connect for research collaboration.",
  authors: [{ name: "Garima Kumari", url: "https://x.com/anu_garima" }],
  creator: "Garima Kumari",
  keywords: [
    "Garima Kumari",
    "Microbiologist",
    "Microbiology",
    "Lab Techniques",
    "Research",
    "Scientific Researcher",
    "Publications",
    "Bacteriology",
    "Virology",
    "Mycology",
    "Biology",
    "Science Portfolio",
    "Lab Work",
    "Research Collaboration",
  ],
  openGraph: {
    title: "Garima Kumari — Microbiologist",
    description:
      "Microbiologist specializing in microbial research, laboratory techniques, and scientific exploration. Explore publications, experience, and connect with Garima Kumari.",
    url: "https://garima.kuandla.vip",
    siteName: "Garima Kumari Portfolio",
    images: [
      {
        url: "https://garima.kuandla.vip/garima.png",
        width: 1200,
        height: 630,
        alt: "Garima Kumari — Microbiologist",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",
    creator: "@your_twitter_handle",
    title: "Garima Kumari — Microbiologist",
    description:
      "Microbiologist specializing in microbial research, laboratory techniques, and scientific exploration. Explore publications, experience, and connect with Garima Kumari.",
    images: ["https://garima.kaundal.vip/garima.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="4QvZxunc8BdTDPoVCdMLH0gXxqbcSCsgPFWtnv7Sl4E" />
        {/* Optional: Add a Buy Me a Coffee widget or other script if desired */}
        {/* <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="garimakumar" data-description="Support me on Buy me a coffee!" data-message="" data-color="#FF5F5F" data-position="Right" data-x_margin="18" data-y_margin="18"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}