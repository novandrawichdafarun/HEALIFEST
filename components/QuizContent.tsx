import { quizzes } from "@/constants/quizzes";
import DiseaseQuiz from "@/components/DiseaseQuiz";
import { PageProps } from "@/types/penyakit";
import { ArrowRight, ClipboardCheck } from "lucide-react";
import Link from "next/link";

export async function QuizContent({ searchParams }: PageProps) {
  const { penyakit } = await searchParams;
  const selectedId = Array.isArray(penyakit) ? penyakit[0] : penyakit;
  const quiz = quizzes.find((item) => item.id === selectedId);

  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#f4f8f4] px-[7.5%] py-[76px] max-[760px]:px-[5%] max-[760px]:py-[55px]">
      <div className="mx-auto mb-8 max-w-[900px]">
        <span className="inline-block text-[0.73rem] font-extrabold tracking-[1.8px] text-(--green)">
          UJI PENGETAHUAN
        </span>
        <h1 className="mt-2 text-[clamp(1.8rem,3.2vw,2.55rem)] font-bold leading-[1.2] tracking-[-0.8px] text-(--green-dark)">
          {quiz ? `Kuis ${quiz.title}` : "Kuis kesehatan per topik"}
        </h1>
        <p className="mt-3 max-w-[650px] text-[0.94rem] text-(--muted)">
          {quiz
            ? "Jawab pertanyaan berikut untuk menguji pemahamanmu. Setiap jawaban dilengkapi penjelasan."
            : "Pilih topik penyakit untuk memulai kuis edukasi."}
        </p>
      </div>

      {quiz ? (
        <DiseaseQuiz quiz={quiz} />
      ) : (
        <section
          aria-label="Pilih topik kuis"
          className="mx-auto grid max-w-[900px] grid-cols-2 gap-4 max-[600px]:grid-cols-1"
        >
          {quizzes.map((item) => (
            <Link
              className="flex items-center justify-between gap-4 rounded-[16px] border border-(--line) bg-white p-5 text-(--green-dark) no-underline shadow-[0_5px_18px_rgba(24,73,54,0.035)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-(--shadow)"
              href={`/kuis-penyakit?penyakit=${item.id}`}
              key={item.id}
            >
              <span>
                <span className="block text-[0.75rem] font-extrabold tracking-[1px] text-(--green)">
                  {item.questions.length} PERTANYAAN
                </span>
                <span className="mt-1 block font-bold">{item.title}</span>
              </span>
              <ArrowRight
                className="shrink-0 text-(--green)"
                size={19}
                aria-hidden="true"
              />
            </Link>
          ))}
        </section>
      )}

      <aside className="mx-auto mt-6 flex max-w-[900px] items-start gap-3 rounded-[14px] border border-[#e1eee4] bg-(--mint-2) p-5 text-[0.88rem] text-[#53665b]">
        <ClipboardCheck
          className="mt-0.5 shrink-0 text-(--green)"
          size={20}
          aria-hidden="true"
        />
        <p>
          Kuis ini untuk edukasi, bukan alat diagnosis atau penilaian status
          kesehatan.
        </p>
      </aside>
    </main>
  );
}
