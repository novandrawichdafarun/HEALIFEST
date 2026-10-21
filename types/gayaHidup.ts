import { questions } from "@/constants/questions";

export type AnswerId = (typeof questions)[number]["id"];
export type Answers = Partial<Record<AnswerId, number>>;
