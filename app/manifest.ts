import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Healthy Lifestyle, Better Life",
    short_name: "HEALIFEST",
    description:
      "website edukasi kesehatan digital yang berfokus pada peningkatan pengetahuan masyarakat mengenai pencegahan penyakit tidak menular (PTM), khususnya diabetes melitus, hipertensi, kolesterol tinggi, dan asam urat.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
