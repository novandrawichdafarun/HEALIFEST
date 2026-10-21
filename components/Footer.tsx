import { ArrowUp, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-5 bg-[#123f32] px-[7.5%] pt-10 pb-6.25 text-[#e7f3eb] max-[760px]:block max-[760px]:px-[5%] max-[760px]:py-8">
      <Link
        className="flex items-center gap-2.5 text-[1.25rem] font-[850] tracking-[0.4px] leading-[1.15] text-white no-underline touch-manipulation"
        href="/"
        aria-label="HEALIFEST, kembali ke beranda"
      >
        <span className="grid size-10.5 place-items-center rounded-[14px] bg-[#2d7b5e] text-white">
          <Heart size={22} fill="currentColor" aria-hidden="true" />
        </span>
        <span className="flex flex-col">
          HEALIFEST
          <small className="mt-1 text-[0.66rem] font-medium tracking-normal text-[#c4d8cb]">
            Healthy Lifestyle, Better Life.
          </small>
        </span>
      </Link>

      <p className="text-[0.87rem] text-[#c4d8cb] max-[760px]:my-5">
        Membangun kebiasaan sehat, satu langkah setiap hari.
      </p>

      <nav
        className="flex flex-wrap gap-4.5 text-[0.82rem] max-[760px]:my-5"
        aria-label="Navigasi footer"
      >
        <a className="no-underline hover:text-white" href="#penyakit">
          Edukasi PTM
        </a>
        <a className="no-underline hover:text-white" href="#referensi">
          Referensi
        </a>
        <Link
          className="inline-flex items-center gap-1 no-underline hover:text-white"
          href="/"
        >
          Kembali ke atas
          <ArrowUp size={14} aria-hidden="true" />
        </Link>
      </nav>

      <small className="w-full border-t border-white/15 pt-4.5 text-[0.75rem] text-[#c4d8cb] max-[760px]:block">
        © 2026 HEALIFEST · Proyek edukasi kesehatan
      </small>
    </footer>
  );
}
