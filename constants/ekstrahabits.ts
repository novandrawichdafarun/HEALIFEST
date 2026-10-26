import {
  CigaretteOff,
  GlassWater,
  Pill,
  Salad,
  Scale,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

export type ExtraHabit = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

export const extraHabits: ExtraHabit[] = [
  {
    title: "Cek kesehatan rutin",
    description:
      "Pantau tekanan darah, gula darah, dan kolesterol sesuai anjuran tenaga kesehatan. Pemeriksaan berkala membantu mendeteksi faktor risiko penyakit sejak dini.",
    Icon: Stethoscope,
  },
  {
    title: "Jaga berat badan",
    description:
      "Pertahankan berat badan dan lingkar perut yang sehat secara bertahap. Terapkan pola makan seimbang dan aktivitas fisik secara teratur untuk membantu mencegah obesitas serta gangguan metabolisme.",
    Icon: Scale,
  },
  {
    title: "Berhenti merokok",
    description:
      "Hindari rokok dan asap rokok untuk menjaga kesehatan jantung dan pembuluh darah serta menurunkan risiko berbagai penyakit kronis.",
    Icon: CigaretteOff,
  },
  {
    title: "Pilih makanan lebih sehat",
    description:
      "Batasi makanan tinggi garam, gula, lemak jenuh, jeroan, serta makanan olahan. Pilih makanan segar dan bergizi seimbang. Untuk membantu mengendalikan asam urat, batasi makanan tinggi purin sesuai kebutuhan dan anjuran tenaga kesehatan.",
    Icon: Salad,
  },
  {
    title: "Cukupi air putih",
    description:
      "Minum air secara teratur sesuai kebutuhan tubuh. Kebutuhan cairan dapat berbeda pada setiap orang, terutama bagi mereka yang memiliki penyakit ginjal, jantung, atau pembatasan cairan dari dokter.",
    Icon: GlassWater,
  },
  {
    title: "Bijak konsumsi obat",
    description:
      "Minum obat sesuai resep dan jangan menghentikan atau mengganti dosis tanpa berkonsultasi. Bagi penderita diabetes, hipertensi, kolesterol tinggi, atau asam urat, kepatuhan terhadap pengobatan membantu mengendalikan penyakit dan mengurangi risiko komplikasi.",
    Icon: Pill,
  },
];
