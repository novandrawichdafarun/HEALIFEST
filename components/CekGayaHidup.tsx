"use client";

import { questions } from "@/constants/questions";
import { getTips } from "@/helpers";
import { AnswerId } from "@/types/gayaHidup";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";

export default function CekGayaHidup() {
  const [result, setResult] = useState<{
    score: number;
    title: string;
    tips: string[];
  } | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result) {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [result]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const answers = Object.fromEntries(
      questions.map(({ id }) => [id, Number(formData.get(id))]),
    ) as Record<AnswerId, number>;
    const score = Object.values(answers).reduce(
      (total, value) => total + value,
      0,
    );

    setResult({
      score,
      title:
        score <= 4
          ? "Mulai dari satu perubahan kecil"
          : score <= 7
            ? "Ada kebiasaan yang bisa ditingkatkan"
            : "Kebiasaan baik yang bisa dipertahankan",
      tips: getTips(answers),
    });
  }

  return (
    <form
      className="mx-auto max-w-275 rounded-[20px] border border-(--line) bg-white p-[clamp(22px,4vw,38px)] shadow-(--shadow)"
      onSubmit={handleSubmit}
    >
      {questions.map((question) => (
        <div
          className="grid grid-cols-[1fr_minmax(220px,0.75fr)] items-center gap-6 border-b border-(--line) py-3.75 max-[760px]:grid-cols-1 max-[760px]:gap-2"
          key={question.id}
        >
          <label className="text-[1rem] font-[650]" htmlFor={question.id}>
            {question.label}
          </label>
          <select
            className="w-full rounded-[10px] border border-[#d5e0d8] bg-white px-3 py-2.75 text-foreground"
            defaultValue=""
            id={question.id}
            name={question.id}
            required
          >
            <option value="" disabled>
              Pilih jawaban
            </option>
            {question.options.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button
        className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-[11px] bg-(--green) px-5 py-3 text-[0.92rem] font-bold text-white transition-colors hover:bg-(--green-dark)"
        type="submit"
      >
        Lihat Ringkasan Kebiasaan
        <ArrowRight size={17} aria-hidden="true" />
      </button>

      {result && (
        <div
          aria-live="polite"
          className="mt-5.5 rounded-[14px] bg-(--mint) p-5 text-(--green-dark)"
          ref={resultRef}
          role="status"
        >
          <h2 className="mb-2 text-xl font-bold">{result.title}</h2>
          <p>
            Ringkasan kebiasaan: {result.score} dari 10 poin pada kuesioner
            edukatif ini. Angka ini bukan ukuran risiko penyakit.
          </p>
          {result.tips.length > 0 ? (
            <>
              <p className="mt-4 font-semibold">
                Saran yang bisa dipertimbangkan:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {result.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-4">
              Pertahankan kebiasaan baik dan tetap lakukan pemeriksaan kesehatan
              sesuai kebutuhan.
            </p>
          )}
          <p className="mt-4 text-[0.82rem] text-(--muted)">
            Hasil ini bukan diagnosis, tidak tervalidasi sebagai instrumen
            klinis, dan tidak menggantikan konsultasi tenaga kesehatan.
          </p>
        </div>
      )}
    </form>
  );
}
