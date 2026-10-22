import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import { habits } from "@/constants/habits";

export const metadata = {
  title: "Gaya Hidup Sehat | HEALIFEST",
  description:
    "Pelajari cara membangun gaya hidup sehat dengan kebiasaan yang positif dan berkelanjutan.",
};

export default function GayaHidupPage() {
  return (
    <>
      <Navbar />

      <main>
        <section
          className="px-[7.5%] py-19 max-[760px]:px-[5%] max-[760px]:py-13.75"
          id="gaya-hidup"
        >
          <div className="mb-7.5 items-end justify-between gap-7.5">
            <div>
              <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
                KEBIASAAN SEHAT
              </span>
              <h1 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
                Bangun gaya hidup lebih baik
              </h1>
            </div>
            <p className="max-w-107.5 text-[0.94rem] text-(--muted) mt-3">
              Mulai dari perubahan kecil yang realistis dan lakukan secara
              konsisten.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4.5 max-[1050px]:grid-cols-2 max-[480px]:grid-cols-1">
            {habits.map(({ title, description, Icon }) => (
              <article
                className="rounded-[17px] border border-(--line) bg-white p-6"
                key={title}
              >
                <span className="mb-3 inline-flex text-(--green) bg-(--mint) rounded-[17px] p-3">
                  <Icon size={28} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h2 className="mb-2 text-[1.1rem] font-bold text-(--green-dark)">
                  {title}
                </h2>
                <p className="text-[0.88rem] text-(--muted)">{description}</p>
              </article>
            ))}
          </div>

          <section className="mt-6 grid grid-cols-[220px_1fr] items-center gap-7.5 rounded-[20px] bg-(--mint) p-7 max-[760px]:grid-cols-1 max-[760px]:justify-items-center max-[760px]:text-center">
            <div
              className="grid size-47.5 grid-cols-2 grid-rows-2 overflow-hidden rounded-full border-2 border-white bg-[conic-gradient(#9dce9b_0_50%,#f2d58b_50%_75%,#e8a88b_75%_100%)] shadow-[0_5px_18px_rgba(29,107,77,0.08)]"
              role="img"
              aria-label="Ilustrasi porsi seimbang: setengah sayur dan buah, seperempat protein, seperempat karbohidrat"
            >
              <span className="col-span-2 flex flex-col items-center justify-center text-center text-xl font-extrabold leading-tight text-[#204a36]">
                ½
                <small className="text-[0.62rem] font-bold">
                  Sayur &amp; buah
                </small>
              </span>
              <span className="flex flex-col items-center justify-center text-center text-xl font-extrabold leading-tight text-[#204a36]">
                ¼<small className="text-[0.62rem] font-bold">Protein</small>
              </span>
              <span className="flex flex-col items-center justify-center text-center text-xl font-extrabold leading-tight text-[#204a36]">
                ¼<small className="text-[0.62rem] font-bold">Karbohidrat</small>
              </span>
            </div>

            <div>
              <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
                PANDUAN SEDERHANA
              </span>
              <h2 className="my-2 text-2xl font-bold text-(--green-dark)">
                Isi piring lebih beragam
              </h2>
              <p className="text-[0.91rem] text-[#53665b]">
                Gunakan prinsip porsi seimbang sebagai panduan umum, bukan
                aturan medis yang kaku. Kebutuhan makan dapat berbeda pada orang
                dengan diabetes, penyakit ginjal, gout, atau kondisi lain.
                Konsultasikan kebutuhan khusus kepada tenaga kesehatan atau ahli
                gizi.
              </p>
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}
