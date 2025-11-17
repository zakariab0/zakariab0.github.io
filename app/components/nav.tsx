import Link from "next/link";
import ThemeToggle from "./theme-toggle";

type NavItem = {
  name: string;
  download?: boolean;
};

const navItems: Record<string, NavItem> = {
  "/": {
    name: "Home",
  },
  "/#experience": {
    name: "Experience",
  },
  "/#projects": {
    name: "Projects",
  },
  "/#achievements": {
    name: "Achievements",
  },
  "/resume": {
    name: "Resume",
    download: true,
  },
};

export function Navbar() {
  return (
    <aside className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <nav className="flex items-center justify-between px-4 md:px-6 py-3" id="nav">
          <div className="flex flex-row items-center space-x-1 md:space-x-2 text-sm md:text-base">
            {Object.entries(navItems).map(([path, { name, download }]) => {
              if (download) {
                return (
                  <a
                    key={path}
                    href="/CV_2025-11-09_ZAKARIA_BOUNOU.pdf"
                    download
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2 md:px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {name}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={path}
                    href={path}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2 md:px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {name}
                  </Link>
                );
              }
            })}
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <a
              href="mailto:bounouzakaria@outlook.com"
              className="hidden sm:block transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-1 px-2 md:px-3 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm md:text-base"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </aside>
  );
}
