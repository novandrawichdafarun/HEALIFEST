import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DiseaseQuiz from "@/components/DiseaseQuiz";
import QuizLoading from "@/components/QuizLoading";
import { getAllQuizzes, getQuiz } from "@/helpers/index";

type Props = { params: Promise<{ penyakit: string }> };

export function generateStaticParams() {
  return getAllQuizzes().map((quiz) => ({ penyakit: quiz.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { penyakit } = await params;
  const quiz = getQuiz(penyakit);
  if (!quiz) return {};

  return {
    title: `Kuis ${quiz.title} | HEALIFEST`,
    description: `Kuis edukasi singkat tentang ${quiz.title.toLowerCase()} (${quiz.questions.length} pertanyaan).`,
  };
}

async function KuisPenyakitDetailContent({ params }: Props) {
  const { penyakit } = await params;
  const quiz = getQuiz(penyakit);
  if (!quiz) notFound();

  return (
    <main className="px-[5vw] py-12">
      <DiseaseQuiz key={quiz.id} quiz={quiz} />
    </main>
  );
}

export default function KuisPenyakitDetailPage({ params }: Props) {
  return (
    <Suspense fallback={<QuizLoading />}>
      <KuisPenyakitDetailContent params={params} />
    </Suspense>
  );
}
