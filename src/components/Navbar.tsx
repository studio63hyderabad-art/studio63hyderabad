import { useEffect, useState } from "react";
import { Link, NavLink as RouterNavLink, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteConfig";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isTransparent = !scrolled && location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-black/35 backdrop-blur-md border-b border-white/10"
          : "bg-[var(--color-ivory)]/95 dark:bg-[#080604]/90 backdrop-blur-md border-b border-[var(--color-beige)] dark:border-white/5"
      }`}
    >
      <nav aria-label="Main navigation" className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-x-3 px-4 pt-3 sm:px-6 xl:flex-nowrap xl:gap-3 xl:py-4 2xl:gap-8 2xl:px-10">
        <Link
          to="/"
          aria-label="Studio63 Hyderabad home"
          className={`flex shrink-0 items-center gap-1 whitespace-nowrap font-display text-lg tracking-tight sm:gap-2 sm:text-2xl ${
            isTransparent ? "text-white" : "text-[var(--color-charcoal)]"
          }`}
        >
          <span className="font-bold">Studio63</span>
          <span className="font-sans text-xs font-semibold sm:text-lg" style={{ color: "var(--color-gold)" }}>
            #Hyderabad
          </span>
        </Link>

        <ul className="order-last flex w-full min-w-0 items-center gap-5 overflow-x-auto whitespace-nowrap py-3 xl:order-none xl:w-auto xl:gap-3 xl:py-0 2xl:gap-6">
          {navLinks.map((link) => (
            <li key={link.to} className="shrink-0">
              <RouterNavLink
                to={link.to}
                className={({ isActive }) =>
                  `nav-link-hover block py-2 font-sans text-[11px] tracking-widest uppercase transition-colors 2xl:text-[12px] ${
                    isTransparent ? "text-white/80 hover:text-white" : "text-[var(--color-charcoal)] hover:text-[var(--color-gold)]"
                  } ${isActive ? (isTransparent ? "text-white" : "text-[var(--color-gold)]") : ""}`
                }
              >
                {link.label}
              </RouterNavLink>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className={`whitespace-nowrap px-2 py-2 font-sans text-[9px] tracking-widest uppercase transition-colors sm:px-5 sm:py-2.5 sm:text-[11px] ${
              isTransparent
                ? "border border-white/50 text-white hover:bg-white hover:text-[var(--color-charcoal)]"
                : "bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-vivid)]"
            }`}
          >
            Book Session
          </Link>
        </div>
      </nav>
    </header>
  );
}
