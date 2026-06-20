import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberAI Security Professional Program | Sundaram Mishra",
  description:
    "A premium 12-week AI and cybersecurity program by Sundaram Mishra. Learn ethical hacking, AI security, Python automation, threat intelligence, phishing defense, LLM security, SOC workflows, and portfolio-ready CyberAI projects.",
  keywords: [
    "AI cybersecurity course",
    "ethical hacking with AI",
    "CyberAI course",
    "AI security program",
    "LLM security",
    "SOC automation",
    "cybersecurity portfolio projects",
    "Sundaram Mishra",
  ],
  authors: [{ name: "Sundaram Mishra" }],
  openGraph: {
    title: "CyberAI Security Professional Program",
    description:
      "Become an ethical hacker in the era of AI. Build AI-powered cybersecurity tools, SOC workflows, LLM defense systems, and portfolio-ready projects.",
    type: "website",
    locale: "en_US",
    siteName: "CyberAI Security Professional Program",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberAI Security Professional Program",
    description:
      "A premium 12-week AI + cybersecurity program taught by Sundaram Mishra.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
