import type { Metadata } from "next";
import "./globals.css";
import Menu from "@/components/menu/Menu";
import SmoothScrolling from "@/components/SmoothScrolling";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import MouseMove from "@/components/mousemove/MouseMove";



// const mitera = localFont({
//   src: "../../public/fonts/MiteraRegular.ttf",
//   variable: "--font-mitera",
//   display: "swap",
// })

const ppeiko = localFont({
  src: [
    {
      path: "../../public/fonts/ppeiko/PPEIKO-BlackItalic.otf",
      weight: '900'
    },
    {
      path: "../../public/fonts/ppeiko/PPEIKO-Heavy.otf",
      weight: '700'
    },
    {
      path: "../../public/fonts/ppeiko/PPEIKO-Thin.otf",
      weight: '400'
    },
    {
      path: "../../public/fonts/ppeiko/PPEIKO-Medium.otf",
      weight: '500'
    },
  ],
  variable: "--font-ppeiko",
})

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
      <body className={`${ppeiko.variable} font-sans`}>
        <MouseMove />
        <Analytics />
        <div className="relative z-20">
        <Menu />
        </div>
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
