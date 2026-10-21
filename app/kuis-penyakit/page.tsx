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
    <main className="px-[5vw] py-12">
      <section className="mx-auto max-w-225">
        <h1 className="text-3xl font-extrabold text-(--green-dark)">
          Kuis Penyakit
        </h1>
        <p className="mt-2 max-w-prose text-(--muted)">
          Pilih topik untuk menguji pemahamanmu. Kuis ini untuk edukasi, bukan
          alat diagnosis.
        </p>

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
