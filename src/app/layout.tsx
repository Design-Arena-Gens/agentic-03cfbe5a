import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Nodi Verse Lead Intelligence",
  description:
    "Strategic lead intelligence dashboard for Nodi Verse to identify premium creative collaboration opportunities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-nodi-dark text-white">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
