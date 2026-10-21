export const questions = [
  {
    id: "fruit",
    label: "Seberapa sering kamu makan sayur dan buah?",
    options: [
      { value: 2, label: "Setiap hari" },
      { value: 1, label: "Beberapa kali seminggu" },
      { value: 0, label: "Jarang" },
    ],
  },
  {
    id: "activity",
    label: "Apakah kamu aktif bergerak atau berolahraga?",
    options: [
      { value: 2, label: "Teratur hampir setiap minggu" },
      { value: 1, label: "Kadang-kadang" },
      { value: 0, label: "Jarang" },
    ],
  },
  {
    id: "sweet",
    label: "Seberapa sering minum minuman manis?",
    options: [
      { value: 2, label: "Jarang atau tidak pernah" },
      { value: 1, label: "Beberapa kali seminggu" },
      { value: 0, label: "Setiap hari atau beberapa kali sehari" },
    ],
  },
  {
    id: "smoke",
    label: "Apakah kamu merokok atau menggunakan tembakau?",
    options: [
      { value: 2, label: "Tidak" },
      { value: 0, label: "Ya" },
      { value: 1, label: "Sedang berusaha berhenti" },
    ],
  },
  {
    id: "checkup",
    label: "Apakah kamu memeriksa kesehatan sesuai anjuran atau faktor risiko?",
    options: [
      { value: 2, label: "Ya" },
      { value: 1, label: "Belum rutin" },
      { value: 0, label: "Belum pernah / tidak tahu" },
    ],
  },
] as const;
