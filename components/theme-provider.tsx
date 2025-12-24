"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
interface ThemeProviderProps {
  children: React.ReactNode;
  attribute?: "class" | "data-theme" | "style";
  defaultTheme?: string;
  enableSystem?: boolean;
}
export { useTheme };

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
