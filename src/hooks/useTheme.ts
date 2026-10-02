import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";
const THEME_COLOR: Record<Theme, string> = {
  dark: "#000000",
  light: "#fbfbfd",
};

/* Favicon: a rounded tile with the "KP" mark, black-on-white or
   white-on-black depending on the active theme. */
function faviconFor(theme: Theme) {
  const tile = theme === "light" ? "%23ffffff" : "%23000000";
  const ink = theme === "light" ? "%23000000" : "%23ffffff";
  return (
    "data:image/svg+xml," +
    "%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E" +
    `%3Crect width='64' height='64' rx='14' fill='${tile}'/%3E` +
    "%3Ctext x='32' y='44' text-anchor='middle' " +
    "font-family='Inter,Segoe UI,Arial,sans-serif' font-weight='800' " +
    `font-size='30' fill='${ink}'%3EKP%3C/text%3E%3C/svg%3E`
  );
}

function readInitialTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

/** Theme state synced to <html data-theme>, localStorage and the theme-color meta tag.
 *  The no-flash boot script in index.html sets the attribute before React mounts. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", THEME_COLOR[theme]);

    document
      .querySelector<HTMLLinkElement>('link[rel="icon"]')
      ?.setAttribute("href", faviconFor(theme));

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* private mode — theme simply won't persist */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}
