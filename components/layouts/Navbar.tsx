"use client";

import { focusRing, navLinks } from "@/constants/navbar";
import { isActivePath } from "@/helpers";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-(--line) bg-white/90 shadow-[0_1px_0_rgba(24,73,54,0.03),0_8px_24px_-16px_rgba(24,73,54,0.18)] backdrop-blur-md">
      <div className="flex h-20 items-center justify-between gap-6 px-[7.5%] max-[760px]:px-[5%]">
        <Link
          aria-label="HEALIFEST, ke halaman beranda"
          className={`flex items-center gap-3 rounded-lg text-(--green) no-underline touch-manipulation ${focusRing}`}
          href="/"
          onClick={closeMenu}
        >
          <span
            aria-hidden="true"
            className="grid size-10.5 shrink-0 place-items-center rounded-[14px] bg-(--green) text-white shadow-[0_6px_14px_-6px_rgba(23,107,80,0.6)]"
          >
            <Heart size={21} fill="currentColor" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[1.25rem] font-extrabold tracking-[0.5px]">
              HEALI<span className="text-(--green-dark)">FEST</span>
            </span>
            <span className="mt-1.5 text-[0.66rem] font-medium tracking-[0.2px] text-(--muted) max-[360px]:hidden">
              Healthy Lifestyle, Better Life.
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden h-full items-stretch gap-1 md:flex"
        >
          {navLinks.map(({ href, label }) => {
            const isActive = isActivePath(pathname, href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={`relative flex items-center px-4 text-[0.9rem] font-semibold no-underline touch-manipulation transition-colors after:absolute after:inset-x-4 after:bottom-0 after:h-0.5 after:rounded-full after:bg-(--green) after:transition-transform after:duration-200 after:content-[''] ${focusRing} ${
                  isActive
                    ? "text-(--green) after:scale-x-100"
                    : "text-[#42584d] after:scale-x-0 hover:text-(--green) hover:after:scale-x-50"
                }`}
                href={href}
                key={href}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          aria-controls="mobile-nav"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          className={`grid size-10.5 cursor-pointer place-items-center rounded-xl border border-(--line) bg-white text-(--green) touch-manipulation transition-colors hover:bg-(--mint-2) md:hidden ${focusRing}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          {isMenuOpen ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out motion-reduce:transition-none md:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden" inert={!isMenuOpen}>
          <nav
            aria-label="Navigasi menu seluler"
            className="flex flex-col gap-1 border-t border-(--line) px-[5%] py-3"
            id="mobile-nav"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = isActivePath(pathname, href);

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-xl px-4 py-3 text-[0.95rem] font-semibold no-underline touch-manipulation transition-colors ${focusRing} ${
                    isActive
                      ? "bg-(--mint) text-(--green)"
                      : "text-[#42584d] hover:bg-(--mint-2) hover:text-(--green)"
                  }`}
                  href={href}
                  key={href}
                  onClick={closeMenu}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
