import { focusRing, footerLinks } from "@/constants/footer";
import { ArrowUp, Info } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#123f32] px-[7.5%] pt-14 pb-6 text-[#e7f3eb] max-[760px]:px-[5%] max-[760px]:pt-11">
      <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1.2fr] md:gap-14">
        <div>
          <Link
            aria-label="HEALIFEST, kembali ke beranda"
            className={`inline-flex max-w-full items-center rounded-lg no-underline touch-manipulation ${focusRing}`}
            href="/"
          >
            <Image
              alt=""
              className="h-auto w-[min(250px,70vw)] rounded-xl p-1.5 max-[760px]:w-[min(300px,80vw)]"
              height={334}
              src="/icon2.png"
              width={1000}
            />
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
          href="#top"
        >
          Kembali ke atas
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
