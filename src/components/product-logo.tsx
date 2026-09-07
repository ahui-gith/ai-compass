"use client";

export function ProductLogo({
  name,
  logo,
  className = "",
}: {
  name: string;
  logo: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-zinc-100 font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400 ${className}`}
    >
      {name.charAt(0)}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}
