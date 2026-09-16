import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";

const displayFont = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const malayalamFont = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ethycom — Furniture & Electronics on 0% Interest EMI",
  description:
    "Furniture and electronics for your modern home, with 0% interest in-house EMI. 5 branches across Malappuram.",
  icons: {
    icon: "/e-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${malayalamFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
