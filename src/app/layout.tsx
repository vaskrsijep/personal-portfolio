import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import {Poppins} from "next/font/google";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });



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
      <body className={poppins.className}>
      <Menu />
      <SmoothScrolling>
        {children}
      </SmoothScrolling>
      </body>
    </html>
  );
}
