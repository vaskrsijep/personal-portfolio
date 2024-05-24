import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import localFont from "next/font/local";
import { Abril_Fatface, Quicksand, Oswald } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import MouseMove from "@/components/mousemove/MouseMove";

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({
  weight: ["400", "300", "500", "700", "600"],
  subsets: ["latin"],
  display: "swap",
});
const oswald = Oswald({
  weight: ["400", "700", "200", "300", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaskrsije Panic - Software Engineer",
  description: "A dynamic Full-stack Developer with over 7 years of comprehensive experience in designing, developing, and implementing state-of-the-art software solutions. My track record demonstrates success in optimizing databases, leading end-to-end project development, and smoothly integrating a variety of platforms for optimal functionality. My adeptness encompasses a broad spectrum of programming languages and frameworks, all built upon a robust academic foundation from Singidunum University, where I learned and honed my skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <MouseMove />
        <Analytics />
        <Menu />
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
