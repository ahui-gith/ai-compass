import { ProductExplorer } from "@/components/product-explorer";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">AI Compass</h1>
        <p className="mt-2 text-zinc-500">
          收集、罗列市面上的优质 AI 产品，帮助开发者快速找到所需工具。
        </p>
      </header>
      <ProductExplorer />
    </main>
  );
}
