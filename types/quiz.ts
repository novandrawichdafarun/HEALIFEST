export type QuizQuestion = {
  question: string;
  options: [string, string, string];
  answer: number;
  explanation: string;
};

export type Quiz = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};
