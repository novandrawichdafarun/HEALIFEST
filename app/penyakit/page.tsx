import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Stethoscope } from "lucide-react";

import type { Metadata } from "next";
import DiseaseTabs from "@/components/DiseaseTabs";
import InfoBlockView from "@/components/InfoBlockView";
import { conditions, diseaseBanners } from "@/constants/conditions";

export const metadata: Metadata = {
  title: "Kenali Penyakit | HEALIFEST",
  description:
    "Kenali penyakit tidak menular seperti diabetes, hipertensi, kolesterol, dan asam urat. Pelajari pengertian, faktor risiko, gejala, komplikasi, pemeriksaan, dan langkah pengelolaan.",
};

export default function PenyakitPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Ringkasan Kartu Penyakit */}
        <section className="px-[7.5%] py-19 max-[760px]:px-[5%] max-[760px]:py-13.75">
          <div className="mb-7.5 items-end justify-between gap-7.5">
            <div>
              <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
                KENALI &amp; PAHAMI
              </span>
              <h1 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
                Kenali penyakit tidak menular
              </h1>
            </div>
            <p className="mt-3 max-w-107.5 text-[0.94rem] text-(--muted)">
              Pengetahuan adalah langkah awal untuk melakukan pencegahan dan
              mencari pertolongan yang tepat.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4.5 max-[1050px]:grid-cols-2 max-[480px]:grid-cols-1">
            {conditions.map((condition) => {
              const Icon = condition.icon;

              return (
                <article
                  className="rounded-[18px] border border-(--line) bg-white p-5.75 shadow-[0_5px_18px_rgba(24,73,54,0.035)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-(--shadow)"
                  key={condition.id}
                >
                  <span className="mb-5 grid size-13.75 place-items-center rounded-[17px] bg-(--mint) text-(--green)">
                    <Icon size={28} aria-hidden="true" />
                  </span>
                  <span className="text-[0.63rem] font-extrabold tracking-[1px] text-(--green)">
                    {condition.category}
                  </span>
                  <h2 className="my-2 text-[1.2rem] font-bold text-(--green-dark)">
                    {condition.name}
                  </h2>
                  <p className="mb-4 min-h-24 text-[0.88rem] text-(--muted) max-[1050px]:min-h-0">
                    {condition.summary}
                  </p>
                  <Link
                    className="inline-flex items-center gap-1 text-[0.82rem] font-extrabold text-(--green) no-underline hover:underline"
                    href={`#disease-panel-${condition.id}`}
                  >
                    Pelajari selengkapnya
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                  <Link
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-[#cfe0d4] px-3 py-2.5 text-[0.84rem] font-bold text-(--green) no-underline transition-colors hover:bg-(--mint)"
                    href={`/kuis-penyakit?penyakit=${condition.id}`}
                  >
                    Ikuti kuis
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* Pusat Edukasi (Header Menggunakan Component Next.js Image) */}
        <section
          className="scroll-mt-22.5 bg-[#f4f8f4] px-[7.5%] py-19 max-[760px]:px-[5%] max-[760px]:py-13.75"
          id="disease-details"
        >
          <div className="mb-7.5 items-end justify-between gap-7.5">
            <div>
              <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
                PUSAT EDUKASI
              </span>
              <h2 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
                Informasi kesehatan lebih lengkap
              </h2>
            </div>
            <p className="mt-3 max-w-107.5 text-[0.94rem] text-(--muted)">
              Pilih topik untuk membaca pengertian, faktor risiko, gejala,
              komplikasi, pemeriksaan, dan langkah pengelolaan.
            </p>
          </div>

          <DiseaseTabs
            tabs={conditions.map((condition) => ({
              id: condition.id,
              label: condition.name.replace(" Melitus", ""),
            }))}
            panels={conditions.map((condition) => {
              const Icon = condition.icon;
              const bannerImage =
                diseaseBanners[condition.id] ||
                "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80";

              return (
                <article
                  className="overflow-hidden rounded-[20px] border border-(--line) bg-white shadow-(--shadow)"
                  key={condition.id}
                >
                  {/* Header Topik Ekstra Lebar & Tinggi */}
                  <div className="relative flex min-h-[240px] items-center overflow-hidden bg-(--green-dark) px-8 py-14 text-white sm:min-h-[300px] sm:px-12 sm:py-20">
                    {/* Komponen Optimasi Gambar Next.js */}
                    <Image
                      src={bannerImage}
                      alt={`Latar belakang ${condition.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="object-cover opacity-40 mix-blend-overlay"
                      priority={condition.number === "01"}
                    />
                    {/* Lapisan Gradasi Gelap */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />

                    {/* Konten Utama Header */}
                    <div className="relative z-10 flex items-center gap-6 max-[760px]:flex-col max-[760px]:items-start">
                      <span className="grid size-20 shrink-0 place-items-center rounded-[24px] bg-white/20 backdrop-blur-md text-white shadow-md max-[760px]:size-16 max-[760px]:rounded-2xl">
                        <Icon
                          size={42}
                          className="max-[760px]:size-9"
                          aria-hidden="true"
                        />
                      </span>
                      <div className="space-y-1.5">
                        <span className="inline-block text-[0.78rem] font-extrabold tracking-[2px] text-(--mint)">
                          TOPIK {condition.number}
                        </span>
                        <h3 className="text-3xl font-bold leading-[1.2] text-white max-[760px]:text-2xl">
                          {condition.name}
                        </h3>
                        <p className="max-w-3xl text-[0.98rem] text-slate-100 leading-relaxed">
                          {condition.detailSummary}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bagian Isi Penjelasan Dua Kolom & Kuis */}
                  <div className="p-[clamp(22px,4vw,40px)]">
                    <div className="grid grid-cols-2 gap-8 max-[760px]:grid-cols-1 max-[760px]:gap-1">
                      <div>
                        {condition.left.map((block) => (
                          <InfoBlockView block={block} key={block.title} />
                        ))}
                      </div>
                      <div>
                        {condition.right.map((block) => (
                          <InfoBlockView block={block} key={block.title} />
                        ))}
                      </div>
                    </div>

                    <p className="mt-7 rounded-r-xl border-l-4 border-(--gold) bg-[#fff8e8] px-5 py-4.25 text-[0.9rem] text-[#594c2d]">
                      <strong>{condition.takeawayLabel}</strong>{" "}
                      {condition.takeaway}
                    </p>
                    <Link
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-[11px] bg-(--green) px-5 py-3 text-[0.92rem] font-bold text-white no-underline transition-colors hover:bg-(--green-dark)"
                      href={`/kuis-penyakit?penyakit=${condition.id}`}
                    >
                      Ikuti kuis {condition.name}
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              );
            })}
          />
        </section>

        <aside className="mx-[7.5%] mb-11.25 mt-10 rounded-2xl border border-[#e1eee4] bg-(--mint-2) p-5 text-[0.9rem] text-[#53665b] max-[760px]:mx-[5%]">
          <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-(--green-dark)">
            <Stethoscope size={19} aria-hidden="true" />
            Catatan keselamatan kesehatan
          </h2>
          <p>
            Informasi di halaman ini ditujukan untuk edukasi dan tidak
            menggantikan diagnosis, saran, atau perawatan dari tenaga kesehatan.
            Jika mengalami gejala yang mengkhawatirkan atau keadaan darurat,
            segera hubungi tenaga kesehatan atau layanan darurat setempat.
          </p>
        </aside>
      </main>

      <Footer />
    </>
  );
}
