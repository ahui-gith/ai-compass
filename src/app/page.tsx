import { ProductExplorer } from "@/components/product-explorer";
import { getProducts } from "@/lib/products";

export default function Home() {
  const total = getProducts().length;

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          AI Compass
        </h1>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          收集、罗列市面上的优质 AI 产品，帮助开发者快速找到所需工具。
          <span className="ml-1 text-zinc-400 dark:text-zinc-500">
            （已收录 {total} 款）
          </span>
        </p>
      </header>
      <ProductExplorer />
    </main>
  );
}
