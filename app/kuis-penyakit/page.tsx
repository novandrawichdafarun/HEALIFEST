import { Suspense } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { QuizContent } from "@/components/QuizContent";
import QuizLoading from "@/components/QuizLoading";
import { PageProps } from "@/types/penyakit";

export default function KuisPenyakitPage({ searchParams }: PageProps) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<QuizLoading />}>
        <QuizContent searchParams={searchParams} />
      </Suspense>
      <Footer />
    </>
  );
}
