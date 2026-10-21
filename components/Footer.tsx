import { focusRing, footerLinks } from "@/constants/footer";
import { ArrowUp, Heart, Info } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#123f32] px-[7.5%] pt-14 pb-6 text-[#e7f3eb] max-[760px]:px-[5%] max-[760px]:pt-11">
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1.2fr] md:gap-14">
        <div>
          <Link
            aria-label="HEALIFEST, kembali ke beranda"
            className={`inline-flex items-center gap-3 rounded-lg text-white no-underline touch-manipulation ${focusRing}`}
            href="/"
          >
            <span
              aria-hidden="true"
              className="grid size-10.5 shrink-0 place-items-center rounded-[14px] bg-[#2d7b5e] text-white"
            >
              <Heart size={21} fill="currentColor" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-[1.25rem] font-extrabold tracking-[0.5px]">
                HEALIFEST
              </span>
              <span className="mt-1.5 text-[0.66rem] font-medium tracking-[0.2px] text-[#c4d8cb]">
                Healthy Lifestyle, Better Life.
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-[0.88rem] leading-[1.7] text-[#c4d8cb]">
            Membangun kebiasaan sehat, satu langkah setiap hari. Media edukasi
            untuk mengenali penyakit tidak menular dan menerapkan gaya hidup
            yang lebih baik.
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="mb-4 text-[0.73rem] font-extrabold tracking-[1.8px] text-[#c4d8cb]">
            JELAJAHI
          </h2>
          <ul className="space-y-2.5 text-[0.9rem] font-medium">
            {footerLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  className={`rounded-sm text-[#e7f3eb] no-underline transition-colors hover:text-white hover:underline hover:underline-offset-4 ${focusRing}`}
                  href={href}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-[0.73rem] font-extrabold tracking-[1.8px] text-[#c4d8cb]">
            CATATAN PENTING
          </h2>
          <div className="flex items-start gap-3 rounded-[14px] border border-white/15 bg-white/5 p-4">
            <Info
              aria-hidden="true"
              className="mt-0.5 shrink-0 text-[#c4d8cb]"
              size={18}
            />
            <p className="text-[0.82rem] leading-[1.65] text-[#c4d8cb]">
              HEALIFEST adalah media edukasi, bukan alat diagnosis atau
              pengganti konsultasi tenaga kesehatan. Jika mengalami gejala
              darurat, segera cari pertolongan medis.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-11 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 text-[0.78rem] text-[#c4d8cb]">
        <small>© 2026 HEALIFEST · Proyek edukasi kesehatan</small>
        <a
          className={`inline-flex items-center gap-1.5 rounded-sm font-semibold text-[#e7f3eb] no-underline transition-colors hover:text-white ${focusRing}`}
          href="#"
        >
          Kembali ke atas
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
