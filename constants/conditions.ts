import { Condition } from "@/types/penyakit";
import { Activity, Droplet, HeartPulse, Stethoscope } from "lucide-react";

export const conditions: Condition[] = [
  {
    id: "diabetes",
    number: "01",
    name: "Diabetes Melitus",
    category: "METABOLIK",
    summary:
      "Kondisi ketika kadar glukosa darah tinggi karena gangguan produksi atau kerja insulin.",
    detailSummary:
      "Kenali gula darah, insulin, dan pentingnya pemeriksaan berkala.",
    icon: Droplet,
    left: [
      {
        title: "Apa itu diabetes melitus?",
        paragraphs: [
          "Diabetes melitus adalah penyakit kronis yang ditandai oleh kadar glukosa (gula) darah yang tinggi. Insulin adalah hormon yang membantu glukosa masuk ke sel untuk digunakan sebagai energi. Pada diabetes, tubuh tidak menghasilkan insulin yang cukup atau tidak menggunakan insulin secara efektif.",
        ],
      },
      {
        title: "Jenis diabetes",
        bullets: [
          "Diabetes tipe 1: tubuh sangat sedikit atau tidak menghasilkan insulin; umumnya memerlukan insulin setiap hari.",
          "Diabetes tipe 2: tubuh tidak menggunakan insulin secara efektif dan/atau produksi insulin tidak mencukupi. Ini merupakan jenis yang paling umum.",
          "Diabetes gestasional: diabetes yang terdeteksi selama kehamilan dan memerlukan pemantauan tenaga kesehatan.",
        ],
      },
      {
        title: "Gejala yang perlu dikenali",
        paragraphs: [
          "Sering haus, sering buang air kecil, mudah lelah, penglihatan kabur, dan berat badan turun tanpa sebab yang jelas. Pada diabetes tipe 2, gejala dapat ringan atau tidak terasa selama bertahun-tahun.",
        ],
      },
    ],
    right: [
      {
        title: "Faktor risiko tipe 2",
        bullets: [
          "Berat badan berlebih atau obesitas.",
          "Kurang aktivitas fisik.",
          "Riwayat keluarga diabetes.",
          "Riwayat diabetes gestasional atau kondisi metabolik tertentu.",
          "Usia dan faktor kesehatan lain.",
        ],
        emphasized: true,
      },
      {
        title: "Komplikasi",
        paragraphs: [
          "Jika tidak dikelola, diabetes dapat merusak pembuluh darah, jantung, ginjal, mata, dan saraf; meningkatkan risiko stroke; serta menyebabkan luka kaki yang sulit sembuh.",
        ],
      },
      {
        title: "Pemeriksaan dan pengelolaan",
        paragraphs: [
          "Diagnosis dilakukan melalui pemeriksaan glukosa darah seperti glukosa puasa, tes toleransi glukosa, atau HbA1c sesuai penilaian tenaga kesehatan. Pengelolaan dapat meliputi pola makan seimbang, aktivitas fisik, pemantauan glukosa, obat atau insulin bila diresepkan, serta pemeriksaan mata, ginjal, dan kaki secara berkala.",
        ],
      },
    ],
    takeaway:
      "Kurangi minuman berpemanis, pilih makanan kaya serat, aktif bergerak, hindari rokok, dan lakukan pemeriksaan sesuai faktor risiko. Diabetes tidak dapat dipastikan hanya dari gejala.",
    takeawayLabel: "Langkah sehat:",
  },
  {
    id: "hipertensi",
    number: "02",
    name: "Hipertensi",
    category: "JANTUNG & PEMBULUH DARAH",
    summary:
      "Tekanan darah yang terus tinggi dapat merusak pembuluh darah dan organ jika tidak dikendalikan.",
    detailSummary: "Tekanan darah tinggi sering tidak menimbulkan gejala.",
    icon: HeartPulse,
    left: [
      {
        title: "Apa itu hipertensi?",
        paragraphs: [
          "Hipertensi adalah tekanan darah yang menetap pada tingkat tinggi. Tekanan darah ditulis dengan dua angka: sistolik (saat jantung berkontraksi) dan diastolik (saat jantung beristirahat di antara denyut). WHO menggunakan ambang diagnosis klinis ≥140 mmHg sistolik dan/atau ≥90 mmHg diastolik yang terkonfirmasi pada pengukuran di hari berbeda; interpretasi dan target dapat berbeda sesuai kondisi individu dan pedoman setempat.",
        ],
      },
      {
        title: "Gejala",
        paragraphs: [
          "Kebanyakan orang dengan hipertensi tidak merasakan gejala. Karena itu, mengukur tekanan darah merupakan cara penting untuk mengetahuinya. Sakit kepala atau pusing saja tidak cukup untuk memastikan hipertensi.",
        ],
      },
      {
        title: "Faktor risiko",
        paragraphs: [
          "Konsumsi garam berlebihan, kurang aktivitas fisik, merokok, berat badan berlebih, konsumsi alkohol berbahaya, usia, riwayat keluarga, penyakit ginjal, dan diabetes dapat meningkatkan risiko.",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi bila tidak terkendali",
        bullets: [
          "Serangan jantung dan gagal jantung.",
          "Stroke.",
          "Kerusakan ginjal.",
          "Gangguan pembuluh darah dan penglihatan.",
        ],
        emphasized: true,
      },
      {
        title: "Pemeriksaan dan pengelolaan",
        paragraphs: [
          "Tekanan darah diukur dengan alat yang sesuai dan teknik yang benar. Istirahat beberapa menit sebelum pengukuran, duduk dengan punggung tersangga, kaki menapak, dan lengan setinggi jantung. Tenaga kesehatan dapat menyarankan pengukuran berulang, perubahan gaya hidup, dan obat sesuai kebutuhan.",
        ],
      },
      {
        title: "Pencegahan",
        paragraphs: [
          "Batasi garam, perbanyak sayur dan buah, aktif bergerak, pertahankan berat badan sehat, berhenti merokok, tidur cukup, dan ikuti pengobatan yang diresepkan.",
        ],
      },
    ],
    takeaway:
      "Tekanan darah sangat tinggi (misalnya sekitar ≥180/120 mmHg) disertai nyeri dada, sesak napas, kebingungan, kelemahan mendadak, atau gangguan penglihatan memerlukan pertolongan medis segera.",
    takeawayLabel: "Waspada darurat:",
  },
  {
    id: "kolesterol",
    number: "03",
    name: "Kolesterol Tinggi",
    category: "LEMAK DARAH",
    summary:
      "Kadar lemak darah yang tidak sehat dapat meningkatkan risiko penyakit jantung dan stroke.",
    detailSummary: "Kenali lemak darah dan kaitannya dengan kesehatan jantung.",
    icon: Activity,
    left: [
      {
        title: "Apa itu kolesterol?",
        paragraphs: [
          "Kolesterol adalah zat berlemak yang dibutuhkan tubuh untuk membentuk sel dan hormon. Kolesterol dibawa dalam darah oleh lipoprotein. LDL sering disebut “kolesterol jahat” karena kadar tinggi dapat berkontribusi pada penumpukan plak di arteri; HDL membantu membawa kolesterol kembali ke hati. Trigliserida adalah jenis lemak darah lain yang juga perlu dinilai.",
        ],
      },
      {
        title: "Apakah kolesterol tinggi bergejala?",
        paragraphs: [
          "Biasanya tidak. Seseorang dapat merasa sehat meskipun kadar kolesterolnya tinggi. Karena itu, pemeriksaan profil lipid diperlukan berdasarkan usia, riwayat keluarga, faktor risiko, dan saran tenaga kesehatan.",
        ],
      },
      {
        title: "Faktor risiko",
        paragraphs: [
          "Pola makan tinggi lemak jenuh dan lemak trans, kurang aktivitas fisik, merokok, diabetes, penyakit tertentu, serta faktor keturunan dapat memengaruhi kadar lipid. Kolesterol tinggi juga dapat terjadi pada orang yang sudah menjaga pola hidup sehat karena faktor genetik.",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi",
        paragraphs: [
          "LDL yang tinggi dapat berkontribusi pada aterosklerosis, yaitu penumpukan plak pada dinding arteri. Hal ini meningkatkan risiko penyakit jantung koroner, serangan jantung, dan stroke.",
        ],
        emphasized: true,
      },
      {
        title: "Pemeriksaan",
        paragraphs: [
          "Profil lipid biasanya menilai kolesterol total, LDL, HDL, dan trigliserida. Apakah perlu berpuasa sebelum tes bergantung pada instruksi fasilitas kesehatan dan jenis pemeriksaan. Target kolesterol ditentukan berdasarkan risiko kardiovaskular seseorang, bukan satu angka untuk semua orang.",
        ],
      },
      {
        title: "Pencegahan dan pengelolaan",
        paragraphs: [
          "Pilih sayur, buah, kacang-kacangan, biji-bijian utuh, dan sumber protein yang lebih rendah lemak jenuh. Batasi gorengan dan makanan ultra-proses, aktif bergerak, hindari rokok, dan lakukan pemeriksaan. Sebagian orang memerlukan obat penurun lipid sesuai penilaian dokter.",
        ],
      },
    ],
    takeaway:
      "Kolesterol tinggi tidak dapat dinilai dari penampilan atau gejala saja. Jangan menghentikan obat penurun kolesterol tanpa berkonsultasi dengan dokter.",
    takeawayLabel: "Ingat:",
  },
  {
    id: "asam-urat",
    number: "04",
    name: "Asam Urat dan Gout",
    category: "SENDI & METABOLIK",
    summary:
      "Asam urat tinggi dapat menyebabkan terbentuknya kristal di sendi pada kondisi yang disebut gout.",
    detailSummary: "Pahami perbedaan kadar asam urat tinggi dan serangan gout.",
    icon: Stethoscope,
    left: [
      {
        title: "Apa itu asam urat?",
        paragraphs: [
          "Asam urat merupakan zat yang terbentuk saat tubuh memecah purin, senyawa yang terdapat secara alami di dalam tubuh dan beberapa makanan. Asam urat biasanya dikeluarkan melalui ginjal. Bila kadarnya tinggi, kristal urat dapat terbentuk dan menumpuk di sendi pada sebagian orang, menyebabkan gout. Kadar tinggi tidak selalu berarti seseorang mengalami gout.",
        ],
      },
      {
        title: "Gejala gout",
        paragraphs: [
          "Serangan gout dapat menyebabkan nyeri sendi yang muncul mendadak, bengkak, kemerahan, dan rasa panas. Sering mengenai pangkal ibu jari kaki, tetapi sendi lain juga dapat terkena. Kadar asam urat darah saja tidak selalu cukup untuk memastikan penyebab nyeri sendi.",
        ],
      },
      {
        title: "Faktor risiko",
        paragraphs: [
          "Riwayat keluarga, gangguan ginjal, beberapa obat, konsumsi alkohol, minuman tinggi fruktosa, dan makanan tinggi purin tertentu dapat berperan. Berat badan dan kondisi metabolik juga dapat berkaitan.",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi",
        bullets: [
          "Serangan berulang dan nyeri sendi.",
          "Benjolan kristal urat (tofi) pada gout kronis.",
          "Kerusakan sendi jika penyakit tidak terkontrol.",
          "Pada sebagian orang, batu ginjal dapat berkaitan dengan asam urat.",
        ],
        emphasized: true,
      },
      {
        title: "Pemeriksaan dan pengelolaan",
        paragraphs: [
          "Dokter dapat menilai gejala, pemeriksaan fisik, kadar asam urat, dan bila perlu memeriksa cairan sendi atau melakukan pemeriksaan lain. Penanganan serangan dan pencegahan jangka panjang berbeda. Obat harus dipilih tenaga kesehatan berdasarkan kondisi ginjal, obat lain, dan faktor individu.",
        ],
      },
      {
        title: "Pencegahan",
        paragraphs: [
          "Minum air secukupnya bila tidak ada pembatasan cairan dari dokter, batasi alkohol dan minuman berpemanis, atur pola makan seimbang, dan kelola berat badan secara bertahap. Hindari diet ekstrem. Orang dengan gout mungkin membutuhkan obat penurun asam urat meski sudah mengubah pola hidup.",
        ],
      },
    ],
    takeaway:
      "Sendi yang mendadak merah, panas, bengkak dan sangat nyeri—terutama jika disertai demam—perlu dinilai segera karena infeksi sendi dapat menyerupai gout.",
    takeawayLabel: "Segera periksa:",
  },
];

export const diseaseBanners: Record<string, string> = {
  diabetes:
    "https://images.unsplash.com/photo-1683727186226-910f31a9da45?auto=format&fit=crop&w=1200&q=80",
  hipertensi:
    "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&w=1200&q=80",
  kolesterol:
    "https://images.unsplash.com/photo-1778864874378-c3aa56a744c5?auto=format&fit=crop&w=1200&q=80",
  "asam-urat":
    "https://images.unsplash.com/photo-1434973539530-5538b4681aac?auto=format&fit=crop&w=1200&q=80",
};
