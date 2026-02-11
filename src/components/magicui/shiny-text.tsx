"use client";

import { cn } from "@/lib/utils";

interface ShinyTextProps {
  children: React.ReactNode;
  className?: string;
}

export function ShinyText({ children, className }: ShinyTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer",
        "bg-gradient-to-r from-orange via-cream to-orange",
        className
      )}
    >
      {children}
    </span>
  );
}
