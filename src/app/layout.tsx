import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Lato({ 
  subsets: ["latin"],
  weight: ["100", "300",  "400", "700", "900"],
  variable: "--font-inter",
  display: "swap",

});

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
    <html lang="en">
      <body className={inter.className}>
      <Menu />
      <SmoothScrolling>
        {children}
      </SmoothScrolling>
      </body>
    </html>
  );
}
