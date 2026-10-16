
"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeProvider } from "../providers/theme-providers";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
      >
        <Sun size={18} />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      title="Toggle theme"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
