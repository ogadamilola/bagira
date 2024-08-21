"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

interface AnimationProps {
  children: React.ReactNode;
}

export default function SmoothScrolling({ children }: AnimationProps) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 20 }}>
      {children}
    </ReactLenis>
  );
}