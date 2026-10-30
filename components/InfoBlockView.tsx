import { InfoBlock } from "@/types/penyakit";

export default function InfoBlockView({ block }: { block: InfoBlock }) {
  return (
    <div
      className={
        block.emphasized
          ? "mb-6 rounded-[14px] border border-[#e1eee4] bg-(--mint-2) p-5"
          : ""
      }
    >
      <h3 className="mb-2 text-[1.08rem] font-bold text-(--green-dark)">
        {block.title}
      </h3>
      {block.paragraphs?.map((paragraph) => (
        <p
          className="mb-5 text-[0.91rem] leading-[1.7] text-[#53665b] last:mb-0 text-justify"
          key={paragraph}
        >
          {paragraph}
        </p>
      ))}
      {block.bullets && (
        <ul className="mb-1 list-disc space-y-1.5 pl-6 text-[0.91rem] leading-[1.6] text-[#53665b]">
          {block.bullets.map((bullet) => (
            <li className="pl-1" key={bullet}>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
