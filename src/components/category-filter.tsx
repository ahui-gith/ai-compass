import { getCategories } from "@/lib/products";

export function CategoryFilter({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (category: string) => void;
}) {
  const categories = getCategories();
  const total = categories.reduce((sum, c) => sum + c.count, 0);

  const items = [{ slug: "all", label: "全部", count: total }, ...categories];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => {
        const isActive = active === item.slug;
        return (
          <button
            key={item.slug}
            onClick={() => onSelect(item.slug)}
            className={`rounded-full px-3 py-1.5 text-sm transition ${
              isActive
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
            }`}
          >
            {item.label}
            <span className="ml-1 opacity-60">{item.count}</span>
          </button>
        );
      })}
    </div>
  );
}
