import { Badge } from "@dub/ui";
import { cn } from "@dub/utils";
import { MoreHorizontal } from "lucide-react";

export type Product = {
  id: string;
  title: string;
  price: number;
  status: "published" | "draft";
  cover?: string;
  salesCount: number;
};

export function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border-subtle bg-bg-default transition-all",
        "hover:border-border-default hover:shadow-sm",
      )}
    >
      {/* Cover */}
      <div className="relative aspect-video w-full overflow-hidden bg-bg-subtle">
        {product.cover ? (
          <img
            src={product.cover}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex size-12 items-center justify-center rounded-xl bg-bg-emphasis">
              <span className="text-2xl font-bold text-content-subtle">
                {product.title[0]}
              </span>
            </div>
          </div>
        )}

        {/* Status badge */}
        <div className="absolute left-3 top-3">
          <Badge variant={product.status === "published" ? "green" : "gray"}>
            {product.status === "published" ? "Published" : "Draft"}
          </Badge>
        </div>

        {/* Menu button */}
        <button
          className={cn(
            "absolute right-2 top-2 rounded-lg border border-border-subtle bg-bg-default p-1.5 opacity-0 shadow-sm transition-opacity",
            "group-hover:opacity-100",
          )}
        >
          <MoreHorizontal className="size-4 text-content-subtle" />
        </button>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-1 px-4 py-3">
        <h3 className="truncate font-display text-sm font-semibold text-content-emphasis">
          {product.title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-content-default">
            {product.price === 0
              ? "Free"
              : `$${product.price.toFixed(2)}`}
          </span>
          <span className="text-xs text-content-subtle">
            {product.salesCount} {product.salesCount === 1 ? "sale" : "sales"}
          </span>
        </div>
      </div>
    </div>
  );
}
