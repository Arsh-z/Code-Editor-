
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Flame,
  UserRound,
  ChevronDown,
  ArrowUpRight,
  Sun,
  Moon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-orange-400/20 bg-gradient-to-br from-orange-500/20 to-rose-500/10 shadow-[0_0_25px_rgba(249,115,22,0.08)] transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]">
            <Flame
              size={23}
              strokeWidth={2.2}
              className="text-orange-500 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-[21px] font-bold tracking-tight text-foreground">
              Flama<span className="text-orange-500">.</span>
            </span>

            <span className="-mt-1 text-[9px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
              Build with AI
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <div className="hidden items-center gap-2 rounded-full border border-border bg-muted/30 p-1.5 md:flex">
          <Link
            href="/docs"
            className="group flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            Docs
            <ArrowUpRight
              size={14}
              className="opacity-0 transition-opacity group-hover:opacity-100"
            />
          </Link>

          <div className="h-4 w-px bg-border" />

          <Link
            href="/api"
            className="group flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            API
            <ArrowUpRight
              size={14}
              className="opacity-0 transition-opacity group-hover:opacity-100"
            />
          </Link>
        </div>

        {/* Right Side: Theme Toggle + Account */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
            title="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={18} />
              ) : (
                <Moon size={18} />
              )
            ) : (
              <Sun size={18} />
            )}
          </button>

          {/* Account Button */}
          <Link
            href="/login"
            aria-label="Open account"
            className="group flex items-center gap-2.5 rounded-full border border-border bg-muted/30 py-2 pl-2 pr-4 transition-all duration-300 hover:border-orange-400/30 hover:bg-orange-400/10"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-rose-500 text-white shadow-lg shadow-orange-500/10 transition-transform duration-300 group-hover:scale-105">
              <UserRound size={16} strokeWidth={2.2} />
            </div>

            <span className="text-sm font-medium text-foreground">
              Account
            </span>

            <ChevronDown
              size={14}
              className="text-muted-foreground transition-transform duration-300 group-hover:rotate-180"
            />
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-center gap-3 border-t border-border/50 px-4 py-2.5 md:hidden">
        <Link
          href="/docs"
          className="rounded-full px-5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          Docs
        </Link>

        <div className="h-4 w-px bg-border" />

        <Link
          href="/api"
          className="rounded-full px-5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          API
        </Link>
      </div>
    </header>
  );
}

