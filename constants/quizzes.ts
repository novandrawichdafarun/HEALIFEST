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
      {
        question: "Mana yang merupakan gejala umum dari diabetes melitus?",
        options: [
          "Sering haus, sering buang air kecil, dan mudah lelah",
          "Nyeri sendi di ibu jari kaki",
          "Penglihatan membaik secara mendadak",
        ],
        answer: 0,
        explanation:
          "Gejala umum diabetes meliputi sering haus, sering buang air kecil, mudah lelah, penglihatan kabur, dan penurunan berat badan tanpa sebab.",
      },
      {
        question: "Mana faktor risiko yang dapat memicu diabetes tipe 2?",
        options: [
          "Mendengarkan musik dengan volume keras",
          "Berat badan berlebih dan kurang aktivitas fisik",
          "Konsumsi air putih yang cukup setiap hari",
        ],
        answer: 1,
        explanation:
          "Berat badan berlebih, kurang aktivitas fisik, serta riwayat keluarga merupakan faktor risiko utama diabetes tipe 2.",
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
      {
        question:
          "Berapa ambang batas diagnosis klinis hipertensi menurut WHO?",
        options: [
          "≥100/60 mmHg",
          "≥120/80 mmHg",
          "≥140/90 mmHg terkonfirmasi pada pengukuran di hari berbeda",
        ],
        answer: 2,
        explanation:
          "WHO menggunakan ambang diagnosis klinis ≥140 mmHg sistolik dan/atau ≥90 mmHg diastolik yang terkonfirmasi pada pengukuran di hari berbeda.",
      },
      {
        question: "Langkah apa yang membantu mencegah timbulnya hipertensi?",
        options: [
          "Membatasi konsumsi garam, perbanyak buah dan sayur, serta aktif bergerak",
          "Menambah konsumsi garam dalam makanan harian",
          "Tidur kurang dari 3 jam setiap malam",
        ],
        answer: 0,
        explanation:
          "Membatasi garam, memperbanyak konsumsi sayur dan buah, aktif bergerak, serta tidak merokok membantu mencegah hipertensi.",
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
      {
        question: "Mengapa HDL sering disebut sebagai 'kolesterol baik'?",
        options: [
          "Karena membawa kolesterol kembali ke hati untuk diproses",
          "Karena menyebabkan penumpukan plak di dinding pembuluh darah",
          "Karena meningkatkan gula darah dalam tubuh",
        ],
        answer: 0,
        explanation:
          "HDL membantu membawa kolesterol dari jaringan dan pembuluh darah kembali ke hati.",
      },
      {
        question:
          "Apa bahaya dari penumpukan plak pada dinding arteri (aterosklerosis)?",
        options: [
          "Meningkatkan risiko penyakit jantung koroner, serangan jantung, dan stroke",
          "Membuat tulang menjadi rapuh",
          "Menurunkan kadar gula darah secara drastis",
        ],
        answer: 0,
        explanation:
          "Penumpukan plak dapat menyempitkan pembuluh darah arteri sehingga meningkatkan risiko penyakit jantung dan stroke.",
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
      {
        question:
          "Zat apa yang dipecah oleh tubuh sehingga menghasilkan asam urat?",
        options: ["Kalsium", "Purin", "Glukosa"],
        answer: 1,
        explanation:
          "Asam urat terbentuk saat tubuh memecah purin, senyawa yang ada secara alami di dalam tubuh dan beberapa makanan.",
      },
      {
        question:
          "Apa istilah untuk benjolan kristal urat yang terbentuk pada gout kronis?",
        options: ["Tofi", "Plak", "Abses"],
        answer: 0,
        explanation:
          "Tofi adalah benjolan keras berisi kristal urat yang terbentuk di sekitar sendi pada kondisi gout kronis.",
      },
    ],
  },
];
