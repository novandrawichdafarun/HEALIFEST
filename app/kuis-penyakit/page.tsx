import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllQuizzes } from "@/helpers/index";

export const metadata: Metadata = {
  title: "Kuis Penyakit | HEALIFEST",
  description:
    "Kuis edukasi singkat tentang diabetes, hipertensi, kolesterol, dan asam urat.",
};

export default function KuisPenyakitPage() {
  const quizzes = getAllQuizzes();

  return (
    <main>
      <section className="px-[7.5%] py-19 max-[760px]:px-[5%] max-[760px]:py-13.75">
        <div className="mb-7.5 items-end justify-between gap-7.5">
          <div>
            <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
              KUIS PENYAKIT
            </span>
            <h1 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
              Uji pemahamanmu tentang penyakit tidak menular
            </h1>
          </div>
          <p className="max-w-107.5 text-[0.94rem] text-(--muted) mt-3">
            Kuis ini dirancang untuk edukasi, bukan alat diagnosis. Jawaban yang
            benar akan memberikan pemahaman yang lebih baik tentang penyakit
            tidak menular.
          </p>
        </div>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {quizzes.map((quiz) => (
            <li key={quiz.id}>
              <Link
                className="flex h-full items-center justify-between gap-4 rounded-[14px] border border-(--line) bg-white p-5 text-foreground no-underline shadow-(--shadow) transition-colors hover:border-(--green)"
                href={`/kuis-penyakit/${quiz.id}`}
              >
                <span>
                  <span className="block font-bold text-(--green-dark)">
                    {quiz.title}
                  </span>
                  <span className="mt-1 block text-[0.85rem] text-(--muted)">
                    {quiz.questions.length} pertanyaan
                  </span>
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className="shrink-0 text-(--green)"
                  size={18}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
