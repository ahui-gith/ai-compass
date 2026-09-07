import products from "../../data/products.json";
import { CATEGORY_LABELS } from "./types";
import type { CategoryStat, Product } from "./types";

// JSON 数据断言为 Product 列表
const allProducts = products as Product[];

// 返回全部产品
export function getProducts(): Product[] {
  return allProducts;
}

// 按 slug 查单条产品
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

// 返回分类及其产品数量
export function getCategories(): CategoryStat[] {
  const counts = new Map<string, number>();
  for (const p of allProducts) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  }
  return [...counts.entries()].map(([slug, count]) => ({
    slug,
    label: CATEGORY_LABELS[slug] ?? slug,
    count,
  }));
}

// 按分类过滤
export function filterByCategory(
  items: Product[],
  category: string,
): Product[] {
  return items.filter((p) => p.category === category);
}

// 按名称 / 简介 / 标签搜索
export function searchProducts(items: Product[], query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return items;
  return items.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)),
  );
}
