import Link from "next/link";

interface ActionButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "glass";
  size?: "sm" | "md";
  className?: string;
}

export default function ActionButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: ActionButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-between gap-3 rounded-lg font-heading font-bold uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
        size === "sm"
          ? "pl-4 pr-1.5 py-1.5 text-xs"
          : "pl-5 pr-2 py-2 text-xs sm:text-sm"
      } ${
        isPrimary
          ? "bg-primary text-primary-foreground shadow-[0_10px_26px_-6px_rgba(200,255,0,0.45),inset_0_1px_0_0_rgba(255,255,255,0.55)]"
          : "bg-white/10 text-white backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.16)] hover:bg-white/15"
      } ${className}`}
    >
      <span>{children}</span>

      {/* Signature Inner Square Arrow Box */}
      <span
        className={`flex items-center justify-center rounded-md transition-transform duration-200 group-hover:translate-x-0.5 ${
          size === "sm" ? "h-7 w-7" : "h-8 w-8"
        } ${
          isPrimary
            ? "bg-surface-dark text-primary shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]"
            : "bg-primary text-primary-foreground shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)]"
        }`}
      >
        <svg
          className="h-3.5 w-3.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.75}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </span>
    </Link>
  );
}
