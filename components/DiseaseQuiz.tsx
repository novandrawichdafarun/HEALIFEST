"use client";

import { Quiz } from "@/types/quiz";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DiseaseQuiz({ quiz }: { quiz: Quiz }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const question = quiz.questions[questionIndex];
  const isCorrect = selectedAnswer === question.answer;

  function selectAnswer(index: number) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(index);
    if (index === question.answer) setScore((currentScore) => currentScore + 1);
  }

  function goToNextQuestion() {
    if (selectedAnswer === null) return;
    if (questionIndex === quiz.questions.length - 1) {
      setIsComplete(true);
      return;
    }
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsComplete(false);
  }

  const progress = isComplete
    ? 100
    : (questionIndex / quiz.questions.length) * 100;

  return (
    <section className="mx-auto max-w-[900px] rounded-[20px] border border-(--line) bg-white p-[clamp(22px,4vw,38px)] shadow-(--shadow)">
      <div className="mb-7">
        <div className="mb-3 flex items-center justify-between gap-4 text-[0.75rem] font-extrabold tracking-[1px] text-(--green)">
          <span>
            {isComplete
              ? "HASIL KUIS"
              : `PERTANYAAN ${questionIndex + 1} DARI ${quiz.questions.length}`}
          </span>
          <span>{quiz.title}</span>
        </div>
        <div
          aria-label={`Progres kuis ${Math.round(progress)}%`}
          className="h-2 overflow-hidden rounded-full bg-(--mint)"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
        >
          <div
            className="h-full rounded-full bg-(--green) transition-[width] duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {isComplete ? (
        <div aria-live="polite" className="rounded-[14px] bg-(--mint) p-6">
          <p className="text-4xl font-extrabold text-(--green)">
            {score}/{quiz.questions.length}
          </p>
          <h1 className="mt-2 text-xl font-bold text-(--green-dark)">
            {score === quiz.questions.length
              ? "Bagus! Terus belajar."
              : "Yuk, pelajari lagi materi HEALIFEST."}
          </h1>
          <p className="mt-2 text-[0.9rem] text-[#53665b]">
            Skor ini mengukur jawaban pada kuis edukasi singkat, bukan status
            kesehatanmu.
          </p>
          <button
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-[11px] border border-[#cfe0d4] bg-white px-5 py-3 text-[0.92rem] font-bold text-(--green) transition-colors hover:bg-(--mint-2)"
            onClick={restartQuiz}
            type="button"
          >
            <RotateCcw size={16} aria-hidden="true" />
            Ulangi kuis
          </button>
        </div>
      ) : (
        <>
          <h1 className="text-xl font-bold leading-snug text-(--green-dark)">
            {question.question}
          </h1>

          <div className="mt-5 grid gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isAnswer = question.answer === index;
              let optionStyle =
                "border-(--line) bg-white text-(--foreground) hover:border-(--green)";

              if (selectedAnswer !== null && isAnswer) {
                optionStyle = "border-[#176b50] bg-[#e8f5ed] text-[#123f32]";
              } else if (isSelected && !isCorrect) {
                optionStyle = "border-[#d88b72] bg-[#fff1ec] text-[#65372c]";
              }

              return (
                <button
                  aria-pressed={isSelected}
                  className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition-colors disabled:cursor-default ${optionStyle}`}
                  disabled={selectedAnswer !== null}
                  key={option}
                  onClick={() => selectAnswer(index)}
                  type="button"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-(--mint) text-sm font-bold text-(--green)">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="pt-0.5">{option}</span>
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div
              aria-live="polite"
              className={`mt-5 rounded-[14px] p-4 text-[0.9rem] ${
                isCorrect
                  ? "bg-(--mint) text-(--green-dark)"
                  : "bg-[#fff1ec] text-[#65372c]"
              }`}
              role="status"
            >
              <strong>{isCorrect ? "Benar!" : "Belum tepat."}</strong>{" "}
              {question.explanation}
            </div>
          )}

          <button
            className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-[11px] bg-(--green) px-5 py-3 text-[0.92rem] font-bold text-white transition-colors hover:bg-(--green-dark) disabled:cursor-not-allowed disabled:opacity-50"
            disabled={selectedAnswer === null}
            onClick={goToNextQuestion}
            type="button"
          >
            {questionIndex === quiz.questions.length - 1
              ? "Lihat hasil kuis"
              : "Pertanyaan berikutnya"}
            <ArrowRight size={17} aria-hidden="true" />
          </button>
        </>
      )}

      <Link
        className="mt-6 inline-flex items-center gap-2 text-[0.88rem] font-semibold text-(--green) no-underline hover:underline"
        href="/penyakit"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Kembali ke halaman penyakit
      </Link>
      <p className="mt-5 border-t border-(--line) pt-4 text-[0.82rem] text-(--muted)">
        Kuis ini bertujuan untuk edukasi dan bukan alat diagnosis atau penilaian
        kondisi kesehatan.
      </p>
    </section>
  );
}
