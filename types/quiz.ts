export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type Quiz = {
  id: string; // dipakai sebagai slug URL: /kuis-penyakit/[id]
  title: string;
  description?: string;
  questions: QuizQuestion[];
};