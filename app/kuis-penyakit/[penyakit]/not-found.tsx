import Link from "next/link";

export default function KuisTidakDitemukan() {
  return (
    <main className="px-[5vw] py-12">
      <section className="mx-auto max-w-225 rounded-[20px] border border-(--line) bg-white p-[clamp(22px,4vw,38px)] shadow-(--shadow)">
        <h1 className="text-xl font-bold text-(--green-dark)">
          Kuis tidak ditemukan
        </h1>
        <p className="mt-2 text-[0.9rem] text-(--muted)">
          Topik yang kamu cari belum tersedia. Pilih dari daftar kuis yang ada.
        </p>
        <Link
          className="mt-5 inline-flex rounded-[11px] bg-(--green) px-5 py-3 text-[0.92rem] font-bold text-white no-underline transition-colors hover:bg-(--green-dark)"
          href="/kuis-penyakit"
        >
          Lihat daftar kuis
        </Link>
      </section>
    </main>
  );
}
