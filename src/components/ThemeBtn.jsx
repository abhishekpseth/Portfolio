import { FiMoon, FiSun } from "react-icons/fi";
import useTheme from "../contexts/theme";

export default function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const isDark = themeMode === "dark";

  const toggle = () => (isDark ? lightTheme() : darkTheme());

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-9 w-9 place-content-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
}
