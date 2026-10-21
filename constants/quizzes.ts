import { Quiz } from "@/types/quiz";

export const quizzes: Quiz[] = [
  {
    id: "diabetes",
    title: "Diabetes Melitus",
    questions: [
      {
        question: "Mengapa diabetes melitus perlu dideteksi dan dikelola?",
        options: [
          "Karena selalu menimbulkan nyeri hebat sejak awal",
          "Karena gula darah tinggi dapat merusak organ bila tidak dikelola",
          "Karena hanya menyerang anak-anak",
        ],
        answer: 1,
        explanation:
          "Diabetes dapat berlangsung tanpa gejala jelas dan memengaruhi jantung, mata, ginjal, pembuluh darah, serta saraf.",
      },
      {
        question:
          "Pemeriksaan apa yang dapat digunakan untuk menilai diabetes?",
        options: [
          "Pemeriksaan glukosa darah atau HbA1c sesuai penilaian tenaga kesehatan",
          "Mengukur suhu tubuh",
          "Melihat warna kulit saja",
        ],
        answer: 0,
        explanation:
          "Diagnosis diabetes memerlukan pemeriksaan glukosa darah, misalnya glukosa puasa atau HbA1c, yang ditafsirkan tenaga kesehatan.",
      },
      {
        question:
          "Apakah diabetes tipe 2 selalu mudah dikenali dari gejalanya?",
        options: [
          "Ya, selalu menyebabkan nyeri hebat",
          "Ya, selalu menimbulkan ruam",
          "Tidak, gejalanya bisa ringan atau tidak terasa selama bertahun-tahun",
        ],
        answer: 2,
        explanation:
          "Diabetes tipe 2 dapat tidak menimbulkan gejala yang jelas, sehingga pemeriksaan sesuai faktor risiko penting.",
      },
    ],
  },
  {
    id: "hipertensi",
    title: "Hipertensi",
    questions: [
      {
        question:
          "Bagaimana cara utama mengetahui apakah seseorang memiliki hipertensi?",
        options: [
          "Menilai apakah sering sakit kepala",
          "Mengukur tekanan darah dengan benar dan melakukan penilaian kesehatan",
          "Melihat warna kulit",
        ],
        answer: 1,
        explanation:
          "Hipertensi sering tidak bergejala. Pengukuran tekanan darah yang benar dan evaluasi tenaga kesehatan diperlukan.",
      },
      {
        question:
          "Apa yang membantu mendapatkan pengukuran tekanan darah yang baik?",
        options: [
          "Beristirahat sejenak dan duduk dengan posisi yang benar",
          "Berlari tepat sebelum pengukuran",
          "Mengukur sambil berbicara dan berdiri",
        ],
        answer: 0,
        explanation:
          "Istirahat beberapa menit, duduk dengan punggung tersangga dan kaki menapak, serta posisi lengan yang tepat membantu pengukuran.",
      },
      {
        question:
          "Apa yang sebaiknya dilakukan jika tekanan darah sangat tinggi disertai nyeri dada atau sesak napas?",
        options: [
          "Menunggu beberapa hari tanpa memberi tahu siapa pun",
          "Menghentikan semua obat sendiri",
          "Segera mencari pertolongan medis",
        ],
        answer: 2,
        explanation:
          "Tekanan darah sangat tinggi dengan gejala seperti nyeri dada atau sesak napas dapat merupakan keadaan darurat medis.",
      },
    ],
  },
  {
    id: "kolesterol",
    title: "Kolesterol Tinggi",
    questions: [
      {
        question: "Apakah kolesterol tinggi selalu menimbulkan gejala?",
        options: [
          "Ya, selalu menyebabkan pusing",
          "Tidak, sering kali tidak menimbulkan gejala",
          "Ya, selalu menyebabkan nyeri sendi",
        ],
        answer: 1,
        explanation:
          "Pemeriksaan profil lipid diperlukan karena kolesterol tinggi sering tidak terasa.",
      },
      {
        question: "Pemeriksaan apa yang menilai kadar lemak darah?",
        options: [
          "Pemeriksaan profil lipid",
          "Tes pendengaran",
          "Pemeriksaan suhu tubuh",
        ],
        answer: 0,
        explanation:
          "Profil lipid biasanya menilai kolesterol total, LDL, HDL, dan trigliserida.",
      },
      {
        question: "Mengapa kadar LDL yang tinggi perlu diperhatikan?",
        options: [
          "Dapat berkontribusi pada penumpukan plak di arteri",
          "Selalu menyebabkan nyeri kepala seketika",
          "Membuat pemeriksaan kesehatan tidak diperlukan",
        ],
        answer: 0,
        explanation:
          "LDL yang tinggi dapat berkontribusi pada aterosklerosis dan meningkatkan risiko penyakit jantung serta stroke.",
      },
    ],
  },
  {
    id: "asam-urat",
    title: "Asam Urat dan Gout",
    questions: [
      {
        question:
          "Apakah kadar asam urat yang tinggi selalu berarti seseorang mengalami gout?",
        options: [
          "Ya, selalu",
          "Tidak, kadar tinggi tidak selalu berarti gout",
          "Ya, tetapi hanya pada usia lanjut",
        ],
        answer: 1,
        explanation:
          "Kadar asam urat tinggi tidak selalu menyebabkan gout; diagnosis mempertimbangkan gejala dan pemeriksaan.",
      },
      {
        question: "Apa yang dapat terjadi saat serangan gout?",
        options: [
          "Nyeri sendi mendadak, bengkak, kemerahan, dan terasa panas",
          "Batuk tanpa keluhan sendi",
          "Penglihatan membaik sementara",
        ],
        answer: 0,
        explanation:
          "Serangan gout dapat menimbulkan nyeri sendi mendadak disertai bengkak, kemerahan, dan rasa panas.",
      },
      {
        question:
          "Mengapa sendi yang merah, panas, bengkak, dan sangat nyeri perlu dinilai tenaga kesehatan?",
        options: [
          "Karena kondisi itu selalu hilang sendiri",
          "Karena infeksi sendi dapat menyerupai gout",
          "Karena pemeriksaan sendi tidak pernah diperlukan",
        ],
        answer: 1,
        explanation:
          "Infeksi sendi dapat menyerupai serangan gout dan perlu dinilai segera, terutama jika disertai demam.",
      },
    ],
  },
];
