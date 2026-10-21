import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEALIFEST",
  description: "Healthy Lifestyle, Better Life.",
  verification: {
    google: "google1019943cf02ae5bc.html",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
