import Image from "next/image";
import type { MenuItem } from "@/data/menu-items";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  item: MenuItem;
  locale: string;
}

export function ProductCard({ item, locale }: ProductCardProps) {
  const lang = locale as "fr" | "en";

  return (
    <Card className="group relative overflow-hidden rounded-2xl bg-green-medium border-cream/10 p-0 gap-0 transition-shadow hover:shadow-xl hover:shadow-orange/5">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-green-light/30">
        <Image
          src={item.image}
          alt={item.name[lang]}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-orange/0 group-hover:bg-orange/10 transition-colors duration-300" />
      </div>

      {/* Content */}
      <CardContent className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold uppercase tracking-wide text-cream text-base">
            {item.name[lang]}
          </h3>
          <span className="shrink-0 text-lg font-bold text-cream">
            {item.price.toFixed(0)}&euro;
          </span>
        </div>
        <p className="mt-2 text-xs text-cream-dark leading-relaxed line-clamp-2">
          {item.description[lang]}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-3 flex gap-1.5">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-cream/10 text-cream text-[10px] font-bold uppercase tracking-wider border-none"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
