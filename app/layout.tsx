"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { AppStore, makeStore } from "@/lib/store";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import CheckAuth from "@/utils/CheckAuth";

// Theme Context for global management
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Theme Provider
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Apply theme to <html>
    localStorage.setItem("theme", theme); // Store theme in localStorage
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark")); // Toggle between dark and light
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <CheckAuth>
        {children}
      </CheckAuth>
    </ThemeContext.Provider>
  );
};

// Custom Hook to access theme
export const useTheme = () => useContext(ThemeContext);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={storeRef.current}>
          <ThemeProvider>{children}</ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
