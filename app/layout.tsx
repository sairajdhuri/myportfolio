import type { Metadata } from "next";
import { Bodoni_Moda, DM_Mono, DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["300", "400", "500"], variable: "--font-mono" });
const display = Bodoni_Moda({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-display" });
const serif = DM_Serif_Display({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Sairaj Dhuri — AI Engineer & Full-Stack Developer",
  description: "Sairaj Dhuri engineers intelligent digital products across applied AI, full-stack systems, and automation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${mono.variable} ${display.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
