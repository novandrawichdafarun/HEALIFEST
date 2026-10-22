import { DATA_VIDEO } from "@/constants/videos";
import YoutubePlayer from "@/components/YoutubePlayer";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default function VideoEdukasiPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="px-[7.5%] py-19 max-[760px]:px-[5%] max-[760px]:py-13.75">
          <div className="mb-7.5 items-end justify-between gap-7.5">
            <div>
              <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
                VIDEO EDUKASI
              </span>
              <h2 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
                Penjelasan Gaya Hidup Sehat dan Pencegahan Penyakit
              </h2>
            </div>
            <p className="max-w-107.5 text-[0.94rem] text-(--muted) mt-3">
              Temukan video edukasi yang memberikan penjelasan mendalam tentang
              gaya hidup sehat, pencegahan penyakit, dan tips untuk menjaga
              kesehatan Anda.
            </p>
          </div>

          {/* Daftar Kartu Video */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {DATA_VIDEO.map((video) => (
              <article
                key={video.id}
                className="group flex flex-col bg-[#123f32] rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Bingkai Pemutar Video */}
                <div className="relative aspect-video w-full bg-[#123f32] overflow-hidden">
                  <YoutubePlayer url={video.url} />
                </div>

                {/* Judul dan Detail Video */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <h2 className="text-[0.94rem] font-bold text-[#e7f3eb] group-hover:text-[#4ade80] transition-colors line-clamp-2">
                    {video.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
