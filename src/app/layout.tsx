import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import localFont from 'next/font/local'
import {Abril_Fatface, Quicksand, Oswald} from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const abril = Abril_Fatface({ weight: ["400"], subsets: ["latin"] });
const quicksand = Quicksand({ weight: ["400", "300", "500", "700", "600"], subsets: ["latin"], display: "swap" });
const oswald = Oswald({ weight: ["400", "700", "200", "300", "500", "600"], subsets: ["latin"], display: "swap" });
export const metadata: Metadata = {
  title: "Vaskrsije's Portfolio",
  description: "Vaskrsije's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      
      <body className={quicksand.className}>
      <Analytics/>
      <Menu />
      <SmoothScrolling>
        {children}
      </SmoothScrolling>
      </body>
    </html>
  );
}
