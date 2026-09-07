import type { Product } from "@/lib/types";
import { CATEGORY_LABELS, PRICING_LABELS } from "@/lib/types";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:border-zinc-300 hover:shadow-sm"
    >
      <div className="flex items-center gap-3">
        <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-zinc-100 text-sm font-semibold text-zinc-500">
          {product.name.charAt(0)}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.logo}
            alt={product.name}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-medium text-zinc-900">{product.name}</h3>
          <span className="text-xs text-zinc-500">
            {CATEGORY_LABELS[product.category] ?? product.category}
          </span>
        </div>
      </div>
      <p className="line-clamp-2 text-sm text-zinc-600">
        {product.description}
      </p>
      <div className="mt-auto flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {product.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs text-zinc-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="shrink-0 text-xs font-medium text-zinc-500">
          {PRICING_LABELS[product.pricing]}
        </span>
      </div>
    </a>
  );
}
