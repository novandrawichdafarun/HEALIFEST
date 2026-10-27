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
        title: "Gejala Utama (Trias Diabetes / 3P)",
        bullets: [
          "Poliuria (Sering buang air kecil) : Frekuensi buang air kecil meningkat, terutama pada malam hari, karena ginjal berusaha membuang kelebihan gula melalui urine.",
          "Polidipsi (Sering merasa haus) : Rasa haus yang berlebihan dan terus-menerus muncul akibat tubuh mengalami dehidrasi dari seringnya buang air kecil.",
          "Polifagi (Cepat lapar dan banyak makan) : Sel-sel tubuh kekurangan energi karena glukosa tidak bisa masuk dengan baik, sehingga otak mengirim sinyal rasa lapar.",
        ],
      },
      {
        title: "Gejala Umum Lainnya",
        bullets: [
          "Penurunan berat badan: Terjadi tanpa alasan yang jelas karena tubuh membakar cadangan lemak dan otot akibat glukosa tidak bisa diolah menjadi energi.",
          "Mudah lelah dan lemah: Tubuh kekurangan pasokan energi utama dari glukosa.",
          "Penglihatan kabur: Kadar gula darah tinggi merusak pembuluh darah kecil di retina mata.",
          "Luka sulit sembuh: Sirkulasi darah yang buruk dan kadar gula tinggi menghambat proses regenerasi jaringan.",
          "Kesemutan atau mati rasa: Sering terasa di bagian tangan dan kaki sebagai tanda awal kerusakan saraf (neuropati diabetik).",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi",
        paragraphs: [
          "Jika tidak dikelola, diabetes dapat merusak pembuluh darah, jantung, ginjal, mata, dan saraf; meningkatkan risiko stroke; serta menyebabkan luka kaki yang sulit sembuh.",
        ],
        emphasized: true,
      },
      {
        title: "Faktor risiko tipe 2",
        bullets: [
          "Berat badan berlebih atau obesitas.",
          "Kurang aktivitas fisik.",
          "Riwayat keluarga diabetes.",
          "Riwayat diabetes gestasional atau kondisi metabolik tertentu.",
          "Usia dan faktor kesehatan lain.",
        ],
      },
      {
        title: "Pemeriksaan dan pengelolaan",
        paragraphs: [
          "Diagnosis dilakukan melalui pemeriksaan glukosa darah seperti glukosa puasa, tes toleransi glukosa, atau HbA1c sesuai penilaian tenaga kesehatan. Pengelolaan dapat meliputi pola makan seimbang, aktivitas fisik, pemantauan glukosa, obat atau insulin bila diresepkan, serta pemeriksaan mata, ginjal, dan kaki secara berkala.",
        ],
      },
      {
        title: "Cara Mengontrol Gula Darah",
        bullets: [
          "Makan secara teratur dan batasi makanan manis.",
          "Perbanyak sayur, buah, kacang-kacangan, dan biji-bijian.",
          "Lakukan aktivitas fisik sekitar 30 menit, 3–4 kali seminggu.",
          "Minum obat atau insulin sesuai anjuran tenaga kesehatan.",
          "Periksa gula darah secara rutin.",
          "Rawat kaki dengan baik dan periksa luka secara berkala",
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
          "Hasil pengukuran tekanan darah akan diklasifikasikan sebagai berikut:",
        ],
        bullets: [
          "Normal: <130/85 mmHg",
          "Meningkat: 130–139/85–89 mmHg",
          "Hipertensi tingkat 1: 140–159/90–99 mmHg",
          "Hipertensi tingkat 2: ≥160/100 mmHg",
        ],
      },
      {
        title: "Gejala",
        paragraphs: [
          "Hipertensi sering disebut sebagai silent killer karena umumnya tidak menimbulkan gejala. Pada banyak kasus, gejala baru muncul ketika tekanan darah sudah sangat tinggi atau terjadi komplikasi.",
        ],
        bullets: [
          "Sakit kepala",
          "Penglihatan kabur",
          "Gelisah dan Pusing/vertigo",
          "Sakit bagian dada",
          "Jantung bedebar-debar",
          "Mudah lelah",
          "Nyeri dada",
        ],
      },
      {
        title: "Faktor risiko hipertensi",
        paragraphs: [
          "Hipertensi dapat dialami oleh siapa saja, tetapi risiko akan meningkat pada orang dengan kondisi berikut:",
        ],
        bullets: [
          "Berusia di atas 65 tahun",
          "Sedang hamil",
          "Jarang berolahraga atau melakukan aktivitas fisik",
          "Kurang mengonsumsi makanan yang mengandung kalium",
          "Memiliki riwayat keluarga dengan hipertensi",
          "Mengalami obesitas, diabetes, penyakit ginjal, atau sleep apnea",
          "Mengonsumsi terlalu banyak makanan tinggi garam",
          "Mengonsumsi terlalu banyak kafein",
          "Merokok dan mengonsumsi minuman beralkohol",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi",
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
      {
        title: "Ayok cegah hipertensi dengan CERDIK & PATUH",
        emphasized: true,
      },
      {
        title: "Kendalikan Hipertensi",
        paragraphs: ["PATUH:"],
        bullets: [
          "P: Periksa kesehatan secara rutin",
          "A: Atasi dengan pengobatan yang tepat",
          "T: Tetap diet dengan gizi seimbang",
          "U: Upayakan aktifitas fisik",
          "H: Hindari Asap rokok, alkohol dll.",
        ],
      },
      {
        title: "Pencegahan Hipertensi",
        paragraphs: ["CERDIK:"],
        bullets: [
          "C: Cek kesehatan secara rutin",
          "E: Eliminasi asap rokok",
          "R: Rajin olahraga",
          "D: Diet seimbang",
          "I: Istirahat cukup",
          "K: Kelola stress",
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
        title: "Nilai Kolesterol Normal",
        bullets: [
          "Kolesterol Total: Kurang dari 200 mg/dL",
          "LDL: Kurang dari 100 mg/dL",
          "HDL: 60 mg/dL atau lebih (risiko meningkat jika kurang dari 40–50 mg/dL)",
          "Trigliserida: Kurang dari 150 mg/dL",
        ],
      },
      {
        title: "Penyebab dan Faktor Risiko Kolesterol Tinggi",
        paragraphs: [
          "Kolesterol dapat berbahaya bagi tubuh jika kadarnya terlalu tinggi. Seseorang berisiko mengalami kolesterol tinggi atau hiperkolesterolemia apabila memiliki beberapa faktor. Sebagian faktor tersebut dapat dikendalikan, sedangkan sebagian lainnya tidak.",
          "Beberapa faktor yang dapat meningkatkan risiko terjadinya kolesterol tinggi adalah:",
        ],
      },
      {
        title: "1)	Gaya hidup",
        paragraphs: [
          "Gaya hidup tidak sehat merupakan penyebab paling umum tingginya kadar kolesterol dalam tubuh. Beberapa contoh gaya hidup tidak sehat adalah:",
        ],
        bullets: [
          "Merokok",
          "Jarang berolahraga atau melakukan aktivitas fisik",
          "Mengonsumsi minuman beralkohol secara berlebihan",
          "Mengonsumsi makanan tinggi kolesterol dan lemak jenuh,  seperti gorengan, susu full cream, kulit ayam, dan jeroan",
          "Mengalami stres",
        ],
      },
      {
        title: "2)	Penyakit",
        paragraphs: [
          "Meningkatnya kadar kolesterol juga dapat terjadi akibat menderita penyakit tertentu. Beberapa penyakitnya adalah:",
        ],
        bullets: [
          "Obesitas atau kelebihan berat badan",
          "Diabetes",
          "Hipotiroidisme",
          "Gagal ginjal kronis",
          "HIV/AIDS",
        ],
      },
      {
        title: "3)	Keturunan",
        paragraphs: [
          "Kolesterol tinggi dapat disebabkan oleh perubahan atau mutasi sejumlah gen yang diturunkan dari kedua orang tua. Mutasi gen ini membuat tubuh tidak bisa membuang kolesterol dari dalam darah. Namun, kolesterol tinggi akibat kondisi ini lebih jarang terjadi bila dibandingkan dengan faktor-faktor lainnya.",
          "Selain beberapa faktor di atas, seseorang yang berusia 40 tahun ke atas juga lebih berisiko menderita kolesterol. Hal ini terjadi karena seiring bertambahnya usia, hati menjadi kurang mampu membuang kolesterol jahat (LDL).",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi",
        paragraphs: [
          "Kadar kolesterol yang berlebihan perlu ditangani. Apabila dibiarkan, kolesterol akan menumpuk di dinding pembuluh darah arteri dan membentuk plak sehingga membuat arteri menyempit. Kondisi ini disebut dengan aterosklerosis.",
          "Aterosklerosis yang tidak ditanganidapat membuat aliran darah tersumbat dan menimbulkan komplikasi serius berikut ini:",
        ],
        bullets: [
          "Penyakit jantung koroner",
          "Serangan jantung",
          "Penyakit ginjal",
          "Penyakit arteri perifer",
          "Stroke",
          "Tekanan darah tinggi",
          "Batu empedu",
        ],
        emphasized: true,
      },
      {
        title: "Apakah kolesterol tinggi bergejala?",
        paragraphs: [
          "Biasanya tidak. Seseorang dapat merasa sehat meskipun kadar kolesterolnya tinggi. Karena itu, pemeriksaan profil lipid diperlukan berdasarkan usia, riwayat keluarga, faktor risiko, dan saran tenaga kesehatan.",
        ],
      },
      {
        title: "Pemeriksaan",
        paragraphs: [
          "Profil lipid biasanya menilai kolesterol total, LDL, HDL, dan trigliserida. Apakah perlu berpuasa sebelum tes bergantung pada instruksi fasilitas kesehatan dan jenis pemeriksaan. Target kolesterol ditentukan berdasarkan risiko kardiovaskular seseorang, bukan satu angka untuk semua orang.",
        ],
      },
      {
        title: "Pencegahan Kolesterol Tinggi",
        paragraphs: [
          "Untuk mencegah tingginya kadar kolesterol dalam tubuh, ada sejumlah upaya yang dapat dilakukan, yaitu:",
        ],
        bullets: [
          "Tidak merokok",
          "Berolahraga secara rutin, minimal 30 menit sehari",
          "Mengelola stres dengan baik",
          "Menurunkan berat badan atau menjaga berat badan agar tetap ideal",
          "Menerapkan pola makan yang sehat dan bergizi lengkap dan seimbang",
          "Mengonsumsi makanan yang mengandung serat, seperti buah-buahan dan sayur-sayuran",
          "Membatasi makanan yang mengandung kolesterol tinggi",
          "Membatasi konsumsi minuman beralkohol",
          "Membatasi konsumsi makanan yang berlemak tinggi, khususnya lemak jenuh, seperti daging merah dan kue",
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
        title: "Gejala Asam Urat",
        paragraphs: [
          "Gejala utama penyakit asam urat atau encok adalah serangan nyeri yang hebat pada sendi atau disebut juga serangan gout. Karakteristik serangan gout ini antara lain:",
        ],
        bullets: [
          "Muncul tiba-tiba, biasanya pada malam atau dini hari",
          "Nyeri terasa sangat berat dan berdenyut-berdenyut",
          "Sendi bengkak, kemerahan, dan terasa panas",
          "Nyeri tambah parah jika sendi disentuh atau tersentuh sesuatu",
          "Berlangsung selama 4–12 jam pertama, kemudian dapat berlangsung selama beberapa hari hingga minggu.",
        ],
      },
      {
        title: "",
        paragraphs: [
          "Nyeri berat dan bengkak pada kaki, tangan, atau jari kaki akibat serangan gout biasanya akan berkurang dalam beberapa jam. Namun, rasa tidak nyaman pada sendi atau nyeri ringan akan bertahan hingga beberapa hari atau minggu. Setelah itu, gejala akan hilang total, tetapi umumnya akan kambuh kembali dalam 6–12 bulan.",
          "Pada orang yang sudah lama memiliki penyakit asam urat atau sudah sering mengalami serangan gout, gejala lain yang mungkin terjadi meliputi:",
        ],
        bullets: [
          "Sendi kaku dan sulit digerakkan",
          "Nyeri saat bergerak karena sendi kaku",
          "Tofus, yaitu benjolan tidak nyeri yang terletak di sekitar sendi",
        ],
      },
      {
        title: " ",
        paragraphs: [
          "Keluhan penyakit asam urat di atas bisa terjadi pada semua sendi. Namun, gout paling sering menyerang sendi di jempol kaki",
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
        title: "Faktor risiko",
        paragraphs: [
          "Riwayat keluarga, gangguan ginjal, beberapa obat, konsumsi alkohol, minuman tinggi fruktosa, dan makanan tinggi purin tertentu dapat berperan. Berat badan dan kondisi metabolik juga dapat berkaitan.",
        ],
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
  diabetes: "/content/diabetes.jpg",
  hipertensi: "/content/hipertensi.jpg",
  kolesterol: "/content/kolestrol.jpg",
  "asam-urat": "/content/asamurat.jpg",
};
