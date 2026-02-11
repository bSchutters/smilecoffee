"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface LightboxProps {
  src: string | null;
  alt?: string;
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLElement | null>;
}

export function Lightbox({
  src,
  alt = "Gallery",
  onClose,
}: LightboxProps) {
  return (
    <Dialog open={!!src} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-[90vw] max-h-[90vh] w-fit border-none bg-transparent p-0 shadow-none"
      >
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogClose className="cursor-pointer absolute -top-10 right-0 rounded-full bg-green-dark/60 p-2 text-cream/80 transition-colors hover:bg-green-dark hover:text-cream focus:outline-none focus:ring-2 focus:ring-cream/40">
          <X size={20} aria-hidden="true" />
          <span className="sr-only">Close</span>
        </DialogClose>
        {src && (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="max-h-[85vh] w-auto rounded-2xl object-contain"
            sizes="90vw"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
