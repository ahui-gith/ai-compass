"use client";

import { useState } from "react";
import { filterByCategory, getProducts, searchProducts } from "@/lib/products";
import { CategoryFilter } from "./category-filter";
import { ProductCard } from "./product-card";
import { SearchBar } from "./search-bar";

export function ProductExplorer() {
  const products = getProducts();
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  const byCategory =
    category === "all" ? products : filterByCategory(products, category);
  const filtered = searchProducts(byCategory, query);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter active={category} onSelect={setCategory} />
      </div>
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
          没有找到匹配的产品。
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
