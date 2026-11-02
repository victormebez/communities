"use client";

import { cn } from "@dub/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutGrid, Package, Settings, Users } from "lucide-react";

const NAV_ITEMS = [
  { name: "Overview", href: "/", icon: LayoutGrid },
  { name: "Products", href: "/products", icon: Package },
  { name: "Members", href: "/members", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-[240px] flex-shrink-0 flex-col border-r border-border-subtle bg-bg-default">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-border-subtle px-5">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-black">
            <span className="text-xs font-bold text-white">C</span>
          </div>
          <span className="font-display text-sm font-semibold text-content-emphasis">
            Communities
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4">
        {NAV_ITEMS.map(({ name, href, icon: Icon }) => {
          const isActive =
            href === "/"
              ? pathname === "/"
              : pathname.startsWith(href);

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-bg-subtle font-medium text-content-emphasis"
                  : "text-content-subtle hover:bg-bg-subtle hover:text-content-default",
              )}
            >
              <Icon className="size-4 shrink-0" />
              {name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="border-t border-border-subtle px-3 py-4">
        <div className="flex items-center gap-2.5 rounded-lg px-3 py-2">
          <div className="flex size-7 items-center justify-center rounded-full bg-neutral-200 text-xs font-medium text-neutral-600">
            V
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-content-emphasis">
              Victor
            </p>
            <p className="truncate text-xs text-content-subtle">Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
