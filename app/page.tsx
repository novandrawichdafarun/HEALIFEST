import Footer from "@/components/layouts/Footer";
import HeroVisual from "@/components/HeroVisual";
import Navbar from "@/components/layouts/Navbar";
import { stats } from "@/constants/beranda";
import { ArrowRight, Check, HeartPulse, Leaf } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section
          className="grid grid-cols-[1.1fr_0.9fr] items-center gap-10 overflow-hidden bg-[linear-gradient(120deg,#e8f5ed_0%,#f4faf5_60%,#fdfcf5_100%)] px-[8%] pt-18.5 pb-19.5 max-[1050px]:px-[6%] max-[760px]:grid-cols-1 max-[760px]:gap-1.25 max-[760px]:px-[6%] max-[760px]:pt-13.75 max-[760px]:pb-10"
          id="beranda"
        >
          <div className="max-w-170">
            <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
              YOUR HEALTH, YOUR FUTURE
            </span>
            <h1 className="my-4.5 mb-5.5 max-w-180 text-[clamp(2.7rem,5vw,4.5rem)] font-bold leading-[1.08] tracking-[-2px] text-(--green-dark) max-[760px]:tracking-[-1px] max-[480px]:text-[2.55rem]">
              Sehat dimulai dari{" "}
              <span className="text-(--green)">kebiasaan kecil.</span>
            </h1>
            <p className="max-w-150 text-[1.06rem] text-[#52685c]">
              Kenali faktor risiko penyakit tidak menular, temukan informasi
              yang tepercaya, dan mulai perjalanan menuju hidup yang lebih sehat
              bersama HEALIFEST.
            </p>
            <div className="mt-6.5 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center justify-center gap-2.5 rounded-[11px] bg-(--green) px-5 py-3 text-[0.92rem] font-bold text-white no-underline transition-[transform,background] duration-200 hover:-translate-y-0.5 hover:bg-(--green-dark)"
                href="/penyakit"
              >
                Jelajahi Edukasi
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2.5 rounded-[11px] border border-[#cfe0d4] bg-white px-5 py-3 text-[0.92rem] font-bold text-(--green) no-underline transition-transform duration-200 hover:-translate-y-0.5"
                href="/gaya-hidup"
              >
                Coba Gaya Hidup Sehat
              </Link>
            </div>
            <div className="mt-5.75 flex items-center gap-1.5 text-[0.84rem] text-[#52685c]">
              <Check
                className="text-(--green)"
                size={16}
                strokeWidth={3}
                aria-hidden="true"
              />
              Edukasi mudah dipahami · Interaktif · Gratis
            </div>
          </div>

          <div
            className="relative grid min-h-90 place-items-center max-[760px]:min-h-72.5 max-[480px]:min-h-65"
            role="img"
            aria-label="Ilustrasi makanan sehat dan kebiasaan hidup sehat"
          >
            <div className="absolute size-[min(340px,75vw)] rounded-full bg-[radial-gradient(circle_at_35%_30%,#fff9e5,#c6e7d2_66%,#a8d4bb)] max-[760px]:size-62.5 max-[480px]:size-55" />
            <div className="absolute top-6.25 right-0 flex items-center gap-2.5 rounded-[15px] border border-[rgba(23,107,80,0.08)] bg-white px-4.25 py-3.25 shadow-(--shadow) max-[760px]:top-3 max-[760px]:right-[2%] max-[480px]:px-3 max-[480px]:py-2.5">
              <span className="grid size-9.5 place-items-center rounded-xl bg-[#e7f5ec] text-(--green)">
                <Leaf size={21} aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-[1.4]">
                <b className="text-[0.82rem]">Mulai dari hari ini</b>
                <small className="text-[0.73rem] text-(--muted) max-[480px]:text-[0.66rem]">
                  Satu kebiasaan sehat
                </small>
              </span>
            </div>
            <HeroVisual />
            <div className="absolute bottom-6 left-0 flex items-center gap-2.5 rounded-[15px] border border-[rgba(23,107,80,0.08)] bg-white px-4.25 py-3.25 shadow-(--shadow) max-[760px]:bottom-2.5 max-[760px]:left-[2%] max-[480px]:px-3 max-[480px]:py-2.5">
              <span className="grid size-9.5 place-items-center rounded-xl bg-[#e7f5ec] text-(--green)">
                <HeartPulse size={21} aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-[1.4]">
                <b className="text-[0.82rem]">Healthy lifestyle</b>
                <small className="text-[0.73rem] text-(--muted) max-[480px]:text-[0.66rem]">
                  Better life, every day
                </small>
              </span>
            </div>
          </div>
        </section>

        <section
          className="border-b border-(--line) bg-white px-[7%] max-[760px]:px-[5%]"
          aria-label="Fokus website"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-(--line)">
            {stats.map(({ icon: Icon, value, unit, label }) => (
              <div
                className="flex items-center justify-center gap-4 px-4 py-7 max-[760px]:flex-col max-[760px]:gap-2 max-[760px]:px-2 max-[760px]:py-5 max-[760px]:text-center"
                key={label}
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-[14px] bg-(--mint) text-(--green) max-[760px]:size-10 max-[760px]:rounded-xl">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div className="leading-tight">
                  <p className="flex items-baseline gap-1.5 max-[760px]:justify-center">
                    <strong className="text-[1.9rem] font-extrabold tracking-[-0.5px] text-(--green) max-[480px]:text-[1.4rem]">
                      {value}
                    </strong>
                    {unit && (
                      <span className="text-[0.95rem] font-bold text-(--green-dark) max-[480px]:text-[0.8rem]">
                        {unit}
                      </span>
                    )}
                  </p>
                  <p className="mt-1 text-[0.82rem] leading-[1.35] text-(--muted) max-[760px]:text-[0.72rem] max-[480px]:text-[0.65rem]">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
