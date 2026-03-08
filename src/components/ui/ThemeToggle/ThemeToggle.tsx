import { useTheme } from "@/context/ThemeContext";
import "./ThemeToggle.css";

export default function ThemeToggle() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Переключить тему"
      className="theme-toggle"
    >
      <span className="theme-toggle__track">
        <span className={`theme-toggle__thumb ${isDark ? "is-dark" : ""}`} />
      </span>
      <span className="theme-toggle__label">{theme === "dark" ? "Dark" : "Light"}</span>
    </button>
  );
}
