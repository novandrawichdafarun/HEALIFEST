import type { LucideIcon } from "lucide-react";

export type InfoBlock = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  emphasized?: boolean;
};

export type Condition = {
  id: string;
  number: string;
  name: string;
  category: string;
  summary: string;
  detailSummary: string;
  icon: LucideIcon;
  left: InfoBlock[];
  right: InfoBlock[];
  takeaway: string;
  takeawayLabel: string;
};

export type PageProps = {
  searchParams: Promise<{ penyakit?: string | string[] }>;
};
