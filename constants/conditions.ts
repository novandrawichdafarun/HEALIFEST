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
          "Menurut American Diabetes Association (ADA) tahun 2026, DM merupakan suatu kelompok gangguan metabolik pada metabolisme karbohidrat, dimana glukosa tidak dimanfaatkan secara optimal sebagai sumber energi dan diproduksi secara berlebihan akibat glukoneogenesis dan glikogenolisis yang tidak adekuat, sehingga menyebabkan terjadinya hiperglikemia.",
          "Definisi berdasarkan Konsensus PP PERKENI 2024, diabetes melitus merupakan penyakit metabolik kronis yang ditandai dengan peningkatan kadar glukosa darah dan/atau HbA1c akibat ketidakmampuan sekresi insulin, aksi insulin, atau keduanya.",
        ],
      },
      {
        title: "Jenis diabetes",
        bullets: [
          "Diabetes tipe 1: kondisi ketika kadar gula darah meningkat karena tubuh tidak mampu menghasilkan cukup insulin.",
          "Diabetes tipe 2: tubuh tidak menggunakan insulin secara efektif dan/atau produksi insulin tidak mencukupi. Ini merupakan jenis yang paling umum.",
          "Diabetes gestasional: diabetes yang terdeteksi selama kehamilan dan memerlukan pemantauan tenaga kesehatan.",
        ],
      },
      {
        title: "Perbedaan Penyebab Diabetes Tipe 1 dan Tipe 2",
        paragraphs: [
          "Diabetes tipe 1 disebabkan oleh pankreas yang memecah sel-sel untuk produksi hormon insulin. Sehingga, insulin tidak dapat diproduksi dan membutuhkan asupan dari luar seperti suntik insulin.",
          "diabetes tipe 2 disebabkan oleh kelenjar pankreas yang tidak dapat mencukupi kebutuhan insulin pada tubuh. Sehingga, insulin tidak berfungsi dengan optimal.",
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
          "Mudah lelah dan Lemah : Tubuh tidak dapat memanfaatkan glukosa secara optimal sebagai sumber energi, sehingga tubuh terasa cepat lelah dan kurang bertenaga.",
          "Penglihatan kabur: Kadar gula darah tinggi merusak pembuluh darah kecil di retina mata.",
          "Luka sulit sembuh: Sirkulasi darah yang buruk dan kadar gula tinggi menghambat proses regenerasi jaringan.",
          "Kesemutan atau mati rasa: Sering terasa di bagian tangan dan kaki sebagai tanda awal kerusakan saraf (neuropati diabetik).",
        ],
      },
      {
        title: "",
        paragraphs: [
          "(Dua Lembang et al., 2025, World Health Organization (WHO, 2024).",
        ],
      },
    ],
    right: [
      {
        title: "Komplikasi",
        paragraphs: [
          "Jika tidak dikelola, diabetes dapat merusak pembuluh darah, jantung, ginjal, mata, dan saraf, meningkatkan risiko stroke, serta menyebabkan luka kaki yang sulit sembuh.",
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
      {
        title: "Referensi",
        paragraphs: [
          "Dua Lembang, F. T., Rintiswati, N., Anida, Muryani, & Sugiman. (2025). Trias diabet sebagai indikator awal: Kajian klinis pada pasien Diabetes Mellitus Tipe II di RSUD Sleman. Mikki: Majalah Ilmu Keperawatan dan Kesehatan Indonesia, 14(2). https://doi.org/10.47317/mikki.v14i2.834",
          "National Institute of Diabetes and Digestive and Kidney Diseases. (n.d.). Symptoms & causes of diabetes. https://www.niddk.nih.gov/health-information/diabetes/overview/symptoms-causes",
          "World Health Organization. (2024, November 14). Diabetes. https://www.who.int/news-room/fact-sheets/detail/diabetes",
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
          "Menurut World Health Organization (WHO, 2023), hipertensi merupakan kondisi medis ketika tekanan darah dalam pembuluh darah meningkat secara persisten atau menetap di atas batas normal. Tekanan darah dinyatakan dalam dua angka, yaitu tekanan sistolik (tekanan dalam pembuluh darah saat jantung berkontraksi atau memompa darah) dan tekanan diastolik (tekanan dalam pembuluh darah saat jantung berelaksasi atau beristirahat di antara detakan).",
          "WHO menetapkan bahwa seseorang dikatakan mengalami hipertensi apabila hasil pemeriksaan menunjukkan tekanan darah sistolik ≥140 mmHg dan/atau tekanan darah diastolik ≥90 mmHg. Pengukuran ini idealnya dilakukan pada minimal dua kali pemeriksaan yang berbeda dalam kondisi pasien yang tenang dan rileks.",
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
        title: "Gejala Hipertensi",
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
      {
        title: "Pemeriksaan dan pengelolaan",
        paragraphs: [
          "Tekanan darah diukur dengan alat yang sesuai dan teknik yang benar. Istirahat beberapa menit sebelum pengukuran, duduk dengan punggung tersangga, kaki menapak, dan lengan setinggi jantung. Tenaga kesehatan dapat menyarankan pengukuran berulang, perubahan gaya hidup, dan obat sesuai kebutuhan.",
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
        title: "",
        paragraphs: [
          "Kementerian Kesehatan menjelaskan CERDIK sebagai upaya pencegahan melalui pemeriksaan kesehatan, menghindari asap rokok, aktivitas fisik, diet seimbang, istirahat cukup, dan pengelolaan stres. PATUH ditujukan untuk membantu pengendalian hipertensi. (Kementerian Kesehatan RI, 2023)",
        ],
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
          "E: Enyakan asap rokok",
          "R: Rajin olahraga",
          "D: Diet seimbang",
          "I: Istirahat cukup",
          "K: Kelola stress",
        ],
      },
      {
        title: "Referensi",
        paragraphs: [
          "Kementerian Kesehatan Republik Indonesia. (2023, 31 Mei). Penanganan hipertensi dengan perilaku CERDIK dan PATUH. https://keslan.kemkes.go.id/view_artikel/2517/penanganan-hipertensi-dengan-",
          "Kementerian Kesehatan Republik Indonesia. (2026). Pedoman Nasional Pelayanan Klinis Tata Laksana Hipertensi Dewasa. https://www.kemkes.go.id/id/pnpk-hipertensi-dewasa-kemenkes-2026",
          "World Health Organization. Diakses pada 2026. Hypertension: Global Guidelines and Diagnostic Criteria",
          "World Health Organization. (2023). Hypertension. Geneva: WHO. https://www.who.int/news-room/fact-sheets/detail/hypertension",
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
          "Kolesterol merupakan salah satu jenis lipid yang dibutuhkan tubuh untuk menjalankan berbagai fungsi fisiologis. Namun, gangguan kadar lipid dalam darah atau dislipidemia dapat meningkatkan risiko penyakit kardiovaskular aterosklerotik, seperti penyakit jantung koroner dan stroke. Penilaian profil lipid mencakup kadar kolesterol total, kolesterol LDL (low-density lipoprotein), kolesterol HDL (high-density lipoprotein), dan trigliserida. Menurut Blumenthal et al. (2026).",
          "Pedoman Blumenthal et al. (2026) menekankan pentingnya penilaian risiko untuk menentukan kebutuhan dan sasaran terapi penurun lipid sebagai berikut :",
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
    ],
    right: [
      {
        title: "Komplikasi",
        paragraphs: [
          "Kolesterol LDL yang tinggi dapat berkontribusi terhadap pembentukan plak aterosklerotik pada dinding arteri. Penumpukan plak tersebut dapat mempersempit pembuluh darah dan meningkatkan risiko kejadian kardiovaskular, termasuk serangan jantung dan stroke iskemik. Oleh karena itu, pengendalian kadar lipid merupakan salah satu bagian penting dalam pencegahan penyakit kardiovaskular (Mach et al., 2025).",
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
        title: "Pencegahan Kolesterol Tinggi",
        paragraphs: [
          "Pencegahan kolesterol tinggi dilakukan melalui penerapan pola makan sehat, aktivitas fisik secara teratur, pengendalian berat badan, penghentian kebiasaan merokok, dan pemeriksaan profil lipid sesuai kebutuhan. Pada individu dengan risiko kardiovaskular tinggi, perubahan gaya hidup dapat disertai terapi obat berdasarkan penilaian tenaga medis. Pendekatan pencegahan dan pengobatan perlu disesuaikan dengan tingkat risiko serta sasaran terapi setiap individu (Blumenthal et al., 2026, Mach et al., 2025).",
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
      {
        title: "Referensi",
        paragraphs: [
          "Blumenthal, R. S., Morris, P. B., Gaudino, M., et al. (2026). 2026 ACC/AHA/AACVPR/ABC/ACPM/ADA/AGS/APhA/ASPC/NLA/PCNA guideline on the management of dyslipidemia: A report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. https://doi.org/10.1161/CIR.0000000000001423",
          "Mach, F., Koskinas, K. C., Roeters van Lennep, J., et al. (2025). 2025 focused update of the 2019 ESC/EAS Guidelines for the management of dyslipidaemias. European Heart Journal, 46(42), 4359–4378. https://doi.org/10.1093/eurheartj/ehaf190",
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
          "Penyakit asam urat atau gout arthritis merupakan penyakit radang sendi yang berkaitan dengan pengendapan kristal monosodium urat pada sendi dan jaringan di sekitarnya. Gejala utama gout ditandai dengan serangan nyeri sendi yang hebat dan muncul secara tiba-tiba, sering kali pada malam hari atau dini hari. Serangan tersebut umumnya disertai pembengkakan, kemerahan, dan peningkatan suhu pada area sendi yang terkena. Sendi yang paling sering mengalami serangan adalah pangkal ibu jari kaki, meskipun sendi pergelangan kaki, lutut, tangan, dan siku juga dapat terkena (National Institute for Health and Care Excellence (NICE), 2022).",
          "Pada gout yang berlangsung lama, dapat terbentuk tofus, yaitu benjolan akibat penumpukan kristal urat pada jaringan. Keberadaan tofus merupakan salah satu tanda yang dapat ditemukan pada gout kronis dan menjadi pertimbangan dalam penatalaksanaan penyakit. FitzGerald et al. (2020) membahas keberadaan tofus sebagai salah satu kondisi klinis yang penting dalam menentukan kebutuhan terapi penurun kadar urat.",
          "Berdasarkan uraian tersebut, gejala penyakit asam urat meliputi nyeri sendi hebat yang muncul secara tiba-tiba, pembengkakan, kemerahan, peningkatan suhu pada sendi, serta kemungkinan terbentuknya tofus pada penyakit yang berlangsung lama. Pengenalan gejala tersebut penting untuk mendukung pemeriksaan dan penegakan diagnosis yang tepat (NICE, 2022, Neilson et al., 2022).",
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
      {
        title: "Referensi",
        paragraphs: [
          "FitzGerald, J. D., Dalbeth, N., Mikuls, T., et al. (2020). 2020 American College of Rheumatology guideline for the management of gout. Arthritis & Rheumatology, 72(6), 879–895. https://doi.org/10.1002/art.41247",
          "National Institute for Health and Care Excellence. (2022). Gout: Diagnosis and management (NICE Guideline NG219). https://www.nice.org.uk/guidance/ng219",
          "Neilson, J., Bonnon, A., Dickson, A., & Roddy, E. (2022). Gout: Diagnosis and management—Summary of NICE guidance. BMJ, 378, o1754. https://doi.org/10.1136/bmj.o1754",
          "Alodokter. (n.d.). Gejala asam urat. https://www.alodokter.com/rematik-asam-urat/gejala",
          "Kementerian Kesehatan Republik Indonesia. (n.d.). Asam urat. Direktorat Jenderal Kesehatan Lanjutan. https://keslan.kemkes.go.id/view_artikel/1955/asam-urat",
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
