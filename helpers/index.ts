import { Answers } from "@/types/gayaHidup";

export function getTips(answers: Answers) {
  const tips: string[] = [];

  if ((answers.fruit ?? 2) < 2) {
    tips.push("Tambahkan sayur dan buah secara bertahap dalam menu harian.");
  }
  if ((answers.activity ?? 2) < 2) {
    tips.push(
      "Cari aktivitas yang cocok, misalnya berjalan kaki, dan tingkatkan secara bertahap.",
    );
  }
  if ((answers.sweet ?? 2) < 2) {
    tips.push(
      "Kurangi frekuensi minuman manis dan pilih air putih bila sesuai kondisi kesehatan.",
    );
  }
  if ((answers.smoke ?? 2) < 2) {
    tips.push(
      "Pertimbangkan dukungan tenaga kesehatan atau layanan berhenti merokok.",
    );
  }
  if ((answers.checkup ?? 2) < 2) {
    tips.push(
      "Diskusikan pemeriksaan tekanan darah, gula darah, dan lipid berdasarkan usia serta faktor risiko.",
    );
  }

  return tips;
}
