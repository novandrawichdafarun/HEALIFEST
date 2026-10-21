import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HEALIFEST",
  description: "Healthy Lifestyle, Better Life.",
  verification: {
    google: "X2SOOBeTLMwoDQk7hPArZFUwVp5UhKpYW0qRfYbIeec",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
