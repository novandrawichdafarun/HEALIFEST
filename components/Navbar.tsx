"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-10 flex h-auto min-h-20 items-center justify-between gap-6 border-b border-(--line) bg-[rgba(255,255,255,0.94)] px-[6.5%] py-3.5 backdrop-blur-md max-[760px]:flex-wrap max-[760px]:px-[5%] max-[760px]:py-3">
      <Link
        className="flex items-center gap-2.5 text-(--green) no-underline touch-manipulation text-[1.25rem] font-[850] tracking-[0.4px] leading-[1.15]"
        href="/"
        aria-label="HEALIFEST Beranda"
      >
        <span className="grid size-10.5 place-items-center rounded-[14px] bg-(--green) text-[1.35rem] text-white">
          ♥
        </span>
        <span className="flex flex-col items-start text-[1.25rem] font-[850] leading-[1.15] tracking-[0.4px]">
          <p>
            HEALI<span className="text-(--green-dark)">FEST</span>
          </p>
          <small className="mt-1 text-[0.66rem] font-medium tracking-normal text-(--muted)">
            Healthy Lifestyle, Better Life.
          </small>
        </span>
      </Link>
      <button
        className="hidden cursor-pointer rounded-[10px] border border-(--line) bg-white px-3 py-1.75 text-[1.2rem] text-(--green) touch-manipulation max-[760px]:block"
        id="menuToggle"
        aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
        aria-controls="mainNav"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      <nav
        id="mainNav"
        className={`flex items-center gap-5.75 max-[1050px]:gap-3 max-[760px]:w-full max-[760px]:flex-col max-[760px]:items-start max-[760px]:gap-2.5 max-[760px]:py-2 max-[760px]:pb-3 ${isMenuOpen ? "max-[760px]:flex!" : "max-[760px]:hidden"}`}
        aria-label="Navigasi utama"
      >
        <Link
          className="text-[0.88rem] font-[650] text-[#42584d] no-underline touch-manipulation hover:text-(--green) focus:text-(--green) max-[1050px]:text-[0.8rem] max-[760px]:text-[0.95rem]"
          href="/"
          onClick={closeMenu}
        >
          Beranda
        </Link>
        <Link
          className="text-[0.88rem] font-[650] text-[#42584d] no-underline touch-manipulation hover:text-(--green) focus:text-(--green) max-[1050px]:text-[0.8rem] max-[760px]:text-[0.95rem]"
          href="/penyakit"
          onClick={closeMenu}
        >
          Kenali Penyakit
        </Link>
        <Link
          className="text-[0.88rem] font-[650] text-[#42584d] no-underline touch-manipulation hover:text-(--green) focus:text-(--green) max-[1050px]:text-[0.8rem] max-[760px]:text-[0.95rem]"
          href="/gaya-hidup"
          onClick={closeMenu}
        >
          Gaya Hidup
        </Link>
        <Link
          className="text-[0.88rem] font-[650] text-[#42584d] no-underline touch-manipulation hover:text-(--green) focus:text-(--green) max-[1050px]:text-[0.8rem] max-[760px]:text-[0.95rem]"
          href="/cek-gaya-hidup"
          onClick={closeMenu}
        >
          Cek Gaya Hidup
        </Link>
      </nav>
    </header>
  );
}
