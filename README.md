# HEALIFEST

HEALIFEST adalah aplikasi web edukasi kesehatan yang membantu pengguna
mengenali penyakit tidak menular, memahami kebiasaan hidup sehat, dan
mengevaluasi pemahaman melalui kuis. Konten di aplikasi ini bersifat edukatif,
bukan pengganti diagnosis atau saran dari tenaga kesehatan.

## Fitur

- Beranda yang memperkenalkan tujuan dan konten HEALIFEST.
- Informasi penyakit tidak menular, termasuk diabetes, hipertensi, kolesterol,
  dan asam urat.
- Kuis interaktif untuk menguji pemahaman tentang penyakit.
- Panduan kebiasaan hidup sehat dan kuesioner refleksi gaya hidup.
- Video edukasi yang diputar melalui YouTube.
- Halaman metadata, sitemap, dan robots untuk mendukung mesin pencari.

## Teknologi

- [Next.js 16](https://nextjs.org/) dengan App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/) dengan konfigurasi strict
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) untuk ikon
- Three.js untuk visual interaktif
- React Player untuk pemutaran video
- ESLint dengan konfigurasi Next.js untuk linting

## Persyaratan

- Node.js dan npm versi yang kompatibel dengan Next.js 16
- Git (opsional, jika meng-clone repositori)

## Cara Instalasi

1. Clone repositori dan masuk ke folder proyek:

   ```bash
   git clone https://github.com/novandrawichdafarun/HEALIFEST.git
   cd HEALIFEST
   ```

2. Pasang dependensi:

   ```bash
   npm install
   ```

## Cara Menjalankan

Jalankan server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser. Perubahan pada
source akan dimuat saat pengembangan.

Untuk menjalankan versi produksi secara lokal:

```bash
npm run build
npm run start
```

## Perintah yang Tersedia

| Perintah        | Keterangan                              |
| --------------- | --------------------------------------- |
| `npm run dev`   | Menjalankan server pengembangan Next.js |
| `npm run lint`  | Memeriksa kode menggunakan ESLint       |
| `npm run build` | Membuat build produksi                  |
| `npm run start` | Menjalankan build produksi              |

## Halaman Aplikasi

| Rute                        | Isi                                |
| --------------------------- | ---------------------------------- |
| `/`                         | Beranda                            |
| `/penyakit`                 | Ringkasan dan informasi penyakit   |
| `/kuis-penyakit`            | Daftar kuis penyakit               |
| `/kuis-penyakit/[penyakit]` | Kuis untuk topik penyakit tertentu |
| `/gaya-hidup`               | Panduan kebiasaan hidup sehat      |
| `/cek-gaya-hidup`           | Kuesioner refleksi kebiasaan hidup |
| `/video-edukasi`            | Kumpulan video edukasi             |

Rute `/kuis-penyakit?penyakit=<id>` diarahkan ke rute kuis yang sesuai.

## Struktur Folder

```text
app/                     Rute halaman, layout, metadata, dan file SEO Next.js
  cek-gaya-hidup/        Halaman kuesioner gaya hidup
  gaya-hidup/            Halaman panduan gaya hidup sehat
  kuis-penyakit/         Daftar kuis dan halaman kuis dinamis
  penyakit/              Halaman informasi penyakit
  video-edukasi/         Halaman video edukasi
components/              Komponen antarmuka yang digunakan ulang
  error/                 Tampilan untuk kondisi error/not found
  layouts/               Navbar dan footer
constants/               Konten statis dan konfigurasi data aplikasi
helpers/                 Fungsi utilitas dan pengolahan data
public/                  Aset statis yang disajikan langsung
styles/                  CSS global dan tema
types/                   Definisi tipe TypeScript
```

## Style dan Antarmuka

- Utilitas kelas Tailwind CSS digunakan langsung pada komponen untuk layout,
  spacing, warna, tipografi, dan breakpoint responsif.
- `styles/globals.css` memuat import Tailwind, variabel warna tema HEALIFEST,
  font stack, dan aturan dasar global.
- Komponen ditulis sebagai React dengan TypeScript; alias `@/` mengarah ke root
  proyek.
- Ikon antarmuka menggunakan Lucide React.

## Konten dan Aset

Konten utama aplikasi disimpan pada `constants/` agar data seperti topik
penyakit, kebiasaan, navigasi, kuis, dan video terpisah dari presentasi
komponen. Aset lokal disimpan di `public/` dan dapat dirujuk dengan path
berawalan `/`. Gambar jarak jauh yang digunakan oleh `next/image` perlu
diizinkan pada konfigurasi `images.remotePatterns` di `next.config.ts`.

## Catatan

Hasil kuesioner dan kuis ditujukan untuk edukasi serta refleksi pribadi. Hasil
tersebut tidak digunakan untuk mendiagnosis kondisi kesehatan. Jika memiliki
keluhan atau membutuhkan penilaian medis, konsultasikan dengan tenaga
kesehatan.
