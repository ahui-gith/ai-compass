import Link from "next/link";
import type { Product } from "@/lib/types";
import { CATEGORY_LABELS, PRICING_LABELS } from "@/lib/types";
import { ProductLogo } from "./product-logo";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="flex items-center gap-3">
        <ProductLogo
          name={product.name}
          logo={product.logo}
          className="h-9 w-9 rounded-lg text-sm"
        />
        <div className="min-w-0">
          <h3 className="truncate font-medium text-zinc-900 dark:text-zinc-100">
            {product.name}
          </h3>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">
            {CATEGORY_LABELS[product.category] ?? product.category}
          </span>
        </div>
      </div>
      <p className="line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {product.description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {PRICING_LABELS[product.pricing]}
        </span>
      </div>
    </Link>
  );
}
