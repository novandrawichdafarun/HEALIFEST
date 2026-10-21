import type { ReactNode } from "react";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";

export default function KuisPenyakitLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
