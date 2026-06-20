import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CyberAI Security Professional Program | Sundaram Mishra",
  description:
    "A premium 12-week AI and cybersecurity professional program by Sundaram Mishra. Learn ethical hacking, AI security, Python automation, LLM defense, SOC workflows, and portfolio-ready CyberAI projects.",
  keywords: [
    "AI cybersecurity course",
    "ethical hacking with AI",
    "CyberAI course",
    "LLM security",
    "SOC automation",
    "cybersecurity portfolio projects",
    "AI security program",
    "Sundaram Mishra",
  ],
  authors: [{ name: "Sundaram Mishra" }],
  openGraph: {
    title: "CyberAI Security Professional Program",
    description:
      "A premium 12-week AI and cybersecurity program for ethical security builders, AI-powered defense, LLM security, and CyberAI portfolio projects.",
    type: "website",
    locale: "en_US",
    siteName: "CyberAI Security Professional Program",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberAI Security Professional Program",
    description:
      "A premium AI + cybersecurity professional program taught by Sundaram Mishra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
