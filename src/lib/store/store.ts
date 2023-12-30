import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

export const themeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme(theme) {
        set(() => ({ theme }));
      },
    }),
    { name: "360_theme" }
  )
);