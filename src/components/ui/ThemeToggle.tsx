import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-amber-100 dark:bg-amber-800 hover:bg-amber-200 dark:hover:bg-amber-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 text-amber-700 dark:text-amber-200" />
      ) : (
        <Sun className="h-5 w-5 text-amber-700 dark:text-amber-200" />
      )}
    </button>
  );
}