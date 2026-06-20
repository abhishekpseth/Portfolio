import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavigationOptions from "./NavigationOptions";
import ThemeBtn from "./ThemeBtn";
import { profile } from "../data/portfolio";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-content-center rounded-lg bg-accent font-display text-sm font-bold text-[#0a0a0a]">
            {initials}
          </span>
          <span className="hidden font-display font-semibold text-ink sm:block">
            {profile.name.split(" ")[0]}{" "}
            {profile.name.split(" ").slice(-1)}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <NavigationOptions direction="horizontal" />
          <ThemeBtn />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeBtn />
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="grid h-9 w-9 place-content-center rounded-full border border-line text-ink"
          >
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[70vw] max-w-xs flex-col gap-10 border-l border-line bg-surface px-8 pt-8 transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="self-end grid h-9 w-9 place-content-center rounded-full border border-line text-ink"
          >
            <FiX />
          </button>
          <NavigationOptions
            direction="vertical"
            onNavigate={() => setOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
