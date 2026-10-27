import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "HEALIFEST",
  description: "Healthy Lifestyle, Better Life.",
  verification: {
    google: "X2SOOBeTLMwoDQk7hPArZFUwVp5UhKpYW0qRfYbIeec",
  },
  alternates: {
    canonical: 'https://vercel.app',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <link rel="icon" href="/logo.png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
