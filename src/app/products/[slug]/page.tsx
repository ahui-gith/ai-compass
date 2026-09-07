import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductLogo } from "@/components/product-logo";
import { getProductBySlug, getProducts } from "@/lib/products";
import { CATEGORY_LABELS, PRICING_LABELS } from "@/lib/types";

export function generateStaticParams() {
  return getProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "未找到产品" };
  return {
    title: `${product.name} — AI Compass`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/products/[slug]">) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200"
      >
        ← 返回列表
      </Link>

      <article className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-4">
            <ProductLogo
              name={product.name}
              logo={product.logo}
              className="h-16 w-16 rounded-2xl text-2xl"
            />
            <div className="min-w-0">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                {product.name}
              </h1>
              <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {CATEGORY_LABELS[product.category] ?? product.category}
                {" · "}
                {PRICING_LABELS[product.pricing]}
              </p>
            </div>
          </div>

          <p className="mt-6 text-zinc-700 dark:text-zinc-300">
            {product.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {product.addedAt && (
            <p className="mt-6 text-xs text-zinc-400 dark:text-zinc-500">
              收录于 {product.addedAt}
            </p>
          )}
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-6 sm:px-8 dark:border-zinc-800 dark:bg-zinc-900/50">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
          >
            访问官网
            <span aria-hidden>↗</span>
          </a>
        </div>
      </article>
    </main>
  );
}
