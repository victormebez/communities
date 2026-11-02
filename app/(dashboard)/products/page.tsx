import { Button, EmptyState } from "@dub/ui";
import { Package } from "lucide-react";
import { ProductCard, type Product } from "@/ui/products/product-card";

const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Next.js Mastery Course",
    price: 97,
    status: "published",
    salesCount: 142,
  },
  {
    id: "2",
    title: "TypeScript from Zero to Hero",
    price: 67,
    status: "published",
    salesCount: 89,
  },
  {
    id: "3",
    title: "Full-Stack SaaS Blueprint",
    price: 197,
    status: "draft",
    salesCount: 0,
  },
  {
    id: "4",
    title: "React Design Patterns",
    price: 49,
    status: "published",
    salesCount: 231,
  },
];

export default function ProductsPage() {
  const hasProducts = MOCK_PRODUCTS.length > 0;

  return (
    <div className="flex flex-col gap-8 px-8 py-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-xl font-semibold text-content-emphasis">
            Products
          </h1>
          <p className="mt-0.5 text-sm text-content-subtle">
            Manage your digital products and courses
          </p>
        </div>
        <Button text="Create product" variant="primary" className="w-auto" />
      </div>

      {/* Content */}
      {hasProducts ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex flex-1 items-center justify-center rounded-xl border border-border-subtle bg-bg-subtle py-24">
          <EmptyState
            icon={Package}
            title="No products yet"
            description="Create your first digital product or course to start selling to your community."
          >
            <Button
              text="Create your first product"
              variant="primary"
              className="w-auto"
            />
          </EmptyState>
        </div>
      )}
    </div>
  );
}
