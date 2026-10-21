import Link from "next/link";
import { Compass, ArrowLeft, MapPinOff } from "lucide-react";

export default async function NotFoundView() {
  const targetUrl = "/";
  const buttonText = "Kembali ke Beranda";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(120deg,#e8f5ed_0%,#f4faf5_60%,#fdfcf5_100%)] px-5 py-16">
      <div className="pointer-events-none absolute -left-24 -top-24 size-72 rounded-full bg-[#c6e7d2]/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 size-72 rounded-full bg-[#f2d58b]/30 blur-3xl" />

      <section className="relative w-full max-w-xl rounded-[20px] border border-(--line) bg-white p-[clamp(26px,6vw,52px)] text-center shadow-(--shadow)">
        <div className="mx-auto grid size-18 place-items-center rounded-[20px] bg-(--mint) text-(--green)">
          <Compass size={36} strokeWidth={1.75} aria-hidden="true" />
        </div>

        <p className="mt-6 text-6xl font-extrabold tracking-tight text-(--green) sm:text-7xl">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-(--green-dark) sm:text-3xl">
          Halaman tidak ditemukan
        </h1>
        <p className="mx-auto mt-3 max-w-sm text-sm text-(--muted) sm:text-base">
          Maaf, halaman yang Anda cari mungkin telah dihapus, diubah namanya,
          atau memang tidak pernah ada.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href={targetUrl}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-[11px] bg-(--green) px-5 py-3 text-[0.92rem] font-bold text-white no-underline transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-(--green-dark) sm:w-auto"
          >
            <ArrowLeft size={17} strokeWidth={2} aria-hidden="true" />
            {buttonText}
          </Link>
        </div>

        <p className="mt-8 inline-flex items-center gap-1.5 text-xs text-(--muted)">
          <MapPinOff size={14} strokeWidth={1.75} aria-hidden="true" />
          Kode kesalahan: 404 Not Found
        </p>
      </section>
    </main>
  );
}
