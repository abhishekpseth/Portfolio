import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import NavigationOptions from "./NavigationOptions";
import ThemeBtn from "./ThemeBtn";
import { profile } from "../data/portfolio";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-content-center rounded-lg bg-accent text-[#0a0a0a]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="12,12 7,16 12,20" />
              <polyline points="20,12 25,16 20,20" />
              <line x1="18" y1="10" x2="14" y2="22" />
            </svg>
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
      </header>

      {/* Mobile drawer — rendered outside <header> so the header's
          backdrop-filter doesn't become its containing block. */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[70vw] max-w-xs flex-col gap-10 border-l border-line bg-surface px-8 pt-8 shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="grid h-9 w-9 shrink-0 place-content-center self-end rounded-full border border-line text-lg text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <FiX />
          </button>
          <NavigationOptions
            direction="vertical"
            onNavigate={() => setOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
