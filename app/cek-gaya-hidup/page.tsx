import type { Metadata } from "next";
import CekGayaHidup from "@/components/CekGayaHidup";
import Navbar from "@/components/layouts/Navbar";
import { ClipboardCheck } from "lucide-react";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Cek Gaya Hidup | HEALIFEST",
  description:
    "Lakukan kuesioner edukatif untuk mengevaluasi kebiasaan hidupmu dan dapatkan saran perbaikan.",
};

export default function CekGayaHidupPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-[#f4f8f4] px-[7.5%] py-19 max-[760px]:px-[5%] max-[760px]:py-13.75">
          <div className="mb-7.5 flex items-end justify-between gap-7.5 max-[760px]:block">
            <div>
              <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
                REFLEKSI DIRI
              </span>
              <h1 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
                Cek kebiasaan hidupmu
              </h1>
            </div>
            <p className="max-w-107.5 text-[0.94rem] text-(--muted) max-[760px]:mt-3">
              Kuesioner edukatif ini membantu mengenali kebiasaan yang dapat
              diperbaiki. Ini bukan alat diagnosis atau prediksi penyakit.
            </p>
          </div>

          <CekGayaHidup />

          <aside className="mx-auto mt-6 flex max-w-225 items-start gap-3 rounded-[14px] border border-[#e1eee4] bg-(--mint-2) p-5 text-[0.88rem] text-[#53665b]">
            <ClipboardCheck
              className="mt-0.5 shrink-0 text-(--green)"
              size={20}
              aria-hidden="true"
            />
            <p>
              Jawaban hanya digunakan untuk membuat ringkasan di halaman ini dan
              tidak disimpan.
            </p>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}
