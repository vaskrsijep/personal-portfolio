"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function SmoothScrolling({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root options={{ lerp: 0.07, duration: 0.3, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
