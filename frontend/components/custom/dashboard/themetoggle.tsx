"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { SidebarMenuButton } from "@/components/ui/sidebar";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleTheme = () => {
    if (dark) {
      document.documentElement.classList.remove("dark");
      setDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  };

  return (
    <SidebarMenuButton onClick={toggleTheme}>
      {dark ? (
        <Sun className="mr-2 h-4 w-4" />
      ) : (
        <Moon className="mr-2 h-4 w-4" />
      )}
      {dark ? "Light Mode" : "Dark Mode"}
    </SidebarMenuButton>
  );
}
