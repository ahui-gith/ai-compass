import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">404</h1>
      <p className="mt-3 text-zinc-500 dark:text-zinc-400">
        没有找到这个产品。
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
      >
        返回首页
      </Link>
    </main>
  );
}
